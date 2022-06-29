//#region classes-helpers
import GameEvent from 'GameEvent';
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        textWin: { default: null, type: cc.SpriteFrame },
        textLose: { default: null, type: cc.SpriteFrame },
        text: { default: null, type: cc.Sprite },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        this._handleSubscription(true);
    },

    onDisable() {
        this._handleSubscription(false);
    },

    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.SHOW_SCREEN, this.onShowScreen, this);
    },
    //#endregion

    //#region event handlers
    onShowScreen(typeScreen, isShow, isWin = true) {
        if (isWin) {
            this.text.spriteFrame = this.textWin;
        } else {
            this.text.spriteFrame = this.textLose;
        }
    },
    //#endregion
});
