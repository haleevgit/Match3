import GameEvent from 'GameEvent';

import InputDirection from 'InputDirection';
import InputType from 'InputType';

//#region classes-helpers

//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        direction: {
            default: InputDirection.None,
            type: InputDirection,
            tooltip: 'место откуда пришел инпут, по энаму InputDirection',
        },
        target: {
            default: null,
            type: cc.Component,
            tooltip: 'компонента, которая будет передана в команду. В команде можно будет использовать ее методы',
        },

        analyticsArea: '',
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        //#endregion
    },

    editor: {
        menu: 'Input/InputCatcher',
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
    _handleSubscription(activated) {
        const func = activated ? 'on' : 'off';

        this.node[func](cc.Node.EventType.TOUCH_START, this.onDown, this);
        this.node[func](cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
        this.node[func](cc.Node.EventType.TOUCH_END, this.onUp, this);
        this.node[func](cc.Node.EventType.TOUCH_CANCEL, this.onUp, this);
    },
    //#endregion

    //#region event handlers
    onDown(event) {
        cc.systemEvent.emit(GameEvent.INPUT, InputType.Down, this.direction, event.touch, this, this.target);
    },

    onMove(event) {
        cc.systemEvent.emit(GameEvent.INPUT, InputType.Move, this.direction, event.touch, this, this.target);
    },

    onUp(event) {
        cc.systemEvent.emit(GameEvent.INPUT, InputType.Up, this.direction, event.touch, this, this.target);
    },

    //#endregion
});
