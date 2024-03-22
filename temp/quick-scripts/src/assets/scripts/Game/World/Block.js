"use strict";
cc._RF.push(module, '69ae1uVFftP3KQP8UL7bcQI', 'Block');
// scripts/Game/World/Block.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

var _InputDirection = _interopRequireDefault(require("InputDirection"));

var _BombType = _interopRequireDefault(require("BombType"));

var _TeleportAnimationsType = _interopRequireDefault(require("../Enums/TeleportAnimationsType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    blue: {
      "default": null,
      type: cc.SpriteFrame
    },
    green: {
      "default": null,
      type: cc.SpriteFrame
    },
    purple: {
      "default": null,
      type: cc.SpriteFrame
    },
    red: {
      "default": null,
      type: cc.SpriteFrame
    },
    yellow: {
      "default": null,
      type: cc.SpriteFrame
    },
    inputCatcher: {
      "default": null,
      type: cc.Node
    },
    superAbility: {
      "default": null,
      type: cc.Node
    },
    bombAbility: {
      "default": null,
      type: cc.SpriteFrame
    },
    tntAbility: {
      "default": null,
      type: cc.SpriteFrame
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _elementaryTransfer: {
      "default": 233,
      serializable: false
    },
    _sprite: {
      "default": null,
      serializable: false
    },
    _superAbility: {
      "default": _BombType["default"].None,
      serializable: false
    },
    _choosingTeleportAnimation: {
      "default": 'choosing_teleport'
    },
    _acceptedTeleportAnimation: {
      "default": 'accepted_teleport'
    },
    _initialScale: {
      "default": cc.v2(0, 0),
      serializable: false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this._sprite = this.node.getComponent(cc.Sprite);
    this.node.transferred = 0;
    this._initialScale.x = this.node.scaleX;
    this._initialScale.y = this.node.scaleY;

    this._chooseBlockColor();
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].TIME_TO_FALL, this.onTimeToFall, this);
    cc.systemEvent[func](_GameEvent["default"].CHOOSE_COLOR_BLOCK, this.onChooseColorBlock, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_BOMB_DONE, this.onBlockBombChosen, this);
    cc.systemEvent[func](_GameEvent["default"].COLUMN_ERASER_DONE, this.onColumnEraserDone, this);
    cc.systemEvent[func](_GameEvent["default"].CREATE_SUPER_BLOCK, this.onCreateSuperBlock, this);
    cc.systemEvent[func](_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this.onChangeBlockAnimation, this);
    cc.systemEvent[func](_GameEvent["default"].START_TELEPORTATION, this.onStartTeleportation, this);
  },
  _chooseBlockColor: function _chooseBlockColor() {
    switch (this.node.kind) {
      case _BlockColorType["default"].Blue:
        this.node.getComponent(cc.Sprite).spriteFrame = this.blue;
        this._sprite.spriteFrame = this.blue;
        break;

      case _BlockColorType["default"].Green:
        this._sprite.spriteFrame = this.green;
        break;

      case _BlockColorType["default"].Purple:
        this._sprite.spriteFrame = this.purple;
        break;

      case _BlockColorType["default"].Red:
        this._sprite.spriteFrame = this.red;
        break;

      case _BlockColorType["default"].Yellow:
        this._sprite.spriteFrame = this.yellow;
        break;
    }
  },
  _stopBlockAnimation: function _stopBlockAnimation() {
    this.node.getComponent(cc.Animation).stop();
    this.node.rotation = 0;
    this.node.scaleX = this._initialScale.x;
    this.node.scaleY = this._initialScale.y;
  },
  //#region event handlers
  onTimeToFall: function onTimeToFall() {
    var transferred = this.node.transferred;

    if (transferred > 0) {
      this.node.opacity = 255;

      pg.tweenManager.add(this.node, {
        y: this.node.y - this._elementaryTransfer * transferred
      }, 0.1 * transferred).onComplete = function () {
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_FALL, transferred);
      };
    }
  },
  onChooseColorBlock: function onChooseColorBlock(id, kind) {
    if (id !== this.node.id) return;
    this.node.kind = kind;

    this._chooseBlockColor();
  },
  onBlockBombChosen: function onBlockBombChosen(id) {
    if (this.node.id !== id) return;
    this.superAbility.active = false;
  },
  onColumnEraserDone: function onColumnEraserDone(id) {
    if (this.node.id !== id) return;
    this.superAbility.active = false;
  },
  onCreateSuperBlock: function onCreateSuperBlock(id, kindAbility) {
    if (this.node.id !== id) return;
    var frameAbility = this.bombAbility;

    switch (kindAbility) {
      case _BlockColorType["default"].Bomb:
        this.node.kind = _BlockColorType["default"].Bomb;
        this.superAbility.scale *= 1.5;
        break;

      case _BlockColorType["default"].ColumnEraser:
        this.node.kind = _BlockColorType["default"].ColumnEraser;
        frameAbility = this.tntAbility;
        break;
    }

    this.superAbility.active = true;
    this.superAbility.getComponent(cc.Sprite).spriteFrame = frameAbility;
  },
  onChangeBlockAnimation: function onChangeBlockAnimation(coords, animationType) {
    if (this.node.iI === coords.x && this.node.iJ === coords.y) {
      var animationName;

      switch (animationType) {
        case _TeleportAnimationsType["default"].Choosing:
          animationName = this._choosingTeleportAnimation;
          break;

        case _TeleportAnimationsType["default"].Accepted:
          animationName = this._acceptedTeleportAnimation;
          break;

        case _TeleportAnimationsType["default"].None:
          this._stopBlockAnimation();

          return;
      }

      this.node.getComponent(cc.Animation).play(animationName);
    }
  },
  onStartTeleportation: function onStartTeleportation(first, second, firstCoord, secondCoord) {
    var isTeleportNeeded = false;
    var coordTransfer = secondCoord;

    if (this.node.id === first.id) {
      isTeleportNeeded = true;
    } else if (this.node.id === second.id) {
      coordTransfer = firstCoord;
      isTeleportNeeded = true;
    }

    if (isTeleportNeeded) {
      this._stopBlockAnimation();

      pg.tweenManager.add(this.node, {
        y: coordTransfer.y,
        x: coordTransfer.x
      }, 0.1).onComplete = function () {
        cc.systemEvent.emit(_GameEvent["default"].TELEPORTATION_COMPLETE);
      };
    }
  } //#endregion

});

cc._RF.pop();