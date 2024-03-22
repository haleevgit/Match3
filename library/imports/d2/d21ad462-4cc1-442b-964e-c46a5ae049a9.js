"use strict";
cc._RF.push(module, 'd21adRiTMFEK5ZOxGpa4Emp', 'BombLogic');
// scripts/Game/Logic/Features/BombLogic.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _Feature = _interopRequireDefault(require("Feature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": _Feature["default"],
  //#region life-cycle callbacks
  _logic: function _logic(featureCoordinate, fieldWidth, fieldHeight) {
    var iI = featureCoordinate[0];
    var iJ = featureCoordinate[1];

    for (var i = 1; i > -2; i -= 1) {
      for (var j = 1; j > -2; j -= 1) {
        var xCoord = iJ - j;
        var yCoord = iI - i;

        if (-1 < yCoord && yCoord < fieldHeight && -1 < xCoord && xCoord < fieldWidth) {
          this.elementsForDeleting.push([[xCoord], [yCoord]]);
        }
      }
    }
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    if (!featureCoordinate || !fieldHeight || !fieldWidth) console.log("Not enough data for initializing!!!");

    this._logic(featureCoordinate, fieldWidth, fieldHeight);

    cc.systemEvent.emit(_GameEvent["default"].FEATURE_RESULT, this.elementsForDeleting);
    this.elementsForDeleting = [];
  }
});

cc._RF.pop();