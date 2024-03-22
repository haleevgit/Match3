"use strict";
cc._RF.push(module, 'c6125Ma2UJLTJjSqpKXkf3h', 'Feature');
// scripts/Game/Logic/Features/Feature.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    initializingEvent: {
      "default": _GameEvent["default"].BOMB_IS_AVAILABLE,
      type: _GameEvent["default"]
    },
    scoreForInitializing: {
      "default": 0,
      type: cc.Integer
    },
    elementsForDeleting: {
      "default": [],
      type: Array
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](this.initializingEvent, this.onInitializingEvent, this);
    cc.systemEvent[func](_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, this.onCheckScoreForAbility, this);
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    if (!featureCoordinate || !fieldHeight || !fieldWidth) console.log("Not enough data for initializing!!!");
    return this._elementsForDeleting;
  },
  onCheckScoreForAbility: function onCheckScoreForAbility(kindAbility) {
    cc.systemEvent.emit(_GameEvent["default"].IS_SCORE_ENOUGH, kindAbility, this.scoreForInitializing);
  }
});

cc._RF.pop();