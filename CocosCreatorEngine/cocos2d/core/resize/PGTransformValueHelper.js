//#region Enums

const ScaleTypes = cc.Enum({
	FitSpace: 0,
	FillSpace: 1,
	Unproportional: 2,
	ConstantMultiplipliedBySCALE: 3,
	Constant: 4,
});

const SizeTypes = cc.Enum({
	ConstantMultiplipliedBySCALE: 0,
	Constant: 1,
});

const PositionTypes = cc.Enum({
	Relative: 10,
	Absolute: 11,
});

//#endregion

//#region BaseValues

const CallForProperties = function(obj, callback) {
	if (!obj || typeof callback !== 'function') {
		return;
	}

	let properties = obj.constructor.__props__;

	if (properties) {
		for (let property of properties) {
			if (!property.includes('$')) {
				callback(property);
			}
		}
	}
};

const BaseValue = cc.Class({
	name: 'BaseValue',

	properties: {},

	clone(out) {
		if (!out || !(out instanceof this.constructor)) {
			out = new this.constructor();
		}

		CallForProperties(this, property => {
			if (typeof this[property] === 'object' && this[property].clone && this[property] !== null) {
				out[property] = this[property].clone();
			} else {
				out[property] = this[property];
			}
		});

		return out;
	},

	lerp(to, ratio, out) {
		if (!out || !(out instanceof this.constructor)) {
			this.clone(out);
		}

		CallForProperties(this, property => {
			if (property) {
				if (typeof this[property] === 'object' && this[property].lerp) {
					this[property].lerp(to[property], ratio, out[property]);
				} else {
					out[property] = this[property] + (to[property] - this[property]) * ratio;
				}
			}
		});
	},
});

const DefaultDimension = cc.Class({
	name: 'DefaultDimension',
	extends: BaseValue,

	properties: {
		portrait: { default: cc.size(0.5, 0.5), override: true },
		landscape: { default: cc.size(0.5, 0.5), override: true },
	},
});

const SideRatioDimension = cc.Class({
	name: 'SideRatioDimension',
	extends: BaseValue,

	properties: {
		portraitBelowSR: { default: cc.size(0.5, 0.5), override: true },
		landscapeBelowSR: { default: cc.size(0.5, 0.5), override: true },

		portraitAboveSR: { default: cc.size(0.5, 0.5), override: true },
		landscapeAboveSR: { default: cc.size(0.5, 0.5), override: true },
	},
});

const DefaultRelativeSize = cc.Class({
	name: 'DefaultRelativeSize',
	extends: BaseValue,

	properties: {
		portrait: { default: cc.size(0, 0), override: true },
		landscape: { default: cc.size(0, 0), override: true },
	},
});

const SideRatioRelativeSize = cc.Class({
	name: 'SideRatioRelativeSize',
	extends: BaseValue,

	properties: {
		portraitBelowSR: { default: cc.size(0, 0), override: true },
		landscapeBelowSR: { default: cc.size(0, 0), override: true },

		portraitAboveSR: { default: cc.size(0, 0), override: true },
		landscapeAboveSR: { default: cc.size(0, 0), override: true },
	},
});

const DefaultRelativePosition = cc.Class({
	name: 'DefaultRelativePosition',
	extends: BaseValue,

	properties: {
		portrait: { default: cc.Vec2.ZERO, override: true },
		landscape: { default: cc.Vec2.ZERO, override: true },
	},
});

const SideRatioRelativePosition = cc.Class({
	name: 'SideRatioRelativePosition',
	extends: BaseValue,

	properties: {
		portraitBelowSR: { default: cc.Vec2.ZERO, override: true },
		landscapeBelowSR: { default: cc.Vec2.ZERO, override: true },

		portraitAboveSR: { default: cc.Vec2.ZERO, override: true },
		landscapeAboveSR: { default: cc.Vec2.ZERO, override: true },
	},
});

const DefaultAnchors = cc.Class({
	name: 'DefaultAnchors',
	extends: BaseValue,

	properties: {
		portrait: { default: cc.v2(0.5, 0.5), override: true },
		landscape: { default: cc.v2(0.5, 0.5), override: true },
	},
});

