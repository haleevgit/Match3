
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/CrossPromoInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvQ3Jvc3NQcm9tb0lucHV0Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJDcm9zc1Byb21vSW5wdXRDb21tYW5kIiwibWFuYWdlciIsIm9uRG93biIsInRvdWNoIiwicGxhY2UiLCJ0YXJnZXQiLCJvblVwIiwiY2xvc2VUYWIiLCJlcnIiLCJjYyIsImxvZyIsIklJbnB1dENvbW1hbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRXFCQTs7O0VBQ2pCLGdDQUFZQyxPQUFaLEVBQXFCO0lBQUEsT0FDakIsMEJBQU1BLE9BQU4sQ0FEaUI7RUFFcEI7Ozs7U0FFREMsU0FBQSxnQkFBT0MsS0FBUCxFQUFjQyxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QixDQUFFOztTQUUvQkMsT0FBQSxjQUFLSCxLQUFMLEVBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCO0lBQ3ZCLElBQUk7TUFDQUUsUUFBUTtJQUNYLENBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7TUFDVkMsRUFBRSxDQUFDQyxHQUFILENBQU8sY0FBUDtJQUNIO0VBQ0o7OztFQWIrQ0MiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcbmltcG9ydCBJSW5wdXRDb21tYW5kIGZyb20gJ0lJbnB1dENvbW1hbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zc1Byb21vSW5wdXRDb21tYW5kIGV4dGVuZHMgSUlucHV0Q29tbWFuZCB7XG4gICAgY29uc3RydWN0b3IobWFuYWdlcikge1xuICAgICAgICBzdXBlcihtYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBvbkRvd24odG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9XG5cbiAgICBvblVwKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjbG9zZVRhYigpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNjLmxvZygnQ2xvc2UgQnV0dG9uJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=