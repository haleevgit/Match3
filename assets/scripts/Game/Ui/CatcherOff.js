//#region classes-helpers
import GameEvent from 'GameEvent';
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        inputCatcher: { default: null, type: cc.Node },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        this._handleSubscription(true);
        this.inputCatcher.actived = false;
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

        cc.systemEvent[func](GameEvent.BLOCK_CHOSEN, this.onBlockChosen, this);
    },
    //#region event handlers
    onBlockChosen() {
        this.inputCatcher.actived = true;
    },
    //#endregion
});
