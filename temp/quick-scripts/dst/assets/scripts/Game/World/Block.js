
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/World/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvV29ybGQvQmxvY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibHVlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwiZ3JlZW4iLCJwdXJwbGUiLCJyZWQiLCJ5ZWxsb3ciLCJpbnB1dENhdGNoZXIiLCJOb2RlIiwic3VwZXJBYmlsaXR5IiwiYm9tYkFiaWxpdHkiLCJ0bnRBYmlsaXR5IiwiX2VsZW1lbnRhcnlUcmFuc2ZlciIsInNlcmlhbGl6YWJsZSIsIl9zcHJpdGUiLCJfc3VwZXJBYmlsaXR5IiwiQm9tYlR5cGUiLCJOb25lIiwiX2Nob29zaW5nVGVsZXBvcnRBbmltYXRpb24iLCJfYWNjZXB0ZWRUZWxlcG9ydEFuaW1hdGlvbiIsIl9pbml0aWFsU2NhbGUiLCJ2MiIsIm9uRW5hYmxlIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJ0cmFuc2ZlcnJlZCIsIngiLCJzY2FsZVgiLCJ5Iiwic2NhbGVZIiwiX2Nob29zZUJsb2NrQ29sb3IiLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiVElNRV9UT19GQUxMIiwib25UaW1lVG9GYWxsIiwiQ0hPT1NFX0NPTE9SX0JMT0NLIiwib25DaG9vc2VDb2xvckJsb2NrIiwiQkxPQ0tfQk9NQl9ET05FIiwib25CbG9ja0JvbWJDaG9zZW4iLCJDT0xVTU5fRVJBU0VSX0RPTkUiLCJvbkNvbHVtbkVyYXNlckRvbmUiLCJDUkVBVEVfU1VQRVJfQkxPQ0siLCJvbkNyZWF0ZVN1cGVyQmxvY2siLCJDSEFOR0VfQkxPQ0tfQU5JTUFUSU9OIiwib25DaGFuZ2VCbG9ja0FuaW1hdGlvbiIsIlNUQVJUX1RFTEVQT1JUQVRJT04iLCJvblN0YXJ0VGVsZXBvcnRhdGlvbiIsImtpbmQiLCJCbG9ja0NvbG9yVHlwZSIsIkJsdWUiLCJzcHJpdGVGcmFtZSIsIkdyZWVuIiwiUHVycGxlIiwiUmVkIiwiWWVsbG93IiwiX3N0b3BCbG9ja0FuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInN0b3AiLCJyb3RhdGlvbiIsIm9wYWNpdHkiLCJwZyIsInR3ZWVuTWFuYWdlciIsImFkZCIsIm9uQ29tcGxldGUiLCJlbWl0IiwiQkxPQ0tfRkFMTCIsImlkIiwiYWN0aXZlIiwia2luZEFiaWxpdHkiLCJmcmFtZUFiaWxpdHkiLCJCb21iIiwic2NhbGUiLCJDb2x1bW5FcmFzZXIiLCJjb29yZHMiLCJhbmltYXRpb25UeXBlIiwiaUkiLCJpSiIsImFuaW1hdGlvbk5hbWUiLCJUZWxlcG9ydEFuaW1hdGlvbnNUeXBlIiwiQ2hvb3NpbmciLCJBY2NlcHRlZCIsInBsYXkiLCJmaXJzdCIsInNlY29uZCIsImZpcnN0Q29vcmQiLCJzZWNvbmRDb29yZCIsImlzVGVsZXBvcnROZWVkZWQiLCJjb29yZFRyYW5zZmVyIiwiVEVMRVBPUlRBVElPTl9DT01QTEVURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUxBO0FBTUE7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsSUFBSSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FGRTtJQUdSQyxLQUFLLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJGLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUhDO0lBSVJFLE1BQU0sRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkgsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBSkE7SUFLUkcsR0FBRyxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FMRztJQU1SSSxNQUFNLEVBQUU7TUFBRSxXQUFTLElBQVg7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YW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICdCbG9ja0NvbG9yVHlwZSc7XG5pbXBvcnQgSW5wdXREaXJlY3Rpb24gZnJvbSAnSW5wdXREaXJlY3Rpb24nO1xuaW1wb3J0IEJvbWJUeXBlIGZyb20gJ0JvbWJUeXBlJztcbmltcG9ydCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlIGZyb20gJy4uL0VudW1zL1RlbGVwb3J0QW5pbWF0aW9uc1R5cGUnO1xuLy8jZW5kcmVnaW9uXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBibHVlOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIGdyZWVuOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHB1cnBsZTogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9LFxuICAgICAgICByZWQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSxcbiAgICAgICAgeWVsbG93OiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIGlucHV0Q2F0Y2hlcjogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5Ob2RlIH0sXG4gICAgICAgIHN1cGVyQWJpbGl0eTogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5Ob2RlIH0sXG4gICAgICAgIGJvbWJBYmlsaXR5OiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHRudEFiaWxpdHk6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHByaXZhdGUgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9lbGVtZW50YXJ5VHJhbnNmZXI6IHsgZGVmYXVsdDogMjMzLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9zcHJpdGU6IHsgZGVmYXVsdDogbnVsbCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfc3VwZXJBYmlsaXR5OiB7IGRlZmF1bHQ6IEJvbWJUeXBlLk5vbmUsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2Nob29zaW5nVGVsZXBvcnRBbmltYXRpb246IHtkZWZhdWx0OiAnY2hvb3NpbmdfdGVsZXBvcnQnfSxcbiAgICAgICAgX2FjY2VwdGVkVGVsZXBvcnRBbmltYXRpb246IHtkZWZhdWx0OiAnYWNjZXB0ZWRfdGVsZXBvcnQnfSxcbiAgICAgICAgX2luaXRpYWxTY2FsZTogeyBkZWZhdWx0OiBjYy52MigwLDApLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIHRoaXMubm9kZS50cmFuc2ZlcnJlZCA9IDA7XG5cbiAgICAgICAgdGhpcy5faW5pdGlhbFNjYWxlLnggPSB0aGlzLm5vZGUuc2NhbGVYOyAgXG4gICAgICAgIHRoaXMuX2luaXRpYWxTY2FsZS55ID0gdGhpcy5ub2RlLnNjYWxlWTtcblxuICAgICAgICB0aGlzLl9jaG9vc2VCbG9ja0NvbG9yKCk7XG5cbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LlRJTUVfVE9fRkFMTCwgdGhpcy5vblRpbWVUb0ZhbGwsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuQ0hPT1NFX0NPTE9SX0JMT0NLLCB0aGlzLm9uQ2hvb3NlQ29sb3JCbG9jaywgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5CTE9DS19CT01CX0RPTkUsIHRoaXMub25CbG9ja0JvbWJDaG9zZW4sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuQ09MVU1OX0VSQVNFUl9ET05FLCB0aGlzLm9uQ29sdW1uRXJhc2VyRG9uZSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DUkVBVEVfU1VQRVJfQkxPQ0ssIHRoaXMub25DcmVhdGVTdXBlckJsb2NrLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkNIQU5HRV9CTE9DS19BTklNQVRJT04sIHRoaXMub25DaGFuZ2VCbG9ja0FuaW1hdGlvbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TVEFSVF9URUxFUE9SVEFUSU9OLCB0aGlzLm9uU3RhcnRUZWxlcG9ydGF0aW9uLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX2Nob29zZUJsb2NrQ29sb3IoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5ub2RlLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuQmx1ZTpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5ibHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5HcmVlbjpcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdyZWVuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5QdXJwbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5wdXJwbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEJsb2NrQ29sb3JUeXBlLlJlZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnJlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuWWVsbG93OlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMueWVsbG93O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9zdG9wQmxvY2tBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKClcbiAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuX2luaXRpYWxTY2FsZS54O1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGVZID0gdGhpcy5faW5pdGlhbFNjYWxlLnk7XG4gICAgfSxcblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uVGltZVRvRmFsbCgpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSB0aGlzLm5vZGUudHJhbnNmZXJyZWQ7XG4gICAgICAgIGlmICh0cmFuc2ZlcnJlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgcGcudHdlZW5NYW5hZ2VyLmFkZCh0aGlzLm5vZGUsIHsgeTogdGhpcy5ub2RlLnkgLSB0aGlzLl9lbGVtZW50YXJ5VHJhbnNmZXIgKiB0cmFuc2ZlcnJlZCB9LCAwLjEgKiB0cmFuc2ZlcnJlZCkub25Db21wbGV0ZSA9XG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5CTE9DS19GQUxMLCB0cmFuc2ZlcnJlZCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNob29zZUNvbG9yQmxvY2soaWQsIGtpbmQpIHtcbiAgICAgICAgaWYgKGlkICE9PSB0aGlzLm5vZGUuaWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5ub2RlLmtpbmQgPSBraW5kO1xuICAgICAgICB0aGlzLl9jaG9vc2VCbG9ja0NvbG9yKCk7XG4gICAgfSxcblxuICAgIG9uQmxvY2tCb21iQ2hvc2VuKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuaWQgIT09IGlkKSBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLnN1cGVyQWJpbGl0eS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Db2x1bW5FcmFzZXJEb25lKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuaWQgIT09IGlkKSBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLnN1cGVyQWJpbGl0eS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25DcmVhdGVTdXBlckJsb2NrKGlkLCBraW5kQWJpbGl0eSkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmlkICE9PSBpZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgZnJhbWVBYmlsaXR5ID0gdGhpcy5ib21iQWJpbGl0eTtcbiAgICAgICAgc3dpdGNoIChraW5kQWJpbGl0eSkge1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5Cb21iOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5raW5kID0gQmxvY2tDb2xvclR5cGUuQm9tYjtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cGVyQWJpbGl0eS5zY2FsZSAqPSAxLjU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmtpbmQgPSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXI7XG4gICAgICAgICAgICAgICAgZnJhbWVBYmlsaXR5ID0gdGhpcy50bnRBYmlsaXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdXBlckFiaWxpdHkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdXBlckFiaWxpdHkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBmcmFtZUFiaWxpdHk7XG4gICAgfSxcblxuICAgIG9uQ2hhbmdlQmxvY2tBbmltYXRpb24oY29vcmRzLCBhbmltYXRpb25UeXBlKSB7XG4gICAgICAgIGlmKHRoaXMubm9kZS5pSSA9PT0gY29vcmRzLnggJiYgdGhpcy5ub2RlLmlKID09PSBjb29yZHMueSkge1xuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbk5hbWU7XG4gICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUuQ2hvb3Npbmc6XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWUgPSAgdGhpcy5fY2hvb3NpbmdUZWxlcG9ydEFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLkFjY2VwdGVkOlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lID0gIHRoaXMuX2FjY2VwdGVkVGVsZXBvcnRBbmltYXRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVGVsZXBvcnRBbmltYXRpb25zVHlwZS5Ob25lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQmxvY2tBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShhbmltYXRpb25OYW1lKTtcbiAgICAgICAgfSAgICBcbiAgICB9LFxuXG4gICAgb25TdGFydFRlbGVwb3J0YXRpb24oZmlyc3QsIHNlY29uZCwgZmlyc3RDb29yZCwgc2Vjb25kQ29vcmQpIHtcbiAgICAgICAgbGV0IGlzVGVsZXBvcnROZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkVHJhbnNmZXIgPSBzZWNvbmRDb29yZDtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pZCA9PT0gZmlyc3QuaWQpIHtcbiAgICAgICAgICAgIGlzVGVsZXBvcnROZWVkZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS5pZCA9PT0gc2Vjb25kLmlkKSB7XG4gICAgICAgICAgICBjb29yZFRyYW5zZmVyID0gZmlyc3RDb29yZDtcbiAgICAgICAgICAgIGlzVGVsZXBvcnROZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RlbGVwb3J0TmVlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wQmxvY2tBbmltYXRpb24oKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwZy50d2Vlbk1hbmFnZXIuYWRkKHRoaXMubm9kZSwgeyB5OiBjb29yZFRyYW5zZmVyLnksIHg6IGNvb3JkVHJhbnNmZXIueCB9LCAwLjEpLm9uQ29tcGxldGUgPVxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVEVMRVBPUlRBVElPTl9DT01QTEVURSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19