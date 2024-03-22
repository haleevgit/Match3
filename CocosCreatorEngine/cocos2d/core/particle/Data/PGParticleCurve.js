const { ccclass, property, apply } = cc._decorator;

//#region classes-helpers
const CurveType = cc.Enum({
    None: 0,
    BasicCurve: 10,
    CustomCurve: 20,
    Array: 30,
});

const DecoratorBasicParticleCurveHelper = ccclass('BasicParticleCurveHelper');
const BasicParticleCurveHelperND = class BasicParticleCurveHelper extends pg.ParticleExtension {
    constructor() {
        super();
    }

    // @property({ type: pg.TypeEasing }) curveType = pg.TypeEasing.linear;

    get data() {
        const curveType = typeof this.curveType === 'number' ? pg.TypeEasing[this.curveType] : this.curveType;
        const easing = cc.easing[curveType];
        const curve = [];
        for (let t = 0; t <= 1; t += 0.1) {
            curve.push(new cc.Vec2(t, easing(t, 1)));
        }
        return curve;
    }

    exportData() {
        const data = {
            view: 'BasicParticleCurveHelper',
            curveType: this.curveType,
        };

        return data;
    }
};

apply(
    BasicParticleCurveHelperND.prototype,
    'curveType',
    [property({ type: pg.TypeEasing })],
    {
        initializer() {
            return pg.TypeEasing.linear;
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },
    BasicParticleCurveHelperND.prototype
);

const BasicParticleCurveHelper = DecoratorBasicParticleCurveHelper(BasicParticleCurveHelperND, BasicParticleCurveHelperND);

const DecoratorCustomParticleCurveHelper = ccclass('CustomParticleCurveHelper');
const CustomParticleCurveHelperND = class CustomParticleCurveHelper extends pg.ParticleExtension {
    constructor() {
        super();
    }

    // @property() startPoint = new cc.Vec2(0, 0);
    // @property() firstPoint = new cc.Vec2(0, 0);
    // @property() secondPoint = new cc.Vec2(1, 1);
    // @property() endPoint = new cc.Vec2(1, 1);

    get data() {
        const easing = cc.easing[this.curveType];
        const curve = [];
        for (let t = 0; t <= 1; t += 0.1) {
            curve.push(
                new cc.Vec2(
                    (1 - t) *
                        ((1 - t) * ((1 - t) * this.startPoint.x + t * this.firstPoint.x) +
                            t * ((1 - t) * this.firstPoint.x + t * this.secondPoint.x)) +
                        t *
                            ((1 - t) * ((1 - t) * this.firstPoint.x + t * this.secondPoint.x) +
                                t * ((1 - t) * this.secondPoint.x + t * this.endPoint.x)),
                    (1 - t) *
                        ((1 - t) * ((1 - t) * this.startPoint.y + t * this.firstPoint.y) +
                            t * ((1 - t) * this.firstPoint.y + t * this.secondPoint.y)) +
                        t *
                            ((1 - t) * ((1 - t) * this.firstPoint.y + t * this.secondPoint.y) +
                                t * ((1 - t) * this.secondPoint.y + t * this.endPoint.y))
                )
            );
        }
        return curve;
    }

    exportData() {
        const data = {
            view: 'CustomParticleCurveHelper',

            startPoint: this.startPoint,
            firstPoint: this.firstPoint,
            secondPoint: this.secondPoint,
            endPoint: this.endPoint,
        };

        return data;
    }
};

apply(
    CustomParticleCurveHelperND.prototype,
    'startPoint',
    [property({})],
    {
        initializer() {
            return new cc.Vec2(0, 0);
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },
    CustomParticleCurveHelperND.prototype
);

apply(
    CustomParticleCurveHelperND.prototype,
    'firstPoint',
    [property({})],
    {
        initializer() {
            return new cc.Vec2(0, 0);
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },
    CustomParticleCurveHelperND.prototype
);

apply(
    CustomParticleCurveHelperND.prototype,
    'secondPoint',
    [property({})],
    {
        initializer() {
            return new cc.Vec2(1, 1);
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },
    CustomParticleCurveHelperND.prototype
);

apply(
    CustomParticleCurveHelperND.prototype,
    'endPoint',
    [property({})],
    {
        initializer() {
            return new cc.Vec2(1, 1);
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },
    CustomParticleCurveHelperND.prototype
);

const CustomParticleCurveHelper = DecoratorCustomParticleCurveHelper(CustomParticleCurveHelperND, CustomParticleCurveHelperND);

const ArrayParticleCurveHelper = cc.Class({
    name: 'ArrayParticleCurveHelper',
    extends: pg.ParticleExtension,
    properties: {
        control: {
            default() {
                return [new cc.Vec2(0, 0), new cc.Vec2(1, 1)];
            },
            type: [cc.Vec2],
        },

        data: {
            get() {
                const curve = [...this.control];
                curve.sort(function (a, b) {
                    if (a.x > 1) a.x = 1;
                    if (a.x < 0) a.x = 0;

                    if (b.x > 1) b.x = 1;
                    if (b.x < 0) b.x = 0;

                    if (a.x < b.x) return -1;
                    if (a.x > b.x) return 1;
                    return 0;
                });

                if (curve.length >= 1) {
                    if (curve[0].x !== 0) {
                        curve.unshift(new cc.Vec2(0, curve[0].y));
                    }

                    if (curve[curve.length - 1].x !== 1) {
                        curve.push(new cc.Vec2(1, curve[curve.length - 1].y));
                    }
                } else {
                    curve.push(new cc.Vec2(0, 1));
                    curve.push(new cc.Vec2(1, 1));
                }

                return curve;
            },
            visible: false,
        },
    },

    exportData:
        CC_EDITOR &&
        function () {
            const data = {
                view: 'ArrayParticleCurveHelper',
                control: this.control,
            };

            return data;
        },
});
//#endregion

const DecoratorParticleCurve = ccclass('ParticleCurve');
const ParticleCurveND = class ParticleCurve extends pg.ParticleExtension {
    constructor() {
        super();
    }

    // @property _curveType = CurveType.None;

    // @property({ type : CurveType }) get curveType() { return this._curveType; };
    // @property({ type : CurveType }) set curveType(value) {
    // 	if (this._curveType !== value) {
    // 		this._curveType = value;
    // 		switch(this._curveType) {
    // 			case CurveType.Array : {
    // 				if (this.value === null) {
    // 					this.value = new pg.ParticleValue();
    // 				}
    // 				this.curve = new ArrayParticleCurveHelper();
    // 			} break;

    // 			case CurveType.BasicCurve : {
    // 				if (this.value === null) {
    // 					this.value = new pg.ParticleValue();
    // 				}
    // 				this.curve = new BasicParticleCurveHelper();
    // 			} break;

    // 			case CurveType.CustomCurve : {
    // 				if (this.value === null) {
    // 					this.value = new pg.ParticleValue();
    // 				}
    // 				this.curve = new CustomParticleCurveHelper();
    // 			} break;

    // 			default : {
    // 				this.value = null;
    // 				this.curve = null;
    // 			} break;
    // 		}
    // 	}
    // };

    // @property({ visible() { return this._curveType !== CurveType.None; }, }) value = null;
    // @property({ visible() { return this._curveType !== CurveType.None; }, }) curve = null;

    get data() {
        if (this._curveType === CurveType.None) return null;
        return {
            value: this.value.data,
            curve: this.curve.data,
        };
    }

    exportData() {
        const data = {
            view: 'ParticleCurve',
            _curveType: this._curveType,
            value: null,
            curve: null,
        };

        if (this.curve !== null) data.value = this.value.exportData();
        if (this.value !== null) data.curve = this.curve.exportData();

        return data;
    }
};

apply(
    ParticleCurveND.prototype,
    '_curveType',
    [property({})],
    {
        initializer() {
            return CurveType.None;
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },
    ParticleCurveND.prototype
);

apply(
    ParticleCurveND.prototype,
    'curveType',
    [property({ type: CurveType })],
    {
        get() {
            return this._curveType;
        },
        set(value) {
            if (this._curveType !== value) {
                this._curveType = value;
                switch (this._curveType) {
                    case CurveType.Array:
                        {
                            if (this.value === null) {
                                this.value = new pg.ParticleValue();
                            }
                            this.curve = new ArrayParticleCurveHelper();
                        }
                        break;

                    case CurveType.BasicCurve:
                        {
                            if (this.value === null) {
                                this.value = new pg.ParticleValue();
                            }
                            this.curve = new BasicParticleCurveHelper();
                        }
                        break;

                    case CurveType.CustomCurve:
                        {
                            if (this.value === null) {
                                this.value = new pg.ParticleValue();
                            }
                            this.curve = new CustomParticleCurveHelper();
                        }
                        break;

                    default:
                        {
                            this.value = null;
                            this.curve = null;
                        }
                        break;
                }
            }
        },
    },
    ParticleCurveND.prototype
);

apply(
    ParticleCurveND.prototype,
    'value',
    [
        property({
            visible() {
                return this._curveType !== CurveType.None;
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
    ParticleCurveND.prototype
);

apply(
    ParticleCurveND.prototype,
    'curve',
    [
        property({
            visible() {
                return this._curveType !== CurveType.None;
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
    ParticleCurveND.prototype
);

const ParticleCurve = DecoratorParticleCurve(ParticleCurveND, ParticleCurveND);

if (CC_EDITOR) {
    ParticleCurve.template = [
        { name: '_curveType', type: 'number', default: 0 },
        { name: 'value', type: 'object', view: [null, pg.ParticleValue] },
        { name: 'curve', type: 'object', view: [null, BasicParticleCurveHelper, CustomParticleCurveHelper, ArrayParticleCurveHelper] },
    ];

    BasicParticleCurveHelper.template = [{ name: 'curveType', type: 'number', default: 1 }];

    CustomParticleCurveHelper.template = [
        { name: 'startPoint', type: 'object', view: cc.Vec2 },
        { name: 'firstPoint', type: 'object', view: cc.Vec2 },
        { name: 'secondPoint', type: 'object', view: cc.Vec2 },
        { name: 'endPoint', type: 'object', view: cc.Vec2 },
    ];

    ArrayParticleCurveHelper.template = [{ name: 'control', type: 'object', view: Array, filler: cc.Vec2 }];
}

ParticleCurve.BasicParticleCurveHelper = BasicParticleCurveHelper;
ParticleCurve.CustomParticleCurveHelper = CustomParticleCurveHelper;
ParticleCurve.ArrayParticleCurveHelper = ArrayParticleCurveHelper;

pg.ParticleCurve = module.exports = ParticleCurve;
