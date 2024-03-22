"use strict";
cc._RF.push(module, '706890AvoBLZJ5DJcEsc6Y/', 'ResultManager');
// scripts/Game/Ui/Screen/ResultManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    textWin: {
      "default": null,
      type: cc.SpriteFrame
    },
    textLose: {
      "default": null,
      type: cc.SpriteFrame
    },
    text: {
      "default": null,
      type: cc.Sprite
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].SHOW_SCREEN, this.onShowScreen, this);
  },
  //#endregion
  //#region event handlers
  onShowScreen: function onShowScreen(typeScreen, isShow, isWin) {
    if (isWin === void 0) {
      isWin = true;
    }

    if (isWin) {
      this.text.spriteFrame = this.textWin;
    } else {
      this.text.spriteFrame = this.textLose;
    }
  } //#endregion

});

cc._RF.pop();