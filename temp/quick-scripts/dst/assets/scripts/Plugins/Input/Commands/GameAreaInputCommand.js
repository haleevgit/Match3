
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/GameAreaInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eb77TaoxxNnIaHn0+PDWVh', 'GameAreaInputCommand');
// scripts/Plugins/Input/Commands/GameAreaInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GameAreaInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(GameAreaInputCommand, _IInputCommand);

  function GameAreaInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = GameAreaInputCommand.prototype;

  _proto.destroyTouch = function destroyTouch(touch) {
    _IInputCommand.prototype.destroyTouch.call(this, touch);

    this._currentTouch = null;
  };

  _proto.onDown = function onDown(touch, place, target, c4, c5, kindAbility) {
    cc.systemEvent.emit(_GameEvent["default"].CREATE_SUPER_ABILITY, kindAbility);
    cc.log(this.node);
  };

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  return GameAreaInputCommand;
}(_IInputCommand2["default"]);

var _default = GameAreaInputCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvR2FtZUFyZWFJbnB1dENvbW1hbmQuanMiXSwibmFtZXMiOlsiR2FtZUFyZWFJbnB1dENvbW1hbmQiLCJtYW5hZ2VyIiwiZGVzdHJveVRvdWNoIiwidG91Y2giLCJfY3VycmVudFRvdWNoIiwib25Eb3duIiwicGxhY2UiLCJ0YXJnZXQiLCJjNCIsImM1Iiwia2luZEFiaWxpdHkiLCJjYyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkNSRUFURV9TVVBFUl9BQklMSVRZIiwibG9nIiwibm9kZSIsIm9uTW92ZSIsIm9uVXAiLCJJSW5wdXRDb21tYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQjtFQUFBOztFQUN0Qiw4QkFBWUMsT0FBWixFQUFxQjtJQUFBLE9BQ2pCLDBCQUFNQSxPQUFOLENBRGlCO0VBRXBCOztFQUhxQjs7RUFBQSxPQUt0QkMsWUFMc0IsR0FLdEIsc0JBQWFDLEtBQWIsRUFBb0I7SUFDaEIseUJBQU1ELFlBQU4sWUFBbUJDLEtBQW5COztJQUNBLEtBQUtDLGFBQUwsR0FBcUIsSUFBckI7RUFDSCxDQVJxQjs7RUFBQSxPQVV0QkMsTUFWc0IsR0FVdEIsZ0JBQU9GLEtBQVAsRUFBY0csS0FBZCxFQUFxQkMsTUFBckIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFxQ0MsV0FBckMsRUFBa0Q7SUFDOUNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyxvQkFBOUIsRUFBb0RMLFdBQXBEO0lBQ0FDLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPLEtBQUtDLElBQVo7RUFDSCxDQWJxQjs7RUFBQSxPQWV0QkMsTUFmc0IsR0FldEIsZ0JBQU9mLEtBQVAsRUFBY0csS0FBZCxFQUFxQkMsTUFBckIsRUFBNkIsQ0FBRSxDQWZUOztFQUFBLE9BaUJ0QlksSUFqQnNCLEdBaUJ0QixjQUFLaEIsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBakJQOztFQUFBO0FBQUEsRUFBc0NhLDBCQUF0QyxDQUExQjs7ZUFvQmVwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcblxuY29uc3QgR2FtZUFyZWFJbnB1dENvbW1hbmQgPSBjbGFzcyBHYW1lQXJlYUlucHV0Q29tbWFuZCBleHRlbmRzIElJbnB1dENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XG4gICAgfVxuXG4gICAgZGVzdHJveVRvdWNoKHRvdWNoKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3lUb3VjaCh0b3VjaCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUb3VjaCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0LCBjNCwgYzUsIGtpbmRBYmlsaXR5KSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNSRUFURV9TVVBFUl9BQklMSVRZLCBraW5kQWJpbGl0eSk7XG4gICAgICAgIGNjLmxvZyh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIG9uTW92ZSh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cblxuICAgIG9uVXAodG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQXJlYUlucHV0Q29tbWFuZDtcbiJdfQ==