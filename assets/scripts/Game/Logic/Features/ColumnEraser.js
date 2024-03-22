//#region classes-helpers
import GameEvent from 'GameEvent';
import Feature from 'Feature';
//#endregion
 
cc.Class({
    extends: Feature,
  
    //#region life-cycle callbacks



    _logic(featureCoordinate, fieldWidth, fieldHeight) {
        const xCoord = featureCoordinate[1];
        for (let j = 0; j < fieldHeight; j += 1) {
            const yCoord = j;
            this.elementsForDeleting.push([[xCoord], [yCoord]]);
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
 
