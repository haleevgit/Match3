
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/GameLogicManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c089PGYllClJS4rqeWu/cL', 'GameLogicManager');
// scripts/Game/Logic/GameLogicManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

var _EffectType = _interopRequireDefault(require("EffectType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    numeralToDestroy: {
      "default": 3
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _field: {
      "default": null,
      type: cc.Node,
      serializable: false
    },
    _numeralStrings: {
      "default": 7,
      serializable: false
    },
    _numeralColumns: {
      "default": 10,
      serializable: false
    },
    _widthColumn: {
      "default": 155,
      serializable: false
    },
    _widthOffset: {
      "default": 697,
      serializable: false
    },
    _highColumn: {
      "default": 233,
      serializable: false
    },
    _highOffset: {
      "default": 700,
      serializable: false
    },
    _numberColors: {
      "default": 5,
      serializable: false
    },
    _blocksArray: {
      "default": [],
      serializable: false
    },
    _tempCoalitionArray: {
      "default": [],
      serializable: false
    },
    _numeralToDestroy: {
      "default": 3,
      serializable: false
    },
    _numeralFallBlocks: {
      "default": 0,
      serializable: false
    },
    _stopSuperAbility: {
      "default": false,
      serializable: false
    },
    _isScoreEnoughForBomb: {
      "default": false,
      serializable: false
    },
    _isScoreEnoughForTeleport: {
      "default": false,
      serializable: false
    },
    _amountBlocksForEraserAppearing: {
      "default": 5,
      serializable: false
    },
    _isFieldOn: {
      "default": false,
      serializable: false
    },
    _isTeleportMode: {
      "default": false,
      serializable: false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this._numeralToDestroy = this.numeralToDestroy;
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].FIELD_ON, this.onFieldOn, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_CHOSEN, this.onBlockChosen, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_FALL, this.onBlockFall, this);
    cc.systemEvent[func](_GameEvent["default"].CREATE_SUPER_ABILITY, this.onCreateSuperAbility, this);
    cc.systemEvent[func](_GameEvent["default"].BOMB_IS_AVAILABLE, this.onBombIsAvailable, this);
    cc.systemEvent[func](_GameEvent["default"].TELEPORT_IS_AVAILABLE, this.onTeleportIsAvailable, this);
    cc.systemEvent[func](_GameEvent["default"].FEATURE_RESULT, this.onFeatureResult, this);
    cc.systemEvent[func](_GameEvent["default"].TELEPORTATION_COMPLETE, this.onTeleportationComplete, this);
    cc.systemEvent[func](_GameEvent["default"].START_TELEPORTATION, this.onStartTeleportation, this);
  },
  _createBlockArray: function _createBlockArray() {
    this._blocksArray = [];
    var id = 1;

    for (var i = 0; i < this._numeralColumns; i += 1) {
      for (var j = 0; j < this._numeralStrings; j += 1) {
        var position = this._setLocation(j, i);

        if (!this._blocksArray[j]) this._blocksArray[j] = [];
        this._blocksArray[j][i] = this._createBlock(position);
        this._blocksArray[j][i].id = id;
        this._blocksArray[j][i].iI = j;
        this._blocksArray[j][i].iJ = i;
        id += 1;
      }
    }
  },
  _createBlock: function _createBlock(position) {
    var newBlock = cc.instantiate(this._block);
    newBlock.kind = this._chooseColor();
    newBlock.setParent(this._field);
    newBlock.setPosition(position);
    newBlock.active = true;
    newBlock.coalition = 0;
    newBlock.transferred = 0;
    return newBlock;
  },
  _setLocation: function _setLocation(y, x) {
    return cc.v2(x * this._widthColumn - this._widthOffset, y * this._highColumn - this._highOffset);
  },
  _chooseColor: function _chooseColor() {
    return Math.ceil(Math.random() * this._numberColors) - 1;
  },
  _findCoalition: function _findCoalition(block, kind, coalition) {
    if (block && block.iI < 0 || block.iI > this._numeralStrings - 1 || block.iJ < 0 || block.iJ > this._numeralColumns - 1) {
      return;
    }

    if (block.coalition !== 0 || block.kind !== kind) {
      return;
    }

    block.coalition = coalition;

    this._tempCoalitionArray.push(block);

    if (this._blocksArray[block.iI - 1] && this._blocksArray[block.iI - 1][block.iJ]) this._findCoalition(this._blocksArray[block.iI - 1][block.iJ], kind, coalition);
    if (this._blocksArray[block.iI + 1] && this._blocksArray[block.iI + 1][block.iJ]) this._findCoalition(this._blocksArray[block.iI + 1][block.iJ], kind, coalition);
    if (this._blocksArray[block.iI] && this._blocksArray[block.iI][block.iJ - 1]) this._findCoalition(this._blocksArray[block.iI][block.iJ - 1], kind, coalition);
    if (this._blocksArray[block.iI] && this._blocksArray[block.iI][block.iJ + 1]) this._findCoalition(this._blocksArray[block.iI][block.iJ + 1], kind, coalition);
  },
  _checkOnShuffle: function _checkOnShuffle() {
    this._numeralCoalition = 1;
    this._tempCoalitionArray = [];

    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns - 1; j += 1) {
        this._findCoalition(this._blocksArray[i][j], this._blocksArray[i][j].kind, this._numeralCoalition);

        if (this._tempCoalitionArray.length >= this._numeralToDestroy) this._numeralCoalition += 1;
        this._tempCoalitionArray = [];
        if (this._numeralCoalition > 1) return true;
      }
    }

    return false;
  },
  _checkClickedBlock: function _checkClickedBlock(block, kindSuperAbility) {
    if (kindSuperAbility === void 0) {
      kindSuperAbility = 0;
    }

    this._resetCoalition();

    this._tempCoalitionArray = [];

    switch (kindSuperAbility) {
      case _BlockColorType["default"].Bomb:
        cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, true);
        this._stopSuperAbility = false;
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_BOMB_DONE, block.id);
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_BOMB_CHOSEN, [block.iI, block.iJ], this._numeralColumns, this._numeralStrings);
        break;

      case _BlockColorType["default"].ColumnEraser:
        cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, true);
        this._stopSuperAbility = false;
        cc.systemEvent.emit(_GameEvent["default"].COLUMN_ERASER_DONE, block.id);
        cc.systemEvent.emit(_GameEvent["default"].ACTIVATE_COLUMN_ERASER, [block.iI, block.iJ], this._numeralColumns, this._numeralStrings);
        break;

      default:
        this._findCoalition(block, block.kind, 1);

        if (this._tempCoalitionArray.length < this._numeralToDestroy) {
          this._resetCoalition();

          cc.systemEvent.emit(_GameEvent["default"].BLOCK_CAN_BE_CHOSEN);
          return;
        }

        if (this._tempCoalitionArray.length > this._amountBlocksForEraserAppearing - 1) {
          this.onCreateSuperAbility(_BlockColorType["default"].ColumnEraser, cc.v2(block.iI, block.iJ));
        }

        this._finalChecking();

        break;
    }
  },
  _transferBlocksUp: function _transferBlocksUp() {
    var _this = this;

    var _columnsArray = [];

    for (var i = 0; i < this._numeralColumns; i++) {
      _columnsArray.push(0);
    }

    this._numeralFallBlocks = this._tempCoalitionArray.length;
    cc.systemEvent.emit(_GameEvent["default"].SCORE_GOT, this._numeralFallBlocks);

    this._tempCoalitionArray.forEach(function (element) {
      cc.systemEvent.emit(_GameEvent["default"].SPAWN_EFFECT, element.convertToWorldSpaceAR(cc.v2(0, 0)));
      element.opacity = 0;
      var newI = _this._numeralStrings + _columnsArray[element.iJ];
      cc.systemEvent.emit(_GameEvent["default"].CAMERA_START_SHAKE);

      _this.scheduleOnce(function () {
        cc.systemEvent.emit(_GameEvent["default"].CAMERA_STOP_SHAKE);
      }, 0.2);

      element.y = _this._setLocation(newI, element.iJ).y;
      _columnsArray[element.iJ] += 1;
      element.kind = _this._chooseColor();
      cc.systemEvent.emit(_GameEvent["default"].CHOOSE_COLOR_BLOCK, element.id, element.kind);
      if (!_this._blocksArray[newI]) _this._blocksArray[newI] = [];
      _this._blocksArray[newI][element.iJ] = element;
      _this._blocksArray[element.iI][element.iJ] = null;

      for (var _i = element.iI; _i < _this._numeralStrings + _columnsArray[element.iJ]; _i += 1) {
        if (_this._blocksArray[_i][element.iJ]) {
          _this._blocksArray[_i][element.iJ].transferred += 1;
        }
      }

      element.transferred = newI - _this._numeralStrings;
      element.transferred++;
      element.iI = newI;
    });
  },
  _regularizeTransferredBlocks: function _regularizeTransferredBlocks() {
    var lengthBlockArray = this._blocksArray.length;

    for (var i = this._numeralStrings; i < lengthBlockArray; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        if (this._blocksArray[i] && this._blocksArray[i][j]) {
          for (var k = 0; k < lengthBlockArray; k += 1) {
            if (this._blocksArray[k] && this._blocksArray[k][j] && this._blocksArray[k][j].transferred > 0) {
              this._blocksArray[k - this._blocksArray[k][j].transferred][j] = this._blocksArray[k][j];
              this._blocksArray[k - this._blocksArray[k][j].transferred][j].iI = k - this._blocksArray[k][j].transferred;
              this._blocksArray[k - this._blocksArray[k][j].transferred][j].transferred = 0;
              this._blocksArray[k - this._blocksArray[k][j].transferred][j].coalition = 0;
            }
          }
        }
      }
    }

    this._lastFallingBlock = lengthBlockArray - this._numeralStrings;

    this._blocksArray.splice(this._numeralStrings, lengthBlockArray - this._numeralStrings);

    for (var _i2 = 0; _i2 < this._numeralStrings; _i2 += 1) {
      for (var _j = 0; _j < this._numeralColumns; _j += 1) {
        this._blocksArray[_i2][_j].removeFromParent();

        this._field.addChild(this._blocksArray[_i2][_j]);
      }
    }

    if (!this._checkOnShuffle() && !this._isScoreEnoughForBomb) {
      this._createBlockArray();

      if (!this._checkOnShuffle()) {
        cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, true, false);

        while (!this._checkOnShuffle()) {
          this._createBlockArray();
        }
      }
    }
  },
  _resetCoalition: function _resetCoalition() {
    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        this._blocksArray[i][j].coalition = 0;
      }
    }
  },
  _finalChecking: function _finalChecking() {
    cc.systemEvent.emit(_GameEvent["default"].PLAYER_MOVED);

    this._transferBlocksUp();

    cc.systemEvent.emit(_GameEvent["default"].TIME_TO_FALL);

    this._regularizeTransferredBlocks();

    this._resetCoalition();
  },
  _findIndexes: function _findIndexes(blockId) {
    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        if (this._blocksArray[i][j].id === blockId) return cc.v2(i, j);
      }
    }
  },
  _findID: function _findID(coords) {
    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        if (this._blocksArray[i][j].iI === coords.x && this._blocksArray[i][j].iJ === coords.y) return this._blocksArray[i][j].id;
      }
    }
  },
  _useAbilityTnt: function _useAbilityTnt(block) {
    this._createBlockArray();

    cc.systemEvent.emit(_GameEvent["default"].SCORE_GOT, this._numeralColumns * this._numeralStrings);
  },
  //#endregion
  //#region event handlers
  onCreateSuperAbility: function onCreateSuperAbility(kindAbility, coords) {
    var _this2 = this;

    if (coords === void 0) {
      coords = cc.v2(-1, -1);
    }

    if (this._stopSuperAbility) return;
    cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, false);
    this._stopSuperAbility = true;

    if (kindAbility === _BlockColorType["default"].Teleport) {
      this.onTeleportIsAvailable(true);
      cc.systemEvent.emit(_GameEvent["default"].TELEPORT_STARTED);
      return;
    }

    this.scheduleOnce(function () {
      var newID;

      if (coords.x < 0) {
        newID = Math.ceil(Math.random() * (_this2._numeralStrings * _this2._numeralColumns - 1));
      } else {
        newID = _this2._findID(coords);
      }

      cc.systemEvent.emit(_GameEvent["default"].CREATE_SUPER_BLOCK, newID, kindAbility);
    }, 0.1);
  },
  onFieldOn: function onFieldOn(field, block) {
    this._isFieldOn = true;
    this._field = field;
    this._block = block;

    if (this._field && this._block) {
      this._createBlockArray();
    }

    while (!this._checkOnShuffle()) {
      this._createBlockArray();
    }
  },
  onBlockChosen: function onBlockChosen(block) {
    if (this._isTeleportMode) {
      cc.systemEvent.emit(_GameEvent["default"].TELEPORTED_BLOCK_CHOSEN, block);
      return;
    }

    cc.systemEvent.emit(_GameEvent["default"].STOP_INPUT);
    var kindSuperAbility = 0;

    if (block.kind === _BlockColorType["default"].Bomb || block.kind === _BlockColorType["default"].ColumnEraser) {
      kindSuperAbility = block.kind;
    }

    this._checkClickedBlock(block, kindSuperAbility);
  },
  onBlockFall: function onBlockFall(transferred) {
    if (transferred === this._lastFallingBlock) {
      this.scheduleOnce(function () {
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_CAN_BE_CHOSEN);
      }, 0.35);
    }
  },
  onBombIsAvailable: function onBombIsAvailable(isAvailable) {
    this._isScoreEnoughForBomb = isAvailable;
  },
  onTeleportIsAvailable: function onTeleportIsAvailable(isAvailable) {
    this._isScoreEnoughForTeleport = isAvailable;
    this._isTeleportMode = true;
  },
  onFeatureResult: function onFeatureResult(numbersArray) {
    var _this3 = this;

    numbersArray.forEach(function (element) {
      _this3._tempCoalitionArray.push(_this3._blocksArray[element[1]][element[0]]);
    });

    this._finalChecking();
  },
  onTeleportationComplete: function onTeleportationComplete() {
    this._stopSuperAbility = false;
    cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, true);

    this._regularizeTransferredBlocks();
  },
  onStartTeleportation: function onStartTeleportation(first, second) {
    this._isTeleportMode = false;
    this._blocksArray[first.iI][first.iJ] = second;
    this._blocksArray[second.iI][second.iJ] = first;
    var _ref = [second.iI, first.iI];
    first.iI = _ref[0];
    second.iI = _ref[1];
    var _ref2 = [second.iJ, first.iJ];
    first.iJ = _ref2[0];
    second.iJ = _ref2[1];

    this._resetCoalition();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvR2FtZUxvZ2ljTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm51bWVyYWxUb0Rlc3Ryb3kiLCJfZmllbGQiLCJ0eXBlIiwiTm9kZSIsInNlcmlhbGl6YWJsZSIsIl9udW1lcmFsU3RyaW5ncyIsIl9udW1lcmFsQ29sdW1ucyIsIl93aWR0aENvbHVtbiIsIl93aWR0aE9mZnNldCIsIl9oaWdoQ29sdW1uIiwiX2hpZ2hPZmZzZXQiLCJfbnVtYmVyQ29sb3JzIiwiX2Jsb2Nrc0FycmF5IiwiX3RlbXBDb2FsaXRpb25BcnJheSIsIl9udW1lcmFsVG9EZXN0cm95IiwiX251bWVyYWxGYWxsQmxvY2tzIiwiX3N0b3BTdXBlckFiaWxpdHkiLCJfaXNTY29yZUVub3VnaEZvckJvbWIiLCJfaXNTY29yZUVub3VnaEZvclRlbGVwb3J0IiwiX2Ftb3VudEJsb2Nrc0ZvckVyYXNlckFwcGVhcmluZyIsIl9pc0ZpZWxkT24iLCJfaXNUZWxlcG9ydE1vZGUiLCJvbkVuYWJsZSIsIl9oYW5kbGVTdWJzY3JpcHRpb24iLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiRklFTERfT04iLCJvbkZpZWxkT24iLCJCTE9DS19DSE9TRU4iLCJvbkJsb2NrQ2hvc2VuIiwiQkxPQ0tfRkFMTCIsIm9uQmxvY2tGYWxsIiwiQ1JFQVRFX1NVUEVSX0FCSUxJVFkiLCJvbkNyZWF0ZVN1cGVyQWJpbGl0eSIsIkJPTUJfSVNfQVZBSUxBQkxFIiwib25Cb21iSXNBdmFpbGFibGUiLCJURUxFUE9SVF9JU19BVkFJTEFCTEUiLCJvblRlbGVwb3J0SXNBdmFpbGFibGUiLCJGRUFUVVJFX1JFU1VMVCIsIm9uRmVhdHVyZVJlc3VsdCIsIlRFTEVQT1JUQVRJT05fQ09NUExFVEUiLCJvblRlbGVwb3J0YXRpb25Db21wbGV0ZSIsIlNUQVJUX1RFTEVQT1JUQVRJT04iLCJvblN0YXJ0VGVsZXBvcnRhdGlvbiIsIl9jcmVhdGVCbG9ja0FycmF5IiwiaWQiLCJpIiwiaiIsInBvc2l0aW9uIiwiX3NldExvY2F0aW9uIiwiX2NyZWF0ZUJsb2NrIiwiaUkiLCJpSiIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJfYmxvY2siLCJraW5kIiwiX2Nob29zZUNvbG9yIiwic2V0UGFyZW50Iiwic2V0UG9zaXRpb24iLCJhY3RpdmUiLCJjb2FsaXRpb24iLCJ0cmFuc2ZlcnJlZCIsInkiLCJ4IiwidjIiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIl9maW5kQ29hbGl0aW9uIiwiYmxvY2siLCJwdXNoIiwiX2NoZWNrT25TaHVmZmxlIiwiX251bWVyYWxDb2FsaXRpb24iLCJsZW5ndGgiLCJfY2hlY2tDbGlja2VkQmxvY2siLCJraW5kU3VwZXJBYmlsaXR5IiwiX3Jlc2V0Q29hbGl0aW9uIiwiQmxvY2tDb2xvclR5cGUiLCJCb21iIiwiZW1pdCIsIlRPR0dMRV9TVVBFUl9BQklMSVRZIiwiQkxPQ0tfQk9NQl9ET05FIiwiQkxPQ0tfQk9NQl9DSE9TRU4iLCJDb2x1bW5FcmFzZXIiLCJDT0xVTU5fRVJBU0VSX0RPTkUiLCJBQ1RJVkFURV9DT0xVTU5fRVJBU0VSIiwiQkxPQ0tfQ0FOX0JFX0NIT1NFTiIsIl9maW5hbENoZWNraW5nIiwiX3RyYW5zZmVyQmxvY2tzVXAiLCJfY29sdW1uc0FycmF5IiwiU0NPUkVfR09UIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJTUEFXTl9FRkZFQ1QiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJvcGFjaXR5IiwibmV3SSIsIkNBTUVSQV9TVEFSVF9TSEFLRSIsInNjaGVkdWxlT25jZSIsIkNBTUVSQV9TVE9QX1NIQUtFIiwiQ0hPT1NFX0NPTE9SX0JMT0NLIiwiX3JlZ3VsYXJpemVUcmFuc2ZlcnJlZEJsb2NrcyIsImxlbmd0aEJsb2NrQXJyYXkiLCJrIiwiX2xhc3RGYWxsaW5nQmxvY2siLCJzcGxpY2UiLCJyZW1vdmVGcm9tUGFyZW50IiwiYWRkQ2hpbGQiLCJTSE9XX1NDUkVFTiIsIlVpU2NyZWVuVHlwZSIsIlJlc3VsdCIsIlBMQVlFUl9NT1ZFRCIsIlRJTUVfVE9fRkFMTCIsIl9maW5kSW5kZXhlcyIsImJsb2NrSWQiLCJfZmluZElEIiwiY29vcmRzIiwiX3VzZUFiaWxpdHlUbnQiLCJraW5kQWJpbGl0eSIsIlRlbGVwb3J0IiwiVEVMRVBPUlRfU1RBUlRFRCIsIm5ld0lEIiwiQ1JFQVRFX1NVUEVSX0JMT0NLIiwiZmllbGQiLCJURUxFUE9SVEVEX0JMT0NLX0NIT1NFTiIsIlNUT1BfSU5QVVQiLCJpc0F2YWlsYWJsZSIsIm51bWJlcnNBcnJheSIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBSkE7QUFNQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxnQkFBZ0IsRUFBRTtNQUFFLFdBQVM7SUFBWCxDQUZWO0lBR1I7SUFFQTtJQUNBO0lBRUE7SUFDQUMsTUFBTSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCQyxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sSUFBMUI7TUFBZ0NDLFlBQVksRUFBRTtJQUE5QyxDQVRBO0lBVVJDLGVBQWUsRUFBRTtNQUFFLFdBQVMsQ0FBWDtNQUFjRCxZQUFZLEVBQUU7SUFBNUIsQ0FWVDtJQVdSRSxlQUFlLEVBQUU7TUFBRSxXQUFTLEVBQVg7TUFBZUYsWUFBWSxFQUFFO0lBQTdCLENBWFQ7SUFZUkcsWUFBWSxFQUFFO01BQUUsV0FBUyxHQUFYO01BQWdCSCxZQUFZLEVBQUU7SUFBOUIsQ0FaTjtJQWFSSSxZQUFZLEVBQUU7TUFBRSxXQUFTLEdBQVg7TUFBZ0JKLFlBQVksRUFBRTtJQUE5QixDQWJOO0lBY1JLLFdBQVcsRUFBRTtNQUFFLFdBQVMsR0FBWDtNQUFnQkwsWUFBWSxFQUFFO0lBQTlCLENBZEw7SUFlUk0sV0FBVyxFQUFFO01BQUUsV0FBUyxHQUFYO01BQWdCTixZQUFZLEVBQUU7SUFBOUIsQ0FmTDtJQWdCUk8sYUFBYSxFQUFFO01BQUUsV0FBUyxDQUFYO01BQWNQLFlBQVksRUFBRTtJQUE1QixDQWhCUDtJQWlCUlEsWUFBWSxFQUFFO01BQUUsV0FBUyxFQUFYO01BQWVSLFlBQVksRUFBRTtJQUE3QixDQWpCTjtJQWtCUlMsbUJBQW1CLEVBQUU7TUFBRSxXQUFTLEVBQVg7TUFBZVQsWUFBWSxFQUFFO0lBQTdCLENBbEJiO0lBbUJSVSxpQkFBaUIsRUFBRTtNQUFFLFdBQVMsQ0FBWDtNQUFjVixZQUFZLEVBQUU7SUFBNUIsQ0FuQlg7SUFvQlJXLGtCQUFrQixFQUFFO01BQUUsV0FBUyxDQUFYO01BQWNYLFlBQVksRUFBRTtJQUE1QixDQXBCWjtJQXFCUlksaUJBQWlCLEVBQUU7TUFBRSxXQUFTLEtBQVg7TUFBa0JaLFlBQVksRUFBRTtJQUFoQyxDQXJCWDtJQXNCUmEscUJBQXFCLEVBQUU7TUFBRSxXQUFTLEtBQVg7TUFBa0JiLFlBQVksRUFBRTtJQUFoQyxDQXRCZjtJQXVCUmMseUJBQXlCLEVBQUU7TUFBRSxXQUFTLEtBQVg7TUFBa0JkLFlBQVksRUFBRTtJQUFoQyxDQXZCbkI7SUF3QlJlLCtCQUErQixFQUFFO01BQUUsV0FBUyxDQUFYO01BQWNmLFlBQVksRUFBRTtJQUE1QixDQXhCekI7SUF5QlJnQixVQUFVLEVBQUU7TUFBRSxXQUFTLEtBQVg7TUFBa0JoQixZQUFZLEVBQUU7SUFBaEMsQ0F6Qko7SUEwQlJpQixlQUFlLEVBQUU7TUFBRSxXQUFTLEtBQVg7TUFBa0JqQixZQUFZLEVBQUU7SUFBaEMsQ0ExQlQsQ0E2QlI7O0VBN0JRLENBSFA7RUFtQ0w7RUFDQWtCLFFBcENLLHNCQW9DTTtJQUNQLEtBQUtDLG1CQUFMLENBQXlCLElBQXpCOztJQUNBLEtBQUtULGlCQUFMLEdBQXlCLEtBQUtkLGdCQUE5QjtFQUNILENBdkNJO0VBeUNMd0IsU0F6Q0ssdUJBeUNPO0lBQ1IsS0FBS0QsbUJBQUwsQ0FBeUIsS0FBekI7RUFDSCxDQTNDSTtFQTZDTDtFQUVBO0VBQ0FBLG1CQWhESywrQkFnRGVFLElBaERmLEVBZ0RxQjtJQUN0QixJQUFNQyxJQUFJLEdBQUdELElBQUksR0FBRyxJQUFILEdBQVUsS0FBM0I7SUFFQTdCLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVUMsUUFBL0IsRUFBeUMsS0FBS0MsU0FBOUMsRUFBeUQsSUFBekQ7SUFDQWxDLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVUcsWUFBL0IsRUFBNkMsS0FBS0MsYUFBbEQsRUFBaUUsSUFBakU7SUFDQXBDLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVUssVUFBL0IsRUFBMkMsS0FBS0MsV0FBaEQsRUFBNkQsSUFBN0Q7SUFDQXRDLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVU8sb0JBQS9CLEVBQXFELEtBQUtDLG9CQUExRCxFQUFnRixJQUFoRjtJQUNBeEMsRUFBRSxDQUFDK0IsV0FBSCxDQUFlRCxJQUFmLEVBQXFCRSxxQkFBQSxDQUFVUyxpQkFBL0IsRUFBa0QsS0FBS0MsaUJBQXZELEVBQTBFLElBQTFFO0lBQ0ExQyxFQUFFLENBQUMrQixXQUFILENBQWVELElBQWYsRUFBcUJFLHFCQUFBLENBQVVXLHFCQUEvQixFQUFzRCxLQUFLQyxxQkFBM0QsRUFBa0YsSUFBbEY7SUFDQTVDLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVWEsY0FBL0IsRUFBK0MsS0FBS0MsZUFBcEQsRUFBcUUsSUFBckU7SUFDQTlDLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVWUsc0JBQS9CLEVBQXVELEtBQUtDLHVCQUE1RCxFQUFxRixJQUFyRjtJQUNBaEQsRUFBRSxDQUFDK0IsV0FBSCxDQUFlRCxJQUFmLEVBQXFCRSxxQkFBQSxDQUFVaUIsbUJBQS9CLEVBQW9ELEtBQUtDLG9CQUF6RCxFQUErRSxJQUEvRTtFQUNILENBNURJO0VBOERMQyxpQkE5REssK0JBOERlO0lBQ2hCLEtBQUtuQyxZQUFMLEdBQW9CLEVBQXBCO0lBQ0EsSUFBSW9DLEVBQUUsR0FBRyxDQUFUOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLM0MsZUFBekIsRUFBMEMyQyxDQUFDLElBQUksQ0FBL0MsRUFBa0Q7TUFDOUMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs3QyxlQUF6QixFQUEwQzZDLENBQUMsSUFBSSxDQUEvQyxFQUFrRDtRQUM5QyxJQUFNQyxRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkYsQ0FBbEIsRUFBcUJELENBQXJCLENBQWpCOztRQUNBLElBQUksQ0FBQyxLQUFLckMsWUFBTCxDQUFrQnNDLENBQWxCLENBQUwsRUFBMkIsS0FBS3RDLFlBQUwsQ0FBa0JzQyxDQUFsQixJQUF1QixFQUF2QjtRQUMzQixLQUFLdEMsWUFBTCxDQUFrQnNDLENBQWxCLEVBQXFCRCxDQUFyQixJQUEwQixLQUFLSSxZQUFMLENBQWtCRixRQUFsQixDQUExQjtRQUNBLEtBQUt2QyxZQUFMLENBQWtCc0MsQ0FBbEIsRUFBcUJELENBQXJCLEVBQXdCRCxFQUF4QixHQUE2QkEsRUFBN0I7UUFDQSxLQUFLcEMsWUFBTCxDQUFrQnNDLENBQWxCLEVBQXFCRCxDQUFyQixFQUF3QkssRUFBeEIsR0FBNkJKLENBQTdCO1FBQ0EsS0FBS3RDLFlBQUwsQ0FBa0JzQyxDQUFsQixFQUFxQkQsQ0FBckIsRUFBd0JNLEVBQXhCLEdBQTZCTixDQUE3QjtRQUNBRCxFQUFFLElBQUksQ0FBTjtNQUNIO0lBQ0o7RUFDSixDQTVFSTtFQThFTEssWUE5RUssd0JBOEVRRixRQTlFUixFQThFa0I7SUFDbkIsSUFBTUssUUFBUSxHQUFHNUQsRUFBRSxDQUFDNkQsV0FBSCxDQUFlLEtBQUtDLE1BQXBCLENBQWpCO0lBQ0FGLFFBQVEsQ0FBQ0csSUFBVCxHQUFnQixLQUFLQyxZQUFMLEVBQWhCO0lBQ0FKLFFBQVEsQ0FBQ0ssU0FBVCxDQUFtQixLQUFLNUQsTUFBeEI7SUFDQXVELFFBQVEsQ0FBQ00sV0FBVCxDQUFxQlgsUUFBckI7SUFDQUssUUFBUSxDQUFDTyxNQUFULEdBQWtCLElBQWxCO0lBQ0FQLFFBQVEsQ0FBQ1EsU0FBVCxHQUFxQixDQUFyQjtJQUNBUixRQUFRLENBQUNTLFdBQVQsR0FBdUIsQ0FBdkI7SUFDQSxPQUFPVCxRQUFQO0VBQ0gsQ0F2Rkk7RUF5RkxKLFlBekZLLHdCQXlGUWMsQ0F6RlIsRUF5RldDLENBekZYLEVBeUZjO0lBQ2YsT0FBT3ZFLEVBQUUsQ0FBQ3dFLEVBQUgsQ0FBTUQsQ0FBQyxHQUFHLEtBQUs1RCxZQUFULEdBQXdCLEtBQUtDLFlBQW5DLEVBQWlEMEQsQ0FBQyxHQUFHLEtBQUt6RCxXQUFULEdBQXVCLEtBQUtDLFdBQTdFLENBQVA7RUFDSCxDQTNGSTtFQTZGTGtELFlBN0ZLLDBCQTZGVTtJQUNYLE9BQU9TLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBSzVELGFBQS9CLElBQWdELENBQXZEO0VBQ0gsQ0EvRkk7RUFpR0w2RCxjQWpHSywwQkFpR1VDLEtBakdWLEVBaUdpQmQsSUFqR2pCLEVBaUd1QkssU0FqR3ZCLEVBaUdrQztJQUNuQyxJQUFLUyxLQUFLLElBQUlBLEtBQUssQ0FBQ25CLEVBQU4sR0FBVyxDQUFyQixJQUEyQm1CLEtBQUssQ0FBQ25CLEVBQU4sR0FBVyxLQUFLakQsZUFBTCxHQUF1QixDQUE3RCxJQUFrRW9FLEtBQUssQ0FBQ2xCLEVBQU4sR0FBVyxDQUE3RSxJQUFrRmtCLEtBQUssQ0FBQ2xCLEVBQU4sR0FBVyxLQUFLakQsZUFBTCxHQUF1QixDQUF4SCxFQUEySDtNQUN2SDtJQUNIOztJQUVELElBQUltRSxLQUFLLENBQUNULFNBQU4sS0FBb0IsQ0FBcEIsSUFBeUJTLEtBQUssQ0FBQ2QsSUFBTixLQUFlQSxJQUE1QyxFQUFrRDtNQUM5QztJQUNIOztJQUVEYyxLQUFLLENBQUNULFNBQU4sR0FBa0JBLFNBQWxCOztJQUNBLEtBQUtuRCxtQkFBTCxDQUF5QjZELElBQXpCLENBQThCRCxLQUE5Qjs7SUFFQSxJQUFJLEtBQUs3RCxZQUFMLENBQWtCNkQsS0FBSyxDQUFDbkIsRUFBTixHQUFXLENBQTdCLEtBQW1DLEtBQUsxQyxZQUFMLENBQWtCNkQsS0FBSyxDQUFDbkIsRUFBTixHQUFXLENBQTdCLEVBQWdDbUIsS0FBSyxDQUFDbEIsRUFBdEMsQ0FBdkMsRUFDSSxLQUFLaUIsY0FBTCxDQUFvQixLQUFLNUQsWUFBTCxDQUFrQjZELEtBQUssQ0FBQ25CLEVBQU4sR0FBVyxDQUE3QixFQUFnQ21CLEtBQUssQ0FBQ2xCLEVBQXRDLENBQXBCLEVBQStESSxJQUEvRCxFQUFxRUssU0FBckU7SUFDSixJQUFJLEtBQUtwRCxZQUFMLENBQWtCNkQsS0FBSyxDQUFDbkIsRUFBTixHQUFXLENBQTdCLEtBQW1DLEtBQUsxQyxZQUFMLENBQWtCNkQsS0FBSyxDQUFDbkIsRUFBTixHQUFXLENBQTdCLEVBQWdDbUIsS0FBSyxDQUFDbEIsRUFBdEMsQ0FBdkMsRUFDSSxLQUFLaUIsY0FBTCxDQUFvQixLQUFLNUQsWUFBTCxDQUFrQjZELEtBQUssQ0FBQ25CLEVBQU4sR0FBVyxDQUE3QixFQUFnQ21CLEtBQUssQ0FBQ2xCLEVBQXRDLENBQXBCLEVBQStESSxJQUEvRCxFQUFxRUssU0FBckU7SUFDSixJQUFJLEtBQUtwRCxZQUFMLENBQWtCNkQsS0FBSyxDQUFDbkIsRUFBeEIsS0FBK0IsS0FBSzFDLFlBQUwsQ0FBa0I2RCxLQUFLLENBQUNuQixFQUF4QixFQUE0Qm1CLEtBQUssQ0FBQ2xCLEVBQU4sR0FBVyxDQUF2QyxDQUFuQyxFQUNJLEtBQUtpQixjQUFMLENBQW9CLEtBQUs1RCxZQUFMLENBQWtCNkQsS0FBSyxDQUFDbkIsRUFBeEIsRUFBNEJtQixLQUFLLENBQUNsQixFQUFOLEdBQVcsQ0FBdkMsQ0FBcEIsRUFBK0RJLElBQS9ELEVBQXFFSyxTQUFyRTtJQUNKLElBQUksS0FBS3BELFlBQUwsQ0FBa0I2RCxLQUFLLENBQUNuQixFQUF4QixLQUErQixLQUFLMUMsWUFBTCxDQUFrQjZELEtBQUssQ0FBQ25CLEVBQXhCLEVBQTRCbUIsS0FBSyxDQUFDbEIsRUFBTixHQUFXLENBQXZDLENBQW5DLEVBQ0ksS0FBS2lCLGNBQUwsQ0FBb0IsS0FBSzVELFlBQUwsQ0FBa0I2RCxLQUFLLENBQUNuQixFQUF4QixFQUE0Qm1CLEtBQUssQ0FBQ2xCLEVBQU4sR0FBVyxDQUF2QyxDQUFwQixFQUErREksSUFBL0QsRUFBcUVLLFNBQXJFO0VBQ1AsQ0FySEk7RUF1SExXLGVBdkhLLDZCQXVIYTtJQUNkLEtBQUtDLGlCQUFMLEdBQXlCLENBQXpCO0lBQ0EsS0FBSy9ELG1CQUFMLEdBQTJCLEVBQTNCOztJQUNBLEtBQUssSUFBSW9DLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzVDLGVBQXpCLEVBQTBDNEMsQ0FBQyxJQUFJLENBQS9DLEVBQWtEO01BQzlDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLNUMsZUFBTCxHQUF1QixDQUEzQyxFQUE4QzRDLENBQUMsSUFBSSxDQUFuRCxFQUFzRDtRQUNsRCxLQUFLc0IsY0FBTCxDQUFvQixLQUFLNUQsWUFBTCxDQUFrQnFDLENBQWxCLEVBQXFCQyxDQUFyQixDQUFwQixFQUE2QyxLQUFLdEMsWUFBTCxDQUFrQnFDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QlMsSUFBckUsRUFBMkUsS0FBS2lCLGlCQUFoRjs7UUFDQSxJQUFJLEtBQUsvRCxtQkFBTCxDQUF5QmdFLE1BQXpCLElBQW1DLEtBQUsvRCxpQkFBNUMsRUFBK0QsS0FBSzhELGlCQUFMLElBQTBCLENBQTFCO1FBQy9ELEtBQUsvRCxtQkFBTCxHQUEyQixFQUEzQjtRQUNBLElBQUksS0FBSytELGlCQUFMLEdBQXlCLENBQTdCLEVBQWdDLE9BQU8sSUFBUDtNQUNuQztJQUNKOztJQUNELE9BQU8sS0FBUDtFQUNILENBbklJO0VBcUlMRSxrQkFySUssOEJBcUljTCxLQXJJZCxFQXFJcUJNLGdCQXJJckIsRUFxSTJDO0lBQUEsSUFBdEJBLGdCQUFzQjtNQUF0QkEsZ0JBQXNCLEdBQUgsQ0FBRztJQUFBOztJQUU1QyxLQUFLQyxlQUFMOztJQUVBLEtBQUtuRSxtQkFBTCxHQUEyQixFQUEzQjs7SUFFQSxRQUFRa0UsZ0JBQVI7TUFDSSxLQUFLRSwwQkFBQSxDQUFlQyxJQUFwQjtRQUNJdEYsRUFBRSxDQUFDK0IsV0FBSCxDQUFld0QsSUFBZixDQUFvQnZELHFCQUFBLENBQVV3RCxvQkFBOUIsRUFBb0QsSUFBcEQ7UUFDQSxLQUFLcEUsaUJBQUwsR0FBeUIsS0FBekI7UUFDQXBCLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVeUQsZUFBOUIsRUFBOENaLEtBQUssQ0FBQ3pCLEVBQXBEO1FBQ0FwRCxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVTBELGlCQUE5QixFQUFpRCxDQUFDYixLQUFLLENBQUNuQixFQUFQLEVBQVVtQixLQUFLLENBQUNsQixFQUFoQixDQUFqRCxFQUFzRSxLQUFLakQsZUFBM0UsRUFBNEYsS0FBS0QsZUFBakc7UUFDQTs7TUFFSixLQUFLNEUsMEJBQUEsQ0FBZU0sWUFBcEI7UUFDSTNGLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVd0Qsb0JBQTlCLEVBQW9ELElBQXBEO1FBQ0EsS0FBS3BFLGlCQUFMLEdBQXlCLEtBQXpCO1FBQ0FwQixFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVTRELGtCQUE5QixFQUFpRGYsS0FBSyxDQUFDekIsRUFBdkQ7UUFDQXBELEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVNkQsc0JBQTlCLEVBQXNELENBQUNoQixLQUFLLENBQUNuQixFQUFQLEVBQVVtQixLQUFLLENBQUNsQixFQUFoQixDQUF0RCxFQUEyRSxLQUFLakQsZUFBaEYsRUFBaUcsS0FBS0QsZUFBdEc7UUFDQTs7TUFFSjtRQUNJLEtBQUttRSxjQUFMLENBQW9CQyxLQUFwQixFQUEyQkEsS0FBSyxDQUFDZCxJQUFqQyxFQUF1QyxDQUF2Qzs7UUFFQSxJQUFJLEtBQUs5QyxtQkFBTCxDQUF5QmdFLE1BQXpCLEdBQWtDLEtBQUsvRCxpQkFBM0MsRUFBOEQ7VUFDMUQsS0FBS2tFLGVBQUw7O1VBQ0FwRixFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVThELG1CQUE5QjtVQUNBO1FBQ0g7O1FBRUQsSUFBSSxLQUFLN0UsbUJBQUwsQ0FBeUJnRSxNQUF6QixHQUFrQyxLQUFLMUQsK0JBQUwsR0FBdUMsQ0FBN0UsRUFBZ0Y7VUFDNUUsS0FBS2lCLG9CQUFMLENBQTBCNkMsMEJBQUEsQ0FBZU0sWUFBekMsRUFBdUQzRixFQUFFLENBQUN3RSxFQUFILENBQU1LLEtBQUssQ0FBQ25CLEVBQVosRUFBZ0JtQixLQUFLLENBQUNsQixFQUF0QixDQUF2RDtRQUNIOztRQUVELEtBQUtvQyxjQUFMOztRQUNBO0lBN0JSO0VBK0JILENBMUtJO0VBNEtMQyxpQkE1S0ssK0JBNEtlO0lBQUE7O0lBQ2hCLElBQUlDLGFBQWEsR0FBRSxFQUFuQjs7SUFDQSxLQUFLLElBQUk1QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUszQyxlQUF6QixFQUEwQzJDLENBQUMsRUFBM0MsRUFBK0M7TUFDM0M0QyxhQUFhLENBQUNuQixJQUFkLENBQW1CLENBQW5CO0lBQ0g7O0lBRUQsS0FBSzNELGtCQUFMLEdBQTBCLEtBQUtGLG1CQUFMLENBQXlCZ0UsTUFBbkQ7SUFDQWpGLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVa0UsU0FBOUIsRUFBeUMsS0FBSy9FLGtCQUE5Qzs7SUFFQSxLQUFLRixtQkFBTCxDQUF5QmtGLE9BQXpCLENBQWlDLFVBQUNDLE9BQUQsRUFBYTtNQUM3Q3BHLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVcUUsWUFBOUIsRUFBNENELE9BQU8sQ0FBQ0UscUJBQVIsQ0FBOEJ0RyxFQUFFLENBQUN3RSxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBOUIsQ0FBNUM7TUFDRzRCLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixDQUFsQjtNQUVBLElBQUlDLElBQUksR0FBRyxLQUFJLENBQUMvRixlQUFMLEdBQXVCd0YsYUFBYSxDQUFDRyxPQUFPLENBQUN6QyxFQUFULENBQS9DO01BR0EzRCxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVXlFLGtCQUE5Qjs7TUFDQSxLQUFJLENBQUNDLFlBQUwsQ0FBa0IsWUFBTTtRQUNwQjFHLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVMkUsaUJBQTlCO01BQ0gsQ0FGRCxFQUVHLEdBRkg7O01BSUFQLE9BQU8sQ0FBQzlCLENBQVIsR0FBWSxLQUFJLENBQUNkLFlBQUwsQ0FBa0JnRCxJQUFsQixFQUF3QkosT0FBTyxDQUFDekMsRUFBaEMsRUFBb0NXLENBQWhEO01BRUEyQixhQUFhLENBQUNHLE9BQU8sQ0FBQ3pDLEVBQVQsQ0FBYixJQUE2QixDQUE3QjtNQUNBeUMsT0FBTyxDQUFDckMsSUFBUixHQUFlLEtBQUksQ0FBQ0MsWUFBTCxFQUFmO01BQ0FoRSxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVTRFLGtCQUE5QixFQUFrRFIsT0FBTyxDQUFDaEQsRUFBMUQsRUFBOERnRCxPQUFPLENBQUNyQyxJQUF0RTtNQUVBLElBQUksQ0FBQyxLQUFJLENBQUMvQyxZQUFMLENBQWtCd0YsSUFBbEIsQ0FBTCxFQUE4QixLQUFJLENBQUN4RixZQUFMLENBQWtCd0YsSUFBbEIsSUFBMEIsRUFBMUI7TUFFOUIsS0FBSSxDQUFDeEYsWUFBTCxDQUFrQndGLElBQWxCLEVBQXdCSixPQUFPLENBQUN6QyxFQUFoQyxJQUFzQ3lDLE9BQXRDO01BRUEsS0FBSSxDQUFDcEYsWUFBTCxDQUFrQm9GLE9BQU8sQ0FBQzFDLEVBQTFCLEVBQThCMEMsT0FBTyxDQUFDekMsRUFBdEMsSUFBNEMsSUFBNUM7O01BRUEsS0FBSyxJQUFJTixFQUFDLEdBQUcrQyxPQUFPLENBQUMxQyxFQUFyQixFQUF5QkwsRUFBQyxHQUFHLEtBQUksQ0FBQzVDLGVBQUwsR0FBdUJ3RixhQUFhLENBQUNHLE9BQU8sQ0FBQ3pDLEVBQVQsQ0FBakUsRUFBK0VOLEVBQUMsSUFBSSxDQUFwRixFQUF1RjtRQUNuRixJQUFJLEtBQUksQ0FBQ3JDLFlBQUwsQ0FBa0JxQyxFQUFsQixFQUFxQitDLE9BQU8sQ0FBQ3pDLEVBQTdCLENBQUosRUFBc0M7VUFDbEMsS0FBSSxDQUFDM0MsWUFBTCxDQUFrQnFDLEVBQWxCLEVBQXFCK0MsT0FBTyxDQUFDekMsRUFBN0IsRUFBaUNVLFdBQWpDLElBQWdELENBQWhEO1FBQ0g7TUFDSjs7TUFFRCtCLE9BQU8sQ0FBQy9CLFdBQVIsR0FBc0JtQyxJQUFJLEdBQUcsS0FBSSxDQUFDL0YsZUFBbEM7TUFDQTJGLE9BQU8sQ0FBQy9CLFdBQVI7TUFFQStCLE9BQU8sQ0FBQzFDLEVBQVIsR0FBYThDLElBQWI7SUFDSCxDQWxDRDtFQW1DSCxDQXhOSTtFQTBOTEssNEJBMU5LLDBDQTBOMEI7SUFDM0IsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBSzlGLFlBQUwsQ0FBa0JpRSxNQUEzQzs7SUFFQSxLQUFLLElBQUk1QixDQUFDLEdBQUcsS0FBSzVDLGVBQWxCLEVBQW1DNEMsQ0FBQyxHQUFHeUQsZ0JBQXZDLEVBQXlEekQsQ0FBQyxJQUFJLENBQTlELEVBQWlFO01BQzdELEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLNUMsZUFBekIsRUFBMEM0QyxDQUFDLElBQUksQ0FBL0MsRUFBa0Q7UUFDOUMsSUFBSSxLQUFLdEMsWUFBTCxDQUFrQnFDLENBQWxCLEtBQXdCLEtBQUtyQyxZQUFMLENBQWtCcUMsQ0FBbEIsRUFBcUJDLENBQXJCLENBQTVCLEVBQXFEO1VBQ2pELEtBQUssSUFBSXlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELGdCQUFwQixFQUFzQ0MsQ0FBQyxJQUFJLENBQTNDLEVBQThDO1lBQzFDLElBQUksS0FBSy9GLFlBQUwsQ0FBa0IrRixDQUFsQixLQUF3QixLQUFLL0YsWUFBTCxDQUFrQitGLENBQWxCLEVBQXFCekQsQ0FBckIsQ0FBeEIsSUFBbUQsS0FBS3RDLFlBQUwsQ0FBa0IrRixDQUFsQixFQUFxQnpELENBQXJCLEVBQXdCZSxXQUF4QixHQUFzQyxDQUE3RixFQUFnRztjQUM1RixLQUFLckQsWUFBTCxDQUFrQitGLENBQUMsR0FBRyxLQUFLL0YsWUFBTCxDQUFrQitGLENBQWxCLEVBQXFCekQsQ0FBckIsRUFBd0JlLFdBQTlDLEVBQTJEZixDQUEzRCxJQUFnRSxLQUFLdEMsWUFBTCxDQUFrQitGLENBQWxCLEVBQXFCekQsQ0FBckIsQ0FBaEU7Y0FDQSxLQUFLdEMsWUFBTCxDQUFrQitGLENBQUMsR0FBRyxLQUFLL0YsWUFBTCxDQUFrQitGLENBQWxCLEVBQXFCekQsQ0FBckIsRUFBd0JlLFdBQTlDLEVBQTJEZixDQUEzRCxFQUE4REksRUFBOUQsR0FBbUVxRCxDQUFDLEdBQUcsS0FBSy9GLFlBQUwsQ0FBa0IrRixDQUFsQixFQUFxQnpELENBQXJCLEVBQXdCZSxXQUEvRjtjQUNBLEtBQUtyRCxZQUFMLENBQWtCK0YsQ0FBQyxHQUFHLEtBQUsvRixZQUFMLENBQWtCK0YsQ0FBbEIsRUFBcUJ6RCxDQUFyQixFQUF3QmUsV0FBOUMsRUFBMkRmLENBQTNELEVBQThEZSxXQUE5RCxHQUE0RSxDQUE1RTtjQUNBLEtBQUtyRCxZQUFMLENBQWtCK0YsQ0FBQyxHQUFHLEtBQUsvRixZQUFMLENBQWtCK0YsQ0FBbEIsRUFBcUJ6RCxDQUFyQixFQUF3QmUsV0FBOUMsRUFBMkRmLENBQTNELEVBQThEYyxTQUE5RCxHQUEwRSxDQUExRTtZQUNIO1VBQ0o7UUFDSjtNQUNKO0lBQ0o7O0lBQ0QsS0FBSzRDLGlCQUFMLEdBQXlCRixnQkFBZ0IsR0FBRyxLQUFLckcsZUFBakQ7O0lBQ0EsS0FBS08sWUFBTCxDQUFrQmlHLE1BQWxCLENBQXlCLEtBQUt4RyxlQUE5QixFQUErQ3FHLGdCQUFnQixHQUFHLEtBQUtyRyxlQUF2RTs7SUFFQSxLQUFLLElBQUk0QyxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHLEtBQUs1QyxlQUF6QixFQUEwQzRDLEdBQUMsSUFBSSxDQUEvQyxFQUFrRDtNQUM5QyxLQUFLLElBQUlDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBSzVDLGVBQXpCLEVBQTBDNEMsRUFBQyxJQUFJLENBQS9DLEVBQWtEO1FBQzlDLEtBQUt0QyxZQUFMLENBQWtCcUMsR0FBbEIsRUFBcUJDLEVBQXJCLEVBQXdCNEQsZ0JBQXhCOztRQUNBLEtBQUs3RyxNQUFMLENBQVk4RyxRQUFaLENBQXFCLEtBQUtuRyxZQUFMLENBQWtCcUMsR0FBbEIsRUFBcUJDLEVBQXJCLENBQXJCO01BQ0g7SUFDSjs7SUFFRCxJQUFJLENBQUMsS0FBS3lCLGVBQUwsRUFBRCxJQUEyQixDQUFDLEtBQUsxRCxxQkFBckMsRUFBNEQ7TUFDeEQsS0FBSzhCLGlCQUFMOztNQUNBLElBQUksQ0FBQyxLQUFLNEIsZUFBTCxFQUFMLEVBQTZCO1FBQ3pCL0UsRUFBRSxDQUFDK0IsV0FBSCxDQUFld0QsSUFBZixDQUFvQnZELHFCQUFBLENBQVVvRixXQUE5QixFQUEyQ0Msd0JBQUEsQ0FBYUMsTUFBeEQsRUFBZ0UsSUFBaEUsRUFBc0UsS0FBdEU7O1FBQ0EsT0FBTyxDQUFDLEtBQUt2QyxlQUFMLEVBQVIsRUFBZ0M7VUFDNUIsS0FBSzVCLGlCQUFMO1FBQ0g7TUFDSjtJQUNKO0VBQ0osQ0E5UEk7RUFnUUxpQyxlQWhRSyw2QkFnUWE7SUFDZCxLQUFLLElBQUkvQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs1QyxlQUF6QixFQUEwQzRDLENBQUMsSUFBSSxDQUEvQyxFQUFrRDtNQUM5QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzVDLGVBQXpCLEVBQTBDNEMsQ0FBQyxJQUFJLENBQS9DLEVBQWtEO1FBQzlDLEtBQUt0QyxZQUFMLENBQWtCcUMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCYyxTQUF4QixHQUFvQyxDQUFwQztNQUNIO0lBQ0o7RUFDSixDQXRRSTtFQXdRTDJCLGNBeFFLLDRCQXdRWTtJQUNiL0YsRUFBRSxDQUFDK0IsV0FBSCxDQUFld0QsSUFBZixDQUFvQnZELHFCQUFBLENBQVV1RixZQUE5Qjs7SUFFQSxLQUFLdkIsaUJBQUw7O0lBRUFoRyxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVXdGLFlBQTlCOztJQUVBLEtBQUtYLDRCQUFMOztJQUVBLEtBQUt6QixlQUFMO0VBQ0gsQ0FsUkk7RUFvUkxxQyxZQXBSSyx3QkFvUlFDLE9BcFJSLEVBb1JpQjtJQUNsQixLQUFLLElBQUlyRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs1QyxlQUF6QixFQUEwQzRDLENBQUMsSUFBSSxDQUEvQyxFQUFrRDtNQUM5QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzVDLGVBQXpCLEVBQTBDNEMsQ0FBQyxJQUFJLENBQS9DLEVBQWtEO1FBQzlDLElBQUksS0FBS3RDLFlBQUwsQ0FBa0JxQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JGLEVBQXhCLEtBQStCc0UsT0FBbkMsRUFBNEMsT0FBTzFILEVBQUUsQ0FBQ3dFLEVBQUgsQ0FBTW5CLENBQU4sRUFBU0MsQ0FBVCxDQUFQO01BQy9DO0lBQ0o7RUFDSixDQTFSSTtFQTRSTHFFLE9BNVJLLG1CQTRSR0MsTUE1UkgsRUE0Ulc7SUFDWixLQUFLLElBQUl2RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs1QyxlQUF6QixFQUEwQzRDLENBQUMsSUFBSSxDQUEvQyxFQUFrRDtNQUM5QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzVDLGVBQXpCLEVBQTBDNEMsQ0FBQyxJQUFJLENBQS9DLEVBQWtEO1FBQzlDLElBQUksS0FBS3RDLFlBQUwsQ0FBa0JxQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JJLEVBQXhCLEtBQStCa0UsTUFBTSxDQUFDckQsQ0FBdEMsSUFBMkMsS0FBS3ZELFlBQUwsQ0FBa0JxQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JLLEVBQXhCLEtBQStCaUUsTUFBTSxDQUFDdEQsQ0FBckYsRUFDSSxPQUFPLEtBQUt0RCxZQUFMLENBQWtCcUMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCRixFQUEvQjtNQUNQO0lBQ0o7RUFDSixDQW5TSTtFQXFTTHlFLGNBclNLLDBCQXFTVWhELEtBclNWLEVBcVNpQjtJQUNsQixLQUFLMUIsaUJBQUw7O0lBQ0FuRCxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVWtFLFNBQTlCLEVBQXlDLEtBQUt4RixlQUFMLEdBQXVCLEtBQUtELGVBQXJFO0VBQ0gsQ0F4U0k7RUF5U0w7RUFFQTtFQUNBK0Isb0JBNVNLLGdDQTRTZ0JzRixXQTVTaEIsRUE0UzZCRixNQTVTN0IsRUE0U3FEO0lBQUE7O0lBQUEsSUFBeEJBLE1BQXdCO01BQXhCQSxNQUF3QixHQUFmNUgsRUFBRSxDQUFDd0UsRUFBSCxDQUFNLENBQUMsQ0FBUCxFQUFVLENBQUMsQ0FBWCxDQUFlO0lBQUE7O0lBRXRELElBQUksS0FBS3BELGlCQUFULEVBQ0k7SUFDSnBCLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVd0Qsb0JBQTlCLEVBQW9ELEtBQXBEO0lBQ0EsS0FBS3BFLGlCQUFMLEdBQXlCLElBQXpCOztJQUVBLElBQUkwRyxXQUFXLEtBQUt6QywwQkFBQSxDQUFlMEMsUUFBbkMsRUFBNkM7TUFDekMsS0FBS25GLHFCQUFMLENBQTJCLElBQTNCO01BQ0E1QyxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVWdHLGdCQUE5QjtNQUNBO0lBQ0g7O0lBRUQsS0FBS3RCLFlBQUwsQ0FBa0IsWUFBSTtNQUNsQixJQUFJdUIsS0FBSjs7TUFDQSxJQUFJTCxNQUFNLENBQUNyRCxDQUFQLEdBQVcsQ0FBZixFQUFrQjtRQUNkMEQsS0FBSyxHQUFHeEQsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixNQUFJLENBQUNsRSxlQUFMLEdBQXVCLE1BQUksQ0FBQ0MsZUFBNUIsR0FBOEMsQ0FBL0QsQ0FBVixDQUFSO01BQ0gsQ0FGRCxNQUVPO1FBQ0h1SCxLQUFLLEdBQUcsTUFBSSxDQUFDTixPQUFMLENBQWFDLE1BQWIsQ0FBUjtNQUNIOztNQUVENUgsRUFBRSxDQUFDK0IsV0FBSCxDQUFld0QsSUFBZixDQUFvQnZELHFCQUFBLENBQVVrRyxrQkFBOUIsRUFBa0RELEtBQWxELEVBQXlESCxXQUF6RDtJQUNILENBVEQsRUFTRSxHQVRGO0VBVUgsQ0FuVUk7RUFxVUw1RixTQXJVSyxxQkFxVUtpRyxLQXJVTCxFQXFVWXRELEtBclVaLEVBcVVtQjtJQUVwQixLQUFLckQsVUFBTCxHQUFrQixJQUFsQjtJQUVBLEtBQUtuQixNQUFMLEdBQWM4SCxLQUFkO0lBQ0EsS0FBS3JFLE1BQUwsR0FBY2UsS0FBZDs7SUFDQSxJQUFJLEtBQUt4RSxNQUFMLElBQWUsS0FBS3lELE1BQXhCLEVBQWdDO01BQzVCLEtBQUtYLGlCQUFMO0lBQ0g7O0lBRUQsT0FBTyxDQUFDLEtBQUs0QixlQUFMLEVBQVIsRUFBZ0M7TUFDNUIsS0FBSzVCLGlCQUFMO0lBQ0g7RUFDSixDQWxWSTtFQW9WTGYsYUFwVksseUJBb1ZTeUMsS0FwVlQsRUFvVmdCO0lBRWpCLElBQUksS0FBS3BELGVBQVQsRUFBMEI7TUFDdEJ6QixFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVW9HLHVCQUE5QixFQUF1RHZELEtBQXZEO01BQ0E7SUFDSDs7SUFFRDdFLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZXdELElBQWYsQ0FBb0J2RCxxQkFBQSxDQUFVcUcsVUFBOUI7SUFDQSxJQUFJbEQsZ0JBQWdCLEdBQUcsQ0FBdkI7O0lBQ0EsSUFBSU4sS0FBSyxDQUFDZCxJQUFOLEtBQWVzQiwwQkFBQSxDQUFlQyxJQUE5QixJQUFzQ1QsS0FBSyxDQUFDZCxJQUFOLEtBQWVzQiwwQkFBQSxDQUFlTSxZQUF4RSxFQUFzRjtNQUNsRlIsZ0JBQWdCLEdBQUdOLEtBQUssQ0FBQ2QsSUFBekI7SUFDSDs7SUFDRCxLQUFLbUIsa0JBQUwsQ0FBd0JMLEtBQXhCLEVBQStCTSxnQkFBL0I7RUFDSCxDQWpXSTtFQW1XTDdDLFdBbldLLHVCQW1XTytCLFdBbldQLEVBbVdvQjtJQUNyQixJQUFJQSxXQUFXLEtBQUssS0FBSzJDLGlCQUF6QixFQUE0QztNQUN4QyxLQUFLTixZQUFMLENBQWtCLFlBQU07UUFDcEIxRyxFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVThELG1CQUE5QjtNQUNILENBRkQsRUFFRyxJQUZIO0lBR0g7RUFDSixDQXpXSTtFQTJXTHBELGlCQTNXSyw2QkEyV2E0RixXQTNXYixFQTJXMEI7SUFDM0IsS0FBS2pILHFCQUFMLEdBQTZCaUgsV0FBN0I7RUFDSCxDQTdXSTtFQStXTDFGLHFCQS9XSyxpQ0ErV2lCMEYsV0EvV2pCLEVBK1c4QjtJQUMvQixLQUFLaEgseUJBQUwsR0FBaUNnSCxXQUFqQztJQUNBLEtBQUs3RyxlQUFMLEdBQXVCLElBQXZCO0VBQ0gsQ0FsWEk7RUFxWExxQixlQXJYSywyQkFxWFd5RixZQXJYWCxFQXFYeUI7SUFBQTs7SUFDMUJBLFlBQVksQ0FBQ3BDLE9BQWIsQ0FBcUIsVUFBQUMsT0FBTyxFQUFJO01BQzVCLE1BQUksQ0FBQ25GLG1CQUFMLENBQXlCNkQsSUFBekIsQ0FBOEIsTUFBSSxDQUFDOUQsWUFBTCxDQUFrQm9GLE9BQU8sQ0FBQyxDQUFELENBQXpCLEVBQThCQSxPQUFPLENBQUMsQ0FBRCxDQUFyQyxDQUE5QjtJQUNILENBRkQ7O0lBSUEsS0FBS0wsY0FBTDtFQUNILENBM1hJO0VBNlhML0MsdUJBN1hLLHFDQTZYcUI7SUFDdEIsS0FBSzVCLGlCQUFMLEdBQXlCLEtBQXpCO0lBQ0FwQixFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVXdELG9CQUE5QixFQUFvRCxJQUFwRDs7SUFDQSxLQUFLcUIsNEJBQUw7RUFDSCxDQWpZSTtFQW1ZTDNELG9CQW5ZSyxnQ0FtWWdCc0YsS0FuWWhCLEVBbVl1QkMsTUFuWXZCLEVBbVkrQjtJQUNoQyxLQUFLaEgsZUFBTCxHQUF1QixLQUF2QjtJQUNBLEtBQUtULFlBQUwsQ0FBa0J3SCxLQUFLLENBQUM5RSxFQUF4QixFQUE0QjhFLEtBQUssQ0FBQzdFLEVBQWxDLElBQXdDOEUsTUFBeEM7SUFDQSxLQUFLekgsWUFBTCxDQUFrQnlILE1BQU0sQ0FBQy9FLEVBQXpCLEVBQTZCK0UsTUFBTSxDQUFDOUUsRUFBcEMsSUFBMEM2RSxLQUExQztJQUhnQyxXQUlSLENBQUNDLE1BQU0sQ0FBQy9FLEVBQVIsRUFBWThFLEtBQUssQ0FBQzlFLEVBQWxCLENBSlE7SUFJL0I4RSxLQUFLLENBQUM5RSxFQUp5QjtJQUlyQitFLE1BQU0sQ0FBQy9FLEVBSmM7SUFBQSxZQUtSLENBQUMrRSxNQUFNLENBQUM5RSxFQUFSLEVBQVk2RSxLQUFLLENBQUM3RSxFQUFsQixDQUxRO0lBSy9CNkUsS0FBSyxDQUFDN0UsRUFMeUI7SUFLckI4RSxNQUFNLENBQUM5RSxFQUxjOztJQU1oQyxLQUFLeUIsZUFBTDtFQUNILENBMVlJLENBMllMOztBQTNZSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG5pbXBvcnQgQmxvY2tDb2xvclR5cGUgZnJvbSAnQmxvY2tDb2xvclR5cGUnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuaW1wb3J0IEVmZmVjdFR5cGUgZnJvbSAnRWZmZWN0VHlwZSc7XG5cbi8vI2VuZHJlZ2lvblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgbnVtZXJhbFRvRGVzdHJveTogeyBkZWZhdWx0OiAzIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBfZmllbGQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTm9kZSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfbnVtZXJhbFN0cmluZ3M6IHsgZGVmYXVsdDogNywgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfbnVtZXJhbENvbHVtbnM6IHsgZGVmYXVsdDogMTAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3dpZHRoQ29sdW1uOiB7IGRlZmF1bHQ6IDE1NSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfd2lkdGhPZmZzZXQ6IHsgZGVmYXVsdDogNjk3LCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9oaWdoQ29sdW1uOiB7IGRlZmF1bHQ6IDIzMywgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfaGlnaE9mZnNldDogeyBkZWZhdWx0OiA3MDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX251bWJlckNvbG9yczogeyBkZWZhdWx0OiA1LCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9ibG9ja3NBcnJheTogeyBkZWZhdWx0OiBbXSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfdGVtcENvYWxpdGlvbkFycmF5OiB7IGRlZmF1bHQ6IFtdLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9udW1lcmFsVG9EZXN0cm95OiB7IGRlZmF1bHQ6IDMsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX251bWVyYWxGYWxsQmxvY2tzOiB7IGRlZmF1bHQ6IDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3N0b3BTdXBlckFiaWxpdHk6IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2lzU2NvcmVFbm91Z2hGb3JCb21iOiB7IGRlZmF1bHQ6IGZhbHNlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9pc1Njb3JlRW5vdWdoRm9yVGVsZXBvcnQ6IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2Ftb3VudEJsb2Nrc0ZvckVyYXNlckFwcGVhcmluZzogeyBkZWZhdWx0OiA1LCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9pc0ZpZWxkT246IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2lzVGVsZXBvcnRNb2RlOiB7IGRlZmF1bHQ6IGZhbHNlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG5cblxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICAgICAgdGhpcy5fbnVtZXJhbFRvRGVzdHJveSA9IHRoaXMubnVtZXJhbFRvRGVzdHJveTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkZJRUxEX09OLCB0aGlzLm9uRmllbGRPbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5CTE9DS19DSE9TRU4sIHRoaXMub25CbG9ja0Nob3NlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5CTE9DS19GQUxMLCB0aGlzLm9uQmxvY2tGYWxsLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkNSRUFURV9TVVBFUl9BQklMSVRZLCB0aGlzLm9uQ3JlYXRlU3VwZXJBYmlsaXR5LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkJPTUJfSVNfQVZBSUxBQkxFLCB0aGlzLm9uQm9tYklzQXZhaWxhYmxlLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LlRFTEVQT1JUX0lTX0FWQUlMQUJMRSwgdGhpcy5vblRlbGVwb3J0SXNBdmFpbGFibGUsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuRkVBVFVSRV9SRVNVTFQsIHRoaXMub25GZWF0dXJlUmVzdWx0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LlRFTEVQT1JUQVRJT05fQ09NUExFVEUsIHRoaXMub25UZWxlcG9ydGF0aW9uQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuU1RBUlRfVEVMRVBPUlRBVElPTiwgdGhpcy5vblN0YXJ0VGVsZXBvcnRhdGlvbiwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9jcmVhdGVCbG9ja0FycmF5KCkge1xuICAgICAgICB0aGlzLl9ibG9ja3NBcnJheSA9IFtdO1xuICAgICAgICBsZXQgaWQgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bWVyYWxDb2x1bW5zOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtZXJhbFN0cmluZ3M7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fc2V0TG9jYXRpb24oaiwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9ibG9ja3NBcnJheVtqXSkgdGhpcy5fYmxvY2tzQXJyYXlbal0gPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtqXVtpXSA9IHRoaXMuX2NyZWF0ZUJsb2NrKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtqXVtpXS5pZCA9IGlkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2pdW2ldLmlJID0gajtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtqXVtpXS5pSiA9IGk7XG4gICAgICAgICAgICAgICAgaWQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfY3JlYXRlQmxvY2socG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9ibG9jayk7XG4gICAgICAgIG5ld0Jsb2NrLmtpbmQgPSB0aGlzLl9jaG9vc2VDb2xvcigpO1xuICAgICAgICBuZXdCbG9jay5zZXRQYXJlbnQodGhpcy5fZmllbGQpO1xuICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIG5ld0Jsb2NrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5ld0Jsb2NrLmNvYWxpdGlvbiA9IDA7XG4gICAgICAgIG5ld0Jsb2NrLnRyYW5zZmVycmVkID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0Jsb2NrO1xuICAgIH0sXG5cbiAgICBfc2V0TG9jYXRpb24oeSwgeCkge1xuICAgICAgICByZXR1cm4gY2MudjIoeCAqIHRoaXMuX3dpZHRoQ29sdW1uIC0gdGhpcy5fd2lkdGhPZmZzZXQsIHkgKiB0aGlzLl9oaWdoQ29sdW1uIC0gdGhpcy5faGlnaE9mZnNldCk7XG4gICAgfSxcblxuICAgIF9jaG9vc2VDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogdGhpcy5fbnVtYmVyQ29sb3JzKSAtIDE7XG4gICAgfSxcblxuICAgIF9maW5kQ29hbGl0aW9uKGJsb2NrLCBraW5kLCBjb2FsaXRpb24pIHtcbiAgICAgICAgaWYgKChibG9jayAmJiBibG9jay5pSSA8IDApIHx8IGJsb2NrLmlJID4gdGhpcy5fbnVtZXJhbFN0cmluZ3MgLSAxIHx8IGJsb2NrLmlKIDwgMCB8fCBibG9jay5pSiA+IHRoaXMuX251bWVyYWxDb2x1bW5zIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJsb2NrLmNvYWxpdGlvbiAhPT0gMCB8fCBibG9jay5raW5kICE9PSBraW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBibG9jay5jb2FsaXRpb24gPSBjb2FsaXRpb247XG4gICAgICAgIHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheS5wdXNoKGJsb2NrKTtcblxuICAgICAgICBpZiAodGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUkgLSAxXSAmJiB0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSSAtIDFdW2Jsb2NrLmlKXSlcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRDb2FsaXRpb24odGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUkgLSAxXVtibG9jay5pSl0sIGtpbmQsIGNvYWxpdGlvbik7XG4gICAgICAgIGlmICh0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSSArIDFdICYmIHRoaXMuX2Jsb2Nrc0FycmF5W2Jsb2NrLmlJICsgMV1bYmxvY2suaUpdKVxuICAgICAgICAgICAgdGhpcy5fZmluZENvYWxpdGlvbih0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSSArIDFdW2Jsb2NrLmlKXSwga2luZCwgY29hbGl0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2Jsb2NrLmlJXSAmJiB0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSV1bYmxvY2suaUogLSAxXSlcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRDb2FsaXRpb24odGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUldW2Jsb2NrLmlKIC0gMV0sIGtpbmQsIGNvYWxpdGlvbik7XG4gICAgICAgIGlmICh0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSV0gJiYgdGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUldW2Jsb2NrLmlKICsgMV0pXG4gICAgICAgICAgICB0aGlzLl9maW5kQ29hbGl0aW9uKHRoaXMuX2Jsb2Nrc0FycmF5W2Jsb2NrLmlJXVtibG9jay5pSiArIDFdLCBraW5kLCBjb2FsaXRpb24pO1xuICAgIH0sXG5cbiAgICBfY2hlY2tPblNodWZmbGUoKSB7XG4gICAgICAgIHRoaXMuX251bWVyYWxDb2FsaXRpb24gPSAxO1xuICAgICAgICB0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bWVyYWxDb2x1bW5zIC0gMTsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluZENvYWxpdGlvbih0aGlzLl9ibG9ja3NBcnJheVtpXVtqXSwgdGhpcy5fYmxvY2tzQXJyYXlbaV1bal0ua2luZCwgdGhpcy5fbnVtZXJhbENvYWxpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheS5sZW5ndGggPj0gdGhpcy5fbnVtZXJhbFRvRGVzdHJveSkgdGhpcy5fbnVtZXJhbENvYWxpdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9udW1lcmFsQ29hbGl0aW9uID4gMSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBfY2hlY2tDbGlja2VkQmxvY2soYmxvY2ssIGtpbmRTdXBlckFiaWxpdHkgPSAwKSB7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRDb2FsaXRpb24oKTtcblxuICAgICAgICB0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkgPSBbXTtcblxuICAgICAgICBzd2l0Y2ggKGtpbmRTdXBlckFiaWxpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuQm9tYjpcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcFN1cGVyQWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkJMT0NLX0JPTUJfRE9ORSxibG9jay5pZCk7XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQkxPQ0tfQk9NQl9DSE9TRU4sIFtibG9jay5pSSxibG9jay5pSl0sIHRoaXMuX251bWVyYWxDb2x1bW5zLCB0aGlzLl9udW1lcmFsU3RyaW5ncyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXI6XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVE9HR0xFX1NVUEVSX0FCSUxJVFksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BTdXBlckFiaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DT0xVTU5fRVJBU0VSX0RPTkUsYmxvY2suaWQpO1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkFDVElWQVRFX0NPTFVNTl9FUkFTRVIsIFtibG9jay5pSSxibG9jay5pSl0sIHRoaXMuX251bWVyYWxDb2x1bW5zLCB0aGlzLl9udW1lcmFsU3RyaW5ncyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5kQ29hbGl0aW9uKGJsb2NrLCBibG9jay5raW5kLCAxKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkubGVuZ3RoIDwgdGhpcy5fbnVtZXJhbFRvRGVzdHJveSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNldENvYWxpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5CTE9DS19DQU5fQkVfQ0hPU0VOKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGVtcENvYWxpdGlvbkFycmF5Lmxlbmd0aCA+IHRoaXMuX2Ftb3VudEJsb2Nrc0ZvckVyYXNlckFwcGVhcmluZyAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNyZWF0ZVN1cGVyQWJpbGl0eShCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXIgLGNjLnYyKGJsb2NrLmlJLCBibG9jay5pSikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5hbENoZWNraW5nKCk7ICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF90cmFuc2ZlckJsb2Nrc1VwKCkge1xuICAgICAgICBsZXQgX2NvbHVtbnNBcnJheSA9W107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtZXJhbENvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgX2NvbHVtbnNBcnJheS5wdXNoKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbnVtZXJhbEZhbGxCbG9ja3MgPSB0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkubGVuZ3RoO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TQ09SRV9HT1QsIHRoaXMuX251bWVyYWxGYWxsQmxvY2tzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TUEFXTl9FRkZFQ1QsIGVsZW1lbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XG4gICAgICAgICAgICBlbGVtZW50Lm9wYWNpdHkgPSAwO1xuXG4gICAgICAgICAgICBsZXQgbmV3SSA9IHRoaXMuX251bWVyYWxTdHJpbmdzICsgX2NvbHVtbnNBcnJheVtlbGVtZW50LmlKXTtcblxuXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DQU1FUkFfU1RBUlRfU0hBS0UpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNBTUVSQV9TVE9QX1NIQUtFKTtcbiAgICAgICAgICAgIH0sIDAuMik7XG5cbiAgICAgICAgICAgIGVsZW1lbnQueSA9IHRoaXMuX3NldExvY2F0aW9uKG5ld0ksIGVsZW1lbnQuaUopLnk7XG5cbiAgICAgICAgICAgIF9jb2x1bW5zQXJyYXlbZWxlbWVudC5pSl0gKz0gMTtcbiAgICAgICAgICAgIGVsZW1lbnQua2luZCA9IHRoaXMuX2Nob29zZUNvbG9yKCk7XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DSE9PU0VfQ09MT1JfQkxPQ0ssIGVsZW1lbnQuaWQsIGVsZW1lbnQua2luZCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fYmxvY2tzQXJyYXlbbmV3SV0pIHRoaXMuX2Jsb2Nrc0FycmF5W25ld0ldID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W25ld0ldW2VsZW1lbnQuaUpdID0gZWxlbWVudDtcblxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbZWxlbWVudC5pSV1bZWxlbWVudC5pSl0gPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5pSTsgaSA8IHRoaXMuX251bWVyYWxTdHJpbmdzICsgX2NvbHVtbnNBcnJheVtlbGVtZW50LmlKXTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2VsZW1lbnQuaUpdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2VsZW1lbnQuaUpdLnRyYW5zZmVycmVkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LnRyYW5zZmVycmVkID0gbmV3SSAtIHRoaXMuX251bWVyYWxTdHJpbmdzO1xuICAgICAgICAgICAgZWxlbWVudC50cmFuc2ZlcnJlZCArKztcblxuICAgICAgICAgICAgZWxlbWVudC5pSSA9IG5ld0k7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfcmVndWxhcml6ZVRyYW5zZmVycmVkQmxvY2tzKCkge1xuICAgICAgICBjb25zdCBsZW5ndGhCbG9ja0FycmF5ID0gdGhpcy5fYmxvY2tzQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSA8IGxlbmd0aEJsb2NrQXJyYXk7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9udW1lcmFsQ29sdW1uczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2ldICYmIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoQmxvY2tBcnJheTsgayArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmxvY2tzQXJyYXlba10gJiYgdGhpcy5fYmxvY2tzQXJyYXlba11bal0gJiYgdGhpcy5fYmxvY2tzQXJyYXlba11bal0udHJhbnNmZXJyZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbayAtIHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdLnRyYW5zZmVycmVkXVtqXSA9IHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2sgLSB0aGlzLl9ibG9ja3NBcnJheVtrXVtqXS50cmFuc2ZlcnJlZF1bal0uaUkgPSBrIC0gdGhpcy5fYmxvY2tzQXJyYXlba11bal0udHJhbnNmZXJyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbayAtIHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdLnRyYW5zZmVycmVkXVtqXS50cmFuc2ZlcnJlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbayAtIHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdLnRyYW5zZmVycmVkXVtqXS5jb2FsaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RGYWxsaW5nQmxvY2sgPSBsZW5ndGhCbG9ja0FycmF5IC0gdGhpcy5fbnVtZXJhbFN0cmluZ3M7XG4gICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5LnNwbGljZSh0aGlzLl9udW1lcmFsU3RyaW5ncywgbGVuZ3RoQmxvY2tBcnJheSAtIHRoaXMuX251bWVyYWxTdHJpbmdzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bWVyYWxTdHJpbmdzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtZXJhbENvbHVtbnM7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWVsZC5hZGRDaGlsZCh0aGlzLl9ibG9ja3NBcnJheVtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrT25TaHVmZmxlKCkgJiYgIXRoaXMuX2lzU2NvcmVFbm91Z2hGb3JCb21iKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrT25TaHVmZmxlKCkpIHtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgVWlTY3JlZW5UeXBlLlJlc3VsdCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdoaWxlICghdGhpcy5fY2hlY2tPblNodWZmbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9yZXNldENvYWxpdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bWVyYWxDb2x1bW5zOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtpXVtqXS5jb2FsaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9maW5hbENoZWNraW5nKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5QTEFZRVJfTU9WRUQpO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zZmVyQmxvY2tzVXAoKTtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5USU1FX1RPX0ZBTEwpO1xuXG4gICAgICAgIHRoaXMuX3JlZ3VsYXJpemVUcmFuc2ZlcnJlZEJsb2NrcygpO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0Q29hbGl0aW9uKCk7XG4gICAgfSxcblxuICAgIF9maW5kSW5kZXhlcyhibG9ja0lkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtZXJhbFN0cmluZ3M7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9udW1lcmFsQ29sdW1uczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdLmlkID09PSBibG9ja0lkKSByZXR1cm4gY2MudjIoaSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZpbmRJRChjb29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bWVyYWxDb2x1bW5zOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmxvY2tzQXJyYXlbaV1bal0uaUkgPT09IGNvb3Jkcy54ICYmIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdLmlKID09PSBjb29yZHMueSkgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3NBcnJheVtpXVtqXS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXNlQWJpbGl0eVRudChibG9jaykge1xuICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNDT1JFX0dPVCwgdGhpcy5fbnVtZXJhbENvbHVtbnMgKiB0aGlzLl9udW1lcmFsU3RyaW5ncyk7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uQ3JlYXRlU3VwZXJBYmlsaXR5KGtpbmRBYmlsaXR5LCBjb29yZHMgPSBjYy52MigtMSwgLTEpKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0b3BTdXBlckFiaWxpdHkpIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9zdG9wU3VwZXJBYmlsaXR5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoa2luZEFiaWxpdHkgPT09IEJsb2NrQ29sb3JUeXBlLlRlbGVwb3J0KSB7XG4gICAgICAgICAgICB0aGlzLm9uVGVsZXBvcnRJc0F2YWlsYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlRFTEVQT1JUX1NUQVJURUQpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgbGV0IG5ld0lEXG4gICAgICAgICAgICBpZiAoY29vcmRzLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV3SUQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqICh0aGlzLl9udW1lcmFsU3RyaW5ncyAqIHRoaXMuX251bWVyYWxDb2x1bW5zIC0gMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJRCA9IHRoaXMuX2ZpbmRJRChjb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DUkVBVEVfU1VQRVJfQkxPQ0ssIG5ld0lELCBraW5kQWJpbGl0eSk7ICAgIFxuICAgICAgICB9LDAuMSlcbiAgICB9LFxuXG4gICAgb25GaWVsZE9uKGZpZWxkLCBibG9jaykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5faXNGaWVsZE9uID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuX2Jsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmICh0aGlzLl9maWVsZCAmJiB0aGlzLl9ibG9jaykge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQmxvY2tBcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLl9jaGVja09uU2h1ZmZsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CbG9ja0Nob3NlbihibG9jaykge1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1RlbGVwb3J0TW9kZSkge1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVEVMRVBPUlRFRF9CTE9DS19DSE9TRU4sIGJsb2NrKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TVE9QX0lOUFVUKTtcbiAgICAgICAgbGV0IGtpbmRTdXBlckFiaWxpdHkgPSAwO1xuICAgICAgICBpZiAoYmxvY2sua2luZCA9PT0gQmxvY2tDb2xvclR5cGUuQm9tYiB8fCBibG9jay5raW5kID09PSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXIpIHtcbiAgICAgICAgICAgIGtpbmRTdXBlckFiaWxpdHkgPSBibG9jay5raW5kO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoZWNrQ2xpY2tlZEJsb2NrKGJsb2NrLCBraW5kU3VwZXJBYmlsaXR5KTtcbiAgICB9LFxuXG4gICAgb25CbG9ja0ZhbGwodHJhbnNmZXJyZWQpIHtcbiAgICAgICAgaWYgKHRyYW5zZmVycmVkID09PSB0aGlzLl9sYXN0RmFsbGluZ0Jsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQkxPQ0tfQ0FOX0JFX0NIT1NFTik7XG4gICAgICAgICAgICB9LCAwLjM1KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkJvbWJJc0F2YWlsYWJsZShpc0F2YWlsYWJsZSkge1xuICAgICAgICB0aGlzLl9pc1Njb3JlRW5vdWdoRm9yQm9tYiA9IGlzQXZhaWxhYmxlO1xuICAgIH0sXG5cbiAgICBvblRlbGVwb3J0SXNBdmFpbGFibGUoaXNBdmFpbGFibGUpIHtcbiAgICAgICAgdGhpcy5faXNTY29yZUVub3VnaEZvclRlbGVwb3J0ID0gaXNBdmFpbGFibGU7XG4gICAgICAgIHRoaXMuX2lzVGVsZXBvcnRNb2RlID0gdHJ1ZTtcbiAgICB9LFxuXG5cbiAgICBvbkZlYXR1cmVSZXN1bHQobnVtYmVyc0FycmF5KSB7XG4gICAgICAgIG51bWJlcnNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdGVtcENvYWxpdGlvbkFycmF5LnB1c2godGhpcy5fYmxvY2tzQXJyYXlbZWxlbWVudFsxXV1bZWxlbWVudFswXV0pOyAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZpbmFsQ2hlY2tpbmcoKTtcbiAgICB9LFxuXG4gICAgb25UZWxlcG9ydGF0aW9uQ29tcGxldGUoKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RvcFN1cGVyQWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3JlZ3VsYXJpemVUcmFuc2ZlcnJlZEJsb2NrcygpO1xuICAgIH0sXG5cbiAgICBvblN0YXJ0VGVsZXBvcnRhdGlvbihmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIHRoaXMuX2lzVGVsZXBvcnRNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2ZpcnN0LmlJXVtmaXJzdC5pSl0gPSBzZWNvbmQ7XG4gICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W3NlY29uZC5pSV1bc2Vjb25kLmlKXSA9IGZpcnN0O1xuICAgICAgICBbZmlyc3QuaUksIHNlY29uZC5pSV0gPSBbc2Vjb25kLmlJLCBmaXJzdC5pSV07XG4gICAgICAgIFtmaXJzdC5pSiwgc2Vjb25kLmlKXSA9IFtzZWNvbmQuaUosIGZpcnN0LmlKXTtcbiAgICAgICAgdGhpcy5fcmVzZXRDb2FsaXRpb24oKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==