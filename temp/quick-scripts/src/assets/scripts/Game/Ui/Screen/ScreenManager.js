"use strict";
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