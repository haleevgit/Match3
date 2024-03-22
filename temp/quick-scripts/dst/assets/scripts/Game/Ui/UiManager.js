
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/UiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvVWlNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUFJFVklFVyIsImVkaXRvck9ubHkiLCJ0b29sdGlwIiwic2NyZWVuVHlwZSIsIlVpU2NyZWVuVHlwZSIsIk5vbmUiLCJ0eXBlIiwibm90aWZ5Iiwib2xkIiwiX2NvbnZlcnRTY3JlZW5UeXBlIiwiaW5kZXhPZiIsInB1c2giLCJfcHJlZmFicyIsInByZWZhYiIsIm9sZEluZGV4Iiwib2xkUHJlZmFiIiwic3BsaWNlIiwic2VyaWFsaXphYmxlIiwiUHJlZmFiIiwidmlzaWJsZSIsImNvbnZlcnRTY3JlZW5UeXBlIiwiZ2V0IiwicHJlZmFicyIsIl9zY3JlZW5zIiwib25FbmFibGUiLCJpIiwibGVuZ3RoIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsIm9uRGlzYWJsZSIsImlzT24iLCJmdW5jIiwic3lzdGVtRXZlbnQiLCJHYW1lRXZlbnQiLCJUT0dHTEVfU0NSRUVOIiwib25Ub2dnbGVTY3JlZW4iLCJzY3JlZW5JbmRleCIsInNjcmVlbiIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsImdldENvbXBvbmVudCIsIklTY3JlZW4iLCJhY3RpdmF0ZWQiLCJzaG93IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxLQURKO01BRUxDLFVBQVUsRUFBRSxJQUZQO01BR0xDLE9BQU8sRUFBRTtJQUhKLENBRkQ7SUFRUkMsVUFBVSxFQUFFO01BQ1IsV0FBU0Msd0JBQUEsQ0FBYUMsSUFEZDtNQUVSQyxJQUFJLEVBQUVGLHdCQUZFO01BR1JHLE1BSFEsa0JB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QjtNQUVBLEtBQUtoQixRQUFMLENBQWNwQixVQUFkLElBQTRCaUMsTUFBNUI7SUFDSCxDQU5ELE1BTU87TUFDSEEsTUFBTSxHQUFHLEtBQUtiLFFBQUwsQ0FBY3BCLFVBQWQsQ0FBVDtJQUNIOztJQUVELElBQUkwQixJQUFJLElBQUksQ0FBQ08sTUFBTSxDQUFDSSxZQUFQLENBQW9CQyxtQkFBcEIsRUFBNkJDLFNBQTFDLEVBQXFEO01BQ2pETixNQUFNLENBQUNJLFlBQVAsQ0FBb0JDLG1CQUFwQixFQUE2QkUsSUFBN0I7SUFDSCxDQUZELE1BRU8sSUFBSSxDQUFDZCxJQUFELElBQVNPLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQkMsbUJBQXBCLEVBQTZCQyxTQUExQyxFQUFxRDtNQUN4RE4sTUFBTSxDQUFDSSxZQUFQLENBQW9CQyxtQkFBcEIsRUFBNkJHLElBQTdCO0lBQ0g7RUFDSixDQXhJSSxDQXlJTDs7QUF6SUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuaW1wb3J0IElTY3JlZW4gZnJvbSAnSVNjcmVlbic7XG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIFBSRVZJRVc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgZWRpdG9yT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfQv9C+0LrQsNC30LDRgtGMINCy0YHQtSDRgtC40L/RiyDRjdC60YDQsNC90L7QsiDQuCDQv9GA0LXRhNCw0LHRiyDQuiDQvdC40LwnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNjcmVlblR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFVpU2NyZWVuVHlwZS5Ob25lLFxuICAgICAgICAgICAgdHlwZTogVWlTY3JlZW5UeXBlLFxuICAgICAgICAgICAgbm90aWZ5KG9sZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcmVlblR5cGUgIT09IFVpU2NyZWVuVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb252ZXJ0U2NyZWVuVHlwZS5pbmRleE9mKHRoaXMuc2NyZWVuVHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb252ZXJ0U2NyZWVuVHlwZS5wdXNoKHRoaXMuc2NyZWVuVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZhYiA9IHRoaXMuX3ByZWZhYnNbdGhpcy5fY29udmVydFNjcmVlblR5cGUuaW5kZXhPZih0aGlzLnNjcmVlblR5cGUpXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlLmluZGV4T2Yob2xkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkUHJlZmFiID0gdGhpcy5fcHJlZmFic1tvbGRJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQcmVmYWIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzLnNwbGljZShvbGRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udmVydFNjcmVlblR5cGUuc3BsaWNlKG9sZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9GC0LjQvyDRjdC60YDQsNC90LAg0LTQu9GPINC/0YDQuNCy0Y/Qt9C60Lgg0L/RgNC10YTQsNCx0LAnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIG5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JlZW5UeXBlICE9PSBVaVNjcmVlblR5cGUuTm9uZSAmJiAodGhpcy5wcmVmYWIgaW5zdGFuY2VvZiBjYy5QcmVmYWIgfHwgdGhpcy5wcmVmYWIgPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNbdGhpcy5fY29udmVydFNjcmVlblR5cGUuaW5kZXhPZih0aGlzLnNjcmVlblR5cGUpXSA9IHRoaXMucHJlZmFiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcmVlblR5cGUgIT09IFVpU2NyZWVuVHlwZS5Ob25lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiAn0L/RgNC10YTQsNCxINC00LvRjyDRjdC60YDQsNC90LAnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnZlcnRTY3JlZW5UeXBlOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IFtVaVNjcmVlblR5cGVdLFxuICAgICAgICAgICAgdmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QUkVWSUVXO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBwcmVmYWJzOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZhYnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogW2NjLlByZWZhYl0sXG4gICAgICAgICAgICB2aXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBSRVZJRVc7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHVibGljIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHJpdmF0ZSBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgX3NjcmVlbnM6IHsgZGVmYXVsdDogbnVsbCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfcHJlZmFiczogeyBkZWZhdWx0OiBbXSwgdHlwZTogW2NjLlByZWZhYl0gfSxcbiAgICAgICAgX2NvbnZlcnRTY3JlZW5UeXBlOiB7IGRlZmF1bHQ6IFtdLCB0eXBlOiBbVWlTY3JlZW5UeXBlXSB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3NjcmVlbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb252ZXJ0U2NyZWVuVHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlW2ldO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuc1t0eXBlXSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5UT0dHTEVfU0NSRUVOLCB0aGlzLm9uVG9nZ2xlU2NyZWVuLCB0aGlzKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25Ub2dnbGVTY3JlZW4oc2NyZWVuVHlwZSwgaXNPbikge1xuICAgICAgICBjb25zdCBzY3JlZW5JbmRleCA9IHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlLmluZGV4T2Yoc2NyZWVuVHlwZSk7XG4gICAgICAgIGxldCBzY3JlZW47XG5cbiAgICAgICAgaWYgKHNjcmVlbkluZGV4IDwgMCB8fCAhdGhpcy5fcHJlZmFic1tzY3JlZW5JbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fc2NyZWVuc1tzY3JlZW5UeXBlXSkge1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiID0gdGhpcy5fcHJlZmFic1tzY3JlZW5JbmRleF07XG4gICAgICAgICAgICBzY3JlZW4gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgc2NyZWVuLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuc1tzY3JlZW5UeXBlXSA9IHNjcmVlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcmVlbiA9IHRoaXMuX3NjcmVlbnNbc2NyZWVuVHlwZV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbiAmJiAhc2NyZWVuLmdldENvbXBvbmVudChJU2NyZWVuKS5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHNjcmVlbi5nZXRDb21wb25lbnQoSVNjcmVlbikuc2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc09uICYmIHNjcmVlbi5nZXRDb21wb25lbnQoSVNjcmVlbikuYWN0aXZhdGVkKSB7XG4gICAgICAgICAgICBzY3JlZW4uZ2V0Q29tcG9uZW50KElTY3JlZW4pLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==