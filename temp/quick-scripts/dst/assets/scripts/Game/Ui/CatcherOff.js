
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/CatcherOff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvQ2F0Y2hlck9mZi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlucHV0Q2F0Y2hlciIsInR5cGUiLCJOb2RlIiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwiYWN0aXZlZCIsIm9uRGlzYWJsZSIsImlzT24iLCJmdW5jIiwic3lzdGVtRXZlbnQiLCJHYW1lRXZlbnQiLCJCTE9DS19DSE9TRU4iLCJvbkJsb2NrQ2hvc2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBREE7QUFFQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxZQUFZLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUZOLENBR1I7SUFFQTtJQUNBO0lBRUE7SUFDQTs7RUFUUSxDQUhQO0VBZUw7RUFDQUMsUUFoQkssc0JBZ0JNO0lBQ1AsS0FBS0MsbUJBQUwsQ0FBeUIsSUFBekI7O0lBQ0EsS0FBS0osWUFBTCxDQUFrQkssT0FBbEIsR0FBNEIsS0FBNUI7RUFDSCxDQW5CSTtFQXFCTEMsU0FyQkssdUJBcUJPO0lBQ1IsS0FBS0YsbUJBQUwsQ0FBeUIsS0FBekI7RUFDSCxDQXZCSTtFQXlCTDtFQUVBO0VBQ0E7RUFFQTtFQUNBQSxtQkEvQkssK0JBK0JlRyxJQS9CZixFQStCcUI7SUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFYLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlRCxJQUFmLEVBQXFCRSxxQkFBQSxDQUFVQyxZQUEvQixFQUE2QyxLQUFLQyxhQUFsRCxFQUFpRSxJQUFqRTtFQUNILENBbkNJO0VBb0NMO0VBQ0FBLGFBckNLLDJCQXFDVztJQUNaLEtBQUtaLFlBQUwsQ0FBa0JLLE9BQWxCLEdBQTRCLElBQTVCO0VBQ0gsQ0F2Q0ksQ0F3Q0w7O0FBeENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBjbGFzc2VzLWhlbHBlcnNcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50Jztcbi8vI2VuZHJlZ2lvblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgaW5wdXRDYXRjaGVyOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHByaXZhdGUgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKHRydWUpO1xuICAgICAgICB0aGlzLmlucHV0Q2F0Y2hlci5hY3RpdmVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkJMT0NLX0NIT1NFTiwgdGhpcy5vbkJsb2NrQ2hvc2VuLCB0aGlzKTtcbiAgICB9LFxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uQmxvY2tDaG9zZW4oKSB7XG4gICAgICAgIHRoaXMuaW5wdXRDYXRjaGVyLmFjdGl2ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==