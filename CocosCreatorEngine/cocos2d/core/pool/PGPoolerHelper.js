let PoolerHelper = cc.Class({
	name: 'pg.PoolerHelper', 
	extends: cc.Component,

	editor: CC_EDITOR && {
		menu: 'Pools/PoolerHelper',
	},

	properties: {
		inPool : false,

		poolReference : {
			default : null,
			type : cc.Component,
		},
	},

	returnToPool() {
		if ((this.poolReference !== null) && !this.inPool) {
			this.poolReference.push(this.node);
		}
	},

	getPool() {
		return this.poolReference;
	},
});

module.exports = pg.PoolerHelper = PoolerHelper;
