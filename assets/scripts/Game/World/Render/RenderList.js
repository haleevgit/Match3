import GameEvent from 'GameEvent';
import RenderListType from 'RenderListType';

//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        //#endregion

        //#region public fields and properties
        orders: {
            get() {
                return this._orders;
            },
            visible: false,
        },
        //#endregion

        //#region private fields and properties
        _orders: { default: null, serializable: false },
        //#endregion
    },

    //#region life-cycle callbacks
    onLoad() {
        this._orders = {};
        for (let i in RenderListType) {
            const key = RenderListType[i];
            if (key !== RenderListType.None) {
                const parent = new cc.Node(i + 'Parent');
                parent.parent = this.node;
                this._orders[key] = parent;
            }
        }

        cc.systemEvent.on(GameEvent.GET_GAME_OBJECT_PARENT, this.onGetGameObjectParent, this);
    },

    //#endregion

    //#region public methods
    getParent(key) {
        let parent = this._orders[key];

        if (!(parent instanceof cc.Node)) {
            parent = this._orders[RenderListType.Default];
        }

        return parent;
    },
    //#endregion

    //#region private methods
    //#endregion

    //#region event handlers
    onGetGameObjectParent(key, callback) {
        callback instanceof Function && callback(this.getParent(key));
    },
    //#endregion
});
