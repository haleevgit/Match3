import GameEvent from 'GameEvent';
import UiScreenType from 'UiScreenType';

//#region classes-helpers
const ScreenShowSettings = cc.Class({
    name: 'ScreenStartSettings',

    properties: {
        type: {
            default: UiScreenType.None,
            type: UiScreenType,
            tooltip: 'тип экрана для создания на старте',
        },
        zIndex: {
            default: 0,
            tooltip: 'порядковый номер экрана для отрисовки. чем ниже номер, тем глубже он будет отрисован',
        },
        activateOnStart: {
            default: false,
            tooltip: 'активировать данный экран при старте?',
        },
        disableOnShow: {
            default: [],
            type: [UiScreenType],
            tooltip: 'какие экраны скрыть при активации данного экрана (не используется при активации экрана на старте)',
        },
    },
});
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties

        screenSettings: {
            default: [],
            type: [ScreenShowSettings],
            notify(oldValue) {
                const array = [];
                this.activateOnStart.forEach((el) => {
                    if (el.type === UiScreenType.None || !array.find((set) => set.type === el.type)) {
                        array.push(el);
                    }
                });

                if (oldValue.length !== array.length) {
                    this.activateOnStart = array;
                }
            },
            tooltip: 'определяет какие экраны должны быть созданы и активированы на старте',
        },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        this._handleSubscription(true);
        this.screenSettings
            .sort((a, b) => a.zIndex - b.zIndex)
            .forEach((el) => {
                cc.systemEvent.emit(GameEvent.TOGGLE_SCREEN, el.type, el.activateOnStart);
            });
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
    onShowScreen(screenType, isOff = true) {
        const settings = this.screenSettings.find((set) => set.type === screenType);
        if (!isOff) {
            cc.systemEvent.emit(GameEvent.TOGGLE_SCREEN, screenType, false);
            return;
        }
        if (settings) {
            settings.disableOnShow.forEach((disableScreenType) => {
                cc.systemEvent.emit(GameEvent.TOGGLE_SCREEN, disableScreenType, false);
            });
            cc.systemEvent.emit(GameEvent.TOGGLE_SCREEN, screenType, true);
        }
    },
    //#endregion
});
