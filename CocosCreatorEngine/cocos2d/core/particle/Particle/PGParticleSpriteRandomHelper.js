const ParticleSpriteRandomHelper = cc.Class({
	name: 'pg.ParticleSpriteRandomHelper',
 	extends: cc.Component,

 	editor: CC_EDITOR && {
		menu: 'Particle/ParticleSpriteRandomHelper',
	},

	properties: {
		spriteFrames: {
			default: function() {
				return [];
			},
			type: [cc.SpriteFrame],
		},
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		this.sprite = this.node.getComponent(cc.Sprite);
	},

	onEnable() {
		const length = this.spriteFrames.length;
		const i = Math.floor(Math.random() * length);
		this.sprite.spriteFrame = this.spriteFrames[i];
	}
});

pg.ParticleSpriteRandomHelper = module.exports = ParticleSpriteRandomHelper;
