const {ccclass, property, apply} = cc._decorator;

const DecoratorParticleRotation = ccclass('ParticleRotation')
const ParticleRotationND = class ParticleRotation extends pg.ParticleExtension {
	constructor() { super(); }

	// @property _isActive = false;
	// @property({ displayName : "Rotation over Lifetime" }) get isActive() { return this._isActive; };
	// @property({ displayName : "Rotation over Lifetime" }) set isActive(value) { 
	// 	this._isActive = value;

	// 	if (this._isActive) {
 //            this.isFollowMovement = false;         
	// 	} else {
	// 		this.isFollowMovement = false;
	// 		this.rotation = null;
	// 	}
	// };

	// @property() _isFollowMovement = false;
	// @property({ displayName : "Follow Movement", visible() { return this.isActive } }) get isFollowMovement() { return this._isFollowMovement; };
	// @property({ displayName : "Follow Movement", visible() { return this.isActive } }) set isFollowMovement(value) { 
	// 	this._isFollowMovement = value;

	// 	this.rotation = this._isFollowMovement ? null : new pg.ParticleData();
	// };
		
	// @property({ visible() { return this.isActive && !this.isFollowMovement } }) rotation = null;

	get data() {
		const data = {
			isFollowMovement: this.isFollowMovement,
			rotation: null, 
		};

		if (this._isActive && this.rotation !== null) data.rotation = this.rotation.data;

		return data;
	};


	exportData() {
		const data = {
			_isActive: this._isActive,
			_isFollowMovement: this._isFollowMovement,
			rotation: null,
		};

		if (this.rotation !== null) data.rotation = this.rotation.exportData();

		return data;
	};
};

apply(ParticleRotationND.prototype, "_isActive", [ property({}) ], {
	initializer() { return false; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleRotationND.prototype);

apply(ParticleRotationND.prototype, "isActive", [ property({ displayName : "Rotation over Lifetime", }) ], {
	get() { return this._isActive; },
	set(value) { 
		this._isActive = value;

		if (this._isActive) {
			this.isFollowMovement = false;         
		} else {
			this.isFollowMovement = false;
			this.rotation = null;
		}
	},
}, ParticleRotationND.prototype);

apply(ParticleRotationND.prototype, "_isFollowMovement", [ property({}) ], {
	initializer() { return false; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleRotationND.prototype);

apply(ParticleRotationND.prototype, "isFollowMovement", [ property({ displayName : "Follow Movement", visible() { return this.isActive } }) ], {
	get() { return this._isFollowMovement; },
	set(value) { 
		this._isFollowMovement = value;

		this.rotation = this._isFollowMovement ? null : new pg.ParticleData();
	},
}, ParticleRotationND.prototype);

apply(ParticleRotationND.prototype, "rotation", [ property({ visible() { return this.isActive && !this.isFollowMovement; }, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleRotationND.prototype);

const ParticleRotation = DecoratorParticleRotation(ParticleRotationND, ParticleRotationND);

if (CC_EDITOR) {
	ParticleRotation.template = [
		{ name: '_isActive', type: 'boolean', default: false, },
		{ name: '_isFollowMovement', type: 'boolean', default: false, },
		{ name: 'rotation', type: 'object', view: [null, pg.ParticleData], },
	];
}

pg.ParticleRotation = module.exports = ParticleRotation;
