const {ccclass, property, apply} = cc._decorator;

//#region classes-helpers
const VelocityType = cc.Enum({
	None : 0,
	Angle : 10,
	Fasing : 20,
	Radial : 30,
});

const DecoratorParticleSeparateVelocityHelper = ccclass('ParticleSeparateVelocityHelper')
const ParticleSeparateVelocityHelperND = class ParticleSeparateVelocityHelper extends pg.ParticleExtension {
	constructor() {
		super();
		this.velocityX = new pg.ParticleData();
		this.velocityY = new pg.ParticleData();
	}

	// @property velocityX = null;
	// @property velocityY = null;

	get data() {
		return {
			velocityX: this.velocityX.data,
			velocityY: this.velocityY.data,
		};
	};

	exportData() {
		const data = {
			view: 'ParticleSeparateVelocityHelper',
			velocityX: null,
			velocityY: null,
		};

		if (this.velocityX !== null) data.velocityX = this.velocityX.exportData();
		if (this.velocityY !== null) data.velocityY = this.velocityY.exportData();

		return data;
	};
};
apply(ParticleSeparateVelocityHelperND.prototype, "velocityX", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSeparateVelocityHelperND.prototype);
apply(ParticleSeparateVelocityHelperND.prototype, "velocityY", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleSeparateVelocityHelperND.prototype);
const ParticleSeparateVelocityHelper = DecoratorParticleSeparateVelocityHelper(ParticleSeparateVelocityHelperND, ParticleSeparateVelocityHelperND);
//


const DecoratorParticleAngleVelocityHelper = ccclass('ParticleAngleVelocityHelper')
const ParticleAngleVelocityHelperND = class ParticleAngleVelocityHelper extends pg.ParticleExtension {
	constructor() {
		super();
		this.angle = new pg.ParticleData();
		this.velocity = new pg.ParticleData();
	}

	// @property angle = null;
	// @property velocity = null;

	get data() {
		return {
			angle: this.angle.data,
			velocity: this.velocity.data,
		}
	};

	exportData() {
		const data = {
			view: 'ParticleAngleVelocityHelper',
			angle: null,
			velocity: null,
		};

		if (this.angle !== null) data.angle = this.angle.exportData();
		if (this.velocity !== null) data.velocity = this.velocity.exportData();

		return data;
	};
};
apply(ParticleAngleVelocityHelperND.prototype, "angle", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleAngleVelocityHelperND.prototype);
apply(ParticleAngleVelocityHelperND.prototype, "velocity", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleAngleVelocityHelperND.prototype);
const ParticleAngleVelocityHelper = DecoratorParticleAngleVelocityHelper(ParticleAngleVelocityHelperND, ParticleAngleVelocityHelperND);
//


const DecoratorParticleFasingVelocityHelper = ccclass('ParticleFasingVelocityHelper')
const ParticleFasingVelocityHelperND = class ParticleFasingVelocityHelper extends pg.ParticleExtension {
	constructor() {
		super();
		this.velocity = new pg.ParticleData();
	}

	// @property velocity = null;

	get data() {
		return {
			isFasingVelocity: true,
			velocity: this.velocity.data,
		}
	};

	exportData() {
		const data = {
			view: 'ParticleFasingVelocityHelper',
			velocity: null,
		};

		if (this.velocity !== null) data.velocity = this.velocity.exportData();

		return data;
	};
};
apply(ParticleFasingVelocityHelperND.prototype, "velocity", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleFasingVelocityHelperND.prototype);
const ParticleFasingVelocityHelper = DecoratorParticleFasingVelocityHelper(ParticleFasingVelocityHelperND, ParticleFasingVelocityHelperND);
//


const TargetRadialVelocityType = cc.Enum({
	Spawn : 0,

	LocalPoint : 10,
	WorldPoint : 20,

	LocalTarget : 30,
	WorldTarget : 40,
});

