//#region import

const { PositionTypes } = require('./PGTransformValueHelper');

// import Events from 'Events';

const TransformValueHelper = pg.TransformValueHelper;

const RelativePosition = TransformValueHelper.RelativePosition;
const Dimensions = TransformValueHelper.Dimensions;
const RelativeSize = TransformValueHelper.RelativeSize;
const Rotations = TransformValueHelper.Rotations;
const Anchors = TransformValueHelper.Anchors;

const PRECISION = 100;

const RoundWithPrecision = function (value, precision) {
	const p = precision || PRECISION;

	return Math.floor(value * p) / p;
};

//#endregion

const ResizeComponent = cc.Class({
	name: 'ResizeComponent',
	extends: cc.Component,

	editor: CC_EDITOR && {
		menu: 'Resize/ResizeComponent',
	},

	properties: {
		//#region editors fields and properties

		isRelativeToParent: false,
		isUsr: {
			default: false,
			displayName: 'Is Using Side Ratio',
			notify() {
				if (this.positions) {
					this.positions.isUsr = this.isUsr;
				}
				if (this.anchors) {
					this.anchors.isUsr = this.isUsr;
				}
				if (this.rotations) {
					this.rotations.isUsr = this.isUsr;
				}
				if (this.relativeSize) {
					this.relativeSize.isUsr = this.isUsr;
				}
				if (this.dimensions) {
					this.dimensions.isUsr = this.isUsr;
				}
			},
		},
		srToChange: {
			default: 1.35,
			displayName: 'Side Ratio To Change',
			visible() {
				return this.isUsr;
			},
			notify() {
				if (this.positions) {
					this.positions.srToChange = this.srToChange;
				}
				if (this.anchors) {
					this.anchors.srToChange = this.srToChange;
				}
				if (this.rotations) {
					this.rotations.srToChange = this.srToChange;
				}
				if (this.relativeSize) {
					this.relativeSize.srToChange = this.srToChange;
				}
				if (this.dimensions) {
					this.dimensions.srToChange = this.srToChange;
				}
			},
		},

		isMovedOnResize: {
			default: true,
			notify(oldValue) {
				if (this.isMovedOnResize !== oldValue) {
					if (this.isMovedOnResize) {
						this.positions = new RelativePosition();
						this.positions.isUsr = this.isUsr;
						this.positions.srToChange = this.srToChange;
					} else {
						this.positions = null;
					}
				}
			},
		},
		positions: {
			default() {
				return new RelativePosition();
			},
			type: RelativePosition,
			visible() {
				return this.isMovedOnResize;
			},
		},

		isScaledOnResize: {
			default: true,
			notify(oldValue) {
				if (this.isScaledOnResize !== oldValue) {
					if (this.isScaledOnResize) {
						this.dimensions = new Dimensions();
						this.dimensions.isUsr = this.isUsr;
						this.dimensions.srToChange = this.srToChange;
					} else {
						this.dimensions = null;
						this.sizeReference = null;
					}
				}
			},
		},
		dimensions: {
			default() {
				return new Dimensions();
			},
			type: Dimensions,
			visible() {
				return this.isScaledOnResize;
			},
		},
		sizeReference: {
			default: null,
			type: cc.Node,
			visible() {
				return this.isScaledOnResize;
			},
		},

		isChangingSizeOnResize: {
			default: false,
			notify(oldValue) {
				if (this.isChangingSizeOnResize !== oldValue) {
					if (this.isChangingSizeOnResize) {
						this.relativeSize = new RelativeSize();
						this.relativeSize.isUsr = this.isUsr;
						this.relativeSize.srToChange = this.srToChange;
					} else {
						this.relativeSize = null;
					}
				}
			},
		},
		relativeSize: {
			default: null,
			type: RelativeSize,
			visible() {
				return this.isChangingSizeOnResize;
			},
		},

		isRotatingOnResize: {
			default: false,
			notify(oldValue) {
				if (this.isRotatingOnResize !== oldValue) {
					if (this.isRotatingOnResize) {
						this.rotations = new Rotations();
						this.rotations.isUsr = this.isUsr;
						this.rotations.srToChange = this.srToChange;
					} else {
						this.rotations = null;
					}
				}
			},
		},
		rotations: {
			default: null,
			type: Rotations,
			visible() {
				return this.isRotatingOnResize;
			},
		},

		isChangingAnchorOnResize: {
			default: false,
			notify(oldValue) {
				if (this.isChangingAnchorOnResize !== oldValue) {
					if (this.isChangingAnchorOnResize) {
						this.anchors = new Anchors();
						this.anchors.isUsr = this.isUsr;
						this.anchors.srToChange = this.srToChange;
					} else {
						this.anchors = null;
					}
				}
			},
		},
		anchors: {
			default: null,
			type: Anchors,
			visible() {
				return this.isChangingAnchorOnResize;
			},
		},

		//#endregion
	},

	//#region life-cycle callbacks

	onLoad() {
		if (this.positions) {
			this.positions.srToChange = this.srToChange;
		}
		if (this.anchors) {
			this.anchors.srToChange = this.srToChange;
		}
		if (this.rotations) {
			this.rotations.srToChange = this.srToChange;
		}
		if (this.relativeSize) {
			this.relativeSize.srToChange = this.srToChange;
		}
		if (this.dimensions) {
			this.dimensions.srToChange = this.srToChange;
		}
		
		cc.systemEvent.on(pg.Events.SIZE_CHANGE, this.onSizeChange, this);
	},

	onEnable() {
		this.onSizeChange();
	},

	//#endregion

	//#region public methods

	set(resizeComponent) {
		if (resizeComponent instanceof ResizeComponent) {
			this.isRelativeToParent = resizeComponent.isRelativeToParent;
			this.isUsr = resizeComponent.isUsr;

			this.isMovedOnResize = resizeComponent.isMovedOnResize;
			this.isScaledOnResize = resizeComponent.isScaledOnResize;
			this.isChangingSizeOnResize = resizeComponent.isChangingSizeOnResize;
			this.isRotatingOnResize = resizeComponent.isRotatingOnResize;
			this.isChangingAnchorOnResize = resizeComponent.isChangingAnchorOnResize;

			this.isMovedOnResize && resizeComponent.positions.clone(this.positions);
			this.isScaledOnResize && resizeComponent.dimensions.clone(this.dimensions);
			this.isChangingSizeOnResize && resizeComponent.relativeSize.clone(this.relativeSize);
			this.isRotatingOnResize && resizeComponent.rotations.clone(this.rotations);
			this.isChangingAnchorOnResize && resizeComponent.anchors.clone(this.anchors);

			this.onSizeChange();
		}
	},

	lerp(to, ratio = 0, out) {
		if (!to || !(to instanceof ResizeComponent)) {
			return;
		}

		if (this.isUsr !== to.isUsr) {
			return;
		}

		if (!out || !(out instanceof ResizeComponent)) {
			out = new ResizeComponent();
			cc.systemEvent.on(pg.Events.SIZE_CHANGE, out.onSizeChange, out);
		}

		out.set(this);

		if (typeof ratio === 'number' && ratio !== 0) {
			to.positions && this.positions && this.positions.lerp(to.positions, ratio, out.positions);
			to.dimensions && this.dimensions && this.dimensions.lerp(to.dimensions, ratio, out.dimensions);
			to.rotations && this.rotations && this.rotations.lerp(to.rotations, ratio, out.rotations);
			to.relativeSize &&
				this.relativeSize &&
				this.relativeSize.lerp(to.relativeSize, ratio, out.relativeSize);
			to.anchors && this.anchors && this.anchors.lerp(to.anchors, ratio, out.anchors);
		}

		out.onSizeChange();

		return out;
	},

	//#endregion

	//#region private methods

	_setRotation() {
		this.node.angle = RoundWithPrecision(this.rotations.getValue());
	},

	_setAnchor() {
		const anchor = this.anchors.getValue();

		this.node.setAnchorPoint(RoundWithPrecision(anchor.x), RoundWithPrecision(anchor.y));
	},

	_setSize() {
		const sizeReference = this.sizeReference || this.node;
		const size = { width: sizeReference.width, height: sizeReference.height };
		const newSize = this.relativeSize.getValue(size);

		this.node.width = RoundWithPrecision(newSize.width);
		this.node.height = RoundWithPrecision(newSize.height);
	},

	_setScale(zoneSize) {
		const sizeReference = this.sizeReference || this.node;
		const size = { width: sizeReference.width, height: sizeReference.height };

		if (this.isChangingSizeOnResize && this.relativeSize) {
			const original = this.relativeSize.getOriginalSize();

			size.width = original.width;
			size.height = original.height;
		}

		const scale = this.dimensions.getValue(size, zoneSize, this.node.angle);

		this.node.setScale(RoundWithPrecision(scale.x), RoundWithPrecision(scale.y));
	},

	_setPosition(zoneSize, parent) {
		const position = this.positions.getValue(zoneSize);

		if (this.isRelativeToParent && parent) {
			position.x /= parent.scaleX;
			position.y /= parent.scaleY;
		}

		let newPosition = position;

		if (this.positions.type === PositionTypes.Relative) {
			const camera = cc.Camera.findCamera(this.node) || cc.Camera.main;
			newPosition = camera.getScreenToWorldPoint(position);
		}

		this.node.setPosition(RoundWithPrecision(newPosition.x), RoundWithPrecision(newPosition.y));
		
	},

	//#endregion

	//#region event handlers

	onSizeChange() {
		if (this.node) {
			const zoneSize = {
				width: pg.settings.GAME_WIDTH,
				height: pg.settings.GAME_HEIGHT,
			};

			const parent = this.node.parent;

			if (this.isRelativeToParent && parent) {
				zoneSize.width = parent.width * parent.scaleX;
				zoneSize.height = parent.height * parent.scaleY;
			}

			if (this.isRotatingOnResize && this.rotations) {
				this._setRotation();
			}

			if (this.isChangingAnchorOnResize && this.anchors) {
				this._setAnchor();
			}

			if (this.isChangingSizeOnResize && this.relativeSize) {
				this._setSize();
			}

			if (this.isScaledOnResize && this.dimensions) {
				this._setScale(zoneSize);
			}

			if (this.isMovedOnResize && this.positions) {
				this._setPosition(zoneSize, parent);
			}
		}
	},

	//#endregion
});

pg.ResizeComponent = module.exports = ResizeComponent;
