"use strict";
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