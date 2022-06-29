import RenderListType from 'RenderListType';
//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        order: {
            default: RenderListType.None,
            type: RenderListType,
            tooltip: 'глубина отрисовки эффекта, по RenderListType',
        },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        //#endregion
    },

    editor: {
        menu: 'ParticleEffects/Effect',
    },

    //#region life-cycle callbacks
    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    //#endregion

    //#region event handlers
    //#endregion
});
