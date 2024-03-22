
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/TntShopInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cca15+/8oVLpqUOOGVNQw7p', 'TntShopInputCommand');
// scripts/Plugins/Input/Commands/TntShopInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

var _BombType = _interopRequireDefault(require("BombType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TntShopInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(TntShopInputCommand, _IInputCommand);

  function TntShopInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = TntShopInputCommand.prototype;

  _proto.destroyTouch = function destroyTouch(touch) {
    _IInputCommand.prototype.destroyTouch.call(this, touch);

    this._currentTouch = null;
  };

  _proto.onDown = function onDown(touch, place, target, c4, c5) {
    cc.systemEvent.emit(_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, _BombType["default"].Tnt);
  };

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  return TntShopInputCommand;
}(_IInputCommand2["default"]);

var _default = TntShopInputCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvVG50U2hvcElucHV0Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJUbnRTaG9wSW5wdXRDb21tYW5kIiwibWFuYWdlciIsImRlc3Ryb3lUb3VjaCIsInRvdWNoIiwiX2N1cnJlbnRUb3VjaCIsIm9uRG93biIsInBsYWNlIiwidGFyZ2V0IiwiYzQiLCJjNSIsImNjIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiQ0hFQ0tfU0NPUkVTX0ZPUl9BQklMSVRZIiwiQm9tYlR5cGUiLCJUbnQiLCJvbk1vdmUiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUI7RUFBQTs7RUFDckIsNkJBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7RUFIb0I7O0VBQUEsT0FLckJDLFlBTHFCLEdBS3JCLHNCQUFhQyxLQUFiLEVBQW9CO0lBQ2hCLHlCQUFNRCxZQUFOLFlBQW1CQyxLQUFuQjs7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLElBQXJCO0VBQ0gsQ0FSb0I7O0VBQUEsT0FVckJDLE1BVnFCLEdBVXJCLGdCQUFPRixLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7SUFDakNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyx3QkFBOUIsRUFBd0RDLG9CQUFBLENBQVNDLEdBQWpFO0VBQ0gsQ0Fab0I7O0VBQUEsT0FjckJDLE1BZHFCLEdBY3JCLGdCQUFPZCxLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCLENBQUUsQ0FkVjs7RUFBQSxPQWdCckJXLElBaEJxQixHQWdCckIsY0FBS2YsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBaEJSOztFQUFBO0FBQUEsRUFBcUNZLDBCQUFyQyxDQUF6Qjs7ZUFtQmVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBCb21iVHlwZSBmcm9tICdCb21iVHlwZSc7XG5cbmNvbnN0IFRudFNob3BJbnB1dENvbW1hbmQgPSBjbGFzcyBUbnRTaG9wSW5wdXRDb21tYW5kIGV4dGVuZHMgSUlucHV0Q29tbWFuZCB7XG4gICAgY29uc3RydWN0b3IobWFuYWdlcikge1xuICAgICAgICBzdXBlcihtYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBkZXN0cm95VG91Y2godG91Y2gpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveVRvdWNoKHRvdWNoKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFRvdWNoID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkRvd24odG91Y2gsIHBsYWNlLCB0YXJnZXQsIGM0LCBjNSkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DSEVDS19TQ09SRVNfRk9SX0FCSUxJVFksIEJvbWJUeXBlLlRudCk7XG4gICAgfVxuXG4gICAgb25Nb3ZlKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRudFNob3BJbnB1dENvbW1hbmQ7XG4iXX0=