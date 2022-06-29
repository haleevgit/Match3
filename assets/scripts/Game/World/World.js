import GameEvent from 'GameEvent';

import GameObject from 'GameObject';
import GameObjectType from 'GameObjectType';

import RenderListType from 'RenderListType';
import RenderList from 'RenderList';

//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        data: {
            default: null,
            type: cc.JsonAsset,
            tooltip: 'json уровня',
        },
        //#endregion

        //#region public fields and properties
        isLoad: {
            default: false,
            serializable: false,
            visible: false,
            notify() {
                if (this.isLoad) {
                    cc.systemEvent.emit(GameEvent.WORLD_LOADED);
                }
            },
        },
        //#endregion

        //#region private fields and properties
        _isInitiated: { default: false, serializable: false },
        _data: { default: null, serializable: false },
        _render: { default: null, type: RenderList, serializable: false },
        _objectArray: { default: [], serializable: false },
        //#endregion
    },

    //#region life-cycle callbacks
    onLoad() {
        this._render = this.getComponent(RenderList) || this.addComponent(RenderList);

        this._setLevelData(this.data);
    },

    onEnable() {
        if (!this._isInitiated) {
            this.init();
        }

        this._handleSubscription(true);
    },

    onDisable() {
        this._handleSubscription(false);
    },
    //#endregion

    //#region public methods
    init() {
        this._loadLevel();

        this.isLoad = true;
        this._isInitiated = true;
    },

    createGameObject(type, position, info, callback) {
        cc.systemEvent.emit(
            GameEvent.CREATE_GAME_OBJECT,
            type,
            (go, gon) => {
                if (gon instanceof cc.Node && go instanceof GameObject) {
                    go.world = this;
                    go.node.setPosition(position);
                    gon.parent = this._render.getParent(go.order);

                    for (let key in info.initConfig) {
                        if (gon[key] !== undefined) {
                            gon[key] = info.initConfig[key];
                        }
                    }
                }
            },
            (go, gon) => {
                if (gon instanceof cc.Node && go instanceof GameObject) {
                    go.revive instanceof Function && go.revive();
                    go.specify instanceof Function && go.specify(info);
                    callback instanceof Function && callback(go, gon);

                    go.activated = true;

                    go.id = this._objectArray.length;
                    this._objectArray.push(go);
                }
            }
        );
    },

    deleteGameObject(go) {
        const index = this._objectArray.indexOf(go);

        this._objectArray.splice(index, 1);
    },
    //#endregion

    //#region private methods
    _handleSubscription(activate) {
        const func = activate ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.SET_LEVEL_DATA, this.onSetLevelData, this);
        cc.systemEvent[func](GameEvent.REFRESH_LEVEL, this.onRefreshLevel, this);
    },

    _loadLevel() {
        let level = this._data || [];

        for (let objectIndex in level) {
            const gameObjectData = level[objectIndex];
            const type = GameObjectType[gameObjectData.name];
            const position = cc.v2(gameObjectData.position.x, gameObjectData.position.y);
            const info = gameObjectData.specify || {};

            this.createGameObject(type, position, info);
        }
    },

    _clearLevel() {
        this._objectArray.forEach((go) => {
            go.activated = false;
        });
    },

    _setLevelData(levelData) {
        if (levelData instanceof cc.JsonAsset) {
            this._data = levelData.json;
        }
    },
    //#endregion

    //#region event handlers
    onSetLevelData(levelData) {
        this._setLevelData(levelData);
    },

    onRefreshLevel() {
        this._clearLevel();

        this._objectArray = [];
        this.scheduleOnce(() => {
            this._loadLevel();
            this.isLoad = true;
        });
    },
    //#endregion
});
