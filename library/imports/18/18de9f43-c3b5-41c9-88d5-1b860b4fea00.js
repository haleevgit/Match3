"use strict";
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