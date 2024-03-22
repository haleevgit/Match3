const {ccclass, property, apply} = cc._decorator;

const DecoratorParticleOpacity = ccclass('ParticleOpacity')
const ParticleOpacityND = class ParticleOpacity extends pg.ParticleExtension {
	constructor() { super(); }

	// @property _isActive = false;
	// @property({ displayName : "Opacity over Lifetime" }) get isActive() { return this._isActive; };
	// @property({ displayName : "Opacity over Lifetime" }) set isActive(value) { 
	// 	this._isActive = value;

	// 	this.opacity = this._isActive ? new pg.ParticleData() : null;
	// };
		
	// @property({ visible() { return this.isActive } }) opacity = null;

	get data() {
		const data = { opacity: null, };

		if (this._isActive) data.opacity = this.opacity.data;

		return data;
	};

	exportData() {
		const data = {
			_isActive: this._isActive,
			opacity: null,
		};

		if (this.opacity !== null) data.opacity = this.opacity.exportData();

		return data;
	};
};

apply(ParticleOpacityND.prototype, "_isActive", [ property({}) ], {
	initializer() { return false },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleOpacityND.prototype);

apply(ParticleOpacityND.prototype, "isActive", [ property({ displayName : "Opacity over Lifetime" }) ], {
	get() { return this._isActive; },
	set(value) {
		this._isActive = value;

		this.opacity = this._isActive ? new pg.ParticleData() : null;
	},
}, ParticleOpacityND.prototype);

apply(ParticleOpacityND.prototype, "opacity", [ property({ visible() { return this.isActive } }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleOpacityND.prototype);

const ParticleOpacity = DecoratorParticleOpacity(ParticleOpacityND, ParticleOpacityND);

if (CC_EDITOR) {
	ParticleOpacity.template = [
		{ name: '_isActive', type: 'boolean', default: false, },
		{ name: 'opacity', type: 'object', view: [null, pg.ParticleData], },
	];
}


pg.ParticleOpacity = module.exports = ParticleOpacity;
