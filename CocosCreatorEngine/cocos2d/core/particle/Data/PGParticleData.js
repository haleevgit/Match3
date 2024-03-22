
const {ccclass, property, apply} = cc._decorator;


const DecoratorParticleData = ccclass('ParticleData')
const ParticleDataND = class ParticleData extends pg.ParticleExtension {
	constructor() {
		super();
		this.initialValue = new pg.ParticleValue();
		this.control = new pg.ParticleCurve();
	}

	// @property({editorOnly: true, }) EDITING = true; 

	// @property({ type: pg.ParticleValue, visible() { return this.EDITING; }, }) initialValue = new pg.ParticleValue();
	// @property({ type: pg.ParticleCurve, visible() { return this.EDITING; }, }) control = new pg.ParticleCurve();

	get data() {
		return {
			initial: this.initialValue.data,
			control: this.control.data,
		}
	};

	exportData() {
		const data = {
			view: 'ParticleData',
			initialValue: this.initialValue.exportData(),
			control: this.control.exportData(),
		};

		return data;
	};
};

apply(ParticleDataND.prototype, "EDITING", [ property({ editorOnly: true, }) ], {
	initializer() { return true; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleDataND.prototype);

apply(ParticleDataND.prototype, "initialValue", [ property({ type: pg.ParticleValue, visible() { return this.EDITING; }, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleDataND.prototype);

apply(ParticleDataND.prototype, "control", [ property({ type: pg.ParticleCurve, visible() { return this.EDITING; }, }) ], {
	initializer() { return null; },
	writable: true,
	enumerable: true,
	configurable: true,
}, ParticleDataND.prototype);

const ParticleData = DecoratorParticleData(ParticleDataND, ParticleDataND);

if (CC_EDITOR) {
	ParticleData.template = [
		{ name: 'initialValue', type: 'object', view: pg.ParticleValue, },
		{ name: 'control', type: 'object', view: pg.ParticleCurve, },
	];
}


pg.ParticleData = module.exports = ParticleData;