const SideRatioAnchors = cc.Class({
	name: 'SideRatioAnchors',
	extends: BaseValue,

	properties: {
		portraitBelowSR: { default: cc.v2(0.5, 0.5), override: true },
		landscapeBelowSR: { default: cc.v2(0.5, 0.5), override: true },

		portraitAboveSR: { default: cc.v2(0.5, 0.5), override: true },
		landscapeAboveSR: { default: cc.v2(0.5, 0.5), override: true },
	},
});

const DefaultRotations = cc.Class({
	name: 'DefaultRotations',
	extends: BaseValue,

	properties: {
		portrait: { default: 0, override: true },
		landscape: { default: 0, override: true },
	},
});

const SideRatioRotations = cc.Class({
	name: 'SideRatioRotations',
	extends: BaseValue,

	properties: {
		portraitBelowSR: { default: 0, override: true },
		landscapeBelowSR: { default: 0, override: true },

		portraitAboveSR: { default: 0, override: true },
		landscapeAboveSR: { default: 0, override: true },
	},
});

//#endregion

//#region TransformValues

const TransformValue = cc.Class({
	name: 'TransformValue',

	properties: {
		type: {
			default: null,
			visible() {
				return this.type !== null;
			},
		},
		isUsr: false,
		value: null,
		srToChange: { default: 0, visible: false },
	},

	clone(out) {
		if (!out || !(out instanceof this.constructor)) {
			out = new this.constructor();
		}

		CallForProperties(this, property => {
			if (typeof this[property] === 'object' && this[property] !== null && this[property].clone) {
				this[property].clone(out[property]);
			} else {
				out[property] = this[property];
			}
		});

		return out;
	},

	lerp(to, ratio, out) {
		if (!to || !to.value || !(to instanceof this.constructor)) {
			return;
		}

		if (!out || !out.value || !(out instanceof this.constructor)) {
			this.clone(out);
		}

		if (typeof this.value === 'object' && this.value !== null && this.value.lerp) {
			this.value.lerp(to.value, ratio, out.value);
		} else if (this.value !== null) {
			out.value = this.value + (to.value - this.value) * ratio;
		}
	},

	getInitialValue(node) {
		if (!this.value) return null;

		const orientation = pg.settings.IS_LANDSCAPE ? 'landscape' : 'portrait';
		let initalValue = this.value[orientation];
		let out = null;

		if (this.isUsr) {
			const sideRatio =
				Math.max(pg.settings.GAME_WIDTH, pg.settings.GAME_HEIGHT) / Math.min(pg.settings.GAME_WIDTH, pg.settings.GAME_HEIGHT);
			const suff = sideRatio > this.srToChange ? 'Above' : 'Below';
			initalValue = this.value[orientation + suff + 'SR'];
		}

		if (typeof initalValue === 'object' && initalValue !== null && initalValue.clone) {
			out = initalValue.clone();
		} else {
			out = initalValue;
		}

		return out;
	},
});

const Dimensions = cc.Class({
	name: 'Dimensions',
	extends: TransformValue,

	properties: {
		type: { default: ScaleTypes.FitSpace, type: ScaleTypes, override: true },
		value: { default: null, override: true },

		isUsr: {
			default: false,
			visible: false,
			override: true,
			notify(oldValue) {
				if (this.isUsr !== oldValue) {
					this.value = this.isUsr ? new SideRatioDimension() : new DefaultDimension();
				}
			},
		},
	},

	ctor() {
		this.value = this.isUsr ? new SideRatioDimension() : new DefaultDimension();
	},

	getValue(size, zoneSize, angle) {
		const dimensions = this.getInitialValue();
		const zone = zoneSize || { width: pg.settings.GAME_WIDTH, height: pg.settings.GAME_HEIGHT };
		const sizeRotated = cc.v2(size.width, size.height).rotate((angle * Math.PI) / 180);

		const scale = {
			x: (zone.width * dimensions.width) / (Math.abs(sizeRotated.x) || 1),
			y: (zone.height * dimensions.height) / (Math.abs(sizeRotated.y) || 1),
		};

		switch (this.type) {
			case ScaleTypes.FitSpace:
				{
					const minScale = scale.x < scale.y ? scale.x : scale.y;

					scale.x = minScale;
					scale.y = minScale;
				}
				break;

			case ScaleTypes.FillSpace:
				{
					const maxScale = scale.x > scale.y ? scale.x : scale.y;

					scale.x = maxScale;
					scale.y = maxScale;
				}
				break;

			case ScaleTypes.Unproportional:
				break;

			case ScaleTypes.ConstantMultiplipliedBySCALE:
				scale.x = dimensions.width * pg.settings.SCALE;
				scale.y = dimensions.height * pg.settings.SCALE;
				break;

			case ScaleTypes.Constant:
				scale.x = dimensions.width;
				scale.y = dimensions.height;
				break;
		}

		return scale;
	},
});

const RelativeSize = cc.Class({
	name: 'RelativeSize',
	extends: TransformValue,

	properties: {
		type: { default: SizeTypes.Constant, type: SizeTypes, override: true },
		value: { default: null, override: true },

		isUsr: {
			default: false,
			visible: false,
			override: true,
			notify(oldValue) {
				if (this.isUsr !== oldValue) {
					this.value = this.isUsr ? new SideRatioRelativeSize() : new DefaultRelativeSize();
				}
			},
		},

		_originalSize: { default: null, serializable: false, override: true },
	},

	ctor() {
		this.value = this.isUsr ? new SideRatioRelativeSize() : new DefaultRelativeSize();
	},

	getValue(size) {
		const dimensions = this.getInitialValue();

		if (this._originalSize === null && size) {
			this._originalSize = cc.size(size.width, size.height);
		}

		const newSize = cc.size(dimensions.width * pg.settings.GAME_WIDTH, dimensions.height * pg.settings.GAME_HEIGHT);

		switch (this.type) {
			case SizeTypes.ConstantMultiplipliedBySCALE:
				newSize.width = dimensions.width * pg.settings.SCALE;
				newSize.height = dimensions.height * pg.settings.SCALE;
				break;

			case SizeTypes.Constant:
				newSize.width = dimensions.width;
				newSize.height = dimensions.height;
				break;
		}

		return newSize;
	},

	getOriginalSize() {
		return this._originalSize;
	},
});

const RelativePosition = cc.Class({
	name: 'RelativePosition',
	extends: TransformValue,

	properties: {
		type: { default: PositionTypes.Relative, type: PositionTypes, override: true },
		value: { default: null, override: true },

		isUsr: {
			default: false,
			visible: false,
			override: true,
			notify(oldValue) {
				if (this.isUsr !== oldValue) {
					this.value = this.isUsr ? new SideRatioRelativePosition() : new DefaultRelativePosition();
				}
			},
		},
	},

	ctor() {
		this.value = this.isUsr ? new SideRatioRelativePosition() : new DefaultRelativePosition();
	},

	getValue(zoneSize) {
		const position = this.getInitialValue();
		const zone = zoneSize || { width: pg.settings.GAME_WIDTH, height: pg.settings.GAME_HEIGHT };

		switch (this.type) {
			case PositionTypes.Relative:
				position.x *= zone.width;
				position.y *= zone.height;
				break;
		}

		return position;
	},
});

const Anchors = cc.Class({
	name: 'Anchors',
	extends: TransformValue,

	properties: {
		value: { default: null, override: true },

		isUsr: {
			default: false,
			visible: false,
			override: true,
			notify(oldValue) {
				if (this.isUsr !== oldValue) {
					this.value = this.isUsr ? new SideRatioAnchors() : new DefaultAnchors();
				}
			},
		},
	},

	ctor() {
		this.value = this.isUsr ? new SideRatioAnchors() : new DefaultAnchors();
	},

	getValue() {
		return this.getInitialValue();
	},
});

const Rotations = cc.Class({
	name: 'Rotations',
	extends: TransformValue,

	properties: {
		value: { default: null, override: true },

		isUsr: {
			default: false,
			visible: false,
			override: true,
			notify(oldValue) {
				if (this.isUsr !== oldValue) {
					this.value = this.isUsr ? new SideRatioRotations() : new DefaultRotations();
				}
			},
		},
	},

	ctor() {
		this.value = this.isUsr ? new SideRatioRotations() : new DefaultRotations();
	},

	getValue() {
		return this.getInitialValue();
	},
});

//#endregion

//#region export

const TransformValueHelper = {
	RelativePosition,
	Dimensions,
	RelativeSize,
	Anchors,
	Rotations,

	ScaleTypes,
	SizeTypes,
	PositionTypes,
};

pg.TransformValueHelper = module.exports = TransformValueHelper;

//#endregion
