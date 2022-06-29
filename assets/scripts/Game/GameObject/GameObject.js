import GameEvent from 'GameEvent';

import GameObjectType from 'GameObjectType';
import RenderListType from 'RenderListType';
//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        activated: {
            default: false,
            tooltip: 'переключатель, при изменении статуса запускает все необходимые методы',
            notify(old) {
                if (this.activated !== old) {
                    this._isNeedToPool = !this.activated;

                    if (this._isNeedToPool) {
                        if (this.world) {
                            this.world.deleteGameObject(this);
                        }

                        const pooler = this.node.getComponent(pg.PoolerHelper);
                        if (pooler) {
                            pooler.returnToPool();
                        }
                    }
                }
            },
        },
        order: {
            default: RenderListType.Default,
            type: RenderListType,
            tooltip: 'глубина отрисовки объекта, по RenderListType',
        },
        //#endregion

        //#region public fields and properties
        world: { default: null, visible: false, serializable: false },
        type: {
            get() {
                return this._type;
            },
            visible: false,
        },
        id: { default: -1, visible: false, serializable: false },
        //#endregion

        //#region private fields and properties
        _type: {
            default: GameObjectType.None,
            type: GameObjectType,
            serializable: false,
        },

        _isNeedToPool: { default: false, serializable: false },

        _render: { default: null, serializable: false },
        //#endregion
    },

    editor: {
        menu: 'GameObject/GameObject',
    },

    //#region life-cycle callbacks
    onLoad() {
        this._init();
        this._initBody();
        this._initRender();
    },
    //#endregion

    //#region public methods
    // устанавливаем доп параметры объекта до добавления на сцену
    specify: null,

    // в этой функции приводим параметры к значениям для активного объекта
    revive() {
        this.activated = true;
    },

    // приводим параметры к значениям для "убитого" объекта
    kill() {
        this.activated = false;
    },

    screenIntersection() {
        const camera = cc.Camera.findCamera(this.node);
        const screenRect = new cc.Rect(0, 0, pg.settings.GAME_WIDTH, pg.settings.GAME_HEIGHT);

        const globalBoundingBox = this.node.getBoundingBoxToWorld();
        const worldToScreenMat = new cc.Mat4();
        camera.getWorldToScreenMatrix2D(worldToScreenMat);

        let screenBoundingBox = new cc.Rect();
        globalBoundingBox.transformMat4(screenBoundingBox, worldToScreenMat);

        const interRect = new cc.Rect();
        screenRect.intersection(interRect, screenBoundingBox);

        return interRect;
    },

    isIntersectScreen() {
        const intersection = this.screenIntersection();

        return intersection.width > 0 && intersection.height > 0;
    },
    //#endregion

    //#region private methods
    _init() {},
    _initBody() {},
    _initRender() {},
    //#endregion

    //#region event handlers
    //#endregion
});
