//#region classes-helpers
import GameEvent from 'GameEvent';
import BlockColorType from 'BlockColorType';
import InputDirection from 'InputDirection';
import BombType from 'BombType';
import TeleportAnimationsType from '../Enums/TeleportAnimationsType';
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        blue: { default: null, type: cc.SpriteFrame },
        green: { default: null, type: cc.SpriteFrame },
        purple: { default: null, type: cc.SpriteFrame },
        red: { default: null, type: cc.SpriteFrame },
        yellow: { default: null, type: cc.SpriteFrame },
        inputCatcher: { default: null, type: cc.Node },
        superAbility: { default: null, type: cc.Node },
        bombAbility: { default: null, type: cc.SpriteFrame },
        tntAbility: { default: null, type: cc.SpriteFrame },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _elementaryTransfer: { default: 233, serializable: false },
        _sprite: { default: null, serializable: false },
        _superAbility: { default: BombType.None, serializable: false },
        _choosingTeleportAnimation: {default: 'choosing_teleport'},
        _acceptedTeleportAnimation: {default: 'accepted_teleport'},
        _initialScale: { default: cc.v2(0,0), serializable: false },
        //#endregion
    },

    //#region life-cycle callbacks

    onEnable() {
        this._handleSubscription(true);

        this._sprite = this.node.getComponent(cc.Sprite);

        this.node.transferred = 0;

        this._initialScale.x = this.node.scaleX;  
        this._initialScale.y = this.node.scaleY;

        this._chooseBlockColor();

    },

    onDisable() {
        this._handleSubscription(false);
    },

    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.TIME_TO_FALL, this.onTimeToFall, this);
        cc.systemEvent[func](GameEvent.CHOOSE_COLOR_BLOCK, this.onChooseColorBlock, this);
        cc.systemEvent[func](GameEvent.BLOCK_BOMB_DONE, this.onBlockBombChosen, this);
        cc.systemEvent[func](GameEvent.COLUMN_ERASER_DONE, this.onColumnEraserDone, this);
        cc.systemEvent[func](GameEvent.CREATE_SUPER_BLOCK, this.onCreateSuperBlock, this);
        cc.systemEvent[func](GameEvent.CHANGE_BLOCK_ANIMATION, this.onChangeBlockAnimation, this);
        cc.systemEvent[func](GameEvent.START_TELEPORTATION, this.onStartTeleportation, this);
    },

    _chooseBlockColor() {
        switch (this.node.kind) {
            case BlockColorType.Blue:
                this.node.getComponent(cc.Sprite).spriteFrame = this.blue;
                this._sprite.spriteFrame = this.blue;
                break;
            case BlockColorType.Green:
                this._sprite.spriteFrame = this.green;
                break;
            case BlockColorType.Purple:
                this._sprite.spriteFrame = this.purple;
                break;
            case BlockColorType.Red:
                this._sprite.spriteFrame = this.red;
                break;
            case BlockColorType.Yellow:
                this._sprite.spriteFrame = this.yellow;
                break;
        }
    },

    _stopBlockAnimation() {
        this.node.getComponent(cc.Animation).stop()
        this.node.rotation = 0;
        this.node.scaleX = this._initialScale.x;
        this.node.scaleY = this._initialScale.y;
    },

    //#region event handlers
    onTimeToFall() {
        const transferred = this.node.transferred;
        if (transferred > 0) {
            this.node.opacity = 255;
            pg.tweenManager.add(this.node, { y: this.node.y - this._elementaryTransfer * transferred }, 0.1 * transferred).onComplete =
                () => {
                    cc.systemEvent.emit(GameEvent.BLOCK_FALL, transferred);
                };
        }
    },

    onChooseColorBlock(id, kind) {
        if (id !== this.node.id) return;
        this.node.kind = kind;
        this._chooseBlockColor();
    },

    onBlockBombChosen(id) {
        if (this.node.id !== id) 
            return
        this.superAbility.active = false;
    },

    onColumnEraserDone(id) {
        if (this.node.id !== id) 
            return
        this.superAbility.active = false;
    },

    onCreateSuperBlock(id, kindAbility) {
        if (this.node.id !== id)
            return;

        let frameAbility = this.bombAbility;
        switch (kindAbility) {
            case BlockColorType.Bomb:
                this.node.kind = BlockColorType.Bomb;
                this.superAbility.scale *= 1.5;                
                break;
            case BlockColorType.ColumnEraser:
                this.node.kind = BlockColorType.ColumnEraser;
                frameAbility = this.tntAbility;
                break;
        }

        this.superAbility.active = true;
        this.superAbility.getComponent(cc.Sprite).spriteFrame = frameAbility;
    },

    onChangeBlockAnimation(coords, animationType) {
        if(this.node.iI === coords.x && this.node.iJ === coords.y) {
            let animationName;
            switch (animationType) {
                case TeleportAnimationsType.Choosing:
                    animationName =  this._choosingTeleportAnimation;
                    break;
                case TeleportAnimationsType.Accepted:
                    animationName =  this._acceptedTeleportAnimation;
                    break;
                case TeleportAnimationsType.None:
                    this._stopBlockAnimation();
                    return
            }
            this.node.getComponent(cc.Animation).play(animationName);
        }    
    },

    onStartTeleportation(first, second, firstCoord, secondCoord) {
        let isTeleportNeeded = false;
        let coordTransfer = secondCoord;
        if (this.node.id === first.id) {
            isTeleportNeeded = true;
        } else if (this.node.id === second.id) {
            coordTransfer = firstCoord;
            isTeleportNeeded = true;
        }
        if (isTeleportNeeded) {
            this._stopBlockAnimation()
            
            pg.tweenManager.add(this.node, { y: coordTransfer.y, x: coordTransfer.x }, 0.1).onComplete =
                () => {
                    cc.systemEvent.emit(GameEvent.TELEPORTATION_COMPLETE);
                };
        }
    }



    //#endregion
});
