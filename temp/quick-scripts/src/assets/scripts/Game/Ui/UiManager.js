"use strict";
cc._RF.push(module, '070a3zwyHlNto8VTnHNBhkX', 'UiManager');
// scripts/Game/Ui/UiManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

var _IScreen = _interopRequireDefault(require("IScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    PREVIEW: {
      "default": false,
      editorOnly: true,
      tooltip: 'показать все типы экранов и префабы к ним'
    },
    screenType: {
      "default": _UiScreenType["default"].None,
      type: _UiScreenType["default"],
      notify: function notify(old) {
        if (this.screenType !== _UiScreenType["default"].None) {
          if (this._convertScreenType.indexOf(this.screenType) === -1) {
            this._convertScreenType.push(this.screenType);

            this._prefabs.push(null);
          }

          this.prefab = this._prefabs[this._convertScreenType.indexOf(this.screenType)];

          var oldIndex = this._convertScreenType.indexOf(old);

          if (oldIndex > -1) {
            var oldPrefab = this._prefabs[oldIndex];

            if (oldPrefab === null) {
              this._prefabs.splice(oldIndex, 1);

              this._convertScreenType.splice(oldIndex, 1);
            }
          }
        }
      },
      serializable: false,
      tooltip: 'тип экрана для привязки префаба'
    },
    prefab: {
      "default": null,
      type: cc.Prefab,
      notify: function notify() {
        if (this.screenType !== _UiScreenType["default"].None && (this.prefab instanceof cc.Prefab || this.prefab === null)) {
          this._prefabs[this._convertScreenType.indexOf(this.screenType)] = this.prefab;
        }
      },
      visible: function visible() {
        return this.screenType !== _UiScreenType["default"].None;
      },
      serializable: false,
      tooltip: 'префаб для экрана'
    },
    convertScreenType: {
      get: function get() {
        return this._convertScreenType;
      },
      type: [_UiScreenType["default"]],
      visible: function visible() {
        return this.PREVIEW;
      }
    },
    prefabs: {
      get: function get() {
        return this._prefabs;
      },
      type: [cc.Prefab],
      visible: function visible() {
        return this.PREVIEW;
      }
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _screens: {
      "default": null,
      serializable: false
    },
    _prefabs: {
      "default": [],
      type: [cc.Prefab]
    },
    _convertScreenType: {
      "default": [],
      type: [_UiScreenType["default"]]
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._screens = {};

    for (var i = 0; i < this._convertScreenType.length; i++) {
      var type = this._convertScreenType[i];
      this._screens[type] = null;
    }

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
    cc.systemEvent[func](_GameEvent["default"].TOGGLE_SCREEN, this.onToggleScreen, this);
  },
  //#endregion
  //#region event handlers
  onToggleScreen: function onToggleScreen(screenType, isOn) {
    var screenIndex = this._convertScreenType.indexOf(screenType);

    var screen;

    if (screenIndex < 0 || !this._prefabs[screenIndex]) {
      return;
    }

    if (!this._screens[screenType]) {
      var prefab = this._prefabs[screenIndex];
      screen = cc.instantiate(prefab);
      screen.parent = this.node;
      this._screens[screenType] = screen;
    } else {
      screen = this._screens[screenType];
    }

    if (isOn && !screen.getComponent(_IScreen["default"]).activated) {
      screen.getComponent(_IScreen["default"]).show();
    } else if (!isOn && screen.getComponent(_IScreen["default"]).activated) {
      screen.getComponent(_IScreen["default"]).hide();
    }
  } //#endregion

});

cc._RF.pop();