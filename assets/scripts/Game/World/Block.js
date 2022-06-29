//#region classes-helpers
import GameEvent from 'GameEvent';
import BlockColorType from 'BlockColorType';
import InputDirection from 'InputDirection';
import BombType from 'BombType';
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
        //#endregion
    },

    //#region life-cycle callbacks

    onEnable() {
        this._handleSubscription(true);

        this._sprite = this.node.getComponent(cc.Sprite);

        this._chooseBlockColor();
    },

    onDisable() {
        this._handleSubscription(false);
    },

    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.TIME_TO_FALL, this.onTimeToFall, this);
        cc.systemEvent[func](GameEvent.CHOOSE_COLOR_BLOCK, this.onChooseColorBlock, this);
        cc.systemEvent[func](GameEvent.BLOCK_BOMB_CHOSEN, this.onBlockBombChosen, this);
        cc.systemEvent[func](GameEvent.CREATE_SUPER_BLOCK, this.onCreateSuperBlock, this);
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

    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    //#endregion

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

    onBlockBombChosen() {
        this.superAbility.active = false;
    },

    onCreateSuperBlock(id, kindAbility) {
        if (this.node.id !== id) return;

        let frameAbility = this.bombAbility;
        this.node.kind = BlockColorType.Bomb;
        this.superAbility.scale *= 1.5;
        if (kindAbility === BombType.Tnt) {
            frameAbility = this.tntAbility;
            this.node.kind = BlockColorType.Tnt;
            this.superAbility.scale /= 1.5;
        }
        this.superAbility.active = true;
        this.superAbility.getComponent(cc.Sprite).spriteFrame = frameAbility;
    },

    //#endregion
});
