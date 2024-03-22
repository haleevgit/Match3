"use strict";
cc._RF.push(module, '5c208WPE0dJ94YMlwaqMAcI', 'InputCatcher');
// scripts/Plugins/Input/InputCatcher.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _InputDirection = _interopRequireDefault(require("InputDirection"));

var _InputType = _interopRequireDefault(require("InputType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    direction: {
      "default": _InputDirection["default"].None,
      type: _InputDirection["default"],
      tooltip: 'место откуда пришел инпут, по энаму InputDirection'
    },
    target: {
      "default": null,
      type: cc.Component,
      tooltip: 'компонента, которая будет передана в команду. В команде можно будет использовать ее методы'
    },
    analyticsArea: '' //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  editor: {
    menu: 'Input/InputCatcher'
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
  _handleSubscription: function _handleSubscription(activated) {
    var func = activated ? 'on' : 'off';
    this.node[func](cc.Node.EventType.TOUCH_START, this.onDown, this);
    this.node[func](cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
    this.node[func](cc.Node.EventType.TOUCH_END, this.onUp, this);
    this.node[func](cc.Node.EventType.TOUCH_CANCEL, this.onUp, this);
  },
  //#endregion
  //#region event handlers
  onDown: function onDown(event) {
    cc.systemEvent.emit(_GameEvent["default"].INPUT, _InputType["default"].Down, this.direction, event.touch, this, this.target);
  },
  onMove: function onMove(event) {
    cc.systemEvent.emit(_GameEvent["default"].INPUT, _InputType["default"].Move, this.direction, event.touch, this, this.target);
  },
  onUp: function onUp(event) {
    cc.systemEvent.emit(_GameEvent["default"].INPUT, _InputType["default"].Up, this.direction, event.touch, this, this.target);
  } //#endregion

});

cc._RF.pop();