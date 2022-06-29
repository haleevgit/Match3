//#region classes-helpers
import GameEvent from 'GameEvent';
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        block: { default: null, type: cc.Prefab },
        mask: { default: null, type: cc.Node },
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
        cc.systemEvent.emit(GameEvent.FIELD_ON, this.mask, this.block);
        this.inputCatcher.active = false;
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

        cc.systemEvent[func](GameEvent.STOP_INPUT, this.onStopInput, this);
        cc.systemEvent[func](GameEvent.BLOCK_CAN_BE_CHOSEN, this.onBlockCanBeChosen, this);
    },

    //#endregion

    //#region event handlers
    onStopInput() {
        this.inputCatcher.active = true;
    },

    onBlockCanBeChosen() {
        this.inputCatcher.active = false;
    },
    //#endregion
});
