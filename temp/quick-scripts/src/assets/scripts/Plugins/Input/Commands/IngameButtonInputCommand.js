"use strict";
cc._RF.push(module, '6dabeHDqmZGbJ5Amvi2vYA0', 'IngameButtonInputCommand');
// scripts/Plugins/Input/Commands/IngameButtonInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IngameButtonCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(IngameButtonCommand, _IInputCommand);

  function IngameButtonCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = IngameButtonCommand.prototype;

  _proto.onDown = function onDown(touch, place, target) {
    cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, false);
  };

  _proto.onUp = function onUp(touch, place, target) {};

  return IngameButtonCommand;
}(_IInputCommand2["default"]);

exports["default"] = IngameButtonCommand;
module.exports = exports["default"];

cc._RF.pop();