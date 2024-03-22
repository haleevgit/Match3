cc.Class({
    extends: cc.Component,
 
    properties: {
        //#region editors fields and properties
        features: {default: [], type: cc.Node},
        //#endregion
    },
 
    //#region life-cycle callbacks
    onEnable() {
        this.node.children.forEach(element => {
            if(element) 
                element.active = false;
        });
        
        this.features.forEach(element => {
            if(element) 
                element.active = true;
        });
    },
});
 