const DecoratorLocalTargetRadialVelocityHelper = ccclass('LocalTargetRadialVelocityHelper')
const LocalTargetRadialVelocityHelperND = class LocalTargetRadialVelocityHelper extends pg.ParticleExtension {
	constructor() { super(); }

	// @property(cc.Node) target = null;

	get data() {
		const target = this.target ? this.target : new cc.Vec2(0, 0);
		return {
			isLocal: true,
			get point() {
				return new cc.Vec2(target.x, target.y);
			} 
		}
	};

	exportData() {
		return {
			view: 'LocalTargetRadialVelocityHelper',
			target: null,
		};
	};
};
apply(LocalTargetRadialVelocityHelperND.prototype, "target", [ property({type: cc.Node, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, LocalTargetRadialVelocityHelperND.prototype);
const LocalTargetRadialVelocityHelper = DecoratorLocalTargetRadialVelocityHelper(LocalTargetRadialVelocityHelperND, LocalTargetRadialVelocityHelperND);
//


const DecoratorWorldTargetRadialVelocityHelper = ccclass('WorldTargetRadialVelocityHelper')
const WorldTargetRadialVelocityHelperND = class WorldTargetRadialVelocityHelper extends pg.ParticleExtension {
	constructor() { super(); }

	// @property(cc.Node) target = null;

	get data() {
		const target = this.target;
		return {
			isLocal: false,
			get point() {
				if (target instanceof cc.Node) {
					return target.convertToWorldSpaceAR(cc.Vec2.ZERO);
				}

				return cc.Vec2.ZERO;
			} 
		}
	};

	exportData() {
		return {
			view: 'WorldTargetRadialVelocityHelper',
			target: null,
		};
	};
};
apply(WorldTargetRadialVelocityHelperND.prototype, "target", [ property({type: cc.Node, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, WorldTargetRadialVelocityHelperND.prototype);
const WorldTargetRadialVelocityHelper = DecoratorWorldTargetRadialVelocityHelper(WorldTargetRadialVelocityHelperND, WorldTargetRadialVelocityHelperND);
//


const DecoratorLocalPointRadialVelocityHelper = ccclass('LocalPointRadialVelocityHelper')
const LocalPointRadialVelocityHelperND = class LocalPointRadialVelocityHelper extends pg.ParticleExtension {
	constructor() {
		super();
		this.point = new cc.Vec2(0, 0);
	}

	// @property point = new cc.Vec2(0, 0);

	get data() {
		const point = this.point;
		return {
			isLocal: true,
			get point() {
				return point.clone();
			} 
		}
	};

	exportData() {
		return {
			view: 'LocalPointRadialVelocityHelper',
			point: this.point,
		};
	};
};
apply(LocalPointRadialVelocityHelperND.prototype, "point", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, LocalPointRadialVelocityHelperND.prototype);
const LocalPointRadialVelocityHelper = DecoratorLocalPointRadialVelocityHelper(LocalPointRadialVelocityHelperND, LocalPointRadialVelocityHelperND);
//


const DecoratorWorldPointRadialVelocityHelper = ccclass('WorldPointRadialVelocityHelper')
const WorldPointRadialVelocityHelperND = class WorldPointRadialVelocityHelper extends pg.ParticleExtension {
	constructor() {
		super();
		this.point = new cc.Vec2(0, 0);
	}

	// @property point = new cc.Vec2(0, 0);

	get data() {
		const point = this.point;
		return {
			isLocal: false,
			get point() {
				return point.clone();
			} 
		}
	};

	exportData() {
		return {
			view: 'WorldPointRadialVelocityHelper',
			point: this.point,
		};
	};
};
apply(WorldPointRadialVelocityHelperND.prototype, "point", [ property({type: cc.Node, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, WorldPointRadialVelocityHelperND.prototype);
const WorldPointRadialVelocityHelper = DecoratorWorldPointRadialVelocityHelper(WorldPointRadialVelocityHelperND, WorldPointRadialVelocityHelperND);
//


const DecoratorParticleRadialVelocityHelper = ccclass('ParticleRadialVelocityHelper')
const ParticleRadialVelocityHelperND = class ParticleRadialVelocityHelper extends pg.ParticleExtension {
	constructor() {
		super();
		this.velocity = new pg.ParticleData();
	}

	// @property _targetType = TargetRadialVelocityType.Spawn;
	// @property({ type : TargetRadialVelocityType, }) get targetType() { return this._targetType; };
	// @property({ type : TargetRadialVelocityType, }) set targetType(value) {
	// 	if (this._targetType !== value) {
	// 		this._targetType = value;

	// 		switch(this._targetType) {
	// 			case TargetRadialVelocityType.LocalPoint:
	// 				this.target = new LocalPointRadialVelocityHelper();
	// 				break;

	// 			case TargetRadialVelocityType.WorldPoint:
	// 				this.target = new WorldPointRadialVelocityHelper();
	// 				break;

	// 			case TargetRadialVelocityType.LocalTarget: 
	// 				this.target = new LocalTargetRadialVelocityHelper;
	// 				break;

	// 			case TargetRadialVelocityType.WorldTarget: 
	// 				this.target = new WorldTargetRadialVelocityHelper;
	// 				break;

	// 			default:
	// 				this.target = null;
	// 				break;
	// 		}
	// 	}

	// };
	// @property({ visible() { return this._targetType !== TargetRadialVelocityType.Spawn; }, }) target = null;
	// @property velocity = null;

	get data() {
		return {
			isRadialVelocity: true,
			target: this.target ? this.target.data : this.target,
			velocity: this.velocity.data,
		}
	}

	exportData() {
		const data = {
			view: 'ParticleRadialVelocityHelper',
			_targetType: this._targetType,
			target: null,
			velocity: null,
		};

		if (this.target !== null) data.target = this.target.exportData();
		if (this.velocity !== null) data.velocity = this.velocity.exportData();

		return data;
	};
};
apply(ParticleRadialVelocityHelperND.prototype, "_targetType", [ property({}) ], {
	initializer() { return TargetRadialVelocityType.Spawn; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleRadialVelocityHelperND.prototype);
apply(ParticleRadialVelocityHelperND.prototype, "targetType", [ property({ displayName : "Size over Lifetime", }) ], {
	get() { return this._targetType; },
	set(value) {
		if (this._targetType !== value) {
			this._targetType = value;

			switch(this._targetType) {
				case TargetRadialVelocityType.LocalPoint:
					this.target = new LocalPointRadialVelocityHelper();
					break;

				case TargetRadialVelocityType.WorldPoint:
					this.target = new WorldPointRadialVelocityHelper();
					break;

				case TargetRadialVelocityType.LocalTarget: 
					this.target = new LocalTargetRadialVelocityHelper;
					break;

				case TargetRadialVelocityType.WorldTarget: 
					this.target = new WorldTargetRadialVelocityHelper;
					break;

				default:
					this.target = null;
					break;
			}
		}
	}
}, ParticleRadialVelocityHelperND.prototype);
apply(ParticleRadialVelocityHelperND.prototype, "target", [ property({ visible() { return this._targetType !== TargetRadialVelocityType.Spawn; }, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleRadialVelocityHelperND.prototype);
apply(ParticleRadialVelocityHelperND.prototype, "velocity", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleRadialVelocityHelperND.prototype);
const ParticleRadialVelocityHelper = DecoratorParticleRadialVelocityHelper(ParticleRadialVelocityHelperND, ParticleRadialVelocityHelperND);
//

//#endregion

const DecoratorParticleVelocity = ccclass('ParticleVelocity')
const ParticleVelocityND = class ParticleVelocity extends pg.ParticleExtension {
	constructor() {
		super();
	}

	// @property _isActive = false;
	// @property({ displayName : "Velocity over Lifetime" }) get isActive() { return this._isActive; };
	// @property({ displayName : "Velocity over Lifetime" }) set isActive(value) { 
	// 	this._isActive = value;

	// 	if (this._isActive) {
	// 		this.velocityType = VelocityType.Angle;
	// 		this._isSeparateAxis = false;
	// 	} else {
	// 		this.velocityType = VelocityType.None;
	// 		this._isSeparateAxis = false;
	// 		this.separateVelocity = null;
	// 	}
	// };

	// @property _isSeparateAxis = false;
	// @property({ displayName : "SeparateAxis", visible() { return this._isActive } }) get isSeparateAxis() { return this._isSeparateAxis; };
	// @property({ displayName : "SeparateAxis", visible() { return this._isActive } }) set isSeparateAxis(value) { 
	// 	this._isSeparateAxis = value;

	// 	if (this._isActive) {
	// 		if (this._isSeparateAxis) {
	// 			this.separateVelocity = new ParticleSeparateVelocityHelper();
	// 		} else {
	// 			this.separateVelocity = null;
	// 		}
	// 	}
	// };

	// @property _velocityType = VelocityType.None;
	// @property({ type: VelocityType, visible() { return this._isActive; }, }) get velocityType() { return this._velocityType; };
	// @property({ type: VelocityType, visible() { return this._isActive; }, }) set velocityType(value) { 
	// 	if (this._velocityType !== value) {
	// 		this._velocityType = value;

	// 		switch(this._velocityType) {
	// 			case VelocityType.Angle:
	// 				this.velocity = new ParticleAngleVelocityHelper();
	// 				break;

	// 			case VelocityType.Fasing:
	// 				this.velocity = new ParticleFasingVelocityHelper();
	// 				break;

	// 			case VelocityType.Radial: 
	// 				this.velocity = new ParticleRadialVelocityHelper;
	// 				break;

	// 			default:
	// 				this.velocity = null;
	// 				break;
	// 		}
	// 	}
	// };

	// @property({ visible() { return this._velocityType !== VelocityType.None; } }) velocity = null;
	// @property({ visible() { return this._isSeparateAxis; } }) separateVelocity = null;

	get data() {
		const data = {
			velocity: null,
			velocityX: null,
			velocityY: null,
		};

		if (this._isSeparateAxis) {
			const dataSeparateVelocity = this.separateVelocity.data;

			data.velocityX = dataSeparateVelocity.velocityX;
			data.velocityY = dataSeparateVelocity.velocityY;
		}

		if (this.velocity !== null) {
			data.velocity = this.velocity.data;
		}

		return data;
	}

	exportData() {
		const data = {
			_isActive: this._isActive,
			_isSeparateAxis: this._isSeparateAxis,
			_velocityType: this._velocityType,
			velocity: null,
			separateVelocity: null,
		};

		if (this.velocity !== null) data.velocity = this.velocity.exportData();
		if (this.separateVelocity !== null) data.separateVelocity = this.separateVelocity.exportData();

		return data;
	}
};
apply(ParticleVelocityND.prototype, "_isActive", [ property({}) ], {
	initializer() { return false; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "isActive", [ property({ displayName : "Velocity over Lifetime" }) ], {
	get() { return this._isActive; },
	set(value) {
		this._isActive = value;

		if (this._isActive) {
			this.velocityType = VelocityType.Angle;
			this._isSeparateAxis = false;
		} else {
			this.velocityType = VelocityType.None;
			this._isSeparateAxis = false;
			this.separateVelocity = null;
		}
	}
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "_isSeparateAxis", [ property({}) ], {
	initializer() { return false; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "isSeparateAxis", [ property({ displayName : "SeparateAxis", visible() { return this._isActive } }) ], {
	get() { return this._isSeparateAxis; },
	set(value) {
		this._isSeparateAxis = value;

		if (this._isActive) {
			if (this._isSeparateAxis) {
				this.separateVelocity = new ParticleSeparateVelocityHelper();
			} else {
				this.separateVelocity = null;
			}
		}
	}
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "_velocityType", [ property({}) ], {
	initializer() { return VelocityType.None; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "velocityType", [ property({ type: VelocityType, visible() { return this._isActive; }, }) ], {
	get() { return this._velocityType; },
	set(value) {
		if (this._velocityType !== value) {
			this._velocityType = value;

			switch(this._velocityType) {
				case VelocityType.Angle:
					this.velocity = new ParticleAngleVelocityHelper();
					break;

				case VelocityType.Fasing:
					this.velocity = new ParticleFasingVelocityHelper();
					break;

				case VelocityType.Radial: 
					this.velocity = new ParticleRadialVelocityHelper;
					break;

				default:
					this.velocity = null;
					break;
			}
		}
	}
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "velocity", [ property({ visible() { return this._velocityType !== VelocityType.None; } }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleVelocityND.prototype);
apply(ParticleVelocityND.prototype, "separateVelocity", [ property({ visible() { return this._isSeparateAxis; } }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleVelocityND.prototype);
const ParticleVelocity = DecoratorParticleVelocity(ParticleVelocityND, ParticleVelocityND);

if (CC_EDITOR) {
	ParticleSeparateVelocityHelper.template = [
		{ name: 'velocityX', type: 'object', view: pg.ParticleData, },
		{ name: 'velocityY', type: 'object', view: pg.ParticleData, },
	];

	ParticleAngleVelocityHelper.template = [
		{ name: 'angle', type: 'object', view: pg.ParticleData, },
		{ name: 'velocity', type: 'object', view: pg.ParticleData, },
	];

	ParticleFasingVelocityHelper.template = [
		{ name: 'velocity', type: 'object', view: pg.ParticleData, },
	];


	LocalTargetRadialVelocityHelper.template = [
		{ name: 'target', type: 'object', view: null, },
	];

	WorldTargetRadialVelocityHelper.template = [
		{ name: 'target', type: 'object', view: null, },
	];

	LocalPointRadialVelocityHelper.template = [
		{ name: 'point', type: 'object', view: cc.Vec2, },
	];

	WorldPointRadialVelocityHelper.template = [
		{ name: 'point', type: 'object', view: cc.Vec2, },
	];

	ParticleRadialVelocityHelper.template = [
		{ name: '_targetType', type: 'number', default: 0, },
		{ name: 'target', type: 'object', view: [
				LocalTargetRadialVelocityHelper,
				WorldTargetRadialVelocityHelper,
				LocalPointRadialVelocityHelper,
				WorldPointRadialVelocityHelper,
				null,
			], 
		},
		{ name: 'velocity', type: 'object', view: pg.ParticleData, },
	];

	ParticleVelocity.template = [
		{ name: '_isActive', type: 'boolean', default: false, },
		{ name: '_isSeparateAxis', type: 'boolean', default: false, },
		{ name: '_velocityType', type: 'number', default: 0, },

		{ name: 'velocity', type: 'object', view: [
				ParticleAngleVelocityHelper,
				ParticleFasingVelocityHelper,
				ParticleRadialVelocityHelper,
				null,
			], 
		},

		{ name: 'separateVelocity', type: 'object', view: [
				ParticleSeparateVelocityHelper,
				null,
			], 
		},
	];
}


ParticleVelocity.VelocityType = VelocityType;
ParticleVelocity.ParticleSeparateVelocityHelper = ParticleSeparateVelocityHelper;
ParticleVelocity.ParticleAngleVelocityHelper = ParticleAngleVelocityHelper;
ParticleVelocity.ParticleFasingVelocityHelper = ParticleFasingVelocityHelper;
ParticleVelocity.TargetRadialVelocityType = TargetRadialVelocityType;
ParticleVelocity.LocalTargetRadialVelocityHelper = LocalTargetRadialVelocityHelper;
ParticleVelocity.WorldTargetRadialVelocityHelper = WorldTargetRadialVelocityHelper;
ParticleVelocity.LocalPointRadialVelocityHelper = LocalPointRadialVelocityHelper;
ParticleVelocity.WorldPointRadialVelocityHelper = WorldPointRadialVelocityHelper;
ParticleVelocity.ParticleRadialVelocityHelper = ParticleRadialVelocityHelper;


pg.ParticleVelocity = module.exports = ParticleVelocity;
