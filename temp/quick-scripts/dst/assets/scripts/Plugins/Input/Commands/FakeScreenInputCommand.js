
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/FakeScreenInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c82d8ZPdpGWpH21LCmJU7E', 'FakeScreenInputCommand');
// scripts/Plugins/Input/Commands/FakeScreenInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FakeScreenInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(FakeScreenInputCommand, _IInputCommand);

  function FakeScreenInputCommand(manager) {
    var _this;

    _this = _IInputCommand.call(this, manager) || this;
    _this._vungleOnComplete = false;
    return _this;
  }

  var _proto = FakeScreenInputCommand.prototype;

  _proto.onDown = function onDown(touch, place, target) {
    if (!this._vungleOnComplete) {
      window.onGameComplete instanceof Function && window.onGameComplete();
      this._vungleOnComplete = true;
    }

    cc.systemEvent.emit(_GameEvent["default"].REDIRECT_PROCESSING);
  };

  _proto.onUp = function onUp(touch, place, target) {};

  return FakeScreenInputCommand;
}(_IInputCommand2["default"]);

exports["default"] = FakeScreenInputCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvRmFrZVNjcmVlbklucHV0Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJGYWtlU2NyZWVuSW5wdXRDb21tYW5kIiwibWFuYWdlciIsIl92dW5nbGVPbkNvbXBsZXRlIiwib25Eb3duIiwidG91Y2giLCJwbGFjZSIsInRhcmdldCIsIndpbmRvdyIsIm9uR2FtZUNvbXBsZXRlIiwiRnVuY3Rpb24iLCJjYyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIlJFRElSRUNUX1BST0NFU1NJTkciLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBOzs7RUFDakIsZ0NBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsa0NBQU1BLE9BQU47SUFFQSxNQUFLQyxpQkFBTCxHQUF5QixLQUF6QjtJQUhpQjtFQUlwQjs7OztTQUVEQyxTQUFBLGdCQUFPQyxLQUFQLEVBQWNDLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCO0lBQ3pCLElBQUksQ0FBQyxLQUFLSixpQkFBVixFQUE2QjtNQUN6QkssTUFBTSxDQUFDQyxjQUFQLFlBQWlDQyxRQUFqQyxJQUE2Q0YsTUFBTSxDQUFDQyxjQUFQLEVBQTdDO01BQ0EsS0FBS04saUJBQUwsR0FBeUIsSUFBekI7SUFDSDs7SUFDRFEsRUFBRSxDQUFDQyxXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLG1CQUE5QjtFQUNIOztTQUVEQyxPQUFBLGNBQUtYLEtBQUwsRUFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkIsQ0FBRTs7O0VBZm1CVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IElJbnB1dENvbW1hbmQgZnJvbSAnSUlucHV0Q29tbWFuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZha2VTY3JlZW5JbnB1dENvbW1hbmQgZXh0ZW5kcyBJSW5wdXRDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKG1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuX3Z1bmdsZU9uQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRvd24odG91Y2gsIHBsYWNlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl92dW5nbGVPbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB3aW5kb3cub25HYW1lQ29tcGxldGUgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiB3aW5kb3cub25HYW1lQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3Z1bmdsZU9uQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlJFRElSRUNUX1BST0NFU1NJTkcpO1xuICAgIH1cblxuICAgIG9uVXAodG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9XG59XG4iXX0=