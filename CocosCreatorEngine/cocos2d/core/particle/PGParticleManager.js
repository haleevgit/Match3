const ParticleManager = cc.Class({
	name: 'ParticleManager',
	extends: cc.Component,

	editor: CC_EDITOR && {
		menu: 'Particle/ParticleManager',
	},

	properties: {
		playOnLoad : false,

		_timeScale : {
			default : 1,
			visible : false,
		},

		emitters : {
			default : [],
			visible : false,
		},

		timeScale :	{
			get: function () {
				return this._timeScale;
			},
			set: function (value) {
				this._timeScale = value;

				for (let i = 0; i < this.emitters.length; i += 1) {
					this.emitters[i].life.timeScale = this._timeScale;
				}	 
			}
		},
	},

	onLoad() {
		this.emitters = [];
		const children = this.node.children;
		for (let i in children) {
			const emitter = children[i].getComponent(pg.ParticleEmitter);
			if (emitter) {
				this.emitters.push(emitter);
			}
		}
	},

	start() {
		this.timeScale = this.timeScale;

		if (this.playOnLoad) {
			setTimeout(() => {
				this.play();
			}, 100);
		}
	},

	play() {
		for (let i = 0; i < this.emitters.length; i++) {
			if (this.emitters[i] instanceof pg.ParticleEmitter) {
				this.emitters[i].play();
			} else {
				this.emitters.splice(i, 1);
				i--;
			}	
		}
	},

	pause(value = true) {
		for (let i = 0; i < this.emitters.length; i++) {
			if (this.emitters[i] instanceof pg.ParticleEmitter) {
				this.emitters[i].pause(value);
			} else {
				this.emitters.splice(i, 1);
				i--;
			}
			
		}
	},

	restart() {
		for (let i = 0; i < this.emitters.length; i++) {
			if (this.emitters[i] instanceof pg.ParticleEmitter) {
				this.emitters[i].restart();
			} else {
				this.emitters.splice(i, 1);
				i--;
			}
			
		}
	},

	stop() {
		for (let i = 0; i < this.emitters.length; i++) {
			if (this.emitters[i] instanceof pg.ParticleEmitter) {
				this.emitters[i].stop();
			} else {
				this.emitters.splice(i, 1);
				i--;
			}
			
		}
	},
});

pg.ParticleManager = module.exports = ParticleManager;
