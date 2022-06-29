//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        activated: {
            default: false,
            notify(old) {
                for (let child of this.node._children) {
                    child.active = this.activated;
                }

                this.onSwitchActiveCallback instanceof Function && this.onSwitchActiveCallback(this.activated);
            },
            tooltip: 'индикатор активности, при изменении активирует/ деактивирует детские ноды',
        },
        //#endregion
        //#region public fields and properties
        //#endregion
        //#region private fields and properties
        //#endregion
    },

    editor: {
        menu: 'Ui/IScreen',
    },

    //#region life-cycle callbacks
    onLoad() {
        this.activated = false;
        this.node.opacity = 0;
    },
    //#endregion

    //#region public methods
    show(time = 0.5) {
        this.activated = true;
        const showTween = pg.tweenManager.add(this.node, { opacity: 255 }, time);

        return showTween;
    },

    hide(time = 0.5) {
        const hideTween = pg.tweenManager.add(this.node, { opacity: 0 }, time);
        hideTween.addCompleteCallback(() => {
            this.activated = false;
        });

        return hideTween;
    },
    //#endregion

    //#region private methods
    //#endregion

    //#region event handlers
    onSwitchActiveCallback: null,
    //#endregion
});
