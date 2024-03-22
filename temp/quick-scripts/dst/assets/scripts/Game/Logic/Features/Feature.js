
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/Feature.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvRmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXRpYWxpemluZ0V2ZW50IiwiR2FtZUV2ZW50IiwiQk9NQl9JU19BVkFJTEFCTEUiLCJ0eXBlIiwic2NvcmVGb3JJbml0aWFsaXppbmciLCJJbnRlZ2VyIiwiZWxlbWVudHNGb3JEZWxldGluZyIsIkFycmF5Iiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwib25EaXNhYmxlIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsIm9uSW5pdGlhbGl6aW5nRXZlbnQiLCJDSEVDS19TQ09SRVNfRk9SX0FCSUxJVFkiLCJvbkNoZWNrU2NvcmVGb3JBYmlsaXR5IiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiX2VsZW1lbnRzRm9yRGVsZXRpbmciLCJraW5kQWJpbGl0eSIsImVtaXQiLCJJU19TQ09SRV9FTk9VR0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUVBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLGlCQUFpQixFQUFFO01BQUUsV0FBU0MscUJBQUEsQ0FBVUMsaUJBQXJCO01BQXdDQyxJQUFJLEVBQUVGO0lBQTlDLENBRlg7SUFHUkcsb0JBQW9CLEVBQUU7TUFBRSxXQUFTLENBQVg7TUFBY0QsSUFBSSxFQUFFUCxFQUFFLENBQUNTO0lBQXZCLENBSGQ7SUFLUkMsbUJBQW1CLEVBQUU7TUFBQyxXQUFTLEVBQVY7TUFBY0gsSUFBSSxFQUFFSTtJQUFwQixDQUxiLENBTVI7O0VBTlEsQ0FIUDtFQVlMO0VBQ0FDLFFBYkssc0JBYU07SUFDUCxLQUFLQyxtQkFBTCxDQUF5QixJQUF6QjtFQUNILENBZkk7RUFpQkxDLFNBakJLLHVCQWlCTztJQUNSLEtBQUtELG1CQUFMLENBQXlCLEtBQXpCO0VBQ0gsQ0FuQkk7RUFxQkw7RUFFQTtFQUNBQSxtQkF4QkssK0JBd0JlRSxJQXhCZixFQXdCcUI7SUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFmLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQixLQUFLWixpQkFBMUIsRUFBNkMsS0FBS2MsbUJBQWxELEVBQXVFLElBQXZFO0lBQ0FsQixFQUFFLENBQUNpQixXQUFILENBQWVELElBQWYsRUFBcUJYLHFCQUFBLENBQVVjLHdCQUEvQixFQUF5RCxLQUFLQyxzQkFBOUQsRUFBc0YsSUFBdEY7RUFDSCxDQTdCSTtFQStCTEYsbUJBL0JLLCtCQStCZUcsaUJBL0JmLEVBK0JrQ0MsVUEvQmxDLEVBK0I4Q0MsV0EvQjlDLEVBK0IyRDtJQUM1RCxJQUFHLENBQUNGLGlCQUFELElBQXNCLENBQUNFLFdBQXZCLElBQXNDLENBQUNELFVBQTFDLEVBQ0lFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaO0lBRUosT0FBTyxLQUFLQyxvQkFBWjtFQUNILENBcENJO0VBc0NMTixzQkF0Q0ssa0NBc0NrQk8sV0F0Q2xCLEVBc0MrQjtJQUNoQzNCLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZVcsSUFBZixDQUFvQnZCLHFCQUFBLENBQVV3QixlQUE5QixFQUErQ0YsV0FBL0MsRUFBNEQsS0FBS25CLG9CQUFqRTtFQUNIO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBjbGFzc2VzLWhlbHBlcnNcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50Jztcbi8vI2VuZHJlZ2lvblxuIFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiBcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBpbml0aWFsaXppbmdFdmVudDogeyBkZWZhdWx0OiBHYW1lRXZlbnQuQk9NQl9JU19BVkFJTEFCTEUsIHR5cGU6IEdhbWVFdmVudCB9LFxuICAgICAgICBzY29yZUZvckluaXRpYWxpemluZzogeyBkZWZhdWx0OiAwLCB0eXBlOiBjYy5JbnRlZ2VyIH0sXG5cbiAgICAgICAgZWxlbWVudHNGb3JEZWxldGluZzoge2RlZmF1bHQ6IFtdLCB0eXBlOiBBcnJheX0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG4gXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICB9LFxuIFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuIFxuICAgIC8vI2VuZHJlZ2lvblxuIFxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG4gXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKHRoaXMuaW5pdGlhbGl6aW5nRXZlbnQsIHRoaXMub25Jbml0aWFsaXppbmdFdmVudCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DSEVDS19TQ09SRVNfRk9SX0FCSUxJVFksIHRoaXMub25DaGVja1Njb3JlRm9yQWJpbGl0eSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uSW5pdGlhbGl6aW5nRXZlbnQoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KSB7XG4gICAgICAgIGlmKCFmZWF0dXJlQ29vcmRpbmF0ZSB8fCAhZmllbGRIZWlnaHQgfHwgIWZpZWxkV2lkdGgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZGF0YSBmb3IgaW5pdGlhbGl6aW5nISEhXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50c0ZvckRlbGV0aW5nXG4gICAgfSxcblxuICAgIG9uQ2hlY2tTY29yZUZvckFiaWxpdHkoa2luZEFiaWxpdHkpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuSVNfU0NPUkVfRU5PVUdILCBraW5kQWJpbGl0eSwgdGhpcy5zY29yZUZvckluaXRpYWxpemluZyk7XG4gICAgfVxuIH0pO1xuIFxuIl19