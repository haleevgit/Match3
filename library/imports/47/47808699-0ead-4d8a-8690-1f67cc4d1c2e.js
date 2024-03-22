"use strict";
cc._RF.push(module, '47808aZDq1NioaQH2fMTRwu', 'Effect');
// scripts/Game/Effect/Effect.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    effect: {
      "default": null,
      type: cc.Prefab
    }
  },
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].SPAWN_EFFECT, this.onSpawnEffect, this);
  },
  onSpawnEffect: function onSpawnEffect(coords) {
    var g = cc.instantiate(this.effect);
    g.setParent(this.node);
    g.x = coords.x;
    g.y = coords.y;
    g.active = true;
  }
});

cc._RF.pop();