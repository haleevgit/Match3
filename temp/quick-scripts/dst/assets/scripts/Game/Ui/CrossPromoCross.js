
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/CrossPromoCross.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvQ3Jvc3NQcm9tb0Nyb3NzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiX2lucHV0Q2F0Y2hlciIsInNlcmlhbGl6YWJsZSIsIm9uRW5hYmxlIiwid2luZG93IiwiQURfVFlQRSIsIm5vZGUiLCJhY3RpdmUiLCJJU19FTkRfQ0FSRCIsIl9oYWRsZVN1YnNjcmlwdGlvbiIsImdldENvbXBvbmVudCIsImVuYWJsZWQiLCJvcGFjaXR5Iiwic2NoZWR1bGVPbmNlIiwiX2VuYWJsZUNyb3NzIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsIkdhbWVFdmVudCIsIkZJUlNUX1RBUCIsIm9uRmlyc3RUYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFFQTtJQUNBO0lBRUE7SUFDQUMsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQURFO01BRVhDLFlBQVksRUFBRTtJQUZILENBUlAsQ0FZUjs7RUFaUSxDQUhQO0VBa0JMO0VBQ0FDLFFBbkJLLHNCQW1CTTtJQUFBOztJQUNQLElBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxLQUFtQixhQUF2QixFQUFzQztNQUNsQyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7SUFDSCxDQUZELE1BRU87TUFDSCxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksV0FBWixFQUF5QjtRQUNyQixLQUFLQyxrQkFBTCxDQUF3QixJQUF4Qjs7UUFFQSxLQUFLUixhQUFMLEdBQXFCLEtBQUtTLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBckI7UUFDQSxLQUFLVCxhQUFMLENBQW1CVSxPQUFuQixHQUE2QixLQUE3QjtRQUVBLEtBQUtMLElBQUwsQ0FBVU0sT0FBVixHQUFvQixDQUFwQjtRQUVBLEtBQUtDLFlBQUwsQ0FBa0IsWUFBTTtVQUNwQixLQUFJLENBQUNDLFlBQUw7UUFDSCxDQUZELEVBRUcsQ0FGSDtNQUdIO0lBQ0o7RUFDSixDQXBDSTtFQXFDTDtFQUVBO0VBQ0E7RUFFQTtFQUNBTCxrQkEzQ0ssOEJBMkNjTSxJQTNDZCxFQTJDb0I7SUFDckIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFsQixFQUFFLENBQUNvQixXQUFILENBQWVELElBQWYsRUFBcUJFLHFCQUFBLENBQVVDLFNBQS9CLEVBQTBDLEtBQUtDLFVBQS9DLEVBQTJELElBQTNEO0VBQ0gsQ0EvQ0k7RUFpRExOLFlBakRLLDBCQWlEVTtJQUNYLElBQUksS0FBS1IsSUFBTCxDQUFVTSxPQUFWLEtBQXNCLENBQXRCLElBQTJCLENBQUMsS0FBS1gsYUFBTCxDQUFtQlUsT0FBbkQsRUFBNEQ7TUFDeEQsS0FBS0wsSUFBTCxDQUFVTSxPQUFWLEdBQW9CLEdBQXBCO01BQ0EsS0FBS1gsYUFBTCxDQUFtQlUsT0FBbkIsR0FBNkIsSUFBN0I7SUFDSDtFQUNKLENBdERJO0VBdURMO0VBRUE7RUFDQVMsVUExREssd0JBMERRO0lBQ1QsS0FBS04sWUFBTDtFQUNILENBNURJLENBNkRMOztBQTdESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBfaW5wdXRDYXRjaGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfSxcblxuICAgIC8vI3JlZ2lvbiBsaWZlLWN5Y2xlIGNhbGxiYWNrc1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAod2luZG93LkFEX1RZUEUgIT09ICdjcm9zcy1wcm9tbycpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LklTX0VORF9DQVJEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFkbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dENhdGNoZXIgPSB0aGlzLmdldENvbXBvbmVudCgnSW5wdXRDYXRjaGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXRDYXRjaGVyLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5hYmxlQ3Jvc3MoKTtcbiAgICAgICAgICAgICAgICB9LCA0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFkbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuRklSU1RfVEFQLCB0aGlzLm9uRmlyc3RUYXAsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfZW5hYmxlQ3Jvc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUub3BhY2l0eSA9PT0gMCAmJiAhdGhpcy5faW5wdXRDYXRjaGVyLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDYXRjaGVyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uRmlyc3RUYXAoKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZUNyb3NzKCk7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19