"use strict";
cc._RF.push(module, '7a42boq6wlMgoj03qxQZKBF', 'Field');
// scripts/Game/World/Field.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    block: {
      "default": null,
      type: cc.Prefab
    },
    mask: {
      "default": null,
      type: cc.Node
    },
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

    cc.systemEvent.emit(_GameEvent["default"].FIELD_ON, this.mask, this.block);
    this.inputCatcher.active = false;
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
    cc.systemEvent[func](_GameEvent["default"].STOP_INPUT, this.onStopInput, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_CAN_BE_CHOSEN, this.onBlockCanBeChosen, this);
  },
  //#endregion
  //#region event handlers
  onStopInput: function onStopInput() {
    this.inputCatcher.active = true;
  },
  onBlockCanBeChosen: function onBlockCanBeChosen() {
    this.inputCatcher.active = false;
  } //#endregion

});

cc._RF.pop();