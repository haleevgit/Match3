// let PoolObject = require("PoolObject");

let PoolManager = cc.Class({
	name: 'pg.PoolManager',
	extends: cc.Component,

	editor: CC_EDITOR && {
		menu: 'Pools/PoolManager',
	},

	properties: {
		pools : {
			default : [],
			type: [pg.PoolObject],
		},
	},

	ctor() {
		if (!CC_EDITOR) {
			if (pg.poolManager instanceof PoolManager) {
				if (pg.poolManager !== this) {
					cc.error('Dublicate pg.PoolManager');
				}
			} else {
				pg.poolManager = this;
			}
		}
	},

	findPool(prefab) {

		if (!(prefab instanceof cc.Prefab)) {
			cc.warn('Find pool not indicated prefab');
			return null;
		}
		let pool = null;

		for (let i in this.pools) {
			if (this.pools[i].prefab.name === prefab.name) {
				pool = this.pools[i];
				break;
			}
		}

		if (pool === null) {
			cc.log("Cant find pool for prefab : " + prefab.name);
		}

		return pool;
	},

	poolForObject(prefab) {
		if (!(prefab instanceof cc.Prefab)) {
			cc.warn('Find pool not indicated prefab');
			return null;
		}
		let pool = this.findPool(prefab);

		if (pool === null) {
			var poolObject = new cc.Node(prefab.name + "Pool");

			poolObject.setPosition(0, 0);
			poolObject.parent = this.node;

			pool = poolObject.addComponent(pg.PoolObject);
			pool.prefab = prefab;
			pool.autoExtend = true;

			this.pools.push(pool);
		}

		return pool;
	},

	removeObjectPool(pool = null) {
		if (pool !== null) {
			for (let i in this.pools) {
				if (this.pools[i].prefab.name === pool.prefab.name) {
					this.pools.splice(1, 1);
					break;
				}
			}
		}
	},

});

module.exports = pg.PoolManager = PoolManager;
