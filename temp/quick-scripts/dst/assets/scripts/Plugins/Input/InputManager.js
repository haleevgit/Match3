
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/InputManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18de99Dw7VByYjVG4YLT+oA', 'InputManager');
// scripts/Plugins/Input/InputManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _InputDirection = _interopRequireDefault(require("InputDirection"));

var _InputType = _interopRequireDefault(require("InputType"));

var _IInputCommand = _interopRequireDefault(require("IInputCommand"));

var _GameAreaInputCommand = _interopRequireDefault(require("GameAreaInputCommand"));

var _BombShopInputCommand = _interopRequireDefault(require("BombShopInputCommand"));

var _TeleportShopInputCommand = _interopRequireDefault(require("TeleportShopInputCommand"));

var _TntShopInputCommand = _interopRequireDefault(require("TntShopInputCommand"));

var _IngameButtonInputCommand = _interopRequireDefault(require("IngameButtonInputCommand"));

var _FakeScreenInputCommand = _interopRequireDefault(require("FakeScreenInputCommand"));

var _CrossPromoInputCommand = _interopRequireDefault(require("CrossPromoInputCommand"));

var _BlockInputCommand = _interopRequireDefault(require("BlockInputCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    checkUserSleep: {
      "default": true,
      tooltip: 'следить за бездействием игрока?'
    },
    tutorialTimeout: {
      "default": 3,
      tooltip: 'временной интевал (сек), по истечении которого запустится обучение'
    },
    //#endregion
    //#region public fields and properties
    time: {
      get: function get() {
        return this._time;
      },
      visible: false
    },
    //#endregion
    //#region private fields and properties
    commands: {
      "default": {},
      visible: false,
      serializable: false
    },
    _isFirstTap: {
      "default": true,
      serializable: false
    },
    _userSleepTime: {
      "default": 0,
      serializable: false
    },
    _time: {
      "default": 0,
      serializable: false
    },
    _isInput: {
      "default": false,
      serializable: false
    },
    _isSleep: {
      "default": false,
      serializable: false
    } //#endregion

  },
  editor: {
    menu: 'Input/InputManager'
  },
  //#region life-cycle callbacks
  onLoad: function onLoad() {
    cc.systemEvent.on(_GameEvent["default"].INPUT, this.onInput, this);
    this.commands[_InputDirection["default"].GameArea] = new _GameAreaInputCommand["default"](this);
    this.commands[_InputDirection["default"].BombShop] = new _BombShopInputCommand["default"](this);
    this.commands[_InputDirection["default"].TeleportShop] = new _TeleportShopInputCommand["default"](this);
    this.commands[_InputDirection["default"].TntShop] = new _TntShopInputCommand["default"](this);
    this.commands[_InputDirection["default"].IngameButton] = new _IngameButtonInputCommand["default"](this);
    this.commands[_InputDirection["default"].FakeScreen] = new _FakeScreenInputCommand["default"](this);
    this.commands[_InputDirection["default"].CrossPromoCross] = new _CrossPromoInputCommand["default"](this);
    this.commands[_InputDirection["default"].Block] = new _BlockInputCommand["default"](this);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  //#endregion
  //#region event handlers
  onInput: function onInput(type, area, touch, place, target) {
    var command = this.commands[area];
    this._userSleepTime = 0;
    this._isSleep = false;

    switch (type) {
      case _InputType["default"].Down:
        if (command) {
          command.onDown(touch, place, target);
        }

        if (this._isFirstTap) {
          this._isFirstTap = false;
          cc.systemEvent.emit(_GameEvent["default"].FIRST_TAP);
        }

        this._isInput = true;
        break;

      case _InputType["default"].Move:
        if (command) {
          command.onMove(touch, place, target);
        }

        break;

      case _InputType["default"].Up:
        if (command) {
          command.onUp(touch, place, target);
          this._isSleep = true;
          this._isInput = false;
        }

        break;
    }
  },
  onDown: function onDown(area, touch, place, target) {},
  onMove: function onMove(area, touch, place, target) {},
  onUp: function onUp(area, touch, place, target) {} //#endregion

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvSW5wdXRNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2hlY2tVc2VyU2xlZXAiLCJ0b29sdGlwIiwidHV0b3JpYWxUaW1lb3V0IiwidGltZSIsImdldCIsIl90aW1lIiwidmlzaWJsZSIsImNvbW1hbmRzIiwic2VyaWFsaXphYmxlIiwiX2lzRmlyc3RUYXAiLCJfdXNlclNsZWVwVGltZSIsIl9pc0lucHV0IiwiX2lzU2xlZXAiLCJlZGl0b3IiLCJtZW51Iiwib25Mb2FkIiwic3lzdGVtRXZlbnQiLCJvbiIsIkdhbWVFdmVudCIsIklOUFVUIiwib25JbnB1dCIsIklucHV0RGlyZWN0aW9uIiwiR2FtZUFyZWEiLCJHYW1lQXJlYUlucHV0Q29tbWFuZCIsIkJvbWJTaG9wIiwiQm9tYlNob3BJbnB1dENvbW1hbmQiLCJUZWxlcG9ydFNob3AiLCJUZWxlcG9ydFNob3BJbnB1dENvbW1hbmQiLCJUbnRTaG9wIiwiVG50U2hvcElucHV0Q29tbWFuZCIsIkluZ2FtZUJ1dHRvbiIsIkluZ2FtZUJ1dHRvbklucHV0Q29tbWFuZCIsIkZha2VTY3JlZW4iLCJGYWtlU2NyZWVuSW5wdXRDb21tYW5kIiwiQ3Jvc3NQcm9tb0Nyb3NzIiwiQ3Jvc3NQcm9tb0lucHV0Q29tbWFuZCIsIkJsb2NrIiwiQmxvY2tJbnB1dENvbW1hbmQiLCJ0eXBlIiwiYXJlYSIsInRvdWNoIiwicGxhY2UiLCJ0YXJnZXQiLCJjb21tYW5kIiwiSW5wdXRUeXBlIiwiRG93biIsIm9uRG93biIsImVtaXQiLCJGSVJTVF9UQVAiLCJNb3ZlIiwib25Nb3ZlIiwiVXAiLCJvblVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQTtBQUVB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QUFSLENBQWVOLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCQyxNQUE3QjtRQUNIOztRQUVELElBQUksS0FBS2pDLFdBQVQsRUFBc0I7VUFDbEIsS0FBS0EsV0FBTCxHQUFtQixLQUFuQjtVQUNBYixFQUFFLENBQUNvQixXQUFILENBQWUrQixJQUFmLENBQW9CN0IscUJBQUEsQ0FBVThCLFNBQTlCO1FBQ0g7O1FBRUQsS0FBS3JDLFFBQUwsR0FBZ0IsSUFBaEI7UUFDQTs7TUFFSixLQUFLaUMscUJBQUEsQ0FBVUssSUFBZjtRQUNJLElBQUlOLE9BQUosRUFBYTtVQUNUQSxPQUFPLENBQUNPLE1BQVIsQ0FBZVYsS0FBZixFQUFzQkMsS0FBdEIsRUFBNkJDLE1BQTdCO1FBQ0g7O1FBQ0Q7O01BRUosS0FBS0UscUJBQUEsQ0FBVU8sRUFBZjtRQUNJLElBQUlSLE9BQUosRUFBYTtVQUNUQSxPQUFPLENBQUNTLElBQVIsQ0FBYVosS0FBYixFQUFvQkMsS0FBcEIsRUFBMkJDLE1BQTNCO1VBQ0EsS0FBSzlCLFFBQUwsR0FBZ0IsSUFBaEI7VUFDQSxLQUFLRCxRQUFMLEdBQWdCLEtBQWhCO1FBQ0g7O1FBQ0Q7SUExQlI7RUE0QkgsQ0FuR0k7RUFxR0xtQyxNQXJHSyxrQkFxR0VQLElBckdGLEVBcUdRQyxLQXJHUixFQXFHZUMsS0FyR2YsRUFxR3NCQyxNQXJHdEIsRUFxRzhCLENBQUUsQ0FyR2hDO0VBc0dMUSxNQXRHSyxrQkFzR0VYLElBdEdGLEVBc0dRQyxLQXRHUixFQXNHZUMsS0F0R2YsRUFzR3NCQyxNQXRHdEIsRUFzRzhCLENBQUUsQ0F0R2hDO0VBdUdMVSxJQXZHSyxnQkF1R0FiLElBdkdBLEVBdUdNQyxLQXZHTixFQXVHYUMsS0F2R2IsRUF1R29CQyxNQXZHcEIsRUF1RzRCLENBQUUsQ0F2RzlCLENBd0dMOztBQXhHSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG5cbmltcG9ydCBJbnB1dERpcmVjdGlvbiBmcm9tICdJbnB1dERpcmVjdGlvbic7XG5pbXBvcnQgSW5wdXRUeXBlIGZyb20gJ0lucHV0VHlwZSc7XG5cbmltcG9ydCBJSW5wdXRDb21tYW5kIGZyb20gJ0lJbnB1dENvbW1hbmQnO1xuaW1wb3J0IEdhbWVBcmVhSW5wdXRDb21tYW5kIGZyb20gJ0dhbWVBcmVhSW5wdXRDb21tYW5kJztcbmltcG9ydCBCb21iU2hvcElucHV0Q29tbWFuZCBmcm9tICdCb21iU2hvcElucHV0Q29tbWFuZCc7XG5pbXBvcnQgVGVsZXBvcnRTaG9wSW5wdXRDb21tYW5kIGZyb20gJ1RlbGVwb3J0U2hvcElucHV0Q29tbWFuZCc7XG5pbXBvcnQgVG50U2hvcElucHV0Q29tbWFuZCBmcm9tICdUbnRTaG9wSW5wdXRDb21tYW5kJztcbmltcG9ydCBJbmdhbWVCdXR0b25JbnB1dENvbW1hbmQgZnJvbSAnSW5nYW1lQnV0dG9uSW5wdXRDb21tYW5kJztcbmltcG9ydCBGYWtlU2NyZWVuSW5wdXRDb21tYW5kIGZyb20gJ0Zha2VTY3JlZW5JbnB1dENvbW1hbmQnO1xuaW1wb3J0IENyb3NzUHJvbW9JbnB1dENvbW1hbmQgZnJvbSAnQ3Jvc3NQcm9tb0lucHV0Q29tbWFuZCc7XG5pbXBvcnQgQmxvY2tJbnB1dENvbW1hbmQgZnJvbSAnQmxvY2tJbnB1dENvbW1hbmQnO1xuXG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIGNoZWNrVXNlclNsZWVwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9GB0LvQtdC00LjRgtGMINC30LAg0LHQtdC30LTQtdC50YHRgtCy0LjQtdC8INC40LPRgNC+0LrQsD8nLFxuICAgICAgICB9LFxuICAgICAgICB0dXRvcmlhbFRpbWVvdXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgICB0b29sdGlwOiAn0LLRgNC10LzQtdC90L3QvtC5INC40L3RgtC10LLQsNC7ICjRgdC10LopLCDQv9C+INC40YHRgtC10YfQtdC90LjQuCDQutC+0YLQvtGA0L7Qs9C+INC30LDQv9GD0YHRgtC40YLRgdGPINC+0LHRg9GH0LXQvdC40LUnLFxuICAgICAgICB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHVibGljIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBjb21tYW5kczogeyBkZWZhdWx0OiB7fSwgdmlzaWJsZTogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcblxuICAgICAgICBfaXNGaXJzdFRhcDogeyBkZWZhdWx0OiB0cnVlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF91c2VyU2xlZXBUaW1lOiB7IGRlZmF1bHQ6IDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcblxuICAgICAgICBfdGltZTogeyBkZWZhdWx0OiAwLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9pc0lucHV0OiB7IGRlZmF1bHQ6IGZhbHNlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG5cbiAgICAgICAgX2lzU2xlZXA6IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfSxcblxuICAgIGVkaXRvcjoge1xuICAgICAgICBtZW51OiAnSW5wdXQvSW5wdXRNYW5hZ2VyJyxcbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihHYW1lRXZlbnQuSU5QVVQsIHRoaXMub25JbnB1dCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb21tYW5kc1tJbnB1dERpcmVjdGlvbi5HYW1lQXJlYV0gPSBuZXcgR2FtZUFyZWFJbnB1dENvbW1hbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29tbWFuZHNbSW5wdXREaXJlY3Rpb24uQm9tYlNob3BdID0gbmV3IEJvbWJTaG9wSW5wdXRDb21tYW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbW1hbmRzW0lucHV0RGlyZWN0aW9uLlRlbGVwb3J0U2hvcF0gPSBuZXcgVGVsZXBvcnRTaG9wSW5wdXRDb21tYW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbW1hbmRzW0lucHV0RGlyZWN0aW9uLlRudFNob3BdID0gbmV3IFRudFNob3BJbnB1dENvbW1hbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29tbWFuZHNbSW5wdXREaXJlY3Rpb24uSW5nYW1lQnV0dG9uXSA9IG5ldyBJbmdhbWVCdXR0b25JbnB1dENvbW1hbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29tbWFuZHNbSW5wdXREaXJlY3Rpb24uRmFrZVNjcmVlbl0gPSBuZXcgRmFrZVNjcmVlbklucHV0Q29tbWFuZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb21tYW5kc1tJbnB1dERpcmVjdGlvbi5Dcm9zc1Byb21vQ3Jvc3NdID0gbmV3IENyb3NzUHJvbW9JbnB1dENvbW1hbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29tbWFuZHNbSW5wdXREaXJlY3Rpb24uQmxvY2tdID0gbmV3IEJsb2NrSW5wdXRDb21tYW5kKHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlcnNcbiAgICBvbklucHV0KHR5cGUsIGFyZWEsIHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLmNvbW1hbmRzW2FyZWFdO1xuXG4gICAgICAgIHRoaXMuX3VzZXJTbGVlcFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9pc1NsZWVwID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIElucHV0VHlwZS5Eb3duOlxuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQub25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNGaXJzdFRhcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcnN0VGFwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkZJUlNUX1RBUCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5faXNJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSW5wdXRUeXBlLk1vdmU6XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5vbk1vdmUodG91Y2gsIHBsYWNlLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJbnB1dFR5cGUuVXA6XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5vblVwKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNTbGVlcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Eb3duKGFyZWEsIHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fSxcbiAgICBvbk1vdmUoYXJlYSwgdG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9LFxuICAgIG9uVXAoYXJlYSwgdG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9LFxuICAgIC8vI2VuZHJlZ2lvblxufSk7XG4iXX0=