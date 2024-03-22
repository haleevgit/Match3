"use strict";
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