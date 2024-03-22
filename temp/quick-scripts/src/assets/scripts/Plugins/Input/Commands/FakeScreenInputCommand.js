"use strict";
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