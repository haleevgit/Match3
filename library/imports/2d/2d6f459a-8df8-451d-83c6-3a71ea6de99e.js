"use strict";
cc._RF.push(module, '2d6f4WajfhFHYPGOnHqbeme', 'CatcherOff');
// scripts/Game/Ui/CatcherOff.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    inputCatcher: {
      "default": null,
      type: cc.Node
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this.inputCatcher.actived = false;
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
    cc.systemEvent[func](_GameEvent["default"].BLOCK_CHOSEN, this.onBlockChosen, this);
  },
  //#region event handlers
  onBlockChosen: function onBlockChosen() {
    this.inputCatcher.actived = true;
  } //#endregion

});

cc._RF.pop();