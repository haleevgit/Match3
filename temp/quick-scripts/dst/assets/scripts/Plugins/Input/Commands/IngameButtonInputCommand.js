
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/IngameButtonInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvSW5nYW1lQnV0dG9uSW5wdXRDb21tYW5kLmpzIl0sIm5hbWVzIjpbIkluZ2FtZUJ1dHRvbkNvbW1hbmQiLCJtYW5hZ2VyIiwib25Eb3duIiwidG91Y2giLCJwbGFjZSIsInRhcmdldCIsImNjIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiU0hPV19TQ1JFRU4iLCJVaVNjcmVlblR5cGUiLCJSZXN1bHQiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBOzs7RUFDakIsNkJBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7OztTQUVEQyxTQUFBLGdCQUFPQyxLQUFQLEVBQWNDLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCO0lBQ3pCQyxFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMscUJBQUEsQ0FBVUMsV0FBOUIsRUFBMkNDLHdCQUFBLENBQWFDLE1BQXhELEVBQWdFLEtBQWhFO0VBQ0g7O1NBRURDLE9BQUEsY0FBS1YsS0FBTCxFQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFOzs7RUFUZ0JTIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBVaVNjcmVlblR5cGUgZnJvbSAnVWlTY3JlZW5UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5nYW1lQnV0dG9uQ29tbWFuZCBleHRlbmRzIElJbnB1dENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNIT1dfU0NSRUVOLCBVaVNjcmVlblR5cGUuUmVzdWx0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn1cbiJdfQ==