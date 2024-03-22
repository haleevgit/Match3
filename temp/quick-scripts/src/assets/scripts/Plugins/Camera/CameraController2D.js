"use strict";
cc._RF.push(module, '8e8040IYd5NGrcXp6vqHg01', 'CameraController2D');
// scripts/Plugins/Camera/CameraController2D.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region import
//#endregion
var StickModes = cc.Enum({
  None: 0,
  Top: 1,
  Bottom: 2,
  Right: 3,
  Left: 4
});
var CaptureBoxHelper = cc.Class({
  name: 'CaptureBoxHelper',
  properties: {
    //#region editors fields and properties
    stickMode: {
      "default": StickModes.Bottom,
      type: StickModes,
      tooltip: 'к какой стороне экрана прилипает изображение'
    },
    defaultBox: {
      type: cc.Node,
      get: function get() {
        return this._isTransition && this._transitionBox ? this._transitionBox : this._defaultBox;
      },
      set: function set(box) {
        if (box instanceof cc.Node) {
          this._defaultBox = box;
        }
      },
      tooltip: 'начальная коробка, на которую смотрит камера'
    },
    //#endregion
    //#region private field and properties
    _defaultBox: {
      "default": null,
      type: cc.Node
    },
    _isTransition: {
      "default": false,
      serializable: false
    },
    _transitTween: {
      "default": null,
      type: pg.Tween,
      serializable: false
    },
    _transitValue: {
      "default": 0,
      serializable: false
    },
    _transitionBox: {
      "default": null,
      type: cc.Node,
      serializable: false
    },
    _transitionResize: {
      "default": null,
      type: pg.ResizeComponent,
      serializable: false
    } //#endregion

  },
  transitToBox: function transitToBox(newBox, duration, easing) {
    var _this = this;

    this._isTransition && this.cancelTransition();
    this._transitValue = 0;
    this._transitTween = pg.tweenManager.add(this, {
      _transitValue: 1
    }, duration, easing);

    this._setTransitBox(newBox);

    var defaultBoxResize = this.defaultBox.getComponent(pg.ResizeComponent);
    var newBoxResize = newBox.getComponent(pg.ResizeComponent);

    if (defaultBoxResize && newBoxResize) {
      this._transitionResize.set(defaultBoxResize);

      var initialPos = this.defaultBox.position.clone();

      this._transitTween.onUpdate = function () {
        // FIXME: lerp resize with absolute position
        //defaultBoxResize.lerp(newBoxResize, this._transitValue, this._transitionResize);
        _this._transitionBox.x = newBox.x * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.x;
        _this._transitionBox.y = newBox.y * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.y;
        _this._transitionBox.width = newBox.width * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.width;
        _this._transitionBox.height = newBox.height * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.height;
      };

      this._transitTween.onComplete = function () {
        _this._isTransition = false;
        _this.defaultBox = newBox;
      };

      this._isTransition = true;
    }
  },
  cancelTransition: function cancelTransition() {
    this._transitTween && this._transitTween.stop();
    this._transitValue = 0;
    this._isTransition = false;
    this.defaultBox = this._transitionBox;
  },
  _setTransitBox: function _setTransitBox(newBox) {
    if (!this._transitionBox) {
      this._transitionBox = new cc.Node('CameraTransitionBox');
    }

    if (!this._transitionResize) {
      this._transitionResize = this._transitionBox.getComponent(pg.ResizeComponent) || this._transitionBox.addComponent(pg.ResizeComponent);
    }

    this._transitionBox.setParent(newBox.parent);
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    focus: {
      "default": cc.v2(0.5, 0.5),
      tooltip: 'фокус камеры от 0 до 1 по каждой из осей'
    },
    isUsingCameraBoxes: {
      "default": false,
      tooltip: 'использовать камера боксы. Если нет, предполагается что камера статична'
    },
    //#endregion
    //#region editors fields and properties
    boxHelper: {
      "default": function _default() {
        return new CaptureBoxHelper();
      },
      visible: function visible() {
        return this.isUsingCameraBoxes;
      },
      type: CaptureBoxHelper
    },
    fitSpace: {
      "default": false,
      visible: function visible() {
        return this.isUsingCameraBoxes;
      },
      tooltip: 'если true, камера гарантирует попадание всей коробки, на false гарантируется покрытие камеры целиком (без черных полос)'
    },
    deltaShake: {
      "default": cc.Vec2.ZERO,
      tooltip: 'вектор для шейка камеры. Задает направление и амплитуду'
    },
    shakeFrequency: {
      "default": cc.v2(1, 1),
      tooltip: 'количество полных оборотов камеры по каждой оси за секунду'
    },
    //#endregion
    //#region private field and properties
    _camera: {
      "default": null,
      serializable: false
    },
    _boxes: {
      "default": {},
      serializable: false
    },
    _currentShakeOffset: {
      "default": cc.v2(),
      serializable: false
    },
    _isShaking: {
      "default": false,
      serializable: false
    },
    _shakingTime: {
      "default": 0,
      serializable: false
    },
    _staticCameraPos: {
      "default": cc.v2(),
      serializable: false
    } //#endregion

  },
  editor: {
    menu: 'Camera/CameraController2D'
  },
  //#region life-cycle callbacks
  onLoad: function onLoad() {
    if (!this._camera) {
      this._camera = this.node.getComponent(cc.Camera);
    }

    this._handleSubscription(true);
  },
  onEnable: function onEnable() {
    this._staticCameraPos = this.node.position.clone();
  },
  update: function update(dt) {
    this._updatePosition();

    this._updateZoomRatio();

    if (this._isShaking) {
      this._shakingTime += dt; // камера трясется по синусоиде с заданной частотой и амплитудой

      var xOffset = this.shakeFrequency.x > 0 ? Math.sin(Math.PI * this._shakingTime * this.shakeFrequency.x) * this.deltaShake.x : 0;
      var yOffset = this.shakeFrequency.y > 0 ? Math.sin(Math.PI * this._shakingTime * this.shakeFrequency.y) * this.deltaShake.y : 0;
      this._currentShakeOffset = cc.v2(xOffset, yOffset);
    }
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private method
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].CAMERA_TRANSIT_BOX, this.onCameraTransitBox, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_BOX_ADD, this.onCameraBoxAdd, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_BOX_SWITCH, this.onCameraBoxSwitch, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_START_SHAKE, this.onCameraStartShake, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_STOP_SHAKE, this.onCameraStopShake, this);
  },
  _updateZoomRatio: function _updateZoomRatio() {
    var zoomRatio = 1;

    if (this.boxHelper.defaultBox) {
      var tw = this.boxHelper.defaultBox.width;
      var th = this.boxHelper.defaultBox.height;
      var gw = pg.settings.GAME_WIDTH;
      var gh = pg.settings.GAME_HEIGHT;
      var zX = gw / tw;
      var zY = gh / th;
      zoomRatio = this.fitSpace ? Math.max(zX, zY) : Math.min(zX, zY);
    }

    this._setZoomRatio(zoomRatio);
  },
  _updatePosition: function _updatePosition() {
    if (this.isUsingCameraBoxes && this.boxHelper.defaultBox) {
      var targetWorldPosition = this.boxHelper.defaultBox.convertToWorldSpaceAR(cc.Vec2.ZERO);
      var offset = cc.v2(this._camera.width * (this.boxHelper.defaultBox.anchorX - this.focus.x), this._camera.height * (this.boxHelper.defaultBox.anchorY - this.focus.y));
      var cameraWorldPosition = targetWorldPosition.add(offset);

      this._checkStickPosition(cameraWorldPosition);

      var cameraLocalPosition = this.node.parent.convertToNodeSpaceAR(cameraWorldPosition);
      this.node.setPosition(cameraLocalPosition.add(this._currentShakeOffset));
    } else if (!this.isUsingCameraBoxes) {
      this.node.setPosition(this._staticCameraPos.add(this._currentShakeOffset));
    }
  },
  _checkStickPosition: function _checkStickPosition(cameraWorld) {
    var viewSize = cc.view.getVisibleSize();

    switch (this.boxHelper.stickMode) {
      case StickModes.Top:
        cameraWorld.y = cameraWorld.y - (this._camera.height - this.boxHelper.defaultBox.height) * 0.5;
        break;

      case StickModes.Bottom:
        cameraWorld.y = cameraWorld.y + (this._camera.height - this.boxHelper.defaultBox.height) * 0.5;
        break;

      case StickModes.Right:
        cameraWorld.x = cameraWorld.x - (this._camera.width - this.boxHelper.defaultBox.width) * 0.5;
        break;

      case StickModes.Left:
        cameraWorld.x = cameraWorld.x + (this._camera.width - this.boxHelper.defaultBox.width) * 0.5;
        break;
    }
  },
  _setZoomRatio: function _setZoomRatio(zoomRatio) {
    this._camera.zoomRatio = zoomRatio;
    this._camera.width = pg.settings.GAME_WIDTH / this._camera.zoomRatio;
    this._camera.height = pg.settings.GAME_HEIGHT / this._camera.zoomRatio;
  },
  //#endregion
  //#region event handlers
  onCameraTransitBox: function onCameraTransitBox(newBox, duration, easing) {
    if (duration === void 0) {
      duration = 0;
    }

    if (newBox) {
      if (duration === 0) {
        this.boxHelper.defaultBox = newBox;
      } else {
        this.boxHelper.transitToBox(newBox, duration, easing);
      }
    }
  },
  onCameraBoxAdd: function onCameraBoxAdd(type, box) {
    if (box instanceof cc.Node) {
      this._boxes[type] = box;
    }
  },
  onCameraBoxSwitch: function onCameraBoxSwitch(type, duration, easing) {
    var newBox = this._boxes[type];
    this.onCameraTransitBox(newBox, duration, easing);
  },
  onCameraStartShake: function onCameraStartShake() {
    this._isShaking = true;
  },
  onCameraStopShake: function onCameraStopShake() {
    this._isShaking = false;
    this._currentShakeOffset = cc.v2();
    this._shakingTime = 0;
  } //#endregion

});

cc._RF.pop();