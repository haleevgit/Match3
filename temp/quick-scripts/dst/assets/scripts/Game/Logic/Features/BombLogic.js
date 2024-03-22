
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/BombLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvQm9tYkxvZ2ljLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJGZWF0dXJlIiwiX2xvZ2ljIiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiLCJpSSIsImlKIiwiaSIsImoiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJlbGVtZW50c0ZvckRlbGV0aW5nIiwicHVzaCIsIm9uSW5pdGlhbGl6aW5nRXZlbnQiLCJjb25zb2xlIiwibG9nIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiRkVBVFVSRV9SRVNVTFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFGQTtBQUdBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0MsbUJBREo7RUFHTDtFQUVBQyxNQUxLLGtCQUtFQyxpQkFMRixFQUtxQkMsVUFMckIsRUFLaUNDLFdBTGpDLEVBSzhDO0lBQy9DLElBQU1DLEVBQUUsR0FBR0gsaUJBQWlCLENBQUMsQ0FBRCxDQUE1QjtJQUNBLElBQU1JLEVBQUUsR0FBR0osaUJBQWlCLENBQUMsQ0FBRCxDQUE1Qjs7SUFDQSxLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBQyxDQUFyQixFQUF3QkEsQ0FBQyxJQUFJLENBQTdCLEVBQWdDO01BQzVCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFDLENBQXJCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7UUFDNUIsSUFBTUMsTUFBTSxHQUFHSCxFQUFFLEdBQUdFLENBQXBCO1FBQ0EsSUFBTUUsTUFBTSxHQUFHTCxFQUFFLEdBQUdFLENBQXBCOztRQUNBLElBQUksQ0FBQyxDQUFELEdBQU1HLE1BQU4sSUFBaUJBLE1BQU0sR0FBR04sV0FBMUIsSUFBeUMsQ0FBQyxDQUFELEdBQUtLLE1BQTlDLElBQXlEQSxNQUFNLEdBQUdOLFVBQXRFLEVBQWtGO1VBQzlFLEtBQUtRLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixDQUFDLENBQUNILE1BQUQsQ0FBRCxFQUFXLENBQUNDLE1BQUQsQ0FBWCxDQUE5QjtRQUNIO01BQ0o7SUFDSjtFQUNKLENBakJJO0VBbUJMRyxtQkFuQkssK0JBbUJlWCxpQkFuQmYsRUFtQmtDQyxVQW5CbEMsRUFtQjhDQyxXQW5COUMsRUFtQjJEO0lBQzVELElBQUcsQ0FBQ0YsaUJBQUQsSUFBc0IsQ0FBQ0UsV0FBdkIsSUFBc0MsQ0FBQ0QsVUFBMUMsRUFDSVcsT0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVo7O0lBRUosS0FBS2QsTUFBTCxDQUFZQyxpQkFBWixFQUErQkMsVUFBL0IsRUFBMkNDLFdBQTNDOztJQUVBTixFQUFFLENBQUNrQixXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLGNBQTlCLEVBQThDLEtBQUtSLG1CQUFuRDtJQUNBLEtBQUtBLG1CQUFMLEdBQTJCLEVBQTNCO0VBQ0g7QUEzQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnRmVhdHVyZSc7XG4vLyNlbmRyZWdpb25cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBGZWF0dXJlLFxuICBcbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcblxuICAgIF9sb2dpYyhmZWF0dXJlQ29vcmRpbmF0ZSwgZmllbGRXaWR0aCwgZmllbGRIZWlnaHQpIHtcbiAgICAgICAgY29uc3QgaUkgPSBmZWF0dXJlQ29vcmRpbmF0ZVswXTtcbiAgICAgICAgY29uc3QgaUogPSBmZWF0dXJlQ29vcmRpbmF0ZVsxXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPiAtMjsgaSAtPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA+IC0yOyBqIC09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBpSiAtIGo7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gaUkgLSBpO1xuICAgICAgICAgICAgICAgIGlmICgtMSA8ICB5Q29vcmQgJiYgIHlDb29yZCA8IGZpZWxkSGVpZ2h0ICYmIC0xIDwgeENvb3JkICAmJiB4Q29vcmQgPCBmaWVsZFdpZHRoKSB7ICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzRm9yRGVsZXRpbmcucHVzaChbW3hDb29yZF0sIFt5Q29vcmRdXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uSW5pdGlhbGl6aW5nRXZlbnQoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KSB7XG4gICAgICAgIGlmKCFmZWF0dXJlQ29vcmRpbmF0ZSB8fCAhZmllbGRIZWlnaHQgfHwgIWZpZWxkV2lkdGgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZGF0YSBmb3IgaW5pdGlhbGl6aW5nISEhXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuX2xvZ2ljKGZlYXR1cmVDb29yZGluYXRlLCBmaWVsZFdpZHRoLCBmaWVsZEhlaWdodCk7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuRkVBVFVSRV9SRVNVTFQsIHRoaXMuZWxlbWVudHNGb3JEZWxldGluZyk7XG4gICAgICAgIHRoaXMuZWxlbWVudHNGb3JEZWxldGluZyA9IFtdO1xuICAgIH1cbiB9KTtcbiBcbiJdfQ==