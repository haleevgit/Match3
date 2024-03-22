
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/ScoreManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa94blfoFBIers1x8DxiGzj', 'ScoreManager');
// scripts/Game/Ui/ScoreManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

var _BombType = _interopRequireDefault(require("BombType"));

var _BlockColorType = _interopRequireDefault(require("../Enums/BlockColorType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    level: {
      "default": null,
      type: cc.Label
    },
    steps: {
      "default": null,
      type: cc.Label
    },
    localScores: {
      "default": null,
      type: cc.Label
    },
    totalScores: {
      "default": null,
      type: cc.Label
    },
    progress: {
      "default": null,
      type: cc.Node
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _level: {
      "default": 0,
      serializable: false
    },
    _steps: {
      "default": 20
    },
    _stepsFirstLevels: {
      "default": 10
    },
    _stepsNextLevels: {
      "default": 21
    },
    _numberForAvailableCreation: {
      "default": 10
    },
    _widthMultiplier: {
      "default": 1500
    },
    _scoresBorder: {
      "default": 18
    },
    _localScores: {
      "default": 40
    },
    _needingScores: {
      "default": 0,
      serializable: false
    },
    _totalScores: {
      "default": 0
    },
    _canCheckForScoresAbility: {
      "default": true
    },
    _isStopAdding: {
      "default": false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this._createNewLevel();

    this.totalScores.string = this._totalScores;
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
    cc.systemEvent[func](_GameEvent["default"].SCORE_GOT, this.onScoreGot, this);
    cc.systemEvent[func](_GameEvent["default"].PLAYER_MOVED, this.onPlayerMoved, this);
    cc.systemEvent[func](_GameEvent["default"].IS_SCORE_ENOUGH, this.onIsScoreEnough, this);
    cc.systemEvent[func](_GameEvent["default"].TOGGLE_SUPER_ABILITY, this.onToggleSuperAbility, this);
    cc.systemEvent[func](_GameEvent["default"].SHOW_SCREEN, this.onShowScreen, this);
  },
  _createNewLevel: function _createNewLevel() {
    this._level += 1;
    this._steps = this._stepsNextLevels - this._level;
    if (this._steps < this._stepsFirstLevels) this._steps = this._stepsFirstLevels;
    this._localScores = this._scoresBorder + Math.ceil(this._level * 2);
    this._needingScores = this._localScores;
    this.level.string = this._level;
    this.localScores.string = this._localScores;
    this.steps.string = this._steps;
    this.progress.width = 0;
  },
  _checkForScores: function _checkForScores(scores, comparedValue) {
    if (scores >= comparedValue) return true;
    return false;
  },
  //#endregion
  //#region event handlers
  onScoreGot: function onScoreGot(scores) {
    if (this._isStopAdding) return;
    this._localScores -= scores;
    this._totalScores += scores;
    this.totalScores.string = this._totalScores;
    if (this._checkForScores(this._totalScores, this._numberForAvailableCreation)) cc.systemEvent.emit(_GameEvent["default"].BOMB_IS_AVAILABLE, true);

    if (this._localScores < 1) {
      cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, true, true);

      this._createNewLevel();
    } else {
      this.localScores.string = this._localScores;
      pg.tweenManager.add(this.progress, {
        width: this._widthMultiplier * ((this._needingScores - this._localScores) / this._needingScores)
      }, 0.2);
    }
  },
  onPlayerMoved: function onPlayerMoved() {
    this._isStopAdding = false;
    this._steps -= 1;

    if (this._steps < 1) {
      cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, true, false);
    } else {
      this.steps.string = this._steps;
    }
  },
  onIsScoreEnough: function onIsScoreEnough(kindSuperAbility, score) {
    if (!this._canCheckForScoresAbility) return;
    var isAvailable = false;

    switch (kindSuperAbility) {
      case _BlockColorType["default"].Bomb:
        if (this._totalScores >= score) {
          isAvailable = true;
          this._totalScores -= score;
          if (!this._checkForScores(this._totalScores, score)) cc.systemEvent.emit(_GameEvent["default"].BOMB_IS_AVAILABLE, false);
        }

        break;

      case _BlockColorType["default"].Teleport:
        if (this._totalScores >= score) {
          isAvailable = true;
          this._totalScores -= score;
        }

        break;

      case _BombType["default"].Tnt:
        return;

        if (this._totalScores >= score) {
          isAvailable = true;
          this._totalScores -= score;
        }

        break;
    }

    if (isAvailable) {
      cc.systemEvent.emit(_GameEvent["default"].CREATE_SUPER_ABILITY, kindSuperAbility);
      this.totalScores.string = this._totalScores;
    }
  },
  onToggleSuperAbility: function onToggleSuperAbility(isOn) {
    this._canCheckForScoresAbility = isOn;
  },
  onShowScreen: function onShowScreen(typeScreen, isShow, isWin) {
    if (isWin === void 0) {
      isWin = true;
    }

    this._isStopAdding = true;
    if (isWin) return;
    this._level = 0;
    this._totalScores = 0;
    this.totalScores.string = this._totalScores;
    this._localScores = 0;

    this._createNewLevel();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvU2NvcmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGV2ZWwiLCJ0eXBlIiwiTGFiZWwiLCJzdGVwcyIsImxvY2FsU2NvcmVzIiwidG90YWxTY29yZXMiLCJwcm9ncmVzcyIsIk5vZGUiLCJfbGV2ZWwiLCJzZXJpYWxpemFibGUiLCJfc3RlcHMiLCJfc3RlcHNGaXJzdExldmVscyIsIl9zdGVwc05leHRMZXZlbHMiLCJfbnVtYmVyRm9yQXZhaWxhYmxlQ3JlYXRpb24iLCJfd2lkdGhNdWx0aXBsaWVyIiwiX3Njb3Jlc0JvcmRlciIsIl9sb2NhbFNjb3JlcyIsIl9uZWVkaW5nU2NvcmVzIiwiX3RvdGFsU2NvcmVzIiwiX2NhbkNoZWNrRm9yU2NvcmVzQWJpbGl0eSIsIl9pc1N0b3BBZGRpbmciLCJvbkVuYWJsZSIsIl9oYW5kbGVTdWJzY3JpcHRpb24iLCJfY3JlYXRlTmV3TGV2ZWwiLCJzdHJpbmciLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiU0NPUkVfR09UIiwib25TY29yZUdvdCIsIlBMQVlFUl9NT1ZFRCIsIm9uUGxheWVyTW92ZWQiLCJJU19TQ09SRV9FTk9VR0giLCJvbklzU2NvcmVFbm91Z2giLCJUT0dHTEVfU1VQRVJfQUJJTElUWSIsIm9uVG9nZ2xlU3VwZXJBYmlsaXR5IiwiU0hPV19TQ1JFRU4iLCJvblNob3dTY3JlZW4iLCJNYXRoIiwiY2VpbCIsIndpZHRoIiwiX2NoZWNrRm9yU2NvcmVzIiwic2NvcmVzIiwiY29tcGFyZWRWYWx1ZSIsImVtaXQiLCJCT01CX0lTX0FWQUlMQUJMRSIsIlVpU2NyZWVuVHlwZSIsIlJlc3VsdCIsInBnIiwidHdlZW5NYW5hZ2VyIiwiYWRkIiwia2luZFN1cGVyQWJpbGl0eSIsInNjb3JlIiwiaXNBdmFpbGFibGUiLCJCbG9ja0NvbG9yVHlwZSIsIkJvbWIiLCJUZWxlcG9ydCIsIkJvbWJUeXBlIiwiVG50IiwiQ1JFQVRFX1NVUEVSX0FCSUxJVFkiLCJ0eXBlU2NyZWVuIiwiaXNTaG93IiwiaXNXaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFKQTtBQUtBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLEtBQUssRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBRkM7SUFHUkMsS0FBSyxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FIQztJQUlSRSxXQUFXLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJILElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUpMO0lBS1JHLFdBQVcsRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkosSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBTEw7SUFNUkksUUFBUSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1c7SUFBMUIsQ0FORjtJQVFSO0lBRUE7SUFDQTtJQUVBO0lBQ0FDLE1BQU0sRUFBRTtNQUFFLFdBQVMsQ0FBWDtNQUFjQyxZQUFZLEVBQUU7SUFBNUIsQ0FkQTtJQWVSQyxNQUFNLEVBQUU7TUFBRSxXQUFTO0lBQVgsQ0FmQTtJQWdCUkMsaUJBQWlCLEVBQUU7TUFBRSxXQUFTO0lBQVgsQ0FoQlg7SUFpQlJDLGdCQUFnQixFQUFFO01BQUUsV0FBUztJQUFYLENBakJWO0lBa0JSQywyQkFBMkIsRUFBQztNQUFFLFdBQVM7SUFBWCxDQWxCcEI7SUFtQlJDLGdCQUFnQixFQUFDO01BQUUsV0FBUztJQUFYLENBbkJUO0lBb0JSQyxhQUFhLEVBQUU7TUFBRSxXQUFTO0lBQVgsQ0FwQlA7SUFxQlJD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Syx3QkErSVF1QixVQS9JUixFQStJb0JDLE1BL0lwQixFQStJNEJDLEtBL0k1QixFQStJMEM7SUFBQSxJQUFkQSxLQUFjO01BQWRBLEtBQWMsR0FBTixJQUFNO0lBQUE7O0lBQzNDLEtBQUs1QyxhQUFMLEdBQXFCLElBQXJCO0lBQ0EsSUFBSTRDLEtBQUosRUFBVztJQUNYLEtBQUt4RCxNQUFMLEdBQWMsQ0FBZDtJQUNBLEtBQUtVLFlBQUwsR0FBb0IsQ0FBcEI7SUFDQSxLQUFLYixXQUFMLENBQWlCbUIsTUFBakIsR0FBMEIsS0FBS04sWUFBL0I7SUFDQSxLQUFLRixZQUFMLEdBQW9CLENBQXBCOztJQUNBLEtBQUtPLGVBQUw7RUFDSCxDQXZKSSxDQXdKTDs7QUF4SkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuaW1wb3J0IEJvbWJUeXBlIGZyb20gJ0JvbWJUeXBlJztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICcuLi9FbnVtcy9CbG9ja0NvbG9yVHlwZSc7XG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIGxldmVsOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIHN0ZXBzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIGxvY2FsU2NvcmVzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIHRvdGFsU2NvcmVzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIHByb2dyZXNzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcblxuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHVibGljIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHJpdmF0ZSBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgX2xldmVsOiB7IGRlZmF1bHQ6IDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3N0ZXBzOiB7IGRlZmF1bHQ6IDIwIH0sXG4gICAgICAgIF9zdGVwc0ZpcnN0TGV2ZWxzOiB7IGRlZmF1bHQ6IDEwIH0sXG4gICAgICAgIF9zdGVwc05leHRMZXZlbHM6IHsgZGVmYXVsdDogMjEgfSxcbiAgICAgICAgX251bWJlckZvckF2YWlsYWJsZUNyZWF0aW9uOnsgZGVmYXVsdDogMTAgfSxcbiAgICAgICAgX3dpZHRoTXVsdGlwbGllcjp7IGRlZmF1bHQ6IDE1MDAgfSxcbiAgICAgICAgX3Njb3Jlc0JvcmRlcjogeyBkZWZhdWx0OiAxOCB9LFxuICAgICAgICBfbG9jYWxTY29yZXM6IHsgZGVmYXVsdDogNDAgfSxcbiAgICAgICAgX25lZWRpbmdTY29yZXM6IHsgZGVmYXVsdDogMCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfdG90YWxTY29yZXM6IHsgZGVmYXVsdDogMCB9LFxuICAgICAgICBfY2FuQ2hlY2tGb3JTY29yZXNBYmlsaXR5OiB7IGRlZmF1bHQ6IHRydWUgfSxcbiAgICAgICAgX2lzU3RvcEFkZGluZzogeyBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlTmV3TGV2ZWwoKTtcbiAgICAgICAgdGhpcy50b3RhbFNjb3Jlcy5zdHJpbmcgPSB0aGlzLl90b3RhbFNjb3JlcztcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuICAgIF9oYW5kbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuU0NPUkVfR09ULCB0aGlzLm9uU2NvcmVHb3QsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuUExBWUVSX01PVkVELCB0aGlzLm9uUGxheWVyTW92ZWQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuSVNfU0NPUkVfRU5PVUdILCB0aGlzLm9uSXNTY29yZUVub3VnaCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgdGhpcy5vblRvZ2dsZVN1cGVyQWJpbGl0eSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgdGhpcy5vblNob3dTY3JlZW4sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlTmV3TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuX2xldmVsICs9IDE7XG4gICAgICAgIHRoaXMuX3N0ZXBzID0gdGhpcy5fc3RlcHNOZXh0TGV2ZWxzIC0gdGhpcy5fbGV2ZWw7XG4gICAgICAgIGlmICh0aGlzLl9zdGVwcyA8IHRoaXMuX3N0ZXBzRmlyc3RMZXZlbHMpIHRoaXMuX3N0ZXBzID0gdGhpcy5fc3RlcHNGaXJzdExldmVscztcbiAgICAgICAgdGhpcy5fbG9jYWxTY29yZXMgPSB0aGlzLl9zY29yZXNCb3JkZXIgKyBNYXRoLmNlaWwodGhpcy5fbGV2ZWwgKiAyKTtcbiAgICAgICAgdGhpcy5fbmVlZGluZ1Njb3JlcyA9IHRoaXMuX2xvY2FsU2NvcmVzO1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IHRoaXMuX2xldmVsO1xuICAgICAgICB0aGlzLmxvY2FsU2NvcmVzLnN0cmluZyA9IHRoaXMuX2xvY2FsU2NvcmVzO1xuICAgICAgICB0aGlzLnN0ZXBzLnN0cmluZyA9IHRoaXMuX3N0ZXBzO1xuICAgICAgICB0aGlzLnByb2dyZXNzLndpZHRoID0gMDtcbiAgICB9LFxuXG4gICAgX2NoZWNrRm9yU2NvcmVzKHNjb3JlcywgY29tcGFyZWRWYWx1ZSkge1xuICAgICAgICBpZiAoc2NvcmVzID49IGNvbXBhcmVkVmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25TY29yZUdvdChzY29yZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU3RvcEFkZGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLl9sb2NhbFNjb3JlcyAtPSBzY29yZXM7XG4gICAgICAgIHRoaXMuX3RvdGFsU2NvcmVzICs9IHNjb3JlcztcbiAgICAgICAgdGhpcy50b3RhbFNjb3Jlcy5zdHJpbmcgPSB0aGlzLl90b3RhbFNjb3JlcztcblxuICAgICAgICBpZiAodGhpcy5fY2hlY2tGb3JTY29yZXModGhpcy5fdG90YWxTY29yZXMsIHRoaXMuX251bWJlckZvckF2YWlsYWJsZUNyZWF0aW9uKSkgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQk9NQl9JU19BVkFJTEFCTEUsIHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2NhbFNjb3JlcyA8IDEpIHtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNIT1dfU0NSRUVOLCBVaVNjcmVlblR5cGUuUmVzdWx0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5ld0xldmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU2NvcmVzLnN0cmluZyA9IHRoaXMuX2xvY2FsU2NvcmVzO1xuICAgICAgICAgICAgcGcudHdlZW5NYW5hZ2VyLmFkZCh0aGlzLnByb2dyZXNzLCB7IHdpZHRoOiB0aGlzLl93aWR0aE11bHRpcGxpZXIgKiAoKHRoaXMuX25lZWRpbmdTY29yZXMgLSB0aGlzLl9sb2NhbFNjb3JlcykgLyB0aGlzLl9uZWVkaW5nU2NvcmVzKSB9LCAwLjIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUGxheWVyTW92ZWQoKSB7XG4gICAgICAgIHRoaXMuX2lzU3RvcEFkZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdGVwcyAtPSAxO1xuICAgICAgICBpZiAodGhpcy5fc3RlcHMgPCAxKSB7XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgVWlTY3JlZW5UeXBlLlJlc3VsdCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGVwcy5zdHJpbmcgPSB0aGlzLl9zdGVwcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbklzU2NvcmVFbm91Z2goa2luZFN1cGVyQWJpbGl0eSwgc2NvcmUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5DaGVja0ZvclNjb3Jlc0FiaWxpdHkpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGtpbmRTdXBlckFiaWxpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuQm9tYjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG90YWxTY29yZXMgPj0gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b3RhbFNjb3JlcyAtPSBzY29yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja0ZvclNjb3Jlcyh0aGlzLl90b3RhbFNjb3Jlcywgc2NvcmUpKSBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5CT01CX0lTX0FWQUlMQUJMRSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuVGVsZXBvcnQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvdGFsU2NvcmVzID49IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG90YWxTY29yZXMgLT0gc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSBCb21iVHlwZS5UbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvdGFsU2NvcmVzID49IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG90YWxTY29yZXMgLT0gc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ1JFQVRFX1NVUEVSX0FCSUxJVFksIGtpbmRTdXBlckFiaWxpdHkpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFNjb3Jlcy5zdHJpbmcgPSB0aGlzLl90b3RhbFNjb3JlcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRvZ2dsZVN1cGVyQWJpbGl0eShpc09uKSB7XG4gICAgICAgIHRoaXMuX2NhbkNoZWNrRm9yU2NvcmVzQWJpbGl0eSA9IGlzT247XG4gICAgfSxcblxuICAgIG9uU2hvd1NjcmVlbih0eXBlU2NyZWVuLCBpc1Nob3csIGlzV2luID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9pc1N0b3BBZGRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoaXNXaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlcyA9IDA7XG4gICAgICAgIHRoaXMudG90YWxTY29yZXMuc3RyaW5nID0gdGhpcy5fdG90YWxTY29yZXM7XG4gICAgICAgIHRoaXMuX2xvY2FsU2NvcmVzID0gMDtcbiAgICAgICAgdGhpcy5fY3JlYXRlTmV3TGV2ZWwoKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxufSk7XG4iXX0=