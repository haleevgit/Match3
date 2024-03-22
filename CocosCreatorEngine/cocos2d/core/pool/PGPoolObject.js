// let PoolerHelper = require("PoolerHelper");
// let PoolCallback = require("PoolCallback");

//#region classes-helpers
const GO_POOL_POSITION = new cc.Vec3(-3000, -3000, 0);
//#endregion

let PoolObject = cc.Class({
	name: 'pg.PoolObject',
	extends: cc.Component,

	editor: CC_EDITOR && {
		menu: 'Pools/PoolObject',
	},

	properties: {
		//#region editors fields and properties
		prefab: {
			default: null,
			type: cc.Prefab,
			notify(old) {
				if (CC_EDITOR) return;

				if (this.prefab !== old && this.prefab instanceof cc.Prefab) {
					const data = this.prefab.data;

					if (data instanceof cc.Node) {
						data.active = false;

						if (data.getComponent(pg.PoolerHelper) === null) {
							data.addComponent(pg.PoolerHelper);
						}
					}
				}
			},
		},

		parent: {
			default: null,
			type: cc.Node,
		},

		preInstantiateCount: {
			default: 0,
			notify(old) {
				if (CC_EDITOR) return;

				if (this.preInstantiateCount > this.countObject) {
					const count = this.preInstantiateCount - this.countObject;

					for (let i = 0; i < count; i++) {
						const go = this._createNewObject();
						this.push(go);
					}
				}
			},
		},

		autoExtend: {
			default: true,
		},
		//#endregion

		//#region public fields and properties
		countObject: {
			get() {
				return this._stack.length;
			},
			visible: false,
		},
		//#endregion

		//#region private fields and properties
		_stack: {
			default: [],
			type: [cc.Prefab],
			visible: false,
		},
		//#endregion
	},

	//#region life-cycle callbacks
	onLoad() {
		if (this.prefab instanceof cc.Prefab) {
			const data = this.prefab.data;

			if (data instanceof cc.Node) {
				data.active = false;

				if (data.getComponent(pg.PoolerHelper) === null) {
					data.addComponent(pg.PoolerHelper);
				}
			}

			const count = this.preInstantiateCount - this.countObject;

			for (let i = 0; i < count; i++) {
				var go = this._createNewObject();
				this.push(go);
			}
		}
	},
	//#endregion

	//#region public methods
	push(go) {
		go.getComponent(pg.PoolerHelper).inPool = true;

		this._pushObject(go);

		const poolCallback = go.getComponent(pg.PoolCallback);

		if (poolCallback) {
			poolCallback.onReturnToPool();
			poolCallback.onPush();
		}

		go.active = false;

		if (go.parent !== this.node) {
			go.parent = this.node;
		}

		go.setPosition(GO_POOL_POSITION);
	},

	pop(preAction = null) {
		let go = null;

		if (this.countObject === 0) {
			if (this.autoExtend) {
				go = this._createNewObject();
			}
		} else {
			go = this._popObject();
		}

		if (go !== null) {
			if (go.parent !== this.parent) {
				go.parent = this.parent;
			}

			if (preAction !== null && typeof preAction === 'function') {
				preAction(go);
			}

			go.active = true;
			go.getComponent(pg.PoolerHelper).inPool = false;

			const poolCallback = go.getComponent(pg.PoolCallback);

			if (poolCallback) {
				poolCallback.onCreateFromPool();
				poolCallback.onPop();
			}
		}

		return go;
	},

	//#endregion

	//#region private methods
	_pushObject(go) {
		this._stack.push(go);
	},

	_popObject() {
		return this._stack.pop();
	},

	_createNewObject() {
		let go = null;

		if (this.prefab === null) {
			cc.warn('Missing prefab in pool', this);
		} else {
			go = cc.instantiate(this.prefab);

			if (this.parent === null) {
				this.parent = cc.director.getScene();
			}
			this.parent.addChild(go);

			let poolInfo = go.getComponent(pg.PoolerHelper);
			if (poolInfo === null) {
				poolInfo = go.addComponent(pg.PoolerHelper);
			}

			poolInfo.poolReference = this;
		}

		return go;
	},
	//#endregion

	//#region event handlers
	//#endregion
});

module.exports = pg.PoolObject = PoolObject;
