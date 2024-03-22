const {ccclass, property, apply} = cc._decorator;

//#region classes-helpers
var ValueType = cc.Enum({
	Value: 0,
	MinMax: 10,
});

const DecoratorMinMaxValueHelper = ccclass("MinMaxValueHelper");
const MinMaxValueHelperND = class MinMaxValueHelper extends pg.ParticleExtension  {
	constructor(...args) {
		super();

		this.min = typeof args[0] === 'number' ? args[0] : 0;
		this.max = typeof args[1] === 'number' ? args[1] : 1;
	}

	// @property(Number) min = 0;
	// @property(Number) max = 1;

	get data() {
		return this.min + Math.random() * (this.max - this.min);
	}
};

apply(MinMaxValueHelperND.prototype, "min", [ property({}) ], {
	initializer() { return 0; },
	writable: true,
	enumerable: true,
	configurable: true,
}, MinMaxValueHelperND.prototype);

apply(MinMaxValueHelperND.prototype, "max", [ property({}) ], {
	initializer() { return 1; },
	writable: true,
	enumerable: true,
	configurable: true,
}, MinMaxValueHelperND.prototype);

const MinMaxValueHelper = DecoratorMinMaxValueHelper(MinMaxValueHelperND, MinMaxValueHelperND);

//#endregion

const DecoratorParticleValue = ccclass("ParticleValue");
const ParticleValueND = class ParticleValue extends pg.ParticleExtension {
	constructor(...args) {
		super();

		this._defaultValue = typeof args[0] === 'number' ? args[0] : 1;
		this._defaultMin = typeof args[1] === 'number' ? args[1] : 1;
		this._defaultMax = typeof args[2] === 'number' ? args[2] : this._defaultMin;

		this.value = this._defaultValue;
	}

	//@property() _valueType = ValueType.Value;

	// @property({ type : ValueType, }) get valueType() { return this._valueType; };
	// @property({ type : ValueType, }) set valueType(value) {
	// 	if (this._valueType !== value) {
	// 		this._valueType = value;
	// 		switch(this._valueType) {
	// 			case ValueType.MinMax : {
	// 				this.value = new MinMaxValueHelper(this.defaultMin, this.defaultMax);
	// 			} break;

	// 			default : {
	// 				this.value = this.defaultValue;
	// 			} break;
	// 		}
	// 	}
	// };

	//@property() value = null;

	get data() {
		if (this.value instanceof Object) return this.value.data;

		return this.value;
	}

	exportData() {
		const data = {
			view: 'ParticleValue',
			_valueType: this._valueType,
			value: this.value,
		};

		if (this._valueType === ValueType.MinMax) {
			data.value.view = 'MinMaxValueHelper';
		}
		return data
	}
};

apply(ParticleValueND.prototype, "_valueType", [ property({}) ], {
	initializer() { return ValueType.Value; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleValueND.prototype);

apply(ParticleValueND.prototype, "valueType", [ property({ type : ValueType, }) ], {
	get() { return this._valueType; },
	set(value) {
		if (this._valueType !== value) {
			this._valueType = value;
			switch(this._valueType) {
				case ValueType.MinMax : {
					this.value = new MinMaxValueHelper(this._defaultMin, this._defaultMax);
				} break;

				default : {
					this.value = this._defaultValue;
				} break;
			}
		}
	},
}, ParticleValueND.prototype);

apply(ParticleValueND.prototype, "value", [ property({}) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleValueND.prototype);

const ParticleValue = DecoratorParticleValue(ParticleValueND, ParticleValueND);


if (CC_EDITOR) {
	MinMaxValueHelper.template = [
		{ name: 'min', type: 'number', default: 0, },
		{ name: 'max', type: 'number', default: 1, },
	];
	ParticleValue.template = [
		{ name: '_valueType', type: 'number', default: 0, },
		{ name: 'value', type: ['number', 'object'], default: 1, view: MinMaxValueHelper, },
	];
}

ParticleValue.ValueType = ValueType;
ParticleValue.MinMaxValueHelper = MinMaxValueHelper;

pg.ParticleValue = module.exports = ParticleValue;
