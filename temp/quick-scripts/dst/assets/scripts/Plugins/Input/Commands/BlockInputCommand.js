
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/BlockInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvQmxvY2tJbnB1dENvbW1hbmQuanMiXSwibmFtZXMiOlsiQmxvY2tJbnB1dENvbW1hbmQiLCJtYW5hZ2VyIiwib25Eb3duIiwidG91Y2giLCJwbGFjZSIsInRhcmdldCIsImNjIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiQkxPQ0tfQ0hPU0VOIiwibm9kZSIsInBhcmVudCIsIm9uVXAiLCJJSW5wdXRDb21tYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztJQUVxQkE7OztFQUNqQiwyQkFBWUMsT0FBWixFQUFxQjtJQUFBLE9BQ2pCLDBCQUFNQSxPQUFOLENBRGlCO0VBRXBCOzs7O1NBRURDLFNBQUEsZ0JBQU9DLEtBQVAsRUFBY0MsS0FBZCxFQUFxQkMsTUFBckIsRUFBNkI7SUFDekJDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyxZQUE5QixFQUE0Q04sS0FBSyxDQUFDTyxJQUFOLENBQVdDLE1BQXZEO0VBQ0g7O1NBRURDLE9BQUEsY0FBS1YsS0FBTCxFQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFOzs7RUFUY1MiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcbmltcG9ydCBJSW5wdXRDb21tYW5kIGZyb20gJ0lJbnB1dENvbW1hbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0lucHV0Q29tbWFuZCBleHRlbmRzIElJbnB1dENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkJMT0NLX0NIT1NFTiwgcGxhY2Uubm9kZS5wYXJlbnQpO1xuICAgIH1cblxuICAgIG9uVXAodG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9XG59XG4iXX0=