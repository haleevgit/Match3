const {ccclass, property, apply} = cc._decorator;

//#region classes-helpers
const DecoratorParticleSeparateSizeHelper = ccclass('ParticleSeparateSizeHelper')
const ParticleSeparateSizeHelperND = class ParticleSeparateSizeHelper extends pg.ParticleExtension {
	constructor() {
		super(); 
		this.sizeX = new pg.ParticleData();
		this.sizeY = new pg.ParticleData();
	}

	// @property() sizeX = null;
	// @property() sizeY = null;

	get data() {
		return {
			scaleX: this.sizeX.data,
			scaleY: this.sizeY.data,
		}
	};


	exportData() {
		const data = {
			view: 'ParticleSeparateSizeHelper',
			sizeX: null,
			sizeY: null,
		};

		if (this.sizeX !== null) data.sizeX = this.sizeX.exportData();
		if (this.sizeY !== null) data.sizeY = this.sizeY.exportData();

		return data;
	};
}

apply(ParticleSeparateSizeHelperND.prototype, "sizeX", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSeparateSizeHelperND.prototype);

apply(ParticleSeparateSizeHelperND.prototype, "sizeY", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSeparateSizeHelperND.prototype);

const ParticleSeparateSizeHelper = DecoratorParticleSeparateSizeHelper(ParticleSeparateSizeHelperND, ParticleSeparateSizeHelperND);
//#endregion

const DecoratorParticleSize = ccclass('ParticleSize')
const ParticleSizeND = class ParticleSize extends pg.ParticleExtension {
	constructor() {
		super();
	}

	// @property _isActive = false;
	// @property({ displayName : "Size over Lifetime" }) get isActive() { return this._isActive; };
	// @property({ displayName : "Size over Lifetime" }) set isActive(value) { 
	// 	this._isActive = value;

	// 	if (value) {
	// 		this._isSeparateAxis = false;
	// 		this.size = new pg.ParticleData();
	// 	} else {
	// 		this._isSeparateAxis = false;
	// 		this.size = null;
	// 	}
	// };

	// @property() _isSeparateAxis = false;
	// @property({ displayName : "SeparateAxis", visible() { return this._isActive } }) get isSeparateAxis() { return this._isSeparateAxis; };
	// @property({ displayName : "SeparateAxis", visible() { return this._isActive } }) set isSeparateAxis(value) { 
	// 	this._isSeparateAxis = value;

	// 	if (this._isActive) {
	// 		if (this._isSeparateAxis) {
	// 			this.size = new ParticleSeparateSizeHelper();
	// 		} else {
	// 			this.size = new pg.ParticleData();
	// 		}
	// 	}
	// };
		
	// @property({ visible() { return this._isActive } }) size = null;

	get data() {
		let data = {
			scaleX: null,
			scaleY: null,
		};

		if (this._isActive) {
			if (this._isSeparateAxis) {
				data = this.size.data;
			} else {
				const scale = this.size.data;

				data.scaleX = scale;
				data.scaleY = scale;
			}
			
		}

		return data;
	};

	exportData() {
		const data = {
			view: 'ParticleSeparateSizeHelper',
			_isActive: this._isActive,
			_isSeparateAxis: this._isSeparateAxis,
			size: null,
		};

		if (this.size !== null) data.size = this.size.exportData();

		return data;
	};
};

apply(ParticleSizeND.prototype, "_isActive", [ property({}) ], {
	initializer() { return false; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSizeND.prototype);

apply(ParticleSizeND.prototype, "isActive", [ property({ displayName : "Size over Lifetime", }) ], {
	get() { return this._isActive; },
	set(value) {
		this._isActive = value;

		if (value) {
			this._isSeparateAxis = false;
			this.size = new pg.ParticleData();
		} else {
			this._isSeparateAxis = false;
			this.size = null;
		}
	}
}, ParticleSizeND.prototype);

apply(ParticleSizeND.prototype, "_isSeparateAxis", [ property({}) ], {
	initializer() { return false; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSizeND.prototype);

apply(ParticleSizeND.prototype, "isSeparateAxis", [ property({ displayName : "SeparateAxis", visible() { return this._isActive } }) ], {
	get() { return this._isSeparateAxis; },
	set(value) {
		this._isSeparateAxis = value;

		if (this._isActive) {
			if (this._isSeparateAxis) {
				this.size = new ParticleSeparateSizeHelper();
			} else {
				this.size = new pg.ParticleData();
			}
		}
	}
}, ParticleSizeND.prototype);

apply(ParticleSizeND.prototype, "size", [ property({ visible() { return this._isActive } }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSizeND.prototype);

const ParticleSize = DecoratorParticleSize(ParticleSizeND, ParticleSizeND);

if (CC_EDITOR) {
	ParticleSeparateSizeHelper.template = [
		{ name: 'sizeX', type: 'object', view: pg.ParticleData, },
		{ name: 'sizeY', type: 'object', view: pg.ParticleData, },
	];

	ParticleSize.template = [
		{ name: '_isActive', type: 'boolean', default: false, },
		{ name: '_isSeparateAxis', type: 'boolean', default: false, },
		{ name: 'size', type: 'object', view: [
				ParticleSeparateSizeHelper,
				pg.ParticleData,
				null,
			], 
		},
	];
}

pg.ParticleSize = module.exports = ParticleSize;
