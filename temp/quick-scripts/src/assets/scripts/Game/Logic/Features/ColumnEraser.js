"use strict";
cc._RF.push(module, 'da45aRNrDdKgKjDH7ijxVgc', 'ColumnEraser');
// scripts/Game/Logic/Features/ColumnEraser.js

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
    var xCoord = featureCoordinate[1];

    for (var j = 0; j < fieldHeight; j += 1) {
      var yCoord = j;
      this.elementsForDeleting.push([[xCoord], [yCoord]]);
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