//#region classes-helpers
import GameEvent from 'GameEvent';
//#endregion
 
cc.Class({
    extends: cc.Component,
 
    properties: {
        //#region editors fields and properties
        initializingEvent: { default: GameEvent.BOMB_IS_AVAILABLE, type: GameEvent },
        scoreForInitializing: { default: 0, type: cc.Integer },

        elementsForDeleting: {default: [], type: Array},
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
 
    //#region private methods
    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';
 
        cc.systemEvent[func](this.initializingEvent, this.onInitializingEvent, this);
        cc.systemEvent[func](GameEvent.CHECK_SCORES_FOR_ABILITY, this.onCheckScoreForAbility, this);
    },

    onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
        if(!featureCoordinate || !fieldHeight || !fieldWidth)
            console.log("Not enough data for initializing!!!");

        return this._elementsForDeleting
    },

    onCheckScoreForAbility(kindAbility) {
        cc.systemEvent.emit(GameEvent.IS_SCORE_ENOUGH, kindAbility, this.scoreForInitializing);
    }
 });
 
