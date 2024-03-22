"use strict";
cc._RF.push(module, 'c31b9RnG7VP8ah9cZCuOEAs', 'BlockInputCommand');
// scripts/Plugins/Input/Commands/BlockInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BlockInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(BlockInputCommand, _IInputCommand);

  function BlockInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = BlockInputCommand.prototype;

  _proto.onDown = function onDown(touch, place, target) {
    cc.systemEvent.emit(_GameEvent["default"].BLOCK_CHOSEN, place.node.parent);
  };

  _proto.onUp = function onUp(touch, place, target) {};

  return BlockInputCommand;
}(_IInputCommand2["default"]);

exports["default"] = BlockInputCommand;
module.exports = exports["default"];

cc._RF.pop();