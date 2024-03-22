
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/ColumnEraser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvQ29sdW1uRXJhc2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJGZWF0dXJlIiwiX2xvZ2ljIiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiLCJ4Q29vcmQiLCJqIiwieUNvb3JkIiwiZWxlbWVudHNGb3JEZWxldGluZyIsInB1c2giLCJvbkluaXRpYWxpemluZ0V2ZW50IiwiY29uc29sZSIsImxvZyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkZFQVRVUkVfUkVTVUxUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNDLG1CQURKO0VBR0w7RUFJQUMsTUFQSyxrQkFPRUMsaUJBUEYsRUFPcUJDLFVBUHJCLEVBT2lDQyxXQVBqQyxFQU84QztJQUMvQyxJQUFNQyxNQUFNLEdBQUdILGlCQUFpQixDQUFDLENBQUQsQ0FBaEM7O0lBQ0EsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixXQUFwQixFQUFpQ0UsQ0FBQyxJQUFJLENBQXRDLEVBQXlDO01BQ3JDLElBQU1DLE1BQU0sR0FBR0QsQ0FBZjtNQUNBLEtBQUtFLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixDQUFDLENBQUNKLE1BQUQsQ0FBRCxFQUFXLENBQUNFLE1BQUQsQ0FBWCxDQUE5QjtJQUNIO0VBQ0osQ0FiSTtFQWVMRyxtQkFmSywrQkFlZVIsaUJBZmYsRUFla0NDLFVBZmxDLEVBZThDQyxXQWY5QyxFQWUyRDtJQUM1RCxJQUFHLENBQUNGLGlCQUFELElBQXNCLENBQUNFLFdBQXZCLElBQXNDLENBQUNELFVBQTFDLEVBQ0lRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaOztJQUVKLEtBQUtYLE1BQUwsQ0FBWUMsaUJBQVosRUFBK0JDLFVBQS9CLEVBQTJDQyxXQUEzQzs7SUFFQU4sRUFBRSxDQUFDZSxXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLGNBQTlCLEVBQThDLEtBQUtSLG1CQUFuRDtJQUNBLEtBQUtBLG1CQUFMLEdBQTJCLEVBQTNCO0VBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnRmVhdHVyZSc7XG4vLyNlbmRyZWdpb25cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBGZWF0dXJlLFxuICBcbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcblxuXG5cbiAgICBfbG9naWMoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHhDb29yZCA9IGZlYXR1cmVDb29yZGluYXRlWzFdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkSGVpZ2h0OyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IGo7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzRm9yRGVsZXRpbmcucHVzaChbW3hDb29yZF0sIFt5Q29vcmRdXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Jbml0aWFsaXppbmdFdmVudChmZWF0dXJlQ29vcmRpbmF0ZSwgZmllbGRXaWR0aCwgZmllbGRIZWlnaHQpIHtcbiAgICAgICAgaWYoIWZlYXR1cmVDb29yZGluYXRlIHx8ICFmaWVsZEhlaWdodCB8fCAhZmllbGRXaWR0aClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGVub3VnaCBkYXRhIGZvciBpbml0aWFsaXppbmchISFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5fbG9naWMoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KTtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5GRUFUVVJFX1JFU1VMVCwgdGhpcy5lbGVtZW50c0ZvckRlbGV0aW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50c0ZvckRlbGV0aW5nID0gW107XG4gICAgfVxuIH0pO1xuIFxuIl19