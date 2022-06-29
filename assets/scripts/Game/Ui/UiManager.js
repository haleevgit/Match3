import GameEvent from 'GameEvent';
import UiScreenType from 'UiScreenType';
import IScreen from 'IScreen';
//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        PREVIEW: {
            default: false,
            editorOnly: true,
            tooltip: 'показать все типы экранов и префабы к ним',
        },

        screenType: {
            default: UiScreenType.None,
            type: UiScreenType,
            notify(old) {
                if (this.screenType !== UiScreenType.None) {
                    if (this._convertScreenType.indexOf(this.screenType) === -1) {
                        this._convertScreenType.push(this.screenType);
                        this._prefabs.push(null);
                    }

                    this.prefab = this._prefabs[this._convertScreenType.indexOf(this.screenType)];

                    const oldIndex = this._convertScreenType.indexOf(old);

                    if (oldIndex > -1) {
                        const oldPrefab = this._prefabs[oldIndex];

                        if (oldPrefab === null) {
                            this._prefabs.splice(oldIndex, 1);
                            this._convertScreenType.splice(oldIndex, 1);
                        }
                    }
                }
            },
            serializable: false,
            tooltip: 'тип экрана для привязки префаба',
        },

        prefab: {
            default: null,
            type: cc.Prefab,
            notify() {
                if (this.screenType !== UiScreenType.None && (this.prefab instanceof cc.Prefab || this.prefab === null)) {
                    this._prefabs[this._convertScreenType.indexOf(this.screenType)] = this.prefab;
                }
            },
            visible() {
                return this.screenType !== UiScreenType.None;
            },
            serializable: false,
            tooltip: 'префаб для экрана',
        },

        convertScreenType: {
            get() {
                return this._convertScreenType;
            },
            type: [UiScreenType],
            visible() {
                return this.PREVIEW;
            },
        },

        prefabs: {
            get() {
                return this._prefabs;
            },
            type: [cc.Prefab],
            visible() {
                return this.PREVIEW;
            },
        },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _screens: { default: null, serializable: false },
        _prefabs: { default: [], type: [cc.Prefab] },
        _convertScreenType: { default: [], type: [UiScreenType] },
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        this._screens = {};
        for (let i = 0; i < this._convertScreenType.length; i++) {
            const type = this._convertScreenType[i];
            this._screens[type] = null;
        }

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

        cc.systemEvent[func](GameEvent.TOGGLE_SCREEN, this.onToggleScreen, this);
    },
    //#endregion

    //#region event handlers
    onToggleScreen(screenType, isOn) {
        const screenIndex = this._convertScreenType.indexOf(screenType);
        let screen;

        if (screenIndex < 0 || !this._prefabs[screenIndex]) {
            return;
        }

        if (!this._screens[screenType]) {
            const prefab = this._prefabs[screenIndex];
            screen = cc.instantiate(prefab);
            screen.parent = this.node;

            this._screens[screenType] = screen;
        } else {
            screen = this._screens[screenType];
        }

        if (isOn && !screen.getComponent(IScreen).activated) {
            screen.getComponent(IScreen).show();
        } else if (!isOn && screen.getComponent(IScreen).activated) {
            screen.getComponent(IScreen).hide();
        }
    },
    //#endregion
});
