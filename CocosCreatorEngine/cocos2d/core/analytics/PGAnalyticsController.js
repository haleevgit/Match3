//#region classes-helpers

const AnalyticsController = cc.Class({
	extends: cc.Component,

	name: 'AnalyticsController',

	properties: {
		//#region editors fields and properties
		trackingID: '',
		eventCategory: '',
		sendCheckURL: {
			default: 'https://europe-west1-project-management-pg.cloudfunctions.net/analytics',
			visible: false
		},

		projectName: '',

		isDebug: true,

		isUsingABTests: false,

		defaultAB: {
			default: '',
			visible() {
				return this.isUsingABTests;
			},
		},
		//#endregion

		//#region private fields and properties
		_parameters: {
			default: '',
			serializable: false,
		},

		_url: {
			default: '',
			serializable: false,
		},

		_isSend: {
			default: false,
			serializable: false,
		},

		_stackEvents: {
			default: [],
			serializable: false,
		},

		_currentAB: null,

		_presetChoiceMode: null,

		_timeStart: null,

		_isPresetChanged: {
			default: false,
			serializable: false,
		},

		_timersMap: {
			default() {
				return new Map();
			},
			serializable: false,
		},
		//#endregion
	},

	editor: {
		menu: 'Analytics/AnalyticsController',

		eexecutionOrder: -99,
	},

	//#region life-cycle callbacks
	onLoad() {
		window.ANALYTICS_ON = true;
		if (window.ANALYTICS_ON) {
			this._initialize();
			this._getIsSend();

			cc.systemEvent.on(pg.Events.ANALYTICS_SEND_EVENT, this.onAnalyticsSendEvent, this);
			cc.systemEvent.on(pg.Events.ANALYTICS_SET_TIMER, this.onAnalyticsSetTimer, this);
			cc.systemEvent.on(pg.Events.ANALYTICS_REMOVE_TIMER, this.onAnalyticsRemoveTimer, this);
			cc.systemEvent.on(pg.Events.ANALYTICS_GET_CURRENT_PRESET, this.onAnalyticsGetCurrentPreset, this);

			cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, () => {
				const analyticsObject = {};

				setTimeout(() => {
					if (this.isUsingABTests) {
						this._isPresetChanged = true;

						analyticsObject['cd6'] = this._presetChoiceMode;
						analyticsObject['cd7'] = this._currentAB;
					}

					cc.systemEvent.emit(pg.Events.ANALYTICS_SEND_EVENT, 'start', analyticsObject);
				}, 500);
			});
		}

		this._currentAB = this.defaultAB;
		cc.systemEvent.emit(pg.Events.PRESET_CHANGED, this._currentAB);
	},
	//#endregion

	//#region private methods
	_initialize() {
		if (!this.trackingID) {
			cc.warn('Fill in the field : Tracking ID');
		}
		if (!this.eventCategory) {
			cc.warn('Fill in the field : Event Category');
		}

		this._timeStart = new Date().getTime();

		const v = 'v=1';
		const t = 't=event';
		const tid = 'tid=' + this.trackingID;
		const cid = Math.floor(Math.random() * (2147483647 - 1000000000) + 1000000000) + '.' + this._timeStart;
		const ec = 'ec=' + this.eventCategory;
		const el = 'el=' + window.AD_TYPE;

		this._parameters = v + '&' + t + '&' + tid + '&cid=' + cid + '&' + ec + '&' + el;
		this._url = 'https://www.google-analytics.com/collect';

		if (this.isUsingABTests) {
			this._presetChoiceMode = 'default';
			this._isPresetChanged = false;
		}

		if (window.ANALYTICS_ON) {
			let placement = 'none';
			let deviceId = 'none';

			if (window.AD_TYPE === 'ironsource') {
				if (typeof dapi === 'object') {
					if (dapi.getAdData) {
						placement = dapi.getAdData().productType;
					}

					if (dapi.getDeviceData) {
						deviceId = dapi.getDeviceData().deviceId;

						if (typeof deviceId === 'string') {
							const cipher = (salt) => {
								const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
								const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
								const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

								return (text) => text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
							};

							const cryptographer = cipher('playgendary');

							deviceId = cryptographer(deviceId);
						}
					}
				}
			}

			this._sendEvent(
				`&ea=stage_initialization&cd1=${cid}&cd2=${deviceId}&cd3=none&cd4=none${
					window.AD_TYPE === 'ironsource' ? `&cd9=${placement}` : ``
				}`
			);

			window.onerror = (message, url, lineNumber, columnNumber, object) => {
				this._sendError(object.message, object.name);
			};
		}
	},

	_getIsSend() {
		// const url = 'https://storage.googleapis.com/analytic-switch/test/test1.json';
		// const url = 'https://storage.googleapis.com/analytic-switch/test/test2.json';

		let title = '';

		if (this.projectName.indexOf('Endcard') >= 0) {
			title = this.projectName.substring(0, this.projectName.indexOf('Endcard'));
		} else if (this.projectName.indexOf('Version') >= 0) {
			title = this.projectName.substring(0, this.projectName.indexOf('Version'));
		} else {
			this._isSend = false;
			return;
		}

		const url = `${this.sendCheckURL}?title=${title}&projectName=${this.projectName}`;

		if (url && url !== '') {
			let http = new XMLHttpRequest();

			http.onreadystatechange = () => {
				if (http.readyState === 4 && http.status === 200) {
					try {
						const parse = JSON.parse(http.responseText);
						const networks = Object.keys(parse);

						this._isSend = false;

						for (let adType of networks) {
							if (window.AD_TYPE === adType) {
								this._isSend = true;
								break;
							}
						}

						if (this._isSend && this.isUsingABTests && !this._isPresetChanged) {
							this._currentAB = this._getRandomAB(parse.config);
							this._presetChoiceMode = 'server_response';
							this._isPresetChanged = true;

							cc.systemEvent.emit(pg.Events.PRESET_CHANGED, this._currentAB);
						}

						for (let i in this._stackEvents) {
							this._sendEvent(this._stackEvents[i]);
						}

						this._stackEvents = [];
					} catch (error) {
						this._isSend = false;
						cc.error(error);
						return;
					}

					if (this.isDebug) {
						cc.log(http.status + ': ' + http.statusText + ' ' + http.responseText + ' ' + this._isSend);
					}

				} else if (http.readyState === 4 && http.status === 0) {
					this._isSend = false;
					cc.systemEvent.emit(pg.Events.PRESET_CHANGED, this.defaultAB);

					if (this.isDebug) {
						cc.log(http.status + ': ' + http.statusText + ' ' + http.responseText + ' ' + this._isSend);
					}
				}
			};

			http.open('GET', url, true);
			http.send();
		} else {
			alert('Fill in the field : Json URL');
		}
	},

	_sendError(message, key = null) {
		if (key !== null) {
			let keyEvents = '&ea=error_' + key;
			keyEvents += '&cm1=' + Math.floor(this._getTime() * 0.01);
			keyEvents += '&cd5=' + this._getOrientation();
			keyEvents += '&cd6=' + message;

			this._sendEvent(keyEvents);
		}
	},

	_sendEvent(keyEvents) {
		if (this._isSend) {
			let params = this._parameters;
			params += keyEvents;

			if (this.isDebug) {
				let tempArr = params.split('&');

				tempArr.splice(0, 6);
				console.log(tempArr);
			}

			let http = new XMLHttpRequest();
			http.open('POST', this._url, true);
			cc.log('analytics event sent', params);
			http.send(params);
		} else {
			this._stackEvents.push(keyEvents);
		}
	},

	_getRandomAB(array) {
		let sum = 0;

		for (let i in array) {
			sum += +array[i];
		}

		const value = Math.floor(Math.random() * sum);

		let lastInterval = 0;

		for (let key in array) {
			if (value <= array[key] + lastInterval) {
				return key;
			} else {
				lastInterval += array[key];
			}
		}
	},

	_getTime() {
		return new Date().getTime() - this._timeStart;
	},

	_getOrientation() {
		return pg.settings.IS_LANDSCAPE ? 'horizontal' : 'vertical';
	},
	//#endregion

	//#region event handlers
	onAnalyticsSendEvent(key = null, params = null) {
		if (key === null) {
			return;
		}

		let keyEvents = '&ea=stage_' + key;

		const time = key === 'start' ? this._getTime() : Math.floor(this._getTime() * 0.01);

		keyEvents += '&cm1=' + time;

		if (params instanceof Object) {
			for (let i in params) {
				let paramValue = params[i];
				if (typeof paramValue === 'object') {
					const param = params[i];
					if (!param.timer) {
						cc.warn('Not provided timer for param ' + i);
					} else {
						paramValue = Math.floor((this._getTime() - this._timersMap.get(param.timer)) * 0.01);
					}

					param.isRemoving && this._timersMap.delete(param.timer);
					param.isResetting && this._timersMap.set(param.timer, this._getTime());
				}

				keyEvents += '&' + i + '=' + paramValue;
			}
		}

		keyEvents += '&cd5=' + this._getOrientation();
		this._sendEvent(keyEvents);
	},

	onAnalyticsSetTimer(key) {
		this._timersMap.set(key, this._getTime());
	},

	onAnalyticsRemoveTimer(key) {
		this._timersMap.delete(key);
	},

	onAnalyticsGetCurrentPreset(callback) {
		if (typeof callback === 'function') {
			callback(this._currentAB);
		}
	},
	//#endregion
});

module.export = pg.AnalyticsController = AnalyticsController;
