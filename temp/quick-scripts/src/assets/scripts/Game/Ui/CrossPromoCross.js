"use strict";
cc._RF.push(module, '8a598UGpmVK/65RKI7Kymy2', 'CrossPromoCross');
// scripts/Game/Ui/CrossPromoCross.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _inputCatcher: {
      "default": null,
      serializable: false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    var _this = this;

    if (window.AD_TYPE !== 'cross-promo') {
      this.node.active = false;
    } else {
      if (!window.IS_END_CARD) {
        this._hadleSubscription(true);

        this._inputCatcher = this.getComponent('InputCatcher');
        this._inputCatcher.enabled = false;
        this.node.opacity = 0;
        this.scheduleOnce(function () {
          _this._enableCross();
        }, 4);
      }
    }
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _hadleSubscription: function _hadleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].FIRST_TAP, this.onFirstTap, this);
  },
  _enableCross: function _enableCross() {
    if (this.node.opacity === 0 && !this._inputCatcher.enabled) {
      this.node.opacity = 255;
      this._inputCatcher.enabled = true;
    }
  },
  //#endregion
  //#region event handlers
  onFirstTap: function onFirstTap() {
    this._enableCross();
  } //#endregion

});

cc._RF.pop();