import GameEvent from 'GameEvent';
//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _inputCatcher: {
            default: null,
            serializable: false,
        },
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        if (window.AD_TYPE !== 'cross-promo') {
            this.node.active = false;
        } else {
            if (!window.IS_END_CARD) {
                this._hadleSubscription(true);

                this._inputCatcher = this.getComponent('InputCatcher');
                this._inputCatcher.enabled = false;

                this.node.opacity = 0;

                this.scheduleOnce(() => {
                    this._enableCross();
                }, 4);
            }
        }
    },
    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    _hadleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.FIRST_TAP, this.onFirstTap, this);
    },

    _enableCross() {
        if (this.node.opacity === 0 && !this._inputCatcher.enabled) {
            this.node.opacity = 255;
            this._inputCatcher.enabled = true;
        }
    },
    //#endregion

    //#region event handlers
    onFirstTap() {
        this._enableCross();
    },
    //#endregion
});
