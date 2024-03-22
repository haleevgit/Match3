
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/World/Field.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvV29ybGQvRmllbGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJtYXNrIiwiTm9kZSIsImlucHV0Q2F0Y2hlciIsIm9uRW5hYmxlIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkZJRUxEX09OIiwiYWN0aXZlIiwib25EaXNhYmxlIiwiaXNPbiIsImZ1bmMiLCJTVE9QX0lOUFVUIiwib25TdG9wSW5wdXQiLCJCTE9DS19DQU5fQkVfQ0hPU0VOIiwib25CbG9ja0NhbkJlQ2hvc2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBREE7QUFFQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxLQUFLLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUZDO0lBR1JDLElBQUksRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBQTFCLENBSEU7SUFJUkMsWUFBWSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFBMUIsQ0FKTixDQUtSO0lBRUE7SUFDQTtJQUVBO0lBQ0E7O0VBWFEsQ0FIUDtFQWlCTDtFQUNBRSxRQWxCSyxzQkFrQk07SUFDUCxLQUFLQyxtQkFBTCxDQUF5QixJQUF6Qjs7SUFDQVgsRUFBRSxDQUFDWSxXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLFFBQTlCLEVBQXdDLEtBQUtSLElBQTdDLEVBQW1ELEtBQUtILEtBQXhEO0lBQ0EsS0FBS0ssWUFBTCxDQUFrQk8sTUFBbEIsR0FBMkIsS0FBM0I7RUFDSCxDQXRCSTtFQXdCTEMsU0F4QkssdUJBd0JPO0lBQ1IsS0FBS04sbUJBQUwsQ0FBeUIsS0FBekI7RUFDSCxDQTFCSTtFQTJCTDtFQUVBO0VBQ0E7RUFFQTtFQUNBQSxtQkFqQ0ssK0JBaUNlTyxJQWpDZixFQWlDcUI7SUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFsQixFQUFFLENBQUNZLFdBQUgsQ0FBZU8sSUFBZixFQUFxQkwscUJBQUEsQ0FBVU0sVUFBL0IsRUFBMkMsS0FBS0MsV0FBaEQsRUFBNkQsSUFBN0Q7SUFDQXJCLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlTyxJQUFmLEVBQXFCTCxxQkFBQSxDQUFVUSxtQkFBL0IsRUFBb0QsS0FBS0Msa0JBQXpELEVBQTZFLElBQTdFO0VBQ0gsQ0F0Q0k7RUF3Q0w7RUFFQTtFQUNBRixXQTNDSyx5QkEyQ1M7SUFDVixLQUFLWixZQUFMLENBQWtCTyxNQUFsQixHQUEyQixJQUEzQjtFQUNILENBN0NJO0VBK0NMTyxrQkEvQ0ssZ0NBK0NnQjtJQUNqQixLQUFLZCxZQUFMLENBQWtCTyxNQUFsQixHQUEyQixLQUEzQjtFQUNILENBakRJLENBa0RMOztBQWxESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIGJsb2NrOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlByZWZhYiB9LFxuICAgICAgICBtYXNrOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgaW5wdXRDYXRjaGVyOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHByaXZhdGUgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKHRydWUpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5GSUVMRF9PTiwgdGhpcy5tYXNrLCB0aGlzLmJsb2NrKTtcbiAgICAgICAgdGhpcy5pbnB1dENhdGNoZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TVE9QX0lOUFVULCB0aGlzLm9uU3RvcElucHV0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkJMT0NLX0NBTl9CRV9DSE9TRU4sIHRoaXMub25CbG9ja0NhbkJlQ2hvc2VuLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlcnNcbiAgICBvblN0b3BJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dENhdGNoZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25CbG9ja0NhbkJlQ2hvc2VuKCkge1xuICAgICAgICB0aGlzLmlucHV0Q2F0Y2hlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxufSk7XG4iXX0=