import GameEvent from 'GameEvent';

import InputDirection from 'InputDirection';
import InputType from 'InputType';

import IInputCommand from 'IInputCommand';
import GameAreaInputCommand from 'GameAreaInputCommand';
import BombShopInputCommand from 'BombShopInputCommand';
import TeleportShopInputCommand from 'TeleportShopInputCommand';
import TntShopInputCommand from 'TntShopInputCommand';
import IngameButtonInputCommand from 'IngameButtonInputCommand';
import FakeScreenInputCommand from 'FakeScreenInputCommand';
import CrossPromoInputCommand from 'CrossPromoInputCommand';
import BlockInputCommand from 'BlockInputCommand';

//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        checkUserSleep: {
            default: true,
            tooltip: 'следить за бездействием игрока?',
        },
        tutorialTimeout: {
            default: 3,
            tooltip: 'временной интевал (сек), по истечении которого запустится обучение',
        },
        //#endregion

        //#region public fields and properties
        time: {
            get() {
                return this._time;
            },
            visible: false,
        },
        //#endregion

        //#region private fields and properties
        commands: { default: {}, visible: false, serializable: false },

        _isFirstTap: { default: true, serializable: false },
        _userSleepTime: { default: 0, serializable: false },

        _time: { default: 0, serializable: false },
        _isInput: { default: false, serializable: false },

        _isSleep: { default: false, serializable: false },
        //#endregion
    },

    editor: {
        menu: 'Input/InputManager',
    },

    //#region life-cycle callbacks
    onLoad() {
        cc.systemEvent.on(GameEvent.INPUT, this.onInput, this);

        this.commands[InputDirection.GameArea] = new GameAreaInputCommand(this);
        this.commands[InputDirection.BombShop] = new BombShopInputCommand(this);
        this.commands[InputDirection.TeleportShop] = new TeleportShopInputCommand(this);
        this.commands[InputDirection.TntShop] = new TntShopInputCommand(this);
        this.commands[InputDirection.IngameButton] = new IngameButtonInputCommand(this);
        this.commands[InputDirection.FakeScreen] = new FakeScreenInputCommand(this);
        this.commands[InputDirection.CrossPromoCross] = new CrossPromoInputCommand(this);
        this.commands[InputDirection.Block] = new BlockInputCommand(this);
    },

    //#endregion

    //#region public methods
    //#endregion

    //#region private methods

    //#endregion

    //#region event handlers
    onInput(type, area, touch, place, target) {
        const command = this.commands[area];

        this._userSleepTime = 0;
        this._isSleep = false;

        switch (type) {
            case InputType.Down:
                if (command) {
                    command.onDown(touch, place, target);
                }

                if (this._isFirstTap) {
                    this._isFirstTap = false;
                    cc.systemEvent.emit(GameEvent.FIRST_TAP);
                }

                this._isInput = true;
                break;

            case InputType.Move:
                if (command) {
                    command.onMove(touch, place, target);
                }
                break;

            case InputType.Up:
                if (command) {
                    command.onUp(touch, place, target);
                    this._isSleep = true;
                    this._isInput = false;
                }
                break;
        }
    },

    onDown(area, touch, place, target) {},
    onMove(area, touch, place, target) {},
    onUp(area, touch, place, target) {},
    //#endregion
});
