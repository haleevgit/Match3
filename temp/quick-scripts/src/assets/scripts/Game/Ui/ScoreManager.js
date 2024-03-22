"use strict";
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