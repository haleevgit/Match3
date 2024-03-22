
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/BombShopInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b7778tJ8RF5Yl8nwRWexWY', 'BombShopInputCommand');
// scripts/Plugins/Input/Commands/BombShopInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BombShopInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(BombShopInputCommand, _IInputCommand);

  function BombShopInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = BombShopInputCommand.prototype;

  _proto.destroyTouch = function destroyTouch(touch) {
    _IInputCommand.prototype.destroyTouch.call(this, touch);

    this._currentTouch = null;
  };

  _proto.onDown = function onDown(touch, place, target, c4, c5) {
    cc.systemEvent.emit(_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, _BlockColorType["default"].Bomb);
  };

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  return BombShopInputCommand;
}(_IInputCommand2["default"]);

var _default = BombShopInputCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvQm9tYlNob3BJbnB1dENvbW1hbmQuanMiXSwibmFtZXMiOlsiQm9tYlNob3BJbnB1dENvbW1hbmQiLCJtYW5hZ2VyIiwiZGVzdHJveVRvdWNoIiwidG91Y2giLCJfY3VycmVudFRvdWNoIiwib25Eb3duIiwicGxhY2UiLCJ0YXJnZXQiLCJjNCIsImM1IiwiY2MiLCJzeXN0ZW1FdmVudCIsImVtaXQiLCJHYW1lRXZlbnQiLCJDSEVDS19TQ09SRVNfRk9SX0FCSUxJVFkiLCJCbG9ja0NvbG9yVHlwZSIsIkJvbWIiLCJvbk1vdmUiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxvQkFBb0I7RUFBQTs7RUFDdEIsOEJBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7RUFIcUI7O0VBQUEsT0FLdEJDLFlBTHNCLEdBS3RCLHNCQUFhQyxLQUFiLEVBQW9CO0lBQ2hCLHlCQUFNRCxZQUFOLFlBQW1CQyxLQUFuQjs7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLElBQXJCO0VBQ0gsQ0FScUI7O0VBQUEsT0FVdEJDLE1BVnNCLEdBVXRCLGdCQUFPRixLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7SUFDakNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyx3QkFBOUIsRUFBd0RDLDBCQUFBLENBQWVDLElBQXZFO0VBQ0gsQ0FacUI7O0VBQUEsT0FjdEJDLE1BZHNCLEdBY3RCLGdCQUFPZCxLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCLENBQUUsQ0FkVDs7RUFBQSxPQWdCdEJXLElBaEJzQixHQWdCdEIsY0FBS2YsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBaEJQOztFQUFBO0FBQUEsRUFBc0NZLDBCQUF0QyxDQUExQjs7ZUFtQmVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICdCbG9ja0NvbG9yVHlwZSc7XG5cbmNvbnN0IEJvbWJTaG9wSW5wdXRDb21tYW5kID0gY2xhc3MgQm9tYlNob3BJbnB1dENvbW1hbmQgZXh0ZW5kcyBJSW5wdXRDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKG1hbmFnZXIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lUb3VjaCh0b3VjaCkge1xuICAgICAgICBzdXBlci5kZXN0cm95VG91Y2godG91Y2gpO1xuICAgICAgICB0aGlzLl9jdXJyZW50VG91Y2ggPSBudWxsO1xuICAgIH1cblxuICAgIG9uRG93bih0b3VjaCwgcGxhY2UsIHRhcmdldCwgYzQsIGM1KSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNIRUNLX1NDT1JFU19GT1JfQUJJTElUWSwgQmxvY2tDb2xvclR5cGUuQm9tYik7XG4gICAgfVxuXG4gICAgb25Nb3ZlKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvbWJTaG9wSW5wdXRDb21tYW5kO1xuIl19