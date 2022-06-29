import GameEvent from 'GameEvent';

import GameObject from 'GameObject';
import GameObjectType from 'GameObjectType';

//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        PREVIEW: {
            default: false,
            editorOnly: true,
            tooltip: 'показать все типы объектов и префабы к ним',
        },

        gameObjectType: {
            default: GameObjectType.None,
            type: GameObjectType,
            notify(old) {
                if (this.gameObjectType !== GameObjectType.None) {
                    if (this._convertGameObjectType.indexOf(this.gameObjectType) === -1) {
                        this._convertGameObjectType.push(this.gameObjectType);
                        this._prefabs.push(null);
                    }
                    this.prefab = this._prefabs[this._convertGameObjectType.indexOf(this.gameObjectType)];

                    const oldIndex = this._convertGameObjectType.indexOf(old);

                    if (oldIndex > -1) {
                        const oldPrefab = this._prefabs[oldIndex];

                        if (oldPrefab === null) {
                            this._prefabs.splice(oldIndex, 1);
                            this._convertGameObjectType.splice(oldIndex, 1);
                        }
                    }
                }
            },
            serializable: false,
            tooltip: 'тип объекта для привязки префаба',
        },

        prefab: {
            default: null,
            type: cc.Prefab,
            notify() {
                if (this.gameObjectType !== GameObjectType.None && (this.prefab instanceof cc.Prefab || this.prefab === null)) {
                    this._prefabs[this._convertGameObjectType.indexOf(this.gameObjectType)] = this.prefab;
                }
            },
            visible() {
                return this.gameObjectType !== GameObjectType.None;
            },
            serializable: false,
            tooltip: 'префаб для объекта',
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
        convertGameObjectType: {
            get() {
                return this._convertGameObjectType;
            },
            type: [GameObjectType],
            visible() {
                return this.PREVIEW;
            },
        },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _pools: { default: null, serializable: false },
        _prefabs: { default: [], type: [cc.Prefab] },
        _convertGameObjectType: { default: [], type: [GameObjectType] },
        //#endregion
    },

    editor: {
        menu: 'GameObject/GameObjectManager',
    },

    //#region life-cycle callbacks
    onLoad() {
        this._initPools();

        cc.systemEvent.on(GameEvent.CREATE_GAME_OBJECT, this.onCreateGameObject, this);
    },
    //#endregion

    //#region public methods
    getPrefab(gameObjectType) {
        if (this.convertGameObjectType.indexOf(gameObjectType) !== -1) {
            return this.prefabs[this.convertGameObjectType.indexOf(gameObjectType)];
        }

        return null;
    },

    getPrefabPool(gameObjectType) {
        let pool = null;

        if (this._pools[gameObjectType]) {
            pool = this._pools[gameObjectType];
        }

        return pool;
    },
    //#endregion

    //#region private methods
    _initPools() {
        this._pools = {};

        if (!pg.poolManager) {
            this.addComponent(pg.PoolManager);
        }

        this.prefabs.forEach((prefab, index, array) => {
            if (prefab instanceof cc.Prefab) {
                this._pools[this.convertGameObjectType[index]] = pg.poolManager.poolForObject(prefab);
            }
        });
    },
    //#endregion

    //#region event handlers
    onCreateGameObject(type, preAction, callback) {
        const pool = this.getPrefabPool(type);

        let go = null;
        let gon = null;

        if (pool) {
            pool.pop((node) => {
                gon = node;
                go = node.getComponent(GameObject);

                preAction instanceof Function && preAction(go, gon);
            });
        }

        callback instanceof Function && callback(go, gon);
    },
    //#endregion
});
