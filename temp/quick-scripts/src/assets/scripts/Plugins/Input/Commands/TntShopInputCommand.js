"use strict";
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