//#region classes-helpers
import GameEvent from 'GameEvent';
import Feature from 'Feature';
import TeleportAnimationsType from 'TeleportAnimationsType';
//#endregion
 
cc.Class({
    extends: Feature,

    properties: {
        _firstTeleportPosition: { default: cc.v2(6,4), serializable: false },
        _secondTeleportPosition: { default: cc.v2(6,7), serializable: false },
    },
  
    //#region life-cycle callbacks

    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';
 
        cc.systemEvent[func](this.initializingEvent, this.onInitializingEvent, this);
        cc.systemEvent[func](GameEvent.TELEPORTED_BLOCK_CHOSEN, this.onTeleportBlockChosen, this);
    },

    onTeleportBlockChosen(block) {
        if (!this._firstBlock) {
            this._firstBlock = block;
            this._firstCoord = cc.v2(block.x, block.y);
            cc.systemEvent.emit(GameEvent.CHANGE_BLOCK_ANIMATION, this._firstTeleportPosition, TeleportAnimationsType.None);
            cc.systemEvent.emit(GameEvent.CHANGE_BLOCK_ANIMATION, cc.v2(block.iI, block.iJ), TeleportAnimationsType.Accepted);
            if (block.iJ === this._secondTeleportPosition.y) {
                this._secondTeleportPosition.x --;
            }
            cc.systemEvent.emit(GameEvent.CHANGE_BLOCK_ANIMATION, this._secondTeleportPosition, TeleportAnimationsType.Choosing);
        } else {
            this._secondCoord = cc.v2(block.x, block.y);
            cc.systemEvent.emit(GameEvent.CHANGE_BLOCK_ANIMATION, this._secondTeleportPosition, TeleportAnimationsType.None);
            cc.systemEvent.emit(GameEvent.CHANGE_BLOCK_ANIMATION, cc.v2(block.iI, block.iJ), TeleportAnimationsType.Accepted);
            cc.systemEvent.emit(GameEvent.START_TELEPORTATION, this._firstBlock, block, this._firstCoord, this._secondCoord);
            this._firstBlock = false;
        }
    },

    onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
        cc.systemEvent.emit(GameEvent.CHANGE_BLOCK_ANIMATION, this._firstTeleportPosition, TeleportAnimationsType.Choosing);
    }
 });
 
