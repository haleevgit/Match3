"use strict";
cc._RF.push(module, '110ebWVkl1OdIPvaRh59m8U', 'Teleport');
// scripts/Game/Logic/Features/Teleport.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _Feature = _interopRequireDefault(require("Feature"));

var _TeleportAnimationsType = _interopRequireDefault(require("TeleportAnimationsType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": _Feature["default"],
  properties: {
    _firstTeleportPosition: {
      "default": cc.v2(6, 4),
      serializable: false
    },
    _secondTeleportPosition: {
      "default": cc.v2(6, 7),
      serializable: false
    }
  },
  //#region life-cycle callbacks
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](this.initializingEvent, this.onInitializingEvent, this);
    cc.systemEvent[func](_GameEvent["default"].TELEPORTED_BLOCK_CHOSEN, this.onTeleportBlockChosen, this);
  },
  onTeleportBlockChosen: function onTeleportBlockChosen(block) {
    if (!this._firstBlock) {
      this._firstBlock = block;
      this._firstCoord = cc.v2(block.x, block.y);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._firstTeleportPosition, _TeleportAnimationsType["default"].None);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, cc.v2(block.iI, block.iJ), _TeleportAnimationsType["default"].Accepted);

      if (block.iJ === this._secondTeleportPosition.y) {
        this._secondTeleportPosition.x--;
      }

      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._secondTeleportPosition, _TeleportAnimationsType["default"].Choosing);
    } else {
      this._secondCoord = cc.v2(block.x, block.y);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._secondTeleportPosition, _TeleportAnimationsType["default"].None);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, cc.v2(block.iI, block.iJ), _TeleportAnimationsType["default"].Accepted);
      cc.systemEvent.emit(_GameEvent["default"].START_TELEPORTATION, this._firstBlock, block, this._firstCoord, this._secondCoord);
      this._firstBlock = false;
    }
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._firstTeleportPosition, _TeleportAnimationsType["default"].Choosing);
  }
});

cc._RF.pop();