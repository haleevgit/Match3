
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/TeleportShopInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f11bhI/OhDzbfywTiIIQts', 'TeleportShopInputCommand');
// scripts/Plugins/Input/Commands/TeleportShopInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TeleportShopInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(TeleportShopInputCommand, _IInputCommand);

  function TeleportShopInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = TeleportShopInputCommand.prototype;

  _proto.destroyTouch = function destroyTouch(touch) {
    _IInputCommand.prototype.destroyTouch.call(this, touch);

    this._currentTouch = null;
  };

  _proto.onDown = function onDown(touch, place, target, c4, c5) {
    cc.systemEvent.emit(_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, _BlockColorType["default"].Teleport);
  };

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  return TeleportShopInputCommand;
}(_IInputCommand2["default"]);

var _default = TeleportShopInputCommand;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvVGVsZXBvcnRTaG9wSW5wdXRDb21tYW5kLmpzIl0sIm5hbWVzIjpbIlRlbGVwb3J0U2hvcElucHV0Q29tbWFuZCIsIm1hbmFnZXIiLCJkZXN0cm95VG91Y2giLCJ0b3VjaCIsIl9jdXJyZW50VG91Y2giLCJvbkRvd24iLCJwbGFjZSIsInRhcmdldCIsImM0IiwiYzUiLCJjYyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkNIRUNLX1NDT1JFU19GT1JfQUJJTElUWSIsIkJsb2NrQ29sb3JUeXBlIiwiVGVsZXBvcnQiLCJvbk1vdmUiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx3QkFBd0I7RUFBQTs7RUFDMUIsa0NBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7RUFIeUI7O0VBQUEsT0FLMUJDLFlBTDBCLEdBSzFCLHNCQUFhQyxLQUFiLEVBQW9CO0lBQ2hCLHlCQUFNRCxZQUFOLFlBQW1CQyxLQUFuQjs7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLElBQXJCO0VBQ0gsQ0FSeUI7O0VBQUEsT0FVMUJDLE1BVjBCLEdBVTFCLGdCQUFPRixLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7SUFDakNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyx3QkFBOUIsRUFBd0RDLDBCQUFBLENBQWVDLFFBQXZFO0VBQ0gsQ0FaeUI7O0VBQUEsT0FjMUJDLE1BZDBCLEdBYzFCLGdCQUFPZCxLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCLENBQUUsQ0FkTDs7RUFBQSxPQWdCMUJXLElBaEIwQixHQWdCMUIsY0FBS2YsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBaEJIOztFQUFBO0FBQUEsRUFBMENZLDBCQUExQyxDQUE5Qjs7ZUFtQmVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICdCbG9ja0NvbG9yVHlwZSc7XG5cbmNvbnN0IFRlbGVwb3J0U2hvcElucHV0Q29tbWFuZCA9IGNsYXNzIFRlbGVwb3J0U2hvcElucHV0Q29tbWFuZCBleHRlbmRzIElJbnB1dENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XG4gICAgfVxuXG4gICAgZGVzdHJveVRvdWNoKHRvdWNoKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3lUb3VjaCh0b3VjaCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUb3VjaCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0LCBjNCwgYzUpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hFQ0tfU0NPUkVTX0ZPUl9BQklMSVRZLCBCbG9ja0NvbG9yVHlwZS5UZWxlcG9ydCk7XG4gICAgfVxuXG4gICAgb25Nb3ZlKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlbGVwb3J0U2hvcElucHV0Q29tbWFuZDtcbiJdfQ==