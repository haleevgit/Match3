//#region classes-helpers
import GameEvent from 'GameEvent';
import Feature from 'Feature';
//#endregion
 
cc.Class({
    extends: Feature,
  
    //#region life-cycle callbacks

    _logic(featureCoordinate, fieldWidth, fieldHeight) {
        const iI = featureCoordinate[0];
        const iJ = featureCoordinate[1];
        for (let i = 1; i > -2; i -= 1) {
            for (let j = 1; j > -2; j -= 1) {
                const xCoord = iJ - j;
                const yCoord = iI - i;
                if (-1 <  yCoord &&  yCoord < fieldHeight && -1 < xCoord  && xCoord < fieldWidth) {    
                    this.elementsForDeleting.push([[xCoord], [yCoord]]);
                }
            }
        }
    },

    onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
        if(!featureCoordinate || !fieldHeight || !fieldWidth)
            console.log("Not enough data for initializing!!!");
            
        this._logic(featureCoordinate, fieldWidth, fieldHeight);

        cc.systemEvent.emit(GameEvent.FEATURE_RESULT, this.elementsForDeleting);
        this.elementsForDeleting = [];
    }
 });
 
