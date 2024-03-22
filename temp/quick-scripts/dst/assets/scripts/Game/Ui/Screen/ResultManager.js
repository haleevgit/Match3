
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/Screen/ResultManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvU2NyZWVuL1Jlc3VsdE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0V2luIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwidGV4dExvc2UiLCJ0ZXh0IiwiU3ByaXRlIiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwib25EaXNhYmxlIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsIkdhbWVFdmVudCIsIlNIT1dfU0NSRUVOIiwib25TaG93U2NyZWVuIiwidHlwZVNjcmVlbiIsImlzU2hvdyIsImlzV2luIiwic3ByaXRlRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUVBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLE9BQU8sRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBRkQ7SUFHUkMsUUFBUSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FIRjtJQUlSRSxJQUFJLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJILElBQUksRUFBRUwsRUFBRSxDQUFDUztJQUExQixDQUpFLENBS1I7SUFFQTtJQUNBO0lBRUE7SUFDQTs7RUFYUSxDQUhQO0VBaUJMO0VBQ0FDLFFBbEJLLHNCQWtCTTtJQUNQLEtBQUtDLG1CQUFMLENBQXlCLElBQXpCO0VBQ0gsQ0FwQkk7RUFzQkxDLFNBdEJLLHVCQXNCTztJQUNSLEtBQUtELG1CQUFMLENBQXlCLEtBQXpCO0VBQ0gsQ0F4Qkk7RUEwQkw7RUFFQTtFQUNBO0VBRUE7RUFDQUEsbUJBaENLLCtCQWdDZUUsSUFoQ2YsRUFnQ3FCO0lBQ3RCLElBQU1DLElBQUksR0FBR0QsSUFBSSxHQUFHLElBQUgsR0FBVSxLQUEzQjtJQUVBYixFQUFFLENBQUNlLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVUMsV0FBL0IsRUFBNEMsS0FBS0MsWUFBakQsRUFBK0QsSUFBL0Q7RUFDSCxDQXBDSTtFQXFDTDtFQUVBO0VBQ0FBLFlBeENLLHdCQXdDUUMsVUF4Q1IsRUF3Q29CQyxNQXhDcEIsRUF3QzRCQyxLQXhDNUIsRUF3QzBDO0lBQUEsSUFBZEEsS0FBYztNQUFkQSxLQUFjLEdBQU4sSUFBTTtJQUFBOztJQUMzQyxJQUFJQSxLQUFKLEVBQVc7TUFDUCxLQUFLYixJQUFMLENBQVVjLFdBQVYsR0FBd0IsS0FBS2xCLE9BQTdCO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0ksSUFBTCxDQUFVYyxXQUFWLEdBQXdCLEtBQUtmLFFBQTdCO0lBQ0g7RUFDSixDQTlDSSxDQStDTDs7QUEvQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuLy8jZW5kcmVnaW9uXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICB0ZXh0V2luOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHRleHRMb3NlOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHRleHQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuU3ByaXRlIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuICAgIF9oYW5kbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuU0hPV19TQ1JFRU4sIHRoaXMub25TaG93U2NyZWVuLCB0aGlzKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25TaG93U2NyZWVuKHR5cGVTY3JlZW4sIGlzU2hvdywgaXNXaW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChpc1dpbikge1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNwcml0ZUZyYW1lID0gdGhpcy50ZXh0V2luO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNwcml0ZUZyYW1lID0gdGhpcy50ZXh0TG9zZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==