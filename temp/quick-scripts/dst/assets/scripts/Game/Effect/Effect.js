
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Effect/Effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRWZmZWN0L0VmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImVmZmVjdCIsInR5cGUiLCJQcmVmYWIiLCJvbkVuYWJsZSIsIl9oYW5kbGVTdWJzY3JpcHRpb24iLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiU1BBV05fRUZGRUNUIiwib25TcGF3bkVmZmVjdCIsImNvb3JkcyIsImciLCJpbnN0YW50aWF0ZSIsInNldFBhcmVudCIsIm5vZGUiLCJ4IiwieSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFO01BQUMsV0FBUyxJQUFWO01BQWdCQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBekI7RUFEQSxDQUhQO0VBT0xDLFFBUEssc0JBT007SUFDUCxLQUFLQyxtQkFBTCxDQUF5QixJQUF6QjtFQUNILENBVEk7RUFXTEMsU0FYSyx1QkFXTztJQUNSLEtBQUtELG1CQUFMLENBQXlCLEtBQXpCO0VBQ0gsQ0FiSTtFQWVMQSxtQkFmSywrQkFlZUUsSUFmZixFQWVxQjtJQUN0QixJQUFNQyxJQUFJLEdBQUdELElBQUksR0FBRyxJQUFILEdBQVUsS0FBM0I7SUFDQVYsRUFBRSxDQUFDWSxXQUFILENBQWVELElBQWYsRUFBcUJFLHFCQUFBLENBQVVDLFlBQS9CLEVBQTZDLEtBQUtDLGFBQWxELEVBQWlFLElBQWpFO0VBQ0gsQ0FsQkk7RUFvQkxBLGFBcEJLLHlCQW9CU0MsTUFwQlQsRUFvQmlCO0lBQ2xCLElBQU1DLENBQUMsR0FBR2pCLEVBQUUsQ0FBQ2tCLFdBQUgsQ0FBZSxLQUFLZCxNQUFwQixDQUFWO0lBQ0FhLENBQUMsQ0FBQ0UsU0FBRixDQUFZLEtBQUtDLElBQWpCO0lBQ0FILENBQUMsQ0FBQ0ksQ0FBRixHQUFNTCxNQUFNLENBQUNLLENBQWI7SUFDQUosQ0FBQyxDQUFDSyxDQUFGLEdBQU1OLE1BQU0sQ0FBQ00sQ0FBYjtJQUNBTCxDQUFDLENBQUNNLE1BQUYsR0FBVyxJQUFYO0VBQ0g7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBlZmZlY3Q6IHtkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5QcmVmYWJ9LFxuICAgIH0sXG4gICAgXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TUEFXTl9FRkZFQ1QsIHRoaXMub25TcGF3bkVmZmVjdCwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uU3Bhd25FZmZlY3QoY29vcmRzKSB7XG4gICAgICAgIGNvbnN0IGcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVmZmVjdCk7XG4gICAgICAgIGcuc2V0UGFyZW50KHRoaXMubm9kZSlcbiAgICAgICAgZy54ID0gY29vcmRzLng7XG4gICAgICAgIGcueSA9IGNvb3Jkcy55O1xuICAgICAgICBnLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG59KTtcbiJdfQ==