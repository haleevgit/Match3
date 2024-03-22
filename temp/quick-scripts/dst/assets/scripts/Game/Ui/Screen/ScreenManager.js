
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/Screen/ScreenManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4303kOybFGuZ4EIneNDh0N', 'ScreenManager');
// scripts/Game/Ui/Screen/ScreenManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
var ScreenShowSettings = cc.Class({
  name: 'ScreenStartSettings',
  properties: {
    type: {
      "default": _UiScreenType["default"].None,
      type: _UiScreenType["default"],
      tooltip: 'тип экрана для создания на старте'
    },
    zIndex: {
      "default": 0,
      tooltip: 'порядковый номер экрана для отрисовки. чем ниже номер, тем глубже он будет отрисован'
    },
    activateOnStart: {
      "default": false,
      tooltip: 'активировать данный экран при старте?'
    },
    disableOnShow: {
      "default": [],
      type: [_UiScreenType["default"]],
      tooltip: 'какие экраны скрыть при активации данного экрана (не используется при активации экрана на старте)'
    }
  }
}); //#endregion

cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    screenSettings: {
      "default": [],
      type: [ScreenShowSettings],
      notify: function notify(oldValue) {
        var array = [];
        this.activateOnStart.forEach(function (el) {
          if (el.type === _UiScreenType["default"].None || !array.find(function (set) {
            return set.type === el.type;
          })) {
            array.push(el);
          }
        });

        if (oldValue.length !== array.length) {
          this.activateOnStart = array;
        }
      },
      tooltip: 'определяет какие экраны должны быть созданы и активированы на старте'
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this.screenSettings.sort(function (a, b) {
      return a.zIndex - b.zIndex;
    }).forEach(function (el) {
      cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, el.type, el.activateOnStart);
    });
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
  onShowScreen: function onShowScreen(screenType, isOff) {
    if (isOff === void 0) {
      isOff = true;
    }

    var settings = this.screenSettings.find(function (set) {
      return set.type === screenType;
    });

    if (!isOff) {
      cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, screenType, false);
      return;
    }

    if (settings) {
      settings.disableOnShow.forEach(function (disableScreenType) {
        cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, disableScreenType, false);
      });
      cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, screenType, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvU2NyZWVuL1NjcmVlbk1hbmFnZXIuanMiXSwibmFtZXMiOlsiU2NyZWVuU2hvd1NldHRpbmdzIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIlVpU2NyZWVuVHlwZSIsIk5vbmUiLCJ0b29sdGlwIiwiekluZGV4IiwiYWN0aXZhdGVPblN0YXJ0IiwiZGlzYWJsZU9uU2hvdyIsIkNvbXBvbmVudCIsInNjcmVlblNldHRpbmdzIiwibm90aWZ5Iiwib2xkVmFsdWUiLCJhcnJheSIsImZvckVhY2giLCJlbCIsImZpbmQiLCJzZXQiLCJwdXNoIiwibGVuZ3RoIiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwic29ydCIsImEiLCJiIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiVE9HR0xFX1NDUkVFTiIsIm9uRGlzYWJsZSIsImlzT24iLCJmdW5jIiwiU0hPV19TQ1JFRU4iLCJvblNob3dTY3JlZW4iLCJzY3JlZW5UeXBlIiwiaXNPZmYiLCJzZXR0aW5ncyIsImRpc2FibGVTY3JlZW5UeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxrQkFBa0IsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDaENDLElBQUksRUFBRSxxQkFEMEI7RUFHaENDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUU7TUFDRixXQUFTQyx3QkFBQSxDQUFhQyxJQURwQjtNQUVGRixJQUFJLEVBQUVDLHdCQUZKO01BR0ZFLE9BQU8sRUFBRTtJQUhQLENBREU7SUFNUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxDQURMO01BRUpELE9BQU8sRUFBRTtJQUZMLENBTkE7SUFVUkUsZUFBZSxFQUFFO01BQ2IsV0FBUyxLQURJO01BRWJGLE9BQU8sRUFBRTtJQUZJLENBVlQ7SUFjUkcsYUFBYSxFQUFFO01BQ1gsV0FBUyxFQURFO01B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NkNTLGlCQUE3QyxFQUFnRSxLQUFoRTtNQUNILENBRkQ7TUFHQXZDLEVBQUUsQ0FBQzJCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMscUJBQUEsQ0FBVUMsYUFBOUIsRUFBNkNNLFVBQTdDLEVBQXlELElBQXpEO0lBQ0g7RUFDSixDQXZFSSxDQXdFTDs7QUF4RUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuXG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG5jb25zdCBTY3JlZW5TaG93U2V0dGluZ3MgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ1NjcmVlblN0YXJ0U2V0dGluZ3MnLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBVaVNjcmVlblR5cGUuTm9uZSxcbiAgICAgICAgICAgIHR5cGU6IFVpU2NyZWVuVHlwZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfRgtC40L8g0Y3QutGA0LDQvdCwINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC90LAg0YHRgtCw0YDRgtC1JyxcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9C/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YAg0Y3QutGA0LDQvdCwINC00LvRjyDQvtGC0YDQuNGB0L7QstC60LguINGH0LXQvCDQvdC40LbQtSDQvdC+0LzQtdGALCDRgtC10Lwg0LPQu9GD0LHQttC1INC+0L0g0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstCw0L0nLFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmF0ZU9uU3RhcnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9Cw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDQtNCw0L3QvdGL0Lkg0Y3QutGA0LDQvSDQv9GA0Lgg0YHRgtCw0YDRgtC1PycsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVPblNob3c6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW1VpU2NyZWVuVHlwZV0sXG4gICAgICAgICAgICB0b29sdGlwOiAn0LrQsNC60LjQtSDRjdC60YDQsNC90Ysg0YHQutGA0YvRgtGMINC/0YDQuCDQsNC60YLQuNCy0LDRhtC40Lgg0LTQsNC90L3QvtCz0L4g0Y3QutGA0LDQvdCwICjQvdC1INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQv9GA0Lgg0LDQutGC0LjQstCw0YbQuNC4INGN0LrRgNCw0L3QsCDQvdCwINGB0YLQsNGA0YLQtSknLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbi8vI2VuZHJlZ2lvblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcblxuICAgICAgICBzY3JlZW5TZXR0aW5nczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbU2NyZWVuU2hvd1NldHRpbmdzXSxcbiAgICAgICAgICAgIG5vdGlmeShvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZU9uU3RhcnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT09IFVpU2NyZWVuVHlwZS5Ob25lIHx8ICFhcnJheS5maW5kKChzZXQpID0+IHNldC50eXBlID09PSBlbC50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZS5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlT25TdGFydCA9IGFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiAn0L7Qv9GA0LXQtNC10LvRj9C10YIg0LrQsNC60LjQtSDRjdC60YDQsNC90Ysg0LTQvtC70LbQvdGLINCx0YvRgtGMINGB0L7Qt9C00LDQvdGLINC4INCw0LrRgtC40LLQuNGA0L7QstCw0L3RiyDQvdCwINGB0YLQsNGA0YLQtScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICAgICAgdGhpcy5zY3JlZW5TZXR0aW5nc1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU0NSRUVOLCBlbC50eXBlLCBlbC5hY3RpdmF0ZU9uU3RhcnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgdGhpcy5vblNob3dTY3JlZW4sIHRoaXMpO1xuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlcnNcbiAgICBvblNob3dTY3JlZW4oc2NyZWVuVHlwZSwgaXNPZmYgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zY3JlZW5TZXR0aW5ncy5maW5kKChzZXQpID0+IHNldC50eXBlID09PSBzY3JlZW5UeXBlKTtcbiAgICAgICAgaWYgKCFpc09mZikge1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVE9HR0xFX1NDUkVFTiwgc2NyZWVuVHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgICAgc2V0dGluZ3MuZGlzYWJsZU9uU2hvdy5mb3JFYWNoKChkaXNhYmxlU2NyZWVuVHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlRPR0dMRV9TQ1JFRU4sIGRpc2FibGVTY3JlZW5UeXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlRPR0dMRV9TQ1JFRU4sIHNjcmVlblR5cGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19