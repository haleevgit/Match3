const { ccclass, property, apply } = cc._decorator;

//#region classes-helpers
const ColorType = cc.Enum({
	None: 0,
	Color: 10,
	BetweenTwoColor: 20,
	BetweenColorProbability: 30,

	Curve: 40,
	BetweenTwoCurves: 50,
});

const DecoratorSimpleColor = ccclass('SimpleColor');
const SimpleColorND = class SimpleColor extends pg.ParticleExtension {
	constructor(...args) {
		super();

		this._color = args[0] || new cc.Color(255, 255, 255);
	}

	// @property _color = new cc.Color(255, 255, 255);

	// @property get color() { return this._color };
	// @property set color(value) {
	// 	if (value instanceof cc.Color) {
	// 		this._color = value;
	// 	}
	// }

	get data() {
		return {
			color: this._color,
			colorCurve: null,
		};
	}

	exportData() {
		const data = {
			view: 'SimpleColor',
			_color: this._color,
		};

		return data;
	}
};
apply(
	SimpleColorND.prototype,
	'_color',
	[property({})],
	{
		initializer() {
			return null;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	SimpleColorND.prototype
);
apply(
	SimpleColorND.prototype,
	'color',
	[property()],
	{
		get() {
			return this._color;
		},
		set(value) {
			if (value instanceof cc.Color) {
				this._color = value;
			}
		},
	},
	SimpleColorND.prototype
);
const SimpleColor = DecoratorSimpleColor(SimpleColorND, SimpleColorND);
//

const DecoratorRandomBetweenTwoColor = ccclass('RandomBetweenTwoColor');
const RandomBetweenTwoColorND = class RandomBetweenTwoColor extends pg.ParticleExtension {
	constructor(...args) {
		super();

		this._color1 = args[0] || new cc.Color(255, 255, 255);
		this._color2 = args[1] || new cc.Color(255, 255, 255);
	}

	// @property _color1 = new cc.Color(255, 255, 255);
	// @property _color2 = new cc.Color(255, 255, 255);

	// @property get colorFirst() {return this._color1}
	// @property set colorFirst(value) {
	// 	if (value instanceof cc.Color) {
	// 		this._color1 = value;
	// 	}
	// };

	// @property get colorSecond() {return this._color2}
	// @property set colorSecond(value) {
	// 	if (value instanceof cc.Color) {
	// 		this._color2 = value;
	// 	}
	// };

	get data() {
		const color1 = this._color1;
		const color2 = this._color2;

		return {
			get color() {
				return new cc.Color(
					color1.r + Math.random() * (color2.r - color1.r),
					color1.g + Math.random() * (color2.g - color1.g),
					color1.b + Math.random() * (color2.b - color1.b)
				);
			},
			colorCurve: null,
		};
	}

	exportData() {
		const data = {
			view: 'RandomBetweenTwoColor',
			_color1: this._color1,
			_color2: this._color2,
		};

		return data;
	}
};
apply(
	RandomBetweenTwoColorND.prototype,
	'_color1',
	[property({})],
	{
		initializer() {
			return null;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	RandomBetweenTwoColorND.prototype
);
apply(
	RandomBetweenTwoColorND.prototype,
	'colorFirst',
	[property()],
	{
		get() {
			return this._color1;
		},
		set(value) {
			if (value instanceof cc.Color) {
				this._color1 = value;
			}
		},
	},
	RandomBetweenTwoColorND.prototype
);
apply(
	RandomBetweenTwoColorND.prototype,
	'_color2',
	[property({})],
	{
		initializer() {
			return null;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	RandomBetweenTwoColorND.prototype
);
apply(
	RandomBetweenTwoColorND.prototype,
	'colorSecond',
	[property()],
	{
		get() {
			return this._color2;
		},
		set(value) {
			if (value instanceof cc.Color) {
				this._color2 = value;
			}
		},
	},
	RandomBetweenTwoColorND.prototype
);
const RandomBetweenTwoColor = DecoratorRandomBetweenTwoColor(RandomBetweenTwoColorND, RandomBetweenTwoColorND);
//

const DecoratorColorPointProbability = ccclass('ColorPointProbability');
const ColorPointProbabilityND = class ColorPointProbability {
	constructor(...args) {
		if (typeof args[0] === 'object') {
			this._probability = args[0]._probability || 1;
			this._color = new cc.Color(255, 255, 255);
			if (args[0]._color) {
				this._color._val = args[0]._color._val;
			}
		} else {
			this._probability = args[0] || 1;
			this._color = args[1] || new cc.Color(255, 255, 255);
		}
	}

	// @property _probability = 1;
	// @property _color = new cc.Color(255, 255, 255);

	// @property get probability() { return this._probability; }
	// @property set probability(value) { if (typeof value === 'number') this._probability = value; }

	// @property get color() {return this._color}
	// @property set color(value) { if (value instanceof cc.Color) this._color = value; }
};
apply(
	ColorPointProbabilityND.prototype,
	'_probability',
	[property({})],
	{
		initializer() {
			return 1;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ColorPointProbabilityND.prototype
);
apply(
	ColorPointProbabilityND.prototype,
	'probability',
	[property()],
	{
		get() {
			return this._probability;
		},
		set(value) {
			if (typeof value === 'number') this._probability = value;
		},
	},
	ColorPointProbabilityND.prototype
);
apply(
	ColorPointProbabilityND.prototype,
	'_color',
	[property({})],
	{
		initializer() {
			return null;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ColorPointProbabilityND.prototype
);
apply(
	ColorPointProbabilityND.prototype,
	'color',
	[property()],
	{
		get() {
			return this._color;
		},
		set(value) {
			if (value instanceof cc.Color) this._color = value;
		},
	},
	ColorPointProbabilityND.prototype
);
const ColorPointProbability = DecoratorColorPointProbability(ColorPointProbabilityND, ColorPointProbabilityND);
//

const RandomBetweenColorProbability = cc.Class({
	name: 'RandomBetweenColorProbability',
	extends: pg.ParticleExtension,

	properties: {
		colorsProbability: {
			default: function() {
				return [new ColorPointProbability()];
			},
			type: [ColorPointProbability],
		},

		data: {
			get() {
				const colorsProbability = this.colorsProbability;

				let maxProbability = 0;
				for (let i = 0; i < colorsProbability.length; i += 1) {
					maxProbability += colorsProbability[i].probability;
				}

				return {
					get color() {
						let color = null;
						let probability = 0;
						const randomProbability = Math.random() * maxProbability;
						for (let i = 0; i < colorsProbability.length; i += 1) {
							probability += colorsProbability[i].probability;
							if (probability >= randomProbability) {
								color = colorsProbability[i].color;
								break;
							}
						}

						return color;
					},
				};
			},
			visible: false,
		},
	},

	exportData:
		CC_EDITOR &&
		function() {
			const data = {
				view: 'RandomBetweenColorProbability',
				colorsProbability: this.colorsProbability,
			};

			return data;
		},
});

const DecoratorColorPointCurve = ccclass('ColorPointCurve');
const ColorPointCurveND = class ColorPointCurve {
	constructor(...args) {
		if (typeof args[0] === 'object') {
			this._x = args[0]._x || 1;
			this._color = new cc.Color(255, 255, 255);
			if (args[0]._color) {
				this._color._val = args[0]._color._val;
			}
		} else {
			this._x = args[0] || 0;
			this._color = args[1] || new cc.Color(255, 255, 255);
		}
	}

	// @property _x = 0;
	// @property _color = new cc.Color(255, 255, 255);

	// @property get x() {return this._x}
	// @property set x(value) {
	// 	if (typeof value === 'number') {
	// 		if (value <= 0) {
	// 			this._x = 0;
	// 		} else {
	// 			if (value >= 1) {
	// 				this._x = 1;
	// 			} else {
	// 				this._x = value;
	// 			}
	// 		}
	// 	}
	// }

	// @property get color() {return this._color}
	// @property set color(value) {
	// 	if (value instanceof cc.Color) {
	// 		this._color = value;
	// 	}
	// }

	get r() {
		return new cc.Vec2(this._x, this._color.r);
	}
	get g() {
		return new cc.Vec2(this._x, this._color.g);
	}
	get b() {
		return new cc.Vec2(this._x, this._color.b);
	}
};
apply(
	ColorPointCurveND.prototype,
	'_x',
	[property({})],
	{
		initializer() {
			return 0;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ColorPointCurveND.prototype
);
apply(
	ColorPointCurveND.prototype,
	'x',
	[property()],
	{
		get() {
			return this._x;
		},
		set(value) {
			if (typeof value === 'number') {
				if (value <= 0) {
					this._x = 0;
				} else {
					if (value >= 1) {
						this._x = 1;
					} else {
						this._x = value;
					}
				}
			}
		},
	},
	ColorPointCurveND.prototype
);
apply(
	ColorPointCurveND.prototype,
	'_color',
	[property({})],
	{
		initializer() {
			return null;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ColorPointCurveND.prototype
);
apply(
	ColorPointCurveND.prototype,
	'color',
	[property()],
	{
		get() {
			return this._color;
		},
		set(value) {
			if (value instanceof cc.Color) this._color = value;
		},
	},
	ColorPointCurveND.prototype
);
const ColorPointCurve = DecoratorColorPointCurve(ColorPointCurveND, ColorPointCurveND);
//

const ColorCurveHelper = cc.Class({
	name: 'ColorCurveHelper',
	extends: pg.ParticleExtension,

	_convetToCurve(array) {
		if (array instanceof Array) {
			if (array.length > 0) {
				const curve = array.slice();
				curve.sort(function(a, b) {
					if (a.x < b.x) return -1;
					if (a.x > b.x) return 1;
					return 0;
				});

				if (curve[0].x !== 0) curve.unshift(new ColorPointCurve(0, 0, curve[0].color));
				if (curve[curve.length - 1].x !== 1) curve.push(new ColorPointCurve(1, curve[curve.length - 1].color));

				return curve;
			}
		}

		return [new ColorPointCurve(), new ColorPointCurve(1)];
	},

	_convertToSeparatedCurve(curve) {
		const separatedCurve = {
			r: [],
			g: [],
			b: [],
		};

		for (let point of curve) {
			separatedCurve.r.push(point.r);
			separatedCurve.g.push(point.g);
			separatedCurve.b.push(point.b);
		}

		return separatedCurve;
	},
});

const ArrayOfColorPointCurve = cc.Class({
	name: 'ArrayOfColorPointCurve',
	extends: ColorCurveHelper,

	properties: {
		curve: {
			default: function() {
				return [new ColorPointCurve(), new ColorPointCurve(1)];
			},
			type: [ColorPointCurve],
		},

		data: {
			get() {
				const colorCurve = this._convertToSeparatedCurve(this._convetToCurve(this.curve));

				return {
					color: null,
					colorCurve,
				};
			},
			visible: false,
		},
	},

	exportData:
		CC_EDITOR &&
		function() {
			const data = {
				view: 'ArrayOfColorPointCurve',
				curve: this.curve,
			};

			return data;
		},
});

const ArrayOfTwoColorPointCurve = cc.Class({
	name: 'ArrayOfTwoColorPointCurve',
	extends: ColorCurveHelper,

	properties: {
		curveFirst: {
			default: function() {
				return [new ColorPointCurve(), new ColorPointCurve(1)];
			},
			type: [ColorPointCurve],
		},
		curveSecond: {
			default: function() {
				return [new ColorPointCurve(), new ColorPointCurve(1)];
			},
			type: [ColorPointCurve],
		},

		data: {
			get() {
				const self = this;
				const curveFirst = this._convetToCurve(this.curveFirst);
				const curveSecond = this._convetToCurve(this.curveSecond);

				const separateCurveFirst = this._convertToSeparatedCurve(curveFirst);
				const separateCurveSecond = this._convertToSeparatedCurve(curveSecond);

				return {
					color: null,
					get colorCurve() {
						const curve = [];
						const ratio = Math.random();
						let arrayX = [];

						for (let point of curveFirst) {
							arrayX.push(point.x);
						}
						for (let point of curveSecond) {
							let result = false;
							for (let x of arrayX) {
								if (x === point.x) {
									result = true;
									break;
								}
							}
							if (!result) arrayX.push(point.x);
						}

						for (let x of arrayX) {
							const color = self._getColor(ratio, x, separateCurveFirst, separateCurveSecond);

							curve.push(new ColorPointCurve(x, color));
						}

						return self._convertToSeparatedCurve(curve);
					},
				};
			},
			visible: false,
		},
	},

	exportData:
		CC_EDITOR &&
		function() {
			const data = {
				view: 'ArrayOfTwoColorPointCurve',
				curveFirst: this.curveFirst,
				curveSecond: this.curveSecond,
			};

			return data;
		},

	_getColor(ratio, x, curve1, curve2) {
		const color1Red = this._getValue(curve1.r, x);
		const color1Green = this._getValue(curve1.g, x);
		const color1Blue = this._getValue(curve1.b, x);

		return new cc.Color(
			color1Red + (this._getValue(curve2.r, x) - color1Red) * ratio,
			color1Green + (this._getValue(curve2.g, x) - color1Green) * ratio,
			color1Blue + (this._getValue(curve2.b, x) - color1Blue) * ratio
		);
	},

	_getValue(control, percent) {
		let point = control[0];

		if (point.x === percent) return point.y;

		let index = control.length - 1;
		let last = control[index];

		if (last.x === percent) return last.y;

		index = 0;

		while (point.x <= percent) {
			if (index >= control.length - 1) {
				return point.y;
			}

			point = control[++index];
		}

		let prev = control[index - 1];

		return prev.y + ((percent - prev.x) * (point.y - prev.y)) / (point.x - prev.x);
	},
});
//#endregion

const DecoratorParticleColor = ccclass('ParticleColor');
const ParticleColorND = class ParticleColor extends pg.ParticleExtension {
	constructor() {
		super();

		this._data = {};
	}

	// @property _isActive = false;
	// @property({ displayName : "Color over Lifetime" }) get isActive() { return this._isActive; };
	// @property({ displayName : "Color over Lifetime" }) set isActive(value) {
	// 	this._isActive = value;

	// 	this.colorType = this._isActive ? ColorType.Color : ColorType.None;
	// };

	// @property _colorType = ColorType.None;
	// @property({ type : ColorType, visible() { return this.isActive; }, }) get colorType() { return this._colorType; };
	// @property({ type : ColorType, visible() { return this.isActive; }, }) set colorType(value) {
	// 	if (this._colorType !== value) {
	// 		this._colorType = value;
	// 		switch(this._colorType) {
	// 			case ColorType.Color : {
	// 				this.color = new SimpleColor();
	// 			} break;

	// 			case ColorType.BetweenTwoColor : {
	// 				this.color = new RandomBetweenTwoColor();
	// 			} break;

	// 			case ColorType.BetweenColorProbability : {
	// 				this.color = new RandomBetweenColorProbability();
	// 			} break;

	// 			case ColorType.Curve : {
	// 				this.color = new ArrayOfColorPointCurve();
	// 			} break;

	// 			case ColorType.BetweenTwoCurves : {
	// 				this.color = new ArrayOfTwoColorPointCurve();
	// 			} break;

	// 			default : {
	// 				this.color = null;
	// 			} break;
	// 		}
	// 	}
	// };

	// @property({ visible() { return this._isActive && this.colorType !== ColorType.None; }, }) color = null;

	init() {
		if (this.color !== null) {
			this._data = this.color.data;
		} else {
			this._data = {
				color: null,
				colorCurve: null,
			};
		}
	}

	get data() {
		return {
			color: this._data.color,
			colorCurve: this._data.colorCurve,
		};
	}

	exportData() {
		const data = {
			_isActive: this._isActive,
			_colorType: this._colorType,
			color: null,
		};

		if (this.color !== null) data.color = this.color.exportData();

		return data;
	}
};
apply(
	ParticleColorND.prototype,
	'_isActive',
	[property({})],
	{
		initializer() {
			return false;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ParticleColorND.prototype
);
apply(
	ParticleColorND.prototype,
	'isActive',
	[property({ displayName: 'Color over Lifetime' })],
	{
		get() {
			return this._isActive;
		},
		set(value) {
			this._isActive = value;

			this.colorType = this._isActive ? ColorType.Color : ColorType.None;
		},
	},
	ParticleColorND.prototype
);
apply(
	ParticleColorND.prototype,
	'_colorType',
	[property({})],
	{
		initializer() {
			return ColorType.None;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ParticleColorND.prototype
);
apply(
	ParticleColorND.prototype,
	'colorType',
	[
		property({
			type: ColorType,
			visible() {
				return this.isActive;
			},
		}),
	],
	{
		get() {
			return this._colorType;
		},
		set(value) {
			if (this._colorType !== value) {
				this._colorType = value;
				switch (this._colorType) {
					case ColorType.Color:
						{
							this.color = new SimpleColor();
						}
						break;

					case ColorType.BetweenTwoColor:
						{
							this.color = new RandomBetweenTwoColor();
						}
						break;

					case ColorType.BetweenColorProbability:
						{
							this.color = new RandomBetweenColorProbability();
						}
						break;

					case ColorType.Curve:
						{
							this.color = new ArrayOfColorPointCurve();
						}
						break;

					case ColorType.BetweenTwoCurves:
						{
							this.color = new ArrayOfTwoColorPointCurve();
						}
						break;

					default:
						{
							this.color = null;
						}
						break;
				}
			}
		},
	},
	ParticleColorND.prototype
);
apply(
	ParticleColorND.prototype,
	'color',
	[
		property({
			visible() {
				return this._isActive && this.colorType !== ColorType.None;
			},
		}),
	],
	{
		initializer() {
			return null;
		},
		writable: true,
		enumerable: true,
		configurable: true,
	},
	ParticleColorND.prototype
);
const ParticleColor = DecoratorParticleColor(ParticleColorND, ParticleColorND);

if (CC_EDITOR) {
	ParticleColor.template = [
		{ name: '_isActive', type: 'boolean', default: false },
		{ name: '_colorType', type: 'number', default: 0 },

		{
			name: 'color',
			type: 'object',
			view: [
				SimpleColor,
				RandomBetweenTwoColor,
				RandomBetweenColorProbability,
				ArrayOfColorPointCurve,
				ArrayOfTwoColorPointCurve,
				null,
			],
		},
	];

	SimpleColor.template = [{ name: '_color', type: 'object', view: cc.Color }];

	RandomBetweenTwoColor.template = [
		{ name: '_color1', type: 'object', view: cc.Color },
		{ name: '_color2', type: 'object', view: cc.Color },
	];

	RandomBetweenColorProbability.template = [{ name: 'colorsProbability', type: 'object', view: Array, filler: ColorPointProbability }];

	ArrayOfColorPointCurve.template = [{ name: 'curve', type: 'object', view: Array, filler: ColorPointCurve }];

	ArrayOfTwoColorPointCurve.template = [
		{ name: 'curveFirst', type: 'object', view: Array, filler: ColorPointCurve },
		{ name: 'curveSecond', type: 'object', view: Array, filler: ColorPointCurve },
	];
}

ParticleColor.ColorType = ColorType;
ParticleColor.SimpleColor = SimpleColor;
ParticleColor.RandomBetweenTwoColor = RandomBetweenTwoColor;
ParticleColor.RandomBetweenColorProbability = RandomBetweenColorProbability;
ParticleColor.ArrayOfColorPointCurve = ArrayOfColorPointCurve;
ParticleColor.ArrayOfTwoColorPointCurve = ArrayOfTwoColorPointCurve;
ParticleColor.ColorPointCurve = ColorPointCurve;
ParticleColor.ColorPointProbability = ColorPointProbability;

pg.ParticleColor = module.exports = ParticleColor;
