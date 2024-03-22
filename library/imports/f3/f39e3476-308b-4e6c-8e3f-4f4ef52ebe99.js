"use strict";
cc._RF.push(module, 'f39e3R2MItObI4/T071Lr6Z', 'CrossPromoInputCommand');
// scripts/Plugins/Input/Commands/CrossPromoInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CrossPromoInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(CrossPromoInputCommand, _IInputCommand);

  function CrossPromoInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = CrossPromoInputCommand.prototype;

  _proto.onDown = function onDown(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {
    try {
      closeTab();
    } catch (err) {
      cc.log('Close Button');
    }
  };

  return CrossPromoInputCommand;
}(_IInputCommand2["default"]);

exports["default"] = CrossPromoInputCommand;
module.exports = exports["default"];

cc._RF.pop();