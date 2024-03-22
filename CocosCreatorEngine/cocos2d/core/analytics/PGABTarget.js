//#region classes-helpers
const VariableTypes = cc.Enum({
	Number: 0,
	String: 1,
	Boolean: 2,
	Json: 3
});

const Parameter = cc.Class({
	name: 'Parameter',

	properties: {
		path: {
			default: '',
			tooltip: 'ComponentName/variable1/variable2/...'
		},

		variableType: { default: VariableTypes.Number, type: VariableTypes },
		number: {
			default: 0,
			visible() {
				return this.variableType === VariableTypes.Number;
			}
		},

		string: {
			default: '',
			visible() {
				return this.variableType === VariableTypes.String;
			}
		},

		boolean: {
			default: false,
			visible() {
				return this.variableType === VariableTypes.Boolean;
			}
		},

		json: {
			default: null,
			type: cc.JsonAsset,
			visible() {
				return this.variableType === VariableTypes.Json;
			}
		}
	}
});

const Preset = cc.Class({
	name: 'Preset',

	properties: {
		presetkey: '',

		parameters: {
			default: [],
			type: Parameter
		}
	}
});
//#endregion

const ABTarget = cc.Class({
	extends: cc.Component,

	name: 'ABTarget',

	properties: {
		//#region editors fields and properties
		jsonParser: {
			default: null,
			type: pg.JsonParser,
			visible() {
				return !!this.presets.find(
					preset => !!preset.parameters.find(parameter => parameter.variableType === VariableTypes.Json)
				);
			}
		},

		presets: { default: [], type: Preset },
		//#endregion

		//#region private fields and properties
		_components: {
			default() {
				return new Map();
			},
			serializable: false
		}
		//#endregion
	},

	editor: {
		menu: 'Analytics/ABTarget',

		executionOrder: -100
	},

	//#region life-cycle callbacks
	onLoad() {
		cc.systemEvent.on(pg.Events.PRESET_CHANGED, this.onPresetChanged, this);
	},
	//#endregion

	//#region private methods
	_setPreset(presetKey) {
		const preset = this.presets.find(preset => preset.presetkey === presetKey);
		preset && this._setupProperties(preset.parameters);
	},

	_setupProperties(parameters) {
		for (const parameter of parameters) {
			const path = parameter.path.split('/');

			const componentName = path[0];
			let component = this._components.get(componentName);

			if (!component) {
				component = this.node.getComponent(componentName);
				this._components.set(componentName, component);
			}

			if (!component) {
				cc.warn('Component ' + componentName + " not defined. Property doesn'n setting)");
				break;
			}

			const propertyName = path[path.length - 1];
			let propertyHolder = component;

			for (let i = 1; i < path.length - 1; i++) {
				propertyHolder = propertyHolder[path[i]];
			}

			switch (parameter.variableType) {
				case VariableTypes.Number:
					{
						propertyHolder[propertyName] = parameter.number;
					}
					break;

				case VariableTypes.String:
					{
						propertyHolder[propertyName] = parameter.string;
					}
					break;

				case VariableTypes.Boolean:
					{
						propertyHolder[propertyName] = parameter.boolean;
					}
					break;

				case VariableTypes.Json:
					{
						this.jsonParser && this.jsonParser.parseJson(parameter.json, propertyHolder);
					}
					break;
			}
		}
	},
	//#endregion

	//#region event handlers
	onPresetChanged(presetkey) {
		this._setPreset(presetkey);
	}
	//#endregion
});

module.export = pg.ABTarget = ABTarget;
