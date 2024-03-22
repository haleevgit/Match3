
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game/Effect/Effect');
require('./assets/scripts/Game/Effect/EffectType');
require('./assets/scripts/Game/Enums/BlockColorType');
require('./assets/scripts/Game/Enums/BombType');
require('./assets/scripts/Game/Enums/GameEvent');
require('./assets/scripts/Game/Enums/TeleportAnimationsType');
require('./assets/scripts/Game/Logic/FeatureManager');
require('./assets/scripts/Game/Logic/Features/BombLogic');
require('./assets/scripts/Game/Logic/Features/ColumnEraser');
require('./assets/scripts/Game/Logic/Features/Feature');
require('./assets/scripts/Game/Logic/Features/Teleport');
require('./assets/scripts/Game/Logic/GameLogicManager');
require('./assets/scripts/Game/Ui/CatcherOff');
require('./assets/scripts/Game/Ui/CrossPromoCross');
require('./assets/scripts/Game/Ui/IScreen');
require('./assets/scripts/Game/Ui/ScoreManager');
require('./assets/scripts/Game/Ui/Screen/ResultManager');
require('./assets/scripts/Game/Ui/Screen/ScreenManager');
require('./assets/scripts/Game/Ui/UiManager');
require('./assets/scripts/Game/Ui/UiScreenType');
require('./assets/scripts/Game/World/Block');
require('./assets/scripts/Game/World/Field');
require('./assets/scripts/Plugins/Camera/CameraController2D');
require('./assets/scripts/Plugins/Input/Commands/BlockInputCommand');
require('./assets/scripts/Plugins/Input/Commands/BombShopInputCommand');
require('./assets/scripts/Plugins/Input/Commands/CrossPromoInputCommand');
require('./assets/scripts/Plugins/Input/Commands/FakeScreenInputCommand');
require('./assets/scripts/Plugins/Input/Commands/GameAreaInputCommand');
require('./assets/scripts/Plugins/Input/Commands/IInputCommand');
require('./assets/scripts/Plugins/Input/Commands/IngameButtonInputCommand');
require('./assets/scripts/Plugins/Input/Commands/TeleportShopInputCommand');
require('./assets/scripts/Plugins/Input/Commands/TntShopInputCommand');
require('./assets/scripts/Plugins/Input/Enums/InputDirection');
require('./assets/scripts/Plugins/Input/Enums/InputType');
require('./assets/scripts/Plugins/Input/InputCatcher');
require('./assets/scripts/Plugins/Input/InputManager');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/ColumnEraser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da45aRNrDdKgKjDH7ijxVgc', 'ColumnEraser');
// scripts/Game/Logic/Features/ColumnEraser.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _Feature = _interopRequireDefault(require("Feature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": _Feature["default"],
  //#region life-cycle callbacks
  _logic: function _logic(featureCoordinate, fieldWidth, fieldHeight) {
    var xCoord = featureCoordinate[1];

    for (var j = 0; j < fieldHeight; j += 1) {
      var yCoord = j;
      this.elementsForDeleting.push([[xCoord], [yCoord]]);
    }
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    if (!featureCoordinate || !fieldHeight || !fieldWidth) console.log("Not enough data for initializing!!!");

    this._logic(featureCoordinate, fieldWidth, fieldHeight);

    cc.systemEvent.emit(_GameEvent["default"].FEATURE_RESULT, this.elementsForDeleting);
    this.elementsForDeleting = [];
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvQ29sdW1uRXJhc2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJGZWF0dXJlIiwiX2xvZ2ljIiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiLCJ4Q29vcmQiLCJqIiwieUNvb3JkIiwiZWxlbWVudHNGb3JEZWxldGluZyIsInB1c2giLCJvbkluaXRpYWxpemluZ0V2ZW50IiwiY29uc29sZSIsImxvZyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkZFQVRVUkVfUkVTVUxUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNDLG1CQURKO0VBR0w7RUFJQUMsTUFQSyxrQkFPRUMsaUJBUEYsRUFPcUJDLFVBUHJCLEVBT2lDQyxXQVBqQyxFQU84QztJQUMvQyxJQUFNQyxNQUFNLEdBQUdILGlCQUFpQixDQUFDLENBQUQsQ0FBaEM7O0lBQ0EsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixXQUFwQixFQUFpQ0UsQ0FBQyxJQUFJLENBQXRDLEVBQXlDO01BQ3JDLElBQU1DLE1BQU0sR0FBR0QsQ0FBZjtNQUNBLEtBQUtFLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixDQUFDLENBQUNKLE1BQUQsQ0FBRCxFQUFXLENBQUNFLE1BQUQsQ0FBWCxDQUE5QjtJQUNIO0VBQ0osQ0FiSTtFQWVMRyxtQkFmSywrQkFlZVIsaUJBZmYsRUFla0NDLFVBZmxDLEVBZThDQyxXQWY5QyxFQWUyRDtJQUM1RCxJQUFHLENBQUNGLGlCQUFELElBQXNCLENBQUNFLFdBQXZCLElBQXNDLENBQUNELFVBQTFDLEVBQ0lRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaOztJQUVKLEtBQUtYLE1BQUwsQ0FBWUMsaUJBQVosRUFBK0JDLFVBQS9CLEVBQTJDQyxXQUEzQzs7SUFFQU4sRUFBRSxDQUFDZSxXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLGNBQTlCLEVBQThDLEtBQUtSLG1CQUFuRDtJQUNBLEtBQUtBLG1CQUFMLEdBQTJCLEVBQTNCO0VBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnRmVhdHVyZSc7XG4vLyNlbmRyZWdpb25cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBGZWF0dXJlLFxuICBcbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcblxuXG5cbiAgICBfbG9naWMoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHhDb29yZCA9IGZlYXR1cmVDb29yZGluYXRlWzFdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpZWxkSGVpZ2h0OyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IGo7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzRm9yRGVsZXRpbmcucHVzaChbW3hDb29yZF0sIFt5Q29vcmRdXSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Jbml0aWFsaXppbmdFdmVudChmZWF0dXJlQ29vcmRpbmF0ZSwgZmllbGRXaWR0aCwgZmllbGRIZWlnaHQpIHtcbiAgICAgICAgaWYoIWZlYXR1cmVDb29yZGluYXRlIHx8ICFmaWVsZEhlaWdodCB8fCAhZmllbGRXaWR0aClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGVub3VnaCBkYXRhIGZvciBpbml0aWFsaXppbmchISFcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5fbG9naWMoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KTtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5GRUFUVVJFX1JFU1VMVCwgdGhpcy5lbGVtZW50c0ZvckRlbGV0aW5nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50c0ZvckRlbGV0aW5nID0gW107XG4gICAgfVxuIH0pO1xuIFxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/BombShopInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b7778tJ8RF5Yl8nwRWexWY', 'BombShopInputCommand');
// scripts/Plugins/Input/Commands/BombShopInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BombShopInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(BombShopInputCommand, _IInputCommand);

  function BombShopInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = BombShopInputCommand.prototype;

  _proto.destroyTouch = function destroyTouch(touch) {
    _IInputCommand.prototype.destroyTouch.call(this, touch);

    this._currentTouch = null;
  };

  _proto.onDown = function onDown(touch, place, target, c4, c5) {
    cc.systemEvent.emit(_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, _BlockColorType["default"].Bomb);
  };

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  return BombShopInputCommand;
}(_IInputCommand2["default"]);

var _default = BombShopInputCommand;
exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvQm9tYlNob3BJbnB1dENvbW1hbmQuanMiXSwibmFtZXMiOlsiQm9tYlNob3BJbnB1dENvbW1hbmQiLCJtYW5hZ2VyIiwiZGVzdHJveVRvdWNoIiwidG91Y2giLCJfY3VycmVudFRvdWNoIiwib25Eb3duIiwicGxhY2UiLCJ0YXJnZXQiLCJjNCIsImM1IiwiY2MiLCJzeXN0ZW1FdmVudCIsImVtaXQiLCJHYW1lRXZlbnQiLCJDSEVDS19TQ09SRVNfRk9SX0FCSUxJVFkiLCJCbG9ja0NvbG9yVHlwZSIsIkJvbWIiLCJvbk1vdmUiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxvQkFBb0I7RUFBQTs7RUFDdEIsOEJBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7RUFIcUI7O0VBQUEsT0FLdEJDLFlBTHNCLEdBS3RCLHNCQUFhQyxLQUFiLEVBQW9CO0lBQ2hCLHlCQUFNRCxZQUFOLFlBQW1CQyxLQUFuQjs7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLElBQXJCO0VBQ0gsQ0FScUI7O0VBQUEsT0FVdEJDLE1BVnNCLEdBVXRCLGdCQUFPRixLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7SUFDakNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyx3QkFBOUIsRUFBd0RDLDBCQUFBLENBQWVDLElBQXZFO0VBQ0gsQ0FacUI7O0VBQUEsT0FjdEJDLE1BZHNCLEdBY3RCLGdCQUFPZCxLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCLENBQUUsQ0FkVDs7RUFBQSxPQWdCdEJXLElBaEJzQixHQWdCdEIsY0FBS2YsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBaEJQOztFQUFBO0FBQUEsRUFBc0NZLDBCQUF0QyxDQUExQjs7ZUFtQmVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICdCbG9ja0NvbG9yVHlwZSc7XG5cbmNvbnN0IEJvbWJTaG9wSW5wdXRDb21tYW5kID0gY2xhc3MgQm9tYlNob3BJbnB1dENvbW1hbmQgZXh0ZW5kcyBJSW5wdXRDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKG1hbmFnZXIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lUb3VjaCh0b3VjaCkge1xuICAgICAgICBzdXBlci5kZXN0cm95VG91Y2godG91Y2gpO1xuICAgICAgICB0aGlzLl9jdXJyZW50VG91Y2ggPSBudWxsO1xuICAgIH1cblxuICAgIG9uRG93bih0b3VjaCwgcGxhY2UsIHRhcmdldCwgYzQsIGM1KSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNIRUNLX1NDT1JFU19GT1JfQUJJTElUWSwgQmxvY2tDb2xvclR5cGUuQm9tYik7XG4gICAgfVxuXG4gICAgb25Nb3ZlKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvbWJTaG9wSW5wdXRDb21tYW5kO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Enums/GameEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5effbsSV9IzIFeGKZeUvQ+', 'GameEvent');
// scripts/Game/Enums/GameEvent.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = cc.Enum({
  NONE: 0,
  //Input
  INPUT: 20,
  // событие игрового ввода
  //Level
  SET_LEVEL_DATA: 31,
  // событие для передачи данный в экземпляр класса World для построения уровня
  //Game object
  CREATE_GAME_OBJECT: 101,
  // создать экземпляр класса GameObject
  GET_GAME_OBJECT_PARENT: 102,
  // получить родителя для экземпляра класса GameObject
  WORLD_LOADED: 103,
  // экземпляр класса World полностью загружен
  //Effect
  SPAWN_EFFECT: 401,
  // заспаунить эффект на сцене
  GET_PLAYING_EFFECTS: 403,
  // получить список запущенных эффектоа
  //Camera (2D & 3D)
  CAMERA_START_SHAKE: 501,
  // запустить дрожание камеры
  CAMERA_STOP_SHAKE: 502,
  // остановить дрожание камеры
  //Ui
  TOGGLE_SCREEN: 601,
  // вкл/выкл экран указанного типа
  SHOW_SCREEN: 602,
  // событие, включающее экран указанного типа и выключающее иные экраны, указанные в ScreenManager
  //GameLogic
  FIELD_ON: 700,
  //for setting blocks parent
  BLOCK_CHOSEN: 701,
  //player clicked on block
  TIME_TO_FALL: 702,
  //order to fall
  CHOOSE_COLOR_BLOCK: 703,
  //order to change block color
  BLOCK_CAN_BE_CHOSEN: 704,
  //turnoff denial of the click
  STOP_INPUT: 705,
  BLOCK_FALL: 706,
  //the block fly is over
  SCORE_GOT: 707,
  PLAYER_MOVED: 708,
  //the step is done
  CREATE_SUPER_ABILITY: 709,
  //one of block become the supeblock
  CREATE_SUPER_BLOCK: 710,
  //one of block become the supeblock
  BLOCK_BOMB_CHOSEN: 711,
  CHECK_SCORES_FOR_ABILITY: 712,
  TOGGLE_SUPER_ABILITY: 713,
  BOMB_IS_AVAILABLE: 714,
  FEATURE_RESULT: 715,
  //sending the result of deleting feature work
  BLOCK_BOMB_DONE: 716,
  //bomb block is done
  ACTIVATE_COLUMN_ERASER: 717,
  COLUMN_ERASER_DONE: 718,
  TELEPORT_IS_AVAILABLE: 719,
  TELEPORT_STARTED: 720,
  CHANGE_BLOCK_ANIMATION: 721,
  // is using for the teleport realization
  TELEPORTED_BLOCK_CHOSEN: 722,
  // is using for the sending of the teleporting-block
  START_TELEPORTATION: 723,
  TELEPORTATION_COMPLETE: 724,
  IS_SCORE_ENOUGH: 725
});

exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRW51bXMvR2FtZUV2ZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiRW51bSIsIk5PTkUiLCJJTlBVVCIsIlNFVF9MRVZFTF9EQVRBIiwiQ1JFQVRFX0dBTUVfT0JKRUNUIiwiR0VUX0dBTUVfT0JKRUNUX1BBUkVOVCIsIldPUkxEX0xPQURFRCIsIlNQQVdOX0VGRkVDVCIsIkdFVF9QTEFZSU5HX0VGRkVDVFMiLCJDQU1FUkFfU1RBUlRfU0hBS0UiLCJDQU1FUkFfU1RPUF9TSEFLRSIsIlRPR0dMRV9TQ1JFRU4iLCJTSE9XX1NDUkVFTiIsIkZJRUxEX09OIiwiQkxPQ0tfQ0hPU0VOIiwiVElNRV9UT19GQUxMIiwiQ0hPT1NFX0NPTE9SX0JMT0NLIiwiQkxPQ0tfQ0FOX0JFX0NIT1NFTiIsIlNUT1BfSU5QVVQiLCJCTE9DS19GQUxMIiwiU0NPUkVfR09UIiwiUExBWUVSX01PVkVEIiwiQ1JFQVRFX1NVUEVSX0FCSUxJVFkiLCJDUkVBVEVfU1VQRVJfQkxPQ0siLCJCTE9DS19CT01CX0NIT1NFTiIsIkNIRUNLX1NDT1JFU19GT1JfQUJJTElUWSIsIlRPR0dMRV9TVVBFUl9BQklMSVRZIiwiQk9NQl9JU19BVkFJTEFCTEUiLCJGRUFUVVJFX1JFU1VMVCIsIkJMT0NLX0JPTUJfRE9ORSIsIkFDVElWQVRFX0NPTFVNTl9FUkFTRVIiLCJDT0xVTU5fRVJBU0VSX0RPTkUiLCJURUxFUE9SVF9JU19BVkFJTEFCTEUiLCJURUxFUE9SVF9TVEFSVEVEIiwiQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiIsIlRFTEVQT1JURURfQkxPQ0tfQ0hPU0VOIiwiU1RBUlRfVEVMRVBPUlRBVElPTiIsIlRFTEVQT1JUQVRJT05fQ09NUExFVEUiLCJJU19TQ09SRV9FTk9VR0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQWVBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0VBQ25CQyxJQUFJLEVBQUUsQ0FEYTtFQUduQjtFQUNBQyxLQUFLLEVBQUUsRUFKWTtFQUlxQjtFQUV4QztFQUNBQyxjQUFjLEVBQUUsRUFQRztFQU9xQjtFQUd4QztFQUNBQyxrQkFBa0IsRUFBRSxHQVhEO0VBV3FCO0VBQ3hDQyxzQkFBc0IsRUFBRSxHQVpMO0VBWXFCO0VBQ3hDQyxZQUFZLEVBQUUsR0FiSztFQWFxQjtFQUV4QztFQUNBQyxZQUFZLEVBQUUsR0FoQks7RUFnQnFCO0VBQ3hDQyxtQkFBbUIsRUFBRSxHQWpCRjtFQWlCcUI7RUFFeEM7RUFDQUMsa0JBQWtCLEVBQUUsR0FwQkQ7RUFvQnFCO0VBQ3hDQyxpQkFBaUIsRUFBRSxHQXJCQTtFQXFCcUI7RUFHeEM7RUFDQUMsYUFBYSxFQUFFLEdBekJJO0VBeUJxQjtFQUN4Q0MsV0FBVyxFQUFFLEdBMUJNO0VBMEJtQjtFQUV0QztFQUNBQyxRQUFRLEVBQUUsR0E3QlM7RUE2QnFCO0VBQ3hDQyxZQUFZLEVBQUMsR0E5Qk07RUE4QnFCO0VBQ3hDQyxZQUFZLEVBQUMsR0EvQk07RUErQnFCO0VBQ3hDQyxrQkFBa0IsRUFBQyxHQWhDQTtFQWdDcUI7RUFDeENDLG1CQUFtQixFQUFDLEdBakNEO0VBaUNxQjtFQUN4Q0MsVUFBVSxFQUFDLEdBbENRO0VBbUNuQkMsVUFBVSxFQUFDLEdBbkNRO0VBbUNxQjtFQUN4Q0MsU0FBUyxFQUFDLEdBcENTO0VBcUNuQkMsWUFBWSxFQUFDLEdBckNNO0VBcUNxQjtFQUN4Q0Msb0JBQW9CLEVBQUMsR0F0Q0Y7RUFzQ3FCO0VBQ3hDQyxrQkFBa0IsRUFBQyxHQXZDQTtFQXVDcUI7RUFDeENDLGlCQUFpQixFQUFDLEdBeENDO0VBeUNuQkMsd0JBQXdCLEVBQUMsR0F6Q047RUEwQ25CQyxvQkFBb0IsRUFBQyxHQTFDRjtFQTJDbkJDLGlCQUFpQixFQUFDLEdBM0NDO0VBNENuQkMsY0FBYyxFQUFFLEdBNUNHO0VBNENzQjtFQUN6Q0MsZUFBZSxFQUFDLEdBN0NHO0VBNkNzQjtFQUN6Q0Msc0JBQXNCLEVBQUMsR0E5Q0o7RUErQ25CQyxrQkFBa0IsRUFBRSxHQS9DRDtFQWdEbkJDLHFCQUFxQixFQUFFLEdBaERKO0VBaURuQkMsZ0JBQWdCLEVBQUUsR0FqREM7RUFrRG5CQyxzQkFBc0IsRUFBRSxHQWxETDtFQWtEcUI7RUFDeENDLHVCQUF1QixFQUFFLEdBbkROO0VBbURxQjtFQUN4Q0MsbUJBQW1CLEVBQUUsR0FwREY7RUFxRG5CQyxzQkFBc0IsRUFBRSxHQXJETDtFQXNEbkJDLGVBQWUsRUFBRTtBQXRERSxDQUFSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjYy5FbnVtKHtcbiAgICBOT05FOiAwLFxuXG4gICAgLy9JbnB1dFxuICAgIElOUFVUOiAyMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDRgdC+0LHRi9GC0LjQtSDQuNCz0YDQvtCy0L7Qs9C+INCy0LLQvtC00LBcblxuICAgIC8vTGV2ZWxcbiAgICBTRVRfTEVWRUxfREFUQTogMzEsICAgICAgICAgICAgICAgICAgICAgLy8g0YHQvtCx0YvRgtC40LUg0LTQu9GPINC/0LXRgNC10LTQsNGH0Lgg0LTQsNC90L3Ri9C5INCyINGN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgV29ybGQg0LTQu9GPINC/0L7RgdGC0YDQvtC10L3QuNGPINGD0YDQvtCy0L3Rj1xuXG5cbiAgICAvL0dhbWUgb2JqZWN0XG4gICAgQ1JFQVRFX0dBTUVfT0JKRUNUOiAxMDEsICAgICAgICAgICAgICAgIC8vINGB0L7Qt9C00LDRgtGMINGN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgR2FtZU9iamVjdFxuICAgIEdFVF9HQU1FX09CSkVDVF9QQVJFTlQ6IDEwMiwgICAgICAgICAgICAvLyDQv9C+0LvRg9GH0LjRgtGMINGA0L7QtNC40YLQtdC70Y8g0LTQu9GPINGN0LrQt9C10LzQv9C70Y/RgNCwINC60LvQsNGB0YHQsCBHYW1lT2JqZWN0XG4gICAgV09STERfTE9BREVEOiAxMDMsICAgICAgICAgICAgICAgICAgICAgIC8vINGN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgV29ybGQg0L/QvtC70L3QvtGB0YLRjNGOINC30LDQs9GA0YPQttC10L1cblxuICAgIC8vRWZmZWN0XG4gICAgU1BBV05fRUZGRUNUOiA0MDEsICAgICAgICAgICAgICAgICAgICAgIC8vINC30LDRgdC/0LDRg9C90LjRgtGMINGN0YTRhNC10LrRgiDQvdCwINGB0YbQtdC90LVcbiAgICBHRVRfUExBWUlOR19FRkZFQ1RTOiA0MDMsICAgICAgICAgICAgICAgLy8g0L/QvtC70YPRh9C40YLRjCDRgdC/0LjRgdC+0Log0LfQsNC/0YPRidC10L3QvdGL0YUg0Y3RhNGE0LXQutGC0L7QsFxuXG4gICAgLy9DYW1lcmEgKDJEICYgM0QpXG4gICAgQ0FNRVJBX1NUQVJUX1NIQUtFOiA1MDEsICAgICAgICAgICAgICAgIC8vINC30LDQv9GD0YHRgtC40YLRjCDQtNGA0L7QttCw0L3QuNC1INC60LDQvNC10YDRi1xuICAgIENBTUVSQV9TVE9QX1NIQUtFOiA1MDIsICAgICAgICAgICAgICAgICAvLyDQvtGB0YLQsNC90L7QstC40YLRjCDQtNGA0L7QttCw0L3QuNC1INC60LDQvNC10YDRi1xuXG5cbiAgICAvL1VpXG4gICAgVE9HR0xFX1NDUkVFTjogNjAxLCAgICAgICAgICAgICAgICAgICAgIC8vINCy0LrQuy/QstGL0LrQuyDRjdC60YDQsNC9INGD0LrQsNC30LDQvdC90L7Qs9C+INGC0LjQv9CwXG4gICAgU0hPV19TQ1JFRU46IDYwMiwgICAgICAgICAgICAgICAgICAgICAvLyDRgdC+0LHRi9GC0LjQtSwg0LLQutC70Y7Rh9Cw0Y7RidC10LUg0Y3QutGA0LDQvSDRg9C60LDQt9Cw0L3QvdC+0LPQviDRgtC40L/QsCDQuCDQstGL0LrQu9GO0YfQsNGO0YnQtdC1INC40L3Ri9C1INGN0LrRgNCw0L3Riywg0YPQutCw0LfQsNC90L3Ri9C1INCyIFNjcmVlbk1hbmFnZXJcblxuICAgIC8vR2FtZUxvZ2ljXG4gICAgRklFTERfT046IDcwMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yIHNldHRpbmcgYmxvY2tzIHBhcmVudFxuICAgIEJMT0NLX0NIT1NFTjo3MDEsICAgICAgICAgICAgICAgICAgICAgICAvL3BsYXllciBjbGlja2VkIG9uIGJsb2NrXG4gICAgVElNRV9UT19GQUxMOjcwMiwgICAgICAgICAgICAgICAgICAgICAgIC8vb3JkZXIgdG8gZmFsbFxuICAgIENIT09TRV9DT0xPUl9CTE9DSzo3MDMsICAgICAgICAgICAgICAgICAvL29yZGVyIHRvIGNoYW5nZSBibG9jayBjb2xvclxuICAgIEJMT0NLX0NBTl9CRV9DSE9TRU46NzA0LCAgICAgICAgICAgICAgICAvL3R1cm5vZmYgZGVuaWFsIG9mIHRoZSBjbGlja1xuICAgIFNUT1BfSU5QVVQ6NzA1LFxuICAgIEJMT0NLX0ZBTEw6NzA2LCAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBibG9jayBmbHkgaXMgb3ZlclxuICAgIFNDT1JFX0dPVDo3MDcsXG4gICAgUExBWUVSX01PVkVEOjcwOCwgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHN0ZXAgaXMgZG9uZVxuICAgIENSRUFURV9TVVBFUl9BQklMSVRZOjcwOSwgICAgICAgICAgICAgICAvL29uZSBvZiBibG9jayBiZWNvbWUgdGhlIHN1cGVibG9ja1xuICAgIENSRUFURV9TVVBFUl9CTE9DSzo3MTAsICAgICAgICAgICAgICAgICAvL29uZSBvZiBibG9jayBiZWNvbWUgdGhlIHN1cGVibG9ja1xuICAgIEJMT0NLX0JPTUJfQ0hPU0VOOjcxMSxcbiAgICBDSEVDS19TQ09SRVNfRk9SX0FCSUxJVFk6NzEyLFxuICAgIFRPR0dMRV9TVVBFUl9BQklMSVRZOjcxMyxcbiAgICBCT01CX0lTX0FWQUlMQUJMRTo3MTQsXG4gICAgRkVBVFVSRV9SRVNVTFQ6IDcxNSwgICAgICAgICAgICAgICAgICAgICAvL3NlbmRpbmcgdGhlIHJlc3VsdCBvZiBkZWxldGluZyBmZWF0dXJlIHdvcmtcbiAgICBCTE9DS19CT01CX0RPTkU6NzE2LCAgICAgICAgICAgICAgICAgICAgIC8vYm9tYiBibG9jayBpcyBkb25lXG4gICAgQUNUSVZBVEVfQ09MVU1OX0VSQVNFUjo3MTcsXG4gICAgQ09MVU1OX0VSQVNFUl9ET05FOiA3MTgsXG4gICAgVEVMRVBPUlRfSVNfQVZBSUxBQkxFOiA3MTksXG4gICAgVEVMRVBPUlRfU1RBUlRFRDogNzIwLFxuICAgIENIQU5HRV9CTE9DS19BTklNQVRJT046IDcyMSwgICAgICAgICAgICAvLyBpcyB1c2luZyBmb3IgdGhlIHRlbGVwb3J0IHJlYWxpemF0aW9uXG4gICAgVEVMRVBPUlRFRF9CTE9DS19DSE9TRU46IDcyMiwgICAgICAgICAgIC8vIGlzIHVzaW5nIGZvciB0aGUgc2VuZGluZyBvZiB0aGUgdGVsZXBvcnRpbmctYmxvY2tcbiAgICBTVEFSVF9URUxFUE9SVEFUSU9OOiA3MjMsXG4gICAgVEVMRVBPUlRBVElPTl9DT01QTEVURTogNzI0LFxuICAgIElTX1NDT1JFX0VOT1VHSDogNzI1LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/Screen/ResultManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '706890AvoBLZJ5DJcEsc6Y/', 'ResultManager');
// scripts/Game/Ui/Screen/ResultManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    textWin: {
      "default": null,
      type: cc.SpriteFrame
    },
    textLose: {
      "default": null,
      type: cc.SpriteFrame
    },
    text: {
      "default": null,
      type: cc.Sprite
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].SHOW_SCREEN, this.onShowScreen, this);
  },
  //#endregion
  //#region event handlers
  onShowScreen: function onShowScreen(typeScreen, isShow, isWin) {
    if (isWin === void 0) {
      isWin = true;
    }

    if (isWin) {
      this.text.spriteFrame = this.textWin;
    } else {
      this.text.spriteFrame = this.textLose;
    }
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvU2NyZWVuL1Jlc3VsdE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0V2luIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwidGV4dExvc2UiLCJ0ZXh0IiwiU3ByaXRlIiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwib25EaXNhYmxlIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsIkdhbWVFdmVudCIsIlNIT1dfU0NSRUVOIiwib25TaG93U2NyZWVuIiwidHlwZVNjcmVlbiIsImlzU2hvdyIsImlzV2luIiwic3ByaXRlRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUVBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLE9BQU8sRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBRkQ7SUFHUkMsUUFBUSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FIRjtJQUlSRSxJQUFJLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJILElBQUksRUFBRUwsRUFBRSxDQUFDUztJQUExQixDQUpFLENBS1I7SUFFQTtJQUNBO0lBRUE7SUFDQTs7RUFYUSxDQUhQO0VBaUJMO0VBQ0FDLFFBbEJLLHNCQWtCTTtJQUNQLEtBQUtDLG1CQUFMLENBQXlCLElBQXpCO0VBQ0gsQ0FwQkk7RUFzQkxDLFNBdEJLLHVCQXNCTztJQUNSLEtBQUtELG1CQUFMLENBQXlCLEtBQXpCO0VBQ0gsQ0F4Qkk7RUEwQkw7RUFFQTtFQUNBO0VBRUE7RUFDQUEsbUJBaENLLCtCQWdDZUUsSUFoQ2YsRUFnQ3FCO0lBQ3RCLElBQU1DLElBQUksR0FBR0QsSUFBSSxHQUFHLElBQUgsR0FBVSxLQUEzQjtJQUVBYixFQUFFLENBQUNlLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkUscUJBQUEsQ0FBVUMsV0FBL0IsRUFBNEMsS0FBS0MsWUFBakQsRUFBK0QsSUFBL0Q7RUFDSCxDQXBDSTtFQXFDTDtFQUVBO0VBQ0FBLFlBeENLLHdCQXdDUUMsVUF4Q1IsRUF3Q29CQyxNQXhDcEIsRUF3QzRCQyxLQXhDNUIsRUF3QzBDO0lBQUEsSUFBZEEsS0FBYztNQUFkQSxLQUFjLEdBQU4sSUFBTTtJQUFBOztJQUMzQyxJQUFJQSxLQUFKLEVBQVc7TUFDUCxLQUFLYixJQUFMLENBQVVjLFdBQVYsR0FBd0IsS0FBS2xCLE9BQTdCO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0ksSUFBTCxDQUFVYyxXQUFWLEdBQXdCLEtBQUtmLFFBQTdCO0lBQ0g7RUFDSixDQTlDSSxDQStDTDs7QUEvQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuLy8jZW5kcmVnaW9uXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICB0ZXh0V2luOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHRleHRMb3NlOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHRleHQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuU3ByaXRlIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuICAgIF9oYW5kbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuU0hPV19TQ1JFRU4sIHRoaXMub25TaG93U2NyZWVuLCB0aGlzKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25TaG93U2NyZWVuKHR5cGVTY3JlZW4sIGlzU2hvdywgaXNXaW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChpc1dpbikge1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNwcml0ZUZyYW1lID0gdGhpcy50ZXh0V2luO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNwcml0ZUZyYW1lID0gdGhpcy50ZXh0TG9zZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/World/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69ae1uVFftP3KQP8UL7bcQI', 'Block');
// scripts/Game/World/Block.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

var _InputDirection = _interopRequireDefault(require("InputDirection"));

var _BombType = _interopRequireDefault(require("BombType"));

var _TeleportAnimationsType = _interopRequireDefault(require("../Enums/TeleportAnimationsType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    blue: {
      "default": null,
      type: cc.SpriteFrame
    },
    green: {
      "default": null,
      type: cc.SpriteFrame
    },
    purple: {
      "default": null,
      type: cc.SpriteFrame
    },
    red: {
      "default": null,
      type: cc.SpriteFrame
    },
    yellow: {
      "default": null,
      type: cc.SpriteFrame
    },
    inputCatcher: {
      "default": null,
      type: cc.Node
    },
    superAbility: {
      "default": null,
      type: cc.Node
    },
    bombAbility: {
      "default": null,
      type: cc.SpriteFrame
    },
    tntAbility: {
      "default": null,
      type: cc.SpriteFrame
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _elementaryTransfer: {
      "default": 233,
      serializable: false
    },
    _sprite: {
      "default": null,
      serializable: false
    },
    _superAbility: {
      "default": _BombType["default"].None,
      serializable: false
    },
    _choosingTeleportAnimation: {
      "default": 'choosing_teleport'
    },
    _acceptedTeleportAnimation: {
      "default": 'accepted_teleport'
    },
    _initialScale: {
      "default": cc.v2(0, 0),
      serializable: false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this._sprite = this.node.getComponent(cc.Sprite);
    this.node.transferred = 0;
    this._initialScale.x = this.node.scaleX;
    this._initialScale.y = this.node.scaleY;

    this._chooseBlockColor();
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].TIME_TO_FALL, this.onTimeToFall, this);
    cc.systemEvent[func](_GameEvent["default"].CHOOSE_COLOR_BLOCK, this.onChooseColorBlock, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_BOMB_DONE, this.onBlockBombChosen, this);
    cc.systemEvent[func](_GameEvent["default"].COLUMN_ERASER_DONE, this.onColumnEraserDone, this);
    cc.systemEvent[func](_GameEvent["default"].CREATE_SUPER_BLOCK, this.onCreateSuperBlock, this);
    cc.systemEvent[func](_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this.onChangeBlockAnimation, this);
    cc.systemEvent[func](_GameEvent["default"].START_TELEPORTATION, this.onStartTeleportation, this);
  },
  _chooseBlockColor: function _chooseBlockColor() {
    switch (this.node.kind) {
      case _BlockColorType["default"].Blue:
        this.node.getComponent(cc.Sprite).spriteFrame = this.blue;
        this._sprite.spriteFrame = this.blue;
        break;

      case _BlockColorType["default"].Green:
        this._sprite.spriteFrame = this.green;
        break;

      case _BlockColorType["default"].Purple:
        this._sprite.spriteFrame = this.purple;
        break;

      case _BlockColorType["default"].Red:
        this._sprite.spriteFrame = this.red;
        break;

      case _BlockColorType["default"].Yellow:
        this._sprite.spriteFrame = this.yellow;
        break;
    }
  },
  _stopBlockAnimation: function _stopBlockAnimation() {
    this.node.getComponent(cc.Animation).stop();
    this.node.rotation = 0;
    this.node.scaleX = this._initialScale.x;
    this.node.scaleY = this._initialScale.y;
  },
  //#region event handlers
  onTimeToFall: function onTimeToFall() {
    var transferred = this.node.transferred;

    if (transferred > 0) {
      this.node.opacity = 255;

      pg.tweenManager.add(this.node, {
        y: this.node.y - this._elementaryTransfer * transferred
      }, 0.1 * transferred).onComplete = function () {
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_FALL, transferred);
      };
    }
  },
  onChooseColorBlock: function onChooseColorBlock(id, kind) {
    if (id !== this.node.id) return;
    this.node.kind = kind;

    this._chooseBlockColor();
  },
  onBlockBombChosen: function onBlockBombChosen(id) {
    if (this.node.id !== id) return;
    this.superAbility.active = false;
  },
  onColumnEraserDone: function onColumnEraserDone(id) {
    if (this.node.id !== id) return;
    this.superAbility.active = false;
  },
  onCreateSuperBlock: function onCreateSuperBlock(id, kindAbility) {
    if (this.node.id !== id) return;
    var frameAbility = this.bombAbility;

    switch (kindAbility) {
      case _BlockColorType["default"].Bomb:
        this.node.kind = _BlockColorType["default"].Bomb;
        this.superAbility.scale *= 1.5;
        break;

      case _BlockColorType["default"].ColumnEraser:
        this.node.kind = _BlockColorType["default"].ColumnEraser;
        frameAbility = this.tntAbility;
        break;
    }

    this.superAbility.active = true;
    this.superAbility.getComponent(cc.Sprite).spriteFrame = frameAbility;
  },
  onChangeBlockAnimation: function onChangeBlockAnimation(coords, animationType) {
    if (this.node.iI === coords.x && this.node.iJ === coords.y) {
      var animationName;

      switch (animationType) {
        case _TeleportAnimationsType["default"].Choosing:
          animationName = this._choosingTeleportAnimation;
          break;

        case _TeleportAnimationsType["default"].Accepted:
          animationName = this._acceptedTeleportAnimation;
          break;

        case _TeleportAnimationsType["default"].None:
          this._stopBlockAnimation();

          return;
      }

      this.node.getComponent(cc.Animation).play(animationName);
    }
  },
  onStartTeleportation: function onStartTeleportation(first, second, firstCoord, secondCoord) {
    var isTeleportNeeded = false;
    var coordTransfer = secondCoord;

    if (this.node.id === first.id) {
      isTeleportNeeded = true;
    } else if (this.node.id === second.id) {
      coordTransfer = firstCoord;
      isTeleportNeeded = true;
    }

    if (isTeleportNeeded) {
      this._stopBlockAnimation();

      pg.tweenManager.add(this.node, {
        y: coordTransfer.y,
        x: coordTransfer.x
      }, 0.1).onComplete = function () {
        cc.systemEvent.emit(_GameEvent["default"].TELEPORTATION_COMPLETE);
      };
    }
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvV29ybGQvQmxvY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibHVlIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwiZ3JlZW4iLCJwdXJwbGUiLCJyZWQiLCJ5ZWxsb3ciLCJpbnB1dENhdGNoZXIiLCJOb2RlIiwic3VwZXJBYmlsaXR5IiwiYm9tYkFiaWxpdHkiLCJ0bnRBYmlsaXR5IiwiX2VsZW1lbnRhcnlUcmFuc2ZlciIsInNlcmlhbGl6YWJsZSIsIl9zcHJpdGUiLCJfc3VwZXJBYmlsaXR5IiwiQm9tYlR5cGUiLCJOb25lIiwiX2Nob29zaW5nVGVsZXBvcnRBbmltYXRpb24iLCJfYWNjZXB0ZWRUZWxlcG9ydEFuaW1hdGlvbiIsIl9pbml0aWFsU2NhbGUiLCJ2MiIsIm9uRW5hYmxlIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJ0cmFuc2ZlcnJlZCIsIngiLCJzY2FsZVgiLCJ5Iiwic2NhbGVZIiwiX2Nob29zZUJsb2NrQ29sb3IiLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiVElNRV9UT19GQUxMIiwib25UaW1lVG9GYWxsIiwiQ0hPT1NFX0NPTE9SX0JMT0NLIiwib25DaG9vc2VDb2xvckJsb2NrIiwiQkxPQ0tfQk9NQl9ET05FIiwib25CbG9ja0JvbWJDaG9zZW4iLCJDT0xVTU5fRVJBU0VSX0RPTkUiLCJvbkNvbHVtbkVyYXNlckRvbmUiLCJDUkVBVEVfU1VQRVJfQkxPQ0siLCJvbkNyZWF0ZVN1cGVyQmxvY2siLCJDSEFOR0VfQkxPQ0tfQU5JTUFUSU9OIiwib25DaGFuZ2VCbG9ja0FuaW1hdGlvbiIsIlNUQVJUX1RFTEVQT1JUQVRJT04iLCJvblN0YXJ0VGVsZXBvcnRhdGlvbiIsImtpbmQiLCJCbG9ja0NvbG9yVHlwZSIsIkJsdWUiLCJzcHJpdGVGcmFtZSIsIkdyZWVuIiwiUHVycGxlIiwiUmVkIiwiWWVsbG93IiwiX3N0b3BCbG9ja0FuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInN0b3AiLCJyb3RhdGlvbiIsIm9wYWNpdHkiLCJwZyIsInR3ZWVuTWFuYWdlciIsImFkZCIsIm9uQ29tcGxldGUiLCJlbWl0IiwiQkxPQ0tfRkFMTCIsImlkIiwiYWN0aXZlIiwia2luZEFiaWxpdHkiLCJmcmFtZUFiaWxpdHkiLCJCb21iIiwic2NhbGUiLCJDb2x1bW5FcmFzZXIiLCJjb29yZHMiLCJhbmltYXRpb25UeXBlIiwiaUkiLCJpSiIsImFuaW1hdGlvbk5hbWUiLCJUZWxlcG9ydEFuaW1hdGlvbnNUeXBlIiwiQ2hvb3NpbmciLCJBY2NlcHRlZCIsInBsYXkiLCJmaXJzdCIsInNlY29uZCIsImZpcnN0Q29vcmQiLCJzZWNvbmRDb29yZCIsImlzVGVsZXBvcnROZWVkZWQiLCJjb29yZFRyYW5zZmVyIiwiVEVMRVBPUlRBVElPTl9DT01QTEVURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUxBO0FBTUE7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsSUFBSSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FGRTtJQUdSQyxLQUFLLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJGLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUhDO0lBSVJFLE1BQU0sRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkgsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBSkE7SUFLUkcsR0FBRyxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FMRztJQU1SSSxNQUFNLEVBQUU7TUFBRSxXQUFTLElBQVg7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YW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICdCbG9ja0NvbG9yVHlwZSc7XG5pbXBvcnQgSW5wdXREaXJlY3Rpb24gZnJvbSAnSW5wdXREaXJlY3Rpb24nO1xuaW1wb3J0IEJvbWJUeXBlIGZyb20gJ0JvbWJUeXBlJztcbmltcG9ydCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlIGZyb20gJy4uL0VudW1zL1RlbGVwb3J0QW5pbWF0aW9uc1R5cGUnO1xuLy8jZW5kcmVnaW9uXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBibHVlOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIGdyZWVuOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHB1cnBsZTogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5TcHJpdGVGcmFtZSB9LFxuICAgICAgICByZWQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSxcbiAgICAgICAgeWVsbG93OiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIGlucHV0Q2F0Y2hlcjogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5Ob2RlIH0sXG4gICAgICAgIHN1cGVyQWJpbGl0eTogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5Ob2RlIH0sXG4gICAgICAgIGJvbWJBYmlsaXR5OiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0sXG4gICAgICAgIHRudEFiaWxpdHk6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuU3ByaXRlRnJhbWUgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHByaXZhdGUgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9lbGVtZW50YXJ5VHJhbnNmZXI6IHsgZGVmYXVsdDogMjMzLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9zcHJpdGU6IHsgZGVmYXVsdDogbnVsbCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfc3VwZXJBYmlsaXR5OiB7IGRlZmF1bHQ6IEJvbWJUeXBlLk5vbmUsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2Nob29zaW5nVGVsZXBvcnRBbmltYXRpb246IHtkZWZhdWx0OiAnY2hvb3NpbmdfdGVsZXBvcnQnfSxcbiAgICAgICAgX2FjY2VwdGVkVGVsZXBvcnRBbmltYXRpb246IHtkZWZhdWx0OiAnYWNjZXB0ZWRfdGVsZXBvcnQnfSxcbiAgICAgICAgX2luaXRpYWxTY2FsZTogeyBkZWZhdWx0OiBjYy52MigwLDApLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIHRoaXMubm9kZS50cmFuc2ZlcnJlZCA9IDA7XG5cbiAgICAgICAgdGhpcy5faW5pdGlhbFNjYWxlLnggPSB0aGlzLm5vZGUuc2NhbGVYOyAgXG4gICAgICAgIHRoaXMuX2luaXRpYWxTY2FsZS55ID0gdGhpcy5ub2RlLnNjYWxlWTtcblxuICAgICAgICB0aGlzLl9jaG9vc2VCbG9ja0NvbG9yKCk7XG5cbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LlRJTUVfVE9fRkFMTCwgdGhpcy5vblRpbWVUb0ZhbGwsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuQ0hPT1NFX0NPTE9SX0JMT0NLLCB0aGlzLm9uQ2hvb3NlQ29sb3JCbG9jaywgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5CTE9DS19CT01CX0RPTkUsIHRoaXMub25CbG9ja0JvbWJDaG9zZW4sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuQ09MVU1OX0VSQVNFUl9ET05FLCB0aGlzLm9uQ29sdW1uRXJhc2VyRG9uZSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DUkVBVEVfU1VQRVJfQkxPQ0ssIHRoaXMub25DcmVhdGVTdXBlckJsb2NrLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkNIQU5HRV9CTE9DS19BTklNQVRJT04sIHRoaXMub25DaGFuZ2VCbG9ja0FuaW1hdGlvbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TVEFSVF9URUxFUE9SVEFUSU9OLCB0aGlzLm9uU3RhcnRUZWxlcG9ydGF0aW9uLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX2Nob29zZUJsb2NrQ29sb3IoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5ub2RlLmtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuQmx1ZTpcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5ibHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5HcmVlbjpcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdyZWVuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5QdXJwbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5wdXJwbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEJsb2NrQ29sb3JUeXBlLlJlZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnJlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuWWVsbG93OlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMueWVsbG93O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9zdG9wQmxvY2tBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKClcbiAgICAgICAgdGhpcy5ub2RlLnJvdGF0aW9uID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuX2luaXRpYWxTY2FsZS54O1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGVZID0gdGhpcy5faW5pdGlhbFNjYWxlLnk7XG4gICAgfSxcblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uVGltZVRvRmFsbCgpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmZXJyZWQgPSB0aGlzLm5vZGUudHJhbnNmZXJyZWQ7XG4gICAgICAgIGlmICh0cmFuc2ZlcnJlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgcGcudHdlZW5NYW5hZ2VyLmFkZCh0aGlzLm5vZGUsIHsgeTogdGhpcy5ub2RlLnkgLSB0aGlzLl9lbGVtZW50YXJ5VHJhbnNmZXIgKiB0cmFuc2ZlcnJlZCB9LCAwLjEgKiB0cmFuc2ZlcnJlZCkub25Db21wbGV0ZSA9XG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5CTE9DS19GQUxMLCB0cmFuc2ZlcnJlZCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNob29zZUNvbG9yQmxvY2soaWQsIGtpbmQpIHtcbiAgICAgICAgaWYgKGlkICE9PSB0aGlzLm5vZGUuaWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5ub2RlLmtpbmQgPSBraW5kO1xuICAgICAgICB0aGlzLl9jaG9vc2VCbG9ja0NvbG9yKCk7XG4gICAgfSxcblxuICAgIG9uQmxvY2tCb21iQ2hvc2VuKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuaWQgIT09IGlkKSBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLnN1cGVyQWJpbGl0eS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25Db2x1bW5FcmFzZXJEb25lKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuaWQgIT09IGlkKSBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLnN1cGVyQWJpbGl0eS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgb25DcmVhdGVTdXBlckJsb2NrKGlkLCBraW5kQWJpbGl0eSkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmlkICE9PSBpZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgZnJhbWVBYmlsaXR5ID0gdGhpcy5ib21iQWJpbGl0eTtcbiAgICAgICAgc3dpdGNoIChraW5kQWJpbGl0eSkge1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5Cb21iOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5raW5kID0gQmxvY2tDb2xvclR5cGUuQm9tYjtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cGVyQWJpbGl0eS5zY2FsZSAqPSAxLjU7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmtpbmQgPSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXI7XG4gICAgICAgICAgICAgICAgZnJhbWVBYmlsaXR5ID0gdGhpcy50bnRBYmlsaXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdXBlckFiaWxpdHkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdXBlckFiaWxpdHkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBmcmFtZUFiaWxpdHk7XG4gICAgfSxcblxuICAgIG9uQ2hhbmdlQmxvY2tBbmltYXRpb24oY29vcmRzLCBhbmltYXRpb25UeXBlKSB7XG4gICAgICAgIGlmKHRoaXMubm9kZS5pSSA9PT0gY29vcmRzLnggJiYgdGhpcy5ub2RlLmlKID09PSBjb29yZHMueSkge1xuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbk5hbWU7XG4gICAgICAgICAgICBzd2l0Y2ggKGFuaW1hdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUuQ2hvb3Npbmc6XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbk5hbWUgPSAgdGhpcy5fY2hvb3NpbmdUZWxlcG9ydEFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLkFjY2VwdGVkOlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25OYW1lID0gIHRoaXMuX2FjY2VwdGVkVGVsZXBvcnRBbmltYXRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgVGVsZXBvcnRBbmltYXRpb25zVHlwZS5Ob25lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQmxvY2tBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShhbmltYXRpb25OYW1lKTtcbiAgICAgICAgfSAgICBcbiAgICB9LFxuXG4gICAgb25TdGFydFRlbGVwb3J0YXRpb24oZmlyc3QsIHNlY29uZCwgZmlyc3RDb29yZCwgc2Vjb25kQ29vcmQpIHtcbiAgICAgICAgbGV0IGlzVGVsZXBvcnROZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkVHJhbnNmZXIgPSBzZWNvbmRDb29yZDtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pZCA9PT0gZmlyc3QuaWQpIHtcbiAgICAgICAgICAgIGlzVGVsZXBvcnROZWVkZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS5pZCA9PT0gc2Vjb25kLmlkKSB7XG4gICAgICAgICAgICBjb29yZFRyYW5zZmVyID0gZmlyc3RDb29yZDtcbiAgICAgICAgICAgIGlzVGVsZXBvcnROZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1RlbGVwb3J0TmVlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wQmxvY2tBbmltYXRpb24oKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwZy50d2Vlbk1hbmFnZXIuYWRkKHRoaXMubm9kZSwgeyB5OiBjb29yZFRyYW5zZmVyLnksIHg6IGNvb3JkVHJhbnNmZXIueCB9LCAwLjEpLm9uQ29tcGxldGUgPVxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVEVMRVBPUlRBVElPTl9DT01QTEVURSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Effect/EffectType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a66f2qFgdlKVJKrP+cJswgJ', 'EffectType');
// scripts/Game/Effect/EffectType.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = cc.Enum({
  None: 0,
  Explosion: 1
});

exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRWZmZWN0L0VmZmVjdFR5cGUuanMiXSwibmFtZXMiOlsiY2MiLCJFbnVtIiwiTm9uZSIsIkV4cGxvc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZUEsRUFBRSxDQUFDQyxJQUFILENBQVE7RUFDbkJDLElBQUksRUFBRSxDQURhO0VBRW5CQyxTQUFTLEVBQUU7QUFGUSxDQUFSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjYy5FbnVtKHtcbiAgICBOb25lOiAwLFxuICAgIEV4cGxvc2lvbjogMSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Enums/InputType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '944fc4QXTNN2r/nds1rE+r+', 'InputType');
// scripts/Plugins/Input/Enums/InputType.js

"use strict";

var InputType = cc.Enum({
  None: 0,
  Down: 1,
  Move: 2,
  Up: 3,
  Cansel: 4
});
module.exports = InputType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvRW51bXMvSW5wdXRUeXBlLmpzIl0sIm5hbWVzIjpbIklucHV0VHlwZSIsImNjIiwiRW51bSIsIk5vbmUiLCJEb3duIiwiTW92ZSIsIlVwIiwiQ2Fuc2VsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0VBQ3RCQyxJQUFJLEVBQUUsQ0FEZ0I7RUFHdEJDLElBQUksRUFBRSxDQUhnQjtFQUl0QkMsSUFBSSxFQUFFLENBSmdCO0VBS3RCQyxFQUFFLEVBQUUsQ0FMa0I7RUFNdEJDLE1BQU0sRUFBRTtBQU5jLENBQVIsQ0FBbEI7QUFTQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxTQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW5wdXRUeXBlID0gY2MuRW51bSh7XG4gICAgTm9uZTogMCxcblxuICAgIERvd246IDEsXG4gICAgTW92ZTogMixcbiAgICBVcDogMyxcbiAgICBDYW5zZWw6IDQsXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dFR5cGU7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Camera/CameraController2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e8040IYd5NGrcXp6vqHg01', 'CameraController2D');
// scripts/Plugins/Camera/CameraController2D.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region import
//#endregion
var StickModes = cc.Enum({
  None: 0,
  Top: 1,
  Bottom: 2,
  Right: 3,
  Left: 4
});
var CaptureBoxHelper = cc.Class({
  name: 'CaptureBoxHelper',
  properties: {
    //#region editors fields and properties
    stickMode: {
      "default": StickModes.Bottom,
      type: StickModes,
      tooltip: 'к какой стороне экрана прилипает изображение'
    },
    defaultBox: {
      type: cc.Node,
      get: function get() {
        return this._isTransition && this._transitionBox ? this._transitionBox : this._defaultBox;
      },
      set: function set(box) {
        if (box instanceof cc.Node) {
          this._defaultBox = box;
        }
      },
      tooltip: 'начальная коробка, на которую смотрит камера'
    },
    //#endregion
    //#region private field and properties
    _defaultBox: {
      "default": null,
      type: cc.Node
    },
    _isTransition: {
      "default": false,
      serializable: false
    },
    _transitTween: {
      "default": null,
      type: pg.Tween,
      serializable: false
    },
    _transitValue: {
      "default": 0,
      serializable: false
    },
    _transitionBox: {
      "default": null,
      type: cc.Node,
      serializable: false
    },
    _transitionResize: {
      "default": null,
      type: pg.ResizeComponent,
      serializable: false
    } //#endregion

  },
  transitToBox: function transitToBox(newBox, duration, easing) {
    var _this = this;

    this._isTransition && this.cancelTransition();
    this._transitValue = 0;
    this._transitTween = pg.tweenManager.add(this, {
      _transitValue: 1
    }, duration, easing);

    this._setTransitBox(newBox);

    var defaultBoxResize = this.defaultBox.getComponent(pg.ResizeComponent);
    var newBoxResize = newBox.getComponent(pg.ResizeComponent);

    if (defaultBoxResize && newBoxResize) {
      this._transitionResize.set(defaultBoxResize);

      var initialPos = this.defaultBox.position.clone();

      this._transitTween.onUpdate = function () {
        // FIXME: lerp resize with absolute position
        //defaultBoxResize.lerp(newBoxResize, this._transitValue, this._transitionResize);
        _this._transitionBox.x = newBox.x * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.x;
        _this._transitionBox.y = newBox.y * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.y;
        _this._transitionBox.width = newBox.width * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.width;
        _this._transitionBox.height = newBox.height * _this._transitValue + (1 - _this._transitValue) * _this._defaultBox.height;
      };

      this._transitTween.onComplete = function () {
        _this._isTransition = false;
        _this.defaultBox = newBox;
      };

      this._isTransition = true;
    }
  },
  cancelTransition: function cancelTransition() {
    this._transitTween && this._transitTween.stop();
    this._transitValue = 0;
    this._isTransition = false;
    this.defaultBox = this._transitionBox;
  },
  _setTransitBox: function _setTransitBox(newBox) {
    if (!this._transitionBox) {
      this._transitionBox = new cc.Node('CameraTransitionBox');
    }

    if (!this._transitionResize) {
      this._transitionResize = this._transitionBox.getComponent(pg.ResizeComponent) || this._transitionBox.addComponent(pg.ResizeComponent);
    }

    this._transitionBox.setParent(newBox.parent);
  }
});
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    focus: {
      "default": cc.v2(0.5, 0.5),
      tooltip: 'фокус камеры от 0 до 1 по каждой из осей'
    },
    isUsingCameraBoxes: {
      "default": false,
      tooltip: 'использовать камера боксы. Если нет, предполагается что камера статична'
    },
    //#endregion
    //#region editors fields and properties
    boxHelper: {
      "default": function _default() {
        return new CaptureBoxHelper();
      },
      visible: function visible() {
        return this.isUsingCameraBoxes;
      },
      type: CaptureBoxHelper
    },
    fitSpace: {
      "default": false,
      visible: function visible() {
        return this.isUsingCameraBoxes;
      },
      tooltip: 'если true, камера гарантирует попадание всей коробки, на false гарантируется покрытие камеры целиком (без черных полос)'
    },
    deltaShake: {
      "default": cc.Vec2.ZERO,
      tooltip: 'вектор для шейка камеры. Задает направление и амплитуду'
    },
    shakeFrequency: {
      "default": cc.v2(1, 1),
      tooltip: 'количество полных оборотов камеры по каждой оси за секунду'
    },
    //#endregion
    //#region private field and properties
    _camera: {
      "default": null,
      serializable: false
    },
    _boxes: {
      "default": {},
      serializable: false
    },
    _currentShakeOffset: {
      "default": cc.v2(),
      serializable: false
    },
    _isShaking: {
      "default": false,
      serializable: false
    },
    _shakingTime: {
      "default": 0,
      serializable: false
    },
    _staticCameraPos: {
      "default": cc.v2(),
      serializable: false
    } //#endregion

  },
  editor: {
    menu: 'Camera/CameraController2D'
  },
  //#region life-cycle callbacks
  onLoad: function onLoad() {
    if (!this._camera) {
      this._camera = this.node.getComponent(cc.Camera);
    }

    this._handleSubscription(true);
  },
  onEnable: function onEnable() {
    this._staticCameraPos = this.node.position.clone();
  },
  update: function update(dt) {
    this._updatePosition();

    this._updateZoomRatio();

    if (this._isShaking) {
      this._shakingTime += dt; // камера трясется по синусоиде с заданной частотой и амплитудой

      var xOffset = this.shakeFrequency.x > 0 ? Math.sin(Math.PI * this._shakingTime * this.shakeFrequency.x) * this.deltaShake.x : 0;
      var yOffset = this.shakeFrequency.y > 0 ? Math.sin(Math.PI * this._shakingTime * this.shakeFrequency.y) * this.deltaShake.y : 0;
      this._currentShakeOffset = cc.v2(xOffset, yOffset);
    }
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private method
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].CAMERA_TRANSIT_BOX, this.onCameraTransitBox, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_BOX_ADD, this.onCameraBoxAdd, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_BOX_SWITCH, this.onCameraBoxSwitch, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_START_SHAKE, this.onCameraStartShake, this);
    cc.systemEvent[func](_GameEvent["default"].CAMERA_STOP_SHAKE, this.onCameraStopShake, this);
  },
  _updateZoomRatio: function _updateZoomRatio() {
    var zoomRatio = 1;

    if (this.boxHelper.defaultBox) {
      var tw = this.boxHelper.defaultBox.width;
      var th = this.boxHelper.defaultBox.height;
      var gw = pg.settings.GAME_WIDTH;
      var gh = pg.settings.GAME_HEIGHT;
      var zX = gw / tw;
      var zY = gh / th;
      zoomRatio = this.fitSpace ? Math.max(zX, zY) : Math.min(zX, zY);
    }

    this._setZoomRatio(zoomRatio);
  },
  _updatePosition: function _updatePosition() {
    if (this.isUsingCameraBoxes && this.boxHelper.defaultBox) {
      var targetWorldPosition = this.boxHelper.defaultBox.convertToWorldSpaceAR(cc.Vec2.ZERO);
      var offset = cc.v2(this._camera.width * (this.boxHelper.defaultBox.anchorX - this.focus.x), this._camera.height * (this.boxHelper.defaultBox.anchorY - this.focus.y));
      var cameraWorldPosition = targetWorldPosition.add(offset);

      this._checkStickPosition(cameraWorldPosition);

      var cameraLocalPosition = this.node.parent.convertToNodeSpaceAR(cameraWorldPosition);
      this.node.setPosition(cameraLocalPosition.add(this._currentShakeOffset));
    } else if (!this.isUsingCameraBoxes) {
      this.node.setPosition(this._staticCameraPos.add(this._currentShakeOffset));
    }
  },
  _checkStickPosition: function _checkStickPosition(cameraWorld) {
    var viewSize = cc.view.getVisibleSize();

    switch (this.boxHelper.stickMode) {
      case StickModes.Top:
        cameraWorld.y = cameraWorld.y - (this._camera.height - this.boxHelper.defaultBox.height) * 0.5;
        break;

      case StickModes.Bottom:
        cameraWorld.y = cameraWorld.y + (this._camera.height - this.boxHelper.defaultBox.height) * 0.5;
        break;

      case StickModes.Right:
        cameraWorld.x = cameraWorld.x - (this._camera.width - this.boxHelper.defaultBox.width) * 0.5;
        break;

      case StickModes.Left:
        cameraWorld.x = cameraWorld.x + (this._camera.width - this.boxHelper.defaultBox.width) * 0.5;
        break;
    }
  },
  _setZoomRatio: function _setZoomRatio(zoomRatio) {
    this._camera.zoomRatio = zoomRatio;
    this._camera.width = pg.settings.GAME_WIDTH / this._camera.zoomRatio;
    this._camera.height = pg.settings.GAME_HEIGHT / this._camera.zoomRatio;
  },
  //#endregion
  //#region event handlers
  onCameraTransitBox: function onCameraTransitBox(newBox, duration, easing) {
    if (duration === void 0) {
      duration = 0;
    }

    if (newBox) {
      if (duration === 0) {
        this.boxHelper.defaultBox = newBox;
      } else {
        this.boxHelper.transitToBox(newBox, duration, easing);
      }
    }
  },
  onCameraBoxAdd: function onCameraBoxAdd(type, box) {
    if (box instanceof cc.Node) {
      this._boxes[type] = box;
    }
  },
  onCameraBoxSwitch: function onCameraBoxSwitch(type, duration, easing) {
    var newBox = this._boxes[type];
    this.onCameraTransitBox(newBox, duration, easing);
  },
  onCameraStartShake: function onCameraStartShake() {
    this._isShaking = true;
  },
  onCameraStopShake: function onCameraStopShake() {
    this._isShaking = false;
    this._currentShakeOffset = cc.v2();
    this._shakingTime = 0;
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvQ2FtZXJhL0NhbWVyYUNvbnRyb2xsZXIyRC5qcyJdLCJuYW1lcyI6WyJTdGlja01vZGVzIiwiY2MiLCJFbnVtIiwiTm9uZSIsIlRvcCIsIkJvdHRvbSIsIlJpZ2h0IiwiTGVmdCIsIkNhcHR1cmVCb3hIZWxwZXIiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwic3RpY2tNb2RlIiwidHlwZSIsInRvb2x0aXAiLCJkZWZhdWx0Qm94IiwiTm9kZSIsImdldCIsIl9pc1RyYW5zaXRpb24iLCJfdHJhbnNpdGlvbkJveCIsIl9kZWZhdWx0Qm94Iiwic2V0IiwiYm94Iiwic2VyaWFsaXphYmxlIiwiX3RyYW5zaXRUd2VlbiIsInBnIiwiVHdlZW4iLCJfdHJhbnNpdFZhbHVlIiwiX3RyYW5zaXRpb25SZXNpemUiLCJSZXNpemVDb21wb25lbnQiLCJ0cmFuc2l0VG9Cb3giLCJuZXdCb3giLCJkdXJhdGlvbiIsImVhc2luZyIsImNhbmNlbFRyYW5zaXRpb24iLCJ0d2Vlbk1hbmFnZXIiLCJhZGQiLCJfc2V0VHJhbnNpdEJveCIsImRlZmF1bHRCb3hSZXNpemUiLCJnZXRDb21wb25lbnQiLCJuZXdCb3hSZXNpemUiLCJpbml0aWFsUG9zIiwicG9zaXRpb24iLCJjbG9uZSIsIm9uVXBkYXRlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ29tcGxldGUiLCJzdG9wIiwiYWRkQ29tcG9uZW50Iiwic2V0UGFyZW50IiwicGFyZW50IiwiQ29tcG9uZW50IiwiZm9jdXMiLCJ2MiIsImlzVXNpbmdDYW1lcmFCb3hlcyIsImJveEhlbHBlciIsInZpc2libGUiLCJmaXRTcGFjZSIsImRlbHRhU2hha2UiLCJWZWMyIiwiWkVSTyIsInNoYWtlRnJlcXVlbmN5IiwiX2NhbWVyYSIsIl9ib3hlcyIsIl9jdXJyZW50U2hha2VPZmZzZXQiLCJfaXNTaGFraW5nIiwiX3NoYWtpbmdUaW1lIiwiX3N0YXRpY0NhbWVyYVBvcyIsImVkaXRvciIsIm1lbnUiLCJvbkxvYWQiLCJub2RlIiwiQ2FtZXJhIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsIm9uRW5hYmxlIiwidXBkYXRlIiwiZHQiLCJfdXBkYXRlUG9zaXRpb24iLCJfdXBkYXRlWm9vbVJhdGlvIiwieE9mZnNldCIsIk1hdGgiLCJzaW4iLCJQSSIsInlPZmZzZXQiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiQ0FNRVJBX1RSQU5TSVRfQk9YIiwib25DYW1lcmFUcmFuc2l0Qm94IiwiQ0FNRVJBX0JPWF9BREQiLCJvbkNhbWVyYUJveEFkZCIsIkNBTUVSQV9CT1hfU1dJVENIIiwib25DYW1lcmFCb3hTd2l0Y2giLCJDQU1FUkFfU1RBUlRfU0hBS0UiLCJvbkNhbWVyYVN0YXJ0U2hha2UiLCJDQU1FUkFfU1RPUF9TSEFLRSIsIm9uQ2FtZXJhU3RvcFNoYWtlIiwiem9vbVJhdGlvIiwidHciLCJ0aCIsImd3Iiwic2V0dGluZ3MiLCJHQU1FX1dJRFRIIiwiZ2giLCJHQU1FX0hFSUdIVCIsInpYIiwielkiLCJtYXgiLCJtaW4iLCJfc2V0Wm9vbVJhdGlvIiwidGFyZ2V0V29ybGRQb3NpdGlvbiIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIm9mZnNldCIsImFuY2hvclgiLCJhbmNob3JZIiwiY2FtZXJhV29ybGRQb3NpdGlvbiIsIl9jaGVja1N0aWNrUG9zaXRpb24iLCJjYW1lcmFMb2NhbFBvc2l0aW9uIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJzZXRQb3NpdGlvbiIsImNhbWVyYVdvcmxkIiwidmlld1NpemUiLCJ2aWV3IiwiZ2V0VmlzaWJsZVNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFGQTtBQUlBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtFQUN2QkMsSUFBSSxFQUFFLENBRGlCO0VBRXZCQyxHQUFHLEVBQUUsQ0FGa0I7RUFHdkJDLE1BQU0sRUFBRSxDQUhlO0VBSXZCQyxLQUFL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O0lBQ2hCLEtBQUtoQyxVQUFMLEdBQWtCLEtBQWxCO0lBQ0EsS0FBS0QsbUJBQUwsR0FBMkJsRSxFQUFFLENBQUN1RCxFQUFILEVBQTNCO0lBQ0EsS0FBS2EsWUFBTCxHQUFvQixDQUFwQjtFQUNILENBbk5JLENBcU5MOztBQXJOSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gaW1wb3J0XG5cbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcblxuLy8jZW5kcmVnaW9uXG5cbmNvbnN0IFN0aWNrTW9kZXMgPSBjYy5FbnVtKHtcbiAgICBOb25lOiAwLFxuICAgIFRvcDogMSxcbiAgICBCb3R0b206IDIsXG4gICAgUmlnaHQ6IDMsXG4gICAgTGVmdDogNCxcbn0pO1xuXG5jb25zdCBDYXB0dXJlQm94SGVscGVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdDYXB0dXJlQm94SGVscGVyJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuXG4gICAgICAgIHN0aWNrTW9kZToge1xuICAgICAgICAgICAgZGVmYXVsdDogU3RpY2tNb2Rlcy5Cb3R0b20sXG4gICAgICAgICAgICB0eXBlOiBTdGlja01vZGVzLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9C6INC60LDQutC+0Lkg0YHRgtC+0YDQvtC90LUg0Y3QutGA0LDQvdCwINC/0YDQuNC70LjQv9Cw0LXRgiDQuNC30L7QsdGA0LDQttC10L3QuNC1JyxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdEJveDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faXNUcmFuc2l0aW9uICYmIHRoaXMuX3RyYW5zaXRpb25Cb3ggPyB0aGlzLl90cmFuc2l0aW9uQm94IDogdGhpcy5fZGVmYXVsdEJveDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQoYm94KSB7XG4gICAgICAgICAgICAgICAgaWYgKGJveCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdEJveCA9IGJveDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDogJ9C90LDRh9Cw0LvRjNC90LDRjyDQutC+0YDQvtCx0LrQsCwg0L3QsCDQutC+0YLQvtGA0YPRjiDRgdC80L7RgtGA0LjRgiDQutCw0LzQtdGA0LAnLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkIGFuZCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgX2RlZmF1bHRCb3g6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTm9kZSB9LFxuXG4gICAgICAgIF9pc1RyYW5zaXRpb246IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3RyYW5zaXRUd2VlbjogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBwZy5Ud2Vlbiwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfdHJhbnNpdFZhbHVlOiB7IGRlZmF1bHQ6IDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcblxuICAgICAgICBfdHJhbnNpdGlvbkJveDogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5Ob2RlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF90cmFuc2l0aW9uUmVzaXplOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IHBnLlJlc2l6ZUNvbXBvbmVudCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICB0cmFuc2l0VG9Cb3gobmV3Qm94LCBkdXJhdGlvbiwgZWFzaW5nKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbiAmJiB0aGlzLmNhbmNlbFRyYW5zaXRpb24oKTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdFZhbHVlID0gMDtcblxuICAgICAgICB0aGlzLl90cmFuc2l0VHdlZW4gPSBwZy50d2Vlbk1hbmFnZXIuYWRkKHRoaXMsIHsgX3RyYW5zaXRWYWx1ZTogMSB9LCBkdXJhdGlvbiwgZWFzaW5nKTtcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNpdEJveChuZXdCb3gpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRCb3hSZXNpemUgPSB0aGlzLmRlZmF1bHRCb3guZ2V0Q29tcG9uZW50KHBnLlJlc2l6ZUNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IG5ld0JveFJlc2l6ZSA9IG5ld0JveC5nZXRDb21wb25lbnQocGcuUmVzaXplQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZGVmYXVsdEJveFJlc2l6ZSAmJiBuZXdCb3hSZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25SZXNpemUuc2V0KGRlZmF1bHRCb3hSZXNpemUpO1xuXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsUG9zID0gdGhpcy5kZWZhdWx0Qm94LnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRUd2Vlbi5vblVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBGSVhNRTogbGVycCByZXNpemUgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgIC8vZGVmYXVsdEJveFJlc2l6ZS5sZXJwKG5ld0JveFJlc2l6ZSwgdGhpcy5fdHJhbnNpdFZhbHVlLCB0aGlzLl90cmFuc2l0aW9uUmVzaXplKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Cb3gueCA9IG5ld0JveC54ICogdGhpcy5fdHJhbnNpdFZhbHVlICsgKDEgLSB0aGlzLl90cmFuc2l0VmFsdWUpICogdGhpcy5fZGVmYXVsdEJveC54O1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Cb3gueSA9IG5ld0JveC55ICogdGhpcy5fdHJhbnNpdFZhbHVlICsgKDEgLSB0aGlzLl90cmFuc2l0VmFsdWUpICogdGhpcy5fZGVmYXVsdEJveC55O1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Cb3gud2lkdGggPSBuZXdCb3gud2lkdGggKiB0aGlzLl90cmFuc2l0VmFsdWUgKyAoMSAtIHRoaXMuX3RyYW5zaXRWYWx1ZSkgKiB0aGlzLl9kZWZhdWx0Qm94LndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Cb3guaGVpZ2h0ID0gbmV3Qm94LmhlaWdodCAqIHRoaXMuX3RyYW5zaXRWYWx1ZSArICgxIC0gdGhpcy5fdHJhbnNpdFZhbHVlKSAqIHRoaXMuX2RlZmF1bHRCb3guaGVpZ2h0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdFR3ZWVuLm9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0Qm94ID0gbmV3Qm94O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWxUcmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0VHdlZW4gJiYgdGhpcy5fdHJhbnNpdFR3ZWVuLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdFZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0Qm94ID0gdGhpcy5fdHJhbnNpdGlvbkJveDtcbiAgICB9LFxuXG4gICAgX3NldFRyYW5zaXRCb3gobmV3Qm94KSB7XG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbkJveCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkJveCA9IG5ldyBjYy5Ob2RlKCdDYW1lcmFUcmFuc2l0aW9uQm94Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb25SZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25SZXNpemUgPVxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Cb3guZ2V0Q29tcG9uZW50KHBnLlJlc2l6ZUNvbXBvbmVudCkgfHwgdGhpcy5fdHJhbnNpdGlvbkJveC5hZGRDb21wb25lbnQocGcuUmVzaXplQ29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Cb3guc2V0UGFyZW50KG5ld0JveC5wYXJlbnQpO1xuICAgIH0sXG59KTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLnYyKDAuNSwgMC41KSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfRhNC+0LrRg9GBINC60LDQvNC10YDRiyDQvtGCIDAg0LTQviAxINC/0L4g0LrQsNC20LTQvtC5INC40Lcg0L7RgdC10LknLFxuICAgICAgICB9LFxuXG4gICAgICAgIGlzVXNpbmdDYW1lcmFCb3hlczoge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiAn0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC60LDQvNC10YDQsCDQsdC+0LrRgdGLLiDQldGB0LvQuCDQvdC10YIsINC/0YDQtdC00L/QvtC70LDQs9Cw0LXRgtGB0Y8g0YfRgtC+INC60LDQvNC10YDQsCDRgdGC0LDRgtC40YfQvdCwJyxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcblxuICAgICAgICBib3hIZWxwZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXB0dXJlQm94SGVscGVyKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1VzaW5nQ2FtZXJhQm94ZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogQ2FwdHVyZUJveEhlbHBlcixcbiAgICAgICAgfSxcblxuICAgICAgICBmaXRTcGFjZToge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVXNpbmdDYW1lcmFCb3hlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOlxuICAgICAgICAgICAgICAgICfQtdGB0LvQuCB0cnVlLCDQutCw0LzQtdGA0LAg0LPQsNGA0LDQvdGC0LjRgNGD0LXRgiDQv9C+0L/QsNC00LDQvdC40LUg0LLRgdC10Lkg0LrQvtGA0L7QsdC60LgsINC90LAgZmFsc2Ug0LPQsNGA0LDQvdGC0LjRgNGD0LXRgtGB0Y8g0L/QvtC60YDRi9GC0LjQtSDQutCw0LzQtdGA0Ysg0YbQtdC70LjQutC+0LwgKNCx0LXQtyDRh9C10YDQvdGL0YUg0L/QvtC70L7RgSknLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbHRhU2hha2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLlZlYzIuWkVSTyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfQstC10LrRgtC+0YAg0LTQu9GPINGI0LXQudC60LAg0LrQsNC80LXRgNGLLiDQl9Cw0LTQsNC10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQuCDQsNC80L/Qu9C40YLRg9C00YMnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNoYWtlRnJlcXVlbmN5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBjYy52MigxLCAxKSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0LvQvdGL0YUg0L7QsdC+0YDQvtGC0L7QsiDQutCw0LzQtdGA0Ysg0L/QviDQutCw0LbQtNC+0Lkg0L7RgdC4INC30LAg0YHQtdC60YPQvdC00YMnLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkIGFuZCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgX2NhbWVyYTogeyBkZWZhdWx0OiBudWxsLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9ib3hlczogeyBkZWZhdWx0OiB7fSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfY3VycmVudFNoYWtlT2Zmc2V0OiB7IGRlZmF1bHQ6IGNjLnYyKCksIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2lzU2hha2luZzogeyBkZWZhdWx0OiBmYWxzZSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfc2hha2luZ1RpbWU6IHsgZGVmYXVsdDogMCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfc3RhdGljQ2FtZXJhUG9zOiB7IGRlZmF1bHQ6IGNjLnYyKCksIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcblxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIG1lbnU6ICdDYW1lcmEvQ2FtZXJhQ29udHJvbGxlcjJEJyxcbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FtZXJhKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW1lcmEgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9zdGF0aWNDYW1lcmFQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVpvb21SYXRpbygpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1NoYWtpbmcpIHtcblxuICAgICAgICAgICAgdGhpcy5fc2hha2luZ1RpbWUgKz0gZHQ7XG5cbiAgICAgICAgICAgIC8vINC60LDQvNC10YDQsCDRgtGA0Y/RgdC10YLRgdGPINC/0L4g0YHQuNC90YPRgdC+0LjQtNC1INGBINC30LDQtNCw0L3QvdC+0Lkg0YfQsNGB0YLQvtGC0L7QuSDQuCDQsNC80L/Qu9C40YLRg9C00L7QuVxuICAgICAgICAgICAgY29uc3QgeE9mZnNldCA9XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFrZUZyZXF1ZW5jeS54ID4gMCA/IE1hdGguc2luKE1hdGguUEkgKiB0aGlzLl9zaGFraW5nVGltZSAqIHRoaXMuc2hha2VGcmVxdWVuY3kueCkgKiB0aGlzLmRlbHRhU2hha2UueCA6IDA7XG4gICAgICAgICAgICBjb25zdCB5T2Zmc2V0ID1cbiAgICAgICAgICAgICAgICB0aGlzLnNoYWtlRnJlcXVlbmN5LnkgPiAwID8gTWF0aC5zaW4oTWF0aC5QSSAqIHRoaXMuX3NoYWtpbmdUaW1lICogdGhpcy5zaGFrZUZyZXF1ZW5jeS55KSAqIHRoaXMuZGVsdGFTaGFrZS55IDogMDtcblxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNoYWtlT2Zmc2V0ID0gY2MudjIoeE9mZnNldCwgeU9mZnNldCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZFxuICAgIF9oYW5kbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuQ0FNRVJBX1RSQU5TSVRfQk9YLCB0aGlzLm9uQ2FtZXJhVHJhbnNpdEJveCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DQU1FUkFfQk9YX0FERCwgdGhpcy5vbkNhbWVyYUJveEFkZCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DQU1FUkFfQk9YX1NXSVRDSCwgdGhpcy5vbkNhbWVyYUJveFN3aXRjaCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DQU1FUkFfU1RBUlRfU0hBS0UsIHRoaXMub25DYW1lcmFTdGFydFNoYWtlLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkNBTUVSQV9TVE9QX1NIQUtFLCB0aGlzLm9uQ2FtZXJhU3RvcFNoYWtlLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZVpvb21SYXRpbygpIHtcbiAgICAgICAgbGV0IHpvb21SYXRpbyA9IDE7XG5cbiAgICAgICAgaWYgKHRoaXMuYm94SGVscGVyLmRlZmF1bHRCb3gpIHtcbiAgICAgICAgICAgIGNvbnN0IHR3ID0gdGhpcy5ib3hIZWxwZXIuZGVmYXVsdEJveC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gdGhpcy5ib3hIZWxwZXIuZGVmYXVsdEJveC5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBndyA9IHBnLnNldHRpbmdzLkdBTUVfV0lEVEg7XG4gICAgICAgICAgICBjb25zdCBnaCA9IHBnLnNldHRpbmdzLkdBTUVfSEVJR0hUO1xuICAgICAgICAgICAgY29uc3QgelggPSBndyAvIHR3O1xuICAgICAgICAgICAgY29uc3QgelkgPSBnaCAvIHRoO1xuXG4gICAgICAgICAgICB6b29tUmF0aW8gPSB0aGlzLmZpdFNwYWNlID8gTWF0aC5tYXgoelgsIHpZKSA6IE1hdGgubWluKHpYLCB6WSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRab29tUmF0aW8oem9vbVJhdGlvKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc1VzaW5nQ2FtZXJhQm94ZXMgJiYgdGhpcy5ib3hIZWxwZXIuZGVmYXVsdEJveCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0V29ybGRQb3NpdGlvbiA9IHRoaXMuYm94SGVscGVyLmRlZmF1bHRCb3guY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBjYy52MihcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmEud2lkdGggKiAodGhpcy5ib3hIZWxwZXIuZGVmYXVsdEJveC5hbmNob3JYIC0gdGhpcy5mb2N1cy54KSxcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmEuaGVpZ2h0ICogKHRoaXMuYm94SGVscGVyLmRlZmF1bHRCb3guYW5jaG9yWSAtIHRoaXMuZm9jdXMueSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjYW1lcmFXb3JsZFBvc2l0aW9uID0gdGFyZ2V0V29ybGRQb3NpdGlvbi5hZGQob2Zmc2V0KTtcblxuICAgICAgICAgICAgdGhpcy5fY2hlY2tTdGlja1Bvc2l0aW9uKGNhbWVyYVdvcmxkUG9zaXRpb24pO1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhTG9jYWxQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2FtZXJhV29ybGRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2FtZXJhTG9jYWxQb3NpdGlvbi5hZGQodGhpcy5fY3VycmVudFNoYWtlT2Zmc2V0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNVc2luZ0NhbWVyYUJveGVzKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fc3RhdGljQ2FtZXJhUG9zLmFkZCh0aGlzLl9jdXJyZW50U2hha2VPZmZzZXQpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfY2hlY2tTdGlja1Bvc2l0aW9uKGNhbWVyYVdvcmxkKSB7XG4gICAgICAgIGNvbnN0IHZpZXdTaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5ib3hIZWxwZXIuc3RpY2tNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFN0aWNrTW9kZXMuVG9wOlxuICAgICAgICAgICAgICAgIGNhbWVyYVdvcmxkLnkgPSBjYW1lcmFXb3JsZC55IC0gKHRoaXMuX2NhbWVyYS5oZWlnaHQgLSB0aGlzLmJveEhlbHBlci5kZWZhdWx0Qm94LmhlaWdodCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU3RpY2tNb2Rlcy5Cb3R0b206XG4gICAgICAgICAgICAgICAgY2FtZXJhV29ybGQueSA9IGNhbWVyYVdvcmxkLnkgKyAodGhpcy5fY2FtZXJhLmhlaWdodCAtIHRoaXMuYm94SGVscGVyLmRlZmF1bHRCb3guaGVpZ2h0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTdGlja01vZGVzLlJpZ2h0OlxuICAgICAgICAgICAgICAgIGNhbWVyYVdvcmxkLnggPSBjYW1lcmFXb3JsZC54IC0gKHRoaXMuX2NhbWVyYS53aWR0aCAtIHRoaXMuYm94SGVscGVyLmRlZmF1bHRCb3gud2lkdGgpICogMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFN0aWNrTW9kZXMuTGVmdDpcbiAgICAgICAgICAgICAgICBjYW1lcmFXb3JsZC54ID0gY2FtZXJhV29ybGQueCArICh0aGlzLl9jYW1lcmEud2lkdGggLSB0aGlzLmJveEhlbHBlci5kZWZhdWx0Qm94LndpZHRoKSAqIDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2V0Wm9vbVJhdGlvKHpvb21SYXRpbykge1xuICAgICAgICB0aGlzLl9jYW1lcmEuem9vbVJhdGlvID0gem9vbVJhdGlvO1xuICAgICAgICB0aGlzLl9jYW1lcmEud2lkdGggPSBwZy5zZXR0aW5ncy5HQU1FX1dJRFRIIC8gdGhpcy5fY2FtZXJhLnpvb21SYXRpbztcbiAgICAgICAgdGhpcy5fY2FtZXJhLmhlaWdodCA9IHBnLnNldHRpbmdzLkdBTUVfSEVJR0hUIC8gdGhpcy5fY2FtZXJhLnpvb21SYXRpbztcbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlcnNcblxuICAgIG9uQ2FtZXJhVHJhbnNpdEJveChuZXdCb3gsIGR1cmF0aW9uID0gMCwgZWFzaW5nKSB7XG4gICAgICAgIGlmIChuZXdCb3gpIHtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm94SGVscGVyLmRlZmF1bHRCb3ggPSBuZXdCb3g7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYm94SGVscGVyLnRyYW5zaXRUb0JveChuZXdCb3gsIGR1cmF0aW9uLCBlYXNpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2FtZXJhQm94QWRkKHR5cGUsIGJveCkge1xuICAgICAgICBpZiAoYm94IGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fYm94ZXNbdHlwZV0gPSBib3g7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25DYW1lcmFCb3hTd2l0Y2godHlwZSwgZHVyYXRpb24sIGVhc2luZykge1xuICAgICAgICBjb25zdCBuZXdCb3ggPSB0aGlzLl9ib3hlc1t0eXBlXTtcblxuICAgICAgICB0aGlzLm9uQ2FtZXJhVHJhbnNpdEJveChuZXdCb3gsIGR1cmF0aW9uLCBlYXNpbmcpO1xuICAgIH0sXG5cbiAgICBvbkNhbWVyYVN0YXJ0U2hha2UoKSB7XG4gICAgICAgIHRoaXMuX2lzU2hha2luZyA9IHRydWU7XG4gICAgfSxcblxuICAgIG9uQ2FtZXJhU3RvcFNoYWtlKCkge1xuICAgICAgICB0aGlzLl9pc1NoYWtpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY3VycmVudFNoYWtlT2Zmc2V0ID0gY2MudjIoKTtcbiAgICAgICAgdGhpcy5fc2hha2luZ1RpbWUgPSAwO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Enums/TeleportAnimationsType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2358lQ6g5N4rBCVWWRFNxl', 'TeleportAnimationsType');
// scripts/Game/Enums/TeleportAnimationsType.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = cc.Enum({
  None: 0,
  Choosing: 1,
  Accepted: 2
});

exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRW51bXMvVGVsZXBvcnRBbmltYXRpb25zVHlwZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkVudW0iLCJOb25lIiwiQ2hvb3NpbmciLCJBY2NlcHRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZUEsRUFBRSxDQUFDQyxJQUFILENBQVE7RUFDbkJDLElBQUksRUFBRSxDQURhO0VBRW5CQyxRQUFRLEVBQUUsQ0FGUztFQUduQkMsUUFBUSxFQUFFO0FBSFMsQ0FBUiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2MuRW51bSh7XG4gICAgTm9uZTogMCxcbiAgICBDaG9vc2luZzogMSxcbiAgICBBY2NlcHRlZDogMixcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/BombLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd21adRiTMFEK5ZOxGpa4Emp', 'BombLogic');
// scripts/Game/Logic/Features/BombLogic.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _Feature = _interopRequireDefault(require("Feature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": _Feature["default"],
  //#region life-cycle callbacks
  _logic: function _logic(featureCoordinate, fieldWidth, fieldHeight) {
    var iI = featureCoordinate[0];
    var iJ = featureCoordinate[1];

    for (var i = 1; i > -2; i -= 1) {
      for (var j = 1; j > -2; j -= 1) {
        var xCoord = iJ - j;
        var yCoord = iI - i;

        if (-1 < yCoord && yCoord < fieldHeight && -1 < xCoord && xCoord < fieldWidth) {
          this.elementsForDeleting.push([[xCoord], [yCoord]]);
        }
      }
    }
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    if (!featureCoordinate || !fieldHeight || !fieldWidth) console.log("Not enough data for initializing!!!");

    this._logic(featureCoordinate, fieldWidth, fieldHeight);

    cc.systemEvent.emit(_GameEvent["default"].FEATURE_RESULT, this.elementsForDeleting);
    this.elementsForDeleting = [];
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvQm9tYkxvZ2ljLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJGZWF0dXJlIiwiX2xvZ2ljIiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiLCJpSSIsImlKIiwiaSIsImoiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJlbGVtZW50c0ZvckRlbGV0aW5nIiwicHVzaCIsIm9uSW5pdGlhbGl6aW5nRXZlbnQiLCJjb25zb2xlIiwibG9nIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiRkVBVFVSRV9SRVNVTFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFGQTtBQUdBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0MsbUJBREo7RUFHTDtFQUVBQyxNQUxLLGtCQUtFQyxpQkFMRixFQUtxQkMsVUFMckIsRUFLaUNDLFdBTGpDLEVBSzhDO0lBQy9DLElBQU1DLEVBQUUsR0FBR0gsaUJBQWlCLENBQUMsQ0FBRCxDQUE1QjtJQUNBLElBQU1JLEVBQUUsR0FBR0osaUJBQWlCLENBQUMsQ0FBRCxDQUE1Qjs7SUFDQSxLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBQyxDQUFyQixFQUF3QkEsQ0FBQyxJQUFJLENBQTdCLEVBQWdDO01BQzVCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFDLENBQXJCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7UUFDNUIsSUFBTUMsTUFBTSxHQUFHSCxFQUFFLEdBQUdFLENBQXBCO1FBQ0EsSUFBTUUsTUFBTSxHQUFHTCxFQUFFLEdBQUdFLENBQXBCOztRQUNBLElBQUksQ0FBQyxDQUFELEdBQU1HLE1BQU4sSUFBaUJBLE1BQU0sR0FBR04sV0FBMUIsSUFBeUMsQ0FBQyxDQUFELEdBQUtLLE1BQTlDLElBQXlEQSxNQUFNLEdBQUdOLFVBQXRFLEVBQWtGO1VBQzlFLEtBQUtRLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixDQUFDLENBQUNILE1BQUQsQ0FBRCxFQUFXLENBQUNDLE1BQUQsQ0FBWCxDQUE5QjtRQUNIO01BQ0o7SUFDSjtFQUNKLENBakJJO0VBbUJMRyxtQkFuQkssK0JBbUJlWCxpQkFuQmYsRUFtQmtDQyxVQW5CbEMsRUFtQjhDQyxXQW5COUMsRUFtQjJEO0lBQzVELElBQUcsQ0FBQ0YsaUJBQUQsSUFBc0IsQ0FBQ0UsV0FBdkIsSUFBc0MsQ0FBQ0QsVUFBMUMsRUFDSVcsT0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVo7O0lBRUosS0FBS2QsTUFBTCxDQUFZQyxpQkFBWixFQUErQkMsVUFBL0IsRUFBMkNDLFdBQTNDOztJQUVBTixFQUFFLENBQUNrQixXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLGNBQTlCLEVBQThDLEtBQUtSLG1CQUFuRDtJQUNBLEtBQUtBLG1CQUFMLEdBQTJCLEVBQTNCO0VBQ0g7QUEzQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnRmVhdHVyZSc7XG4vLyNlbmRyZWdpb25cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBGZWF0dXJlLFxuICBcbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcblxuICAgIF9sb2dpYyhmZWF0dXJlQ29vcmRpbmF0ZSwgZmllbGRXaWR0aCwgZmllbGRIZWlnaHQpIHtcbiAgICAgICAgY29uc3QgaUkgPSBmZWF0dXJlQ29vcmRpbmF0ZVswXTtcbiAgICAgICAgY29uc3QgaUogPSBmZWF0dXJlQ29vcmRpbmF0ZVsxXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPiAtMjsgaSAtPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA+IC0yOyBqIC09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBpSiAtIGo7XG4gICAgICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gaUkgLSBpO1xuICAgICAgICAgICAgICAgIGlmICgtMSA8ICB5Q29vcmQgJiYgIHlDb29yZCA8IGZpZWxkSGVpZ2h0ICYmIC0xIDwgeENvb3JkICAmJiB4Q29vcmQgPCBmaWVsZFdpZHRoKSB7ICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzRm9yRGVsZXRpbmcucHVzaChbW3hDb29yZF0sIFt5Q29vcmRdXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uSW5pdGlhbGl6aW5nRXZlbnQoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KSB7XG4gICAgICAgIGlmKCFmZWF0dXJlQ29vcmRpbmF0ZSB8fCAhZmllbGRIZWlnaHQgfHwgIWZpZWxkV2lkdGgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZGF0YSBmb3IgaW5pdGlhbGl6aW5nISEhXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuX2xvZ2ljKGZlYXR1cmVDb29yZGluYXRlLCBmaWVsZFdpZHRoLCBmaWVsZEhlaWdodCk7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuRkVBVFVSRV9SRVNVTFQsIHRoaXMuZWxlbWVudHNGb3JEZWxldGluZyk7XG4gICAgICAgIHRoaXMuZWxlbWVudHNGb3JEZWxldGluZyA9IFtdO1xuICAgIH1cbiB9KTtcbiBcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/GameLogicManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c089PGYllClJS4rqeWu/cL', 'GameLogicManager');
// scripts/Game/Logic/GameLogicManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

var _EffectType = _interopRequireDefault(require("EffectType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    numeralToDestroy: {
      "default": 3
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _field: {
      "default": null,
      type: cc.Node,
      serializable: false
    },
    _numeralStrings: {
      "default": 7,
      serializable: false
    },
    _numeralColumns: {
      "default": 10,
      serializable: false
    },
    _widthColumn: {
      "default": 155,
      serializable: false
    },
    _widthOffset: {
      "default": 697,
      serializable: false
    },
    _highColumn: {
      "default": 233,
      serializable: false
    },
    _highOffset: {
      "default": 700,
      serializable: false
    },
    _numberColors: {
      "default": 5,
      serializable: false
    },
    _blocksArray: {
      "default": [],
      serializable: false
    },
    _tempCoalitionArray: {
      "default": [],
      serializable: false
    },
    _numeralToDestroy: {
      "default": 3,
      serializable: false
    },
    _numeralFallBlocks: {
      "default": 0,
      serializable: false
    },
    _stopSuperAbility: {
      "default": false,
      serializable: false
    },
    _isScoreEnoughForBomb: {
      "default": false,
      serializable: false
    },
    _isScoreEnoughForTeleport: {
      "default": false,
      serializable: false
    },
    _amountBlocksForEraserAppearing: {
      "default": 5,
      serializable: false
    },
    _isFieldOn: {
      "default": false,
      serializable: false
    },
    _isTeleportMode: {
      "default": false,
      serializable: false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this._numeralToDestroy = this.numeralToDestroy;
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].FIELD_ON, this.onFieldOn, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_CHOSEN, this.onBlockChosen, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_FALL, this.onBlockFall, this);
    cc.systemEvent[func](_GameEvent["default"].CREATE_SUPER_ABILITY, this.onCreateSuperAbility, this);
    cc.systemEvent[func](_GameEvent["default"].BOMB_IS_AVAILABLE, this.onBombIsAvailable, this);
    cc.systemEvent[func](_GameEvent["default"].TELEPORT_IS_AVAILABLE, this.onTeleportIsAvailable, this);
    cc.systemEvent[func](_GameEvent["default"].FEATURE_RESULT, this.onFeatureResult, this);
    cc.systemEvent[func](_GameEvent["default"].TELEPORTATION_COMPLETE, this.onTeleportationComplete, this);
    cc.systemEvent[func](_GameEvent["default"].START_TELEPORTATION, this.onStartTeleportation, this);
  },
  _createBlockArray: function _createBlockArray() {
    this._blocksArray = [];
    var id = 1;

    for (var i = 0; i < this._numeralColumns; i += 1) {
      for (var j = 0; j < this._numeralStrings; j += 1) {
        var position = this._setLocation(j, i);

        if (!this._blocksArray[j]) this._blocksArray[j] = [];
        this._blocksArray[j][i] = this._createBlock(position);
        this._blocksArray[j][i].id = id;
        this._blocksArray[j][i].iI = j;
        this._blocksArray[j][i].iJ = i;
        id += 1;
      }
    }
  },
  _createBlock: function _createBlock(position) {
    var newBlock = cc.instantiate(this._block);
    newBlock.kind = this._chooseColor();
    newBlock.setParent(this._field);
    newBlock.setPosition(position);
    newBlock.active = true;
    newBlock.coalition = 0;
    newBlock.transferred = 0;
    return newBlock;
  },
  _setLocation: function _setLocation(y, x) {
    return cc.v2(x * this._widthColumn - this._widthOffset, y * this._highColumn - this._highOffset);
  },
  _chooseColor: function _chooseColor() {
    return Math.ceil(Math.random() * this._numberColors) - 1;
  },
  _findCoalition: function _findCoalition(block, kind, coalition) {
    if (block && block.iI < 0 || block.iI > this._numeralStrings - 1 || block.iJ < 0 || block.iJ > this._numeralColumns - 1) {
      return;
    }

    if (block.coalition !== 0 || block.kind !== kind) {
      return;
    }

    block.coalition = coalition;

    this._tempCoalitionArray.push(block);

    if (this._blocksArray[block.iI - 1] && this._blocksArray[block.iI - 1][block.iJ]) this._findCoalition(this._blocksArray[block.iI - 1][block.iJ], kind, coalition);
    if (this._blocksArray[block.iI + 1] && this._blocksArray[block.iI + 1][block.iJ]) this._findCoalition(this._blocksArray[block.iI + 1][block.iJ], kind, coalition);
    if (this._blocksArray[block.iI] && this._blocksArray[block.iI][block.iJ - 1]) this._findCoalition(this._blocksArray[block.iI][block.iJ - 1], kind, coalition);
    if (this._blocksArray[block.iI] && this._blocksArray[block.iI][block.iJ + 1]) this._findCoalition(this._blocksArray[block.iI][block.iJ + 1], kind, coalition);
  },
  _checkOnShuffle: function _checkOnShuffle() {
    this._numeralCoalition = 1;
    this._tempCoalitionArray = [];

    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns - 1; j += 1) {
        this._findCoalition(this._blocksArray[i][j], this._blocksArray[i][j].kind, this._numeralCoalition);

        if (this._tempCoalitionArray.length >= this._numeralToDestroy) this._numeralCoalition += 1;
        this._tempCoalitionArray = [];
        if (this._numeralCoalition > 1) return true;
      }
    }

    return false;
  },
  _checkClickedBlock: function _checkClickedBlock(block, kindSuperAbility) {
    if (kindSuperAbility === void 0) {
      kindSuperAbility = 0;
    }

    this._resetCoalition();

    this._tempCoalitionArray = [];

    switch (kindSuperAbility) {
      case _BlockColorType["default"].Bomb:
        cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, true);
        this._stopSuperAbility = false;
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_BOMB_DONE, block.id);
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_BOMB_CHOSEN, [block.iI, block.iJ], this._numeralColumns, this._numeralStrings);
        break;

      case _BlockColorType["default"].ColumnEraser:
        cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, true);
        this._stopSuperAbility = false;
        cc.systemEvent.emit(_GameEvent["default"].COLUMN_ERASER_DONE, block.id);
        cc.systemEvent.emit(_GameEvent["default"].ACTIVATE_COLUMN_ERASER, [block.iI, block.iJ], this._numeralColumns, this._numeralStrings);
        break;

      default:
        this._findCoalition(block, block.kind, 1);

        if (this._tempCoalitionArray.length < this._numeralToDestroy) {
          this._resetCoalition();

          cc.systemEvent.emit(_GameEvent["default"].BLOCK_CAN_BE_CHOSEN);
          return;
        }

        if (this._tempCoalitionArray.length > this._amountBlocksForEraserAppearing - 1) {
          this.onCreateSuperAbility(_BlockColorType["default"].ColumnEraser, cc.v2(block.iI, block.iJ));
        }

        this._finalChecking();

        break;
    }
  },
  _transferBlocksUp: function _transferBlocksUp() {
    var _this = this;

    var _columnsArray = [];

    for (var i = 0; i < this._numeralColumns; i++) {
      _columnsArray.push(0);
    }

    this._numeralFallBlocks = this._tempCoalitionArray.length;
    cc.systemEvent.emit(_GameEvent["default"].SCORE_GOT, this._numeralFallBlocks);

    this._tempCoalitionArray.forEach(function (element) {
      cc.systemEvent.emit(_GameEvent["default"].SPAWN_EFFECT, element.convertToWorldSpaceAR(cc.v2(0, 0)));
      element.opacity = 0;
      var newI = _this._numeralStrings + _columnsArray[element.iJ];
      cc.systemEvent.emit(_GameEvent["default"].CAMERA_START_SHAKE);

      _this.scheduleOnce(function () {
        cc.systemEvent.emit(_GameEvent["default"].CAMERA_STOP_SHAKE);
      }, 0.2);

      element.y = _this._setLocation(newI, element.iJ).y;
      _columnsArray[element.iJ] += 1;
      element.kind = _this._chooseColor();
      cc.systemEvent.emit(_GameEvent["default"].CHOOSE_COLOR_BLOCK, element.id, element.kind);
      if (!_this._blocksArray[newI]) _this._blocksArray[newI] = [];
      _this._blocksArray[newI][element.iJ] = element;
      _this._blocksArray[element.iI][element.iJ] = null;

      for (var _i = element.iI; _i < _this._numeralStrings + _columnsArray[element.iJ]; _i += 1) {
        if (_this._blocksArray[_i][element.iJ]) {
          _this._blocksArray[_i][element.iJ].transferred += 1;
        }
      }

      element.transferred = newI - _this._numeralStrings;
      element.transferred++;
      element.iI = newI;
    });
  },
  _regularizeTransferredBlocks: function _regularizeTransferredBlocks() {
    var lengthBlockArray = this._blocksArray.length;

    for (var i = this._numeralStrings; i < lengthBlockArray; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        if (this._blocksArray[i] && this._blocksArray[i][j]) {
          for (var k = 0; k < lengthBlockArray; k += 1) {
            if (this._blocksArray[k] && this._blocksArray[k][j] && this._blocksArray[k][j].transferred > 0) {
              this._blocksArray[k - this._blocksArray[k][j].transferred][j] = this._blocksArray[k][j];
              this._blocksArray[k - this._blocksArray[k][j].transferred][j].iI = k - this._blocksArray[k][j].transferred;
              this._blocksArray[k - this._blocksArray[k][j].transferred][j].transferred = 0;
              this._blocksArray[k - this._blocksArray[k][j].transferred][j].coalition = 0;
            }
          }
        }
      }
    }

    this._lastFallingBlock = lengthBlockArray - this._numeralStrings;

    this._blocksArray.splice(this._numeralStrings, lengthBlockArray - this._numeralStrings);

    for (var _i2 = 0; _i2 < this._numeralStrings; _i2 += 1) {
      for (var _j = 0; _j < this._numeralColumns; _j += 1) {
        this._blocksArray[_i2][_j].removeFromParent();

        this._field.addChild(this._blocksArray[_i2][_j]);
      }
    }

    if (!this._checkOnShuffle() && !this._isScoreEnoughForBomb) {
      this._createBlockArray();

      if (!this._checkOnShuffle()) {
        cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, true, false);

        while (!this._checkOnShuffle()) {
          this._createBlockArray();
        }
      }
    }
  },
  _resetCoalition: function _resetCoalition() {
    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        this._blocksArray[i][j].coalition = 0;
      }
    }
  },
  _finalChecking: function _finalChecking() {
    cc.systemEvent.emit(_GameEvent["default"].PLAYER_MOVED);

    this._transferBlocksUp();

    cc.systemEvent.emit(_GameEvent["default"].TIME_TO_FALL);

    this._regularizeTransferredBlocks();

    this._resetCoalition();
  },
  _findIndexes: function _findIndexes(blockId) {
    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        if (this._blocksArray[i][j].id === blockId) return cc.v2(i, j);
      }
    }
  },
  _findID: function _findID(coords) {
    for (var i = 0; i < this._numeralStrings; i += 1) {
      for (var j = 0; j < this._numeralColumns; j += 1) {
        if (this._blocksArray[i][j].iI === coords.x && this._blocksArray[i][j].iJ === coords.y) return this._blocksArray[i][j].id;
      }
    }
  },
  _useAbilityTnt: function _useAbilityTnt(block) {
    this._createBlockArray();

    cc.systemEvent.emit(_GameEvent["default"].SCORE_GOT, this._numeralColumns * this._numeralStrings);
  },
  //#endregion
  //#region event handlers
  onCreateSuperAbility: function onCreateSuperAbility(kindAbility, coords) {
    var _this2 = this;

    if (coords === void 0) {
      coords = cc.v2(-1, -1);
    }

    if (this._stopSuperAbility) return;
    cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, false);
    this._stopSuperAbility = true;

    if (kindAbility === _BlockColorType["default"].Teleport) {
      this.onTeleportIsAvailable(true);
      cc.systemEvent.emit(_GameEvent["default"].TELEPORT_STARTED);
      return;
    }

    this.scheduleOnce(function () {
      var newID;

      if (coords.x < 0) {
        newID = Math.ceil(Math.random() * (_this2._numeralStrings * _this2._numeralColumns - 1));
      } else {
        newID = _this2._findID(coords);
      }

      cc.systemEvent.emit(_GameEvent["default"].CREATE_SUPER_BLOCK, newID, kindAbility);
    }, 0.1);
  },
  onFieldOn: function onFieldOn(field, block) {
    this._isFieldOn = true;
    this._field = field;
    this._block = block;

    if (this._field && this._block) {
      this._createBlockArray();
    }

    while (!this._checkOnShuffle()) {
      this._createBlockArray();
    }
  },
  onBlockChosen: function onBlockChosen(block) {
    if (this._isTeleportMode) {
      cc.systemEvent.emit(_GameEvent["default"].TELEPORTED_BLOCK_CHOSEN, block);
      return;
    }

    cc.systemEvent.emit(_GameEvent["default"].STOP_INPUT);
    var kindSuperAbility = 0;

    if (block.kind === _BlockColorType["default"].Bomb || block.kind === _BlockColorType["default"].ColumnEraser) {
      kindSuperAbility = block.kind;
    }

    this._checkClickedBlock(block, kindSuperAbility);
  },
  onBlockFall: function onBlockFall(transferred) {
    if (transferred === this._lastFallingBlock) {
      this.scheduleOnce(function () {
        cc.systemEvent.emit(_GameEvent["default"].BLOCK_CAN_BE_CHOSEN);
      }, 0.35);
    }
  },
  onBombIsAvailable: function onBombIsAvailable(isAvailable) {
    this._isScoreEnoughForBomb = isAvailable;
  },
  onTeleportIsAvailable: function onTeleportIsAvailable(isAvailable) {
    this._isScoreEnoughForTeleport = isAvailable;
    this._isTeleportMode = true;
  },
  onFeatureResult: function onFeatureResult(numbersArray) {
    var _this3 = this;

    numbersArray.forEach(function (element) {
      _this3._tempCoalitionArray.push(_this3._blocksArray[element[1]][element[0]]);
    });

    this._finalChecking();
  },
  onTeleportationComplete: function onTeleportationComplete() {
    this._stopSuperAbility = false;
    cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SUPER_ABILITY, true);

    this._regularizeTransferredBlocks();
  },
  onStartTeleportation: function onStartTeleportation(first, second) {
    this._isTeleportMode = false;
    this._blocksArray[first.iI][first.iJ] = second;
    this._blocksArray[second.iI][second.iJ] = first;
    var _ref = [second.iI, first.iI];
    first.iI = _ref[0];
    second.iI = _ref[1];
    var _ref2 = [second.iJ, first.iJ];
    first.iJ = _ref2[0];
    second.iJ = _ref2[1];

    this._resetCoalition();
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvR2FtZUxvZ2ljTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm51bWVyYWxUb0Rlc3Ryb3kiLCJfZmllbGQiLCJ0eXBlIiwiTm9kZSIsInNlcmlhbGl6YWJsZSIsIl9udW1lcmFsU3RyaW5ncyIsIl9udW1lcmFsQ29sdW1ucyIsIl93aWR0aENvbHVtbiIsIl93aWR0aE9mZnNldCIsIl9oaWdoQ29sdW1uIiwiX2hpZ2hPZmZzZXQiLCJfbnVtYmVyQ29sb3JzIiwiX2Jsb2Nrc0FycmF5IiwiX3RlbXBDb2FsaXRpb25BcnJheSIsIl9udW1lcmFsVG9EZXN0cm95IiwiX251bWVyYWxGYWxsQmxvY2tzIiwiX3N0b3BTdXBlckFiaWxpdHkiLCJfaXNTY29yZUVub3VnaEZvckJvbWIiLCJfaXNTY29yZUVub3VnaEZvclRlbGVwb3J0IiwiX2Ftb3VudEJsb2Nrc0ZvckVyYXNlckFwcGVhcmluZyIsIl9pc0ZpZWxkT24iLCJfaXNUZWxlcG9ydE1vZGUiLCJvbkVuYWJsZSIsIl9oYW5kbGVTdWJzY3JpcHRpb24iLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiRklFTERfT04iLCJvbkZpZWxkT24iLCJCTE9DS19DSE9TRU4iLCJvbkJsb2NrQ2hvc2VuIiwiQkxPQ0tfRkFMTCIsIm9uQmxvY2tGYWxsIiwiQ1JFQVRFX1NVUEVSX0FCSUxJVFkiLCJvbkNyZWF0ZVN1cGVyQWJpbGl0eSIsIkJPTUJfSVNfQVZBSUxBQkxFIiwib25Cb21iSXNBdmFpbGFibGUiLCJURUxFUE9SVF9JU19BVkFJTEFCTEUiLCJvblRlbGVwb3J0SXNBdmFpbGFibGUiLCJGRUFUVVJFX1JFU1VMVCIsIm9uRmVhdHVyZVJlc3VsdCIsIlRFTEVQT1JUQVRJT05fQ09NUExFVEUiLCJvblRlbGVwb3J0YXRpb25Db21wbGV0ZSIsIlNUQVJUX1RFTEVQT1JUQVRJT04iLCJvblN0YXJ0VGVsZXBvcnRhdGlvbiIsIl9jcmVhdGVCbG9ja0FycmF5IiwiaWQiLCJpIiwiaiIsInBvc2l0aW9uIiwiX3NldExvY2F0aW9uIiwiX2NyZWF0ZUJsb2NrIiwiaUkiLCJpSiIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJfYmxvY2siLCJraW5kIiwiX2Nob29zZUNvbG9yIiwic2V0UGFyZW50Iiwic2V0UG9zaXRpb24iLCJhY3RpdmUiLCJjb2FsaXRpb24iLCJ0cmFuc2ZlcnJlZCIsInkiLCJ4IiwidjIiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIl9maW5kQ29hbGl0aW9uIiwiYmxvY2siLCJwdXNoIiwiX2NoZWNrT25TaHVmZmxlIiwiX251bWVyYWxDb2FsaXRpb24iLCJsZW5ndGgiLCJfY2hlY2tDbGlja2VkQmxvY2siLCJraW5kU3VwZXJBYmlsaXR5IiwiX3Jlc2V0Q29hbGl0aW9uIiwiQmxvY2tDb2xvclR5cGUiLCJCb21iIiwiZW1pdCIsIlRPR0dMRV9TVVBFUl9BQklMSVRZIiwiQkxPQ0tfQk9NQl9ET05FIiwiQkxPQ0tfQk9NQl9DSE9TRU4iLCJDb2x1bW5FcmFzZXIiLCJDT0xVTU5fRVJBU0VSX0RPTkUiLCJBQ1RJVkFURV9DT0xVTU5fRVJBU0VSIiwiQkxPQ0tfQ0FOX0JFX0NIT1NFTiIsIl9maW5hbENoZWNraW5nIiwiX3RyYW5zZmVyQmxvY2tzVXAiLCJfY29sdW1uc0FycmF5IiwiU0NPUkVfR09UIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJTUEFXTl9FRkZFQ1QiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJvcGFjaXR5IiwibmV3SSIsIkNBTUVSQV9TVEFSVF9TSEFLRSIsInNjaGVkdWxlT25jZSIsIkNBTUVSQV9TVE9QX1NIQUtFIiwiQ0hPT1NFX0NPTE9SX0JMT0NLIiwiX3JlZ3VsYXJpemVUcmFuc2ZlcnJlZEJsb2NrcyIsImxlbmd0aEJsb2NrQXJyYXkiLCJrIiwiX2xhc3RGYWxsaW5nQmxvY2siLCJzcGxpY2UiLCJyZW1vdmVGcm9tUGFyZW50IiwiYWRkQ2hpbGQiLCJTSE9XX1NDUkVFTiIsIlVpU2NyZWVuVHlwZSIsIlJlc3VsdCIsIlBMQVlFUl9NT1ZFRCIsIlRJTUVfVE9fRkFMTCIsIl9maW5kSW5kZXhlcyIsImJsb2NrSWQiLCJfZmluZElEIiwiY29vcmRzIiwiX3VzZUFiaWxpdHlUbnQiLCJraW5kQWJpbGl0eSIsIlRlbGVwb3J0IiwiVEVMRVBPUlRfU1RBUlRFRCIsIm5ld0lEIiwiQ1JFQVRFX1NVUEVSX0JMT0NLIiwiZmllbGQiLCJURUxFUE9SVEVEX0JMT0NLX0NIT1NFTiIsIlNUT1BfSU5QVVQiLCJpc0F2YWlsYWJsZSIsIm51bWJlcnNBcnJheSIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBSkE7QUFNQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxnQkFBZ0IsRUFBRTtNQUFFLFdBQVM7SUFBWCxDQUZWO0lBR1I7SUFFQTtJQUNBO0lBRUE7SUFDQUMsTUFBTSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCQyxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sSUFBMUI7TUFBZ0NDLFlBQVksRUFBRTtJQUE5QyxDQVRBO0lBVVJDLGVBQWUsRUFBRTtNQUFFLFdBQVMsQ0FBWDtNQUFjRCxZQUFZLEVBQUU7SUFBNUIsQ0FWVDtJQVdSRSxlQUFlLEVBQUU7TUFBRSxXQUFTLEVBQVg7TUFBZUYsWUFBWSxFQUFFO0lBQTdCLENBWFQ7SUFZUkcsWUFBWSxFQUFFO01BQUUsV0FBUyxHQUFYO01BQWdCSCxZQUFZLEVBQUU7SUFBOUIsQ0FaTjtJQWFSSSxZQUFZLEVBQUU7TUFBRSxXQUFTLEdBQVg7TUFBZ0JKLFlBQVksRUFBRTtJQUE5QixDQWJOO0lBY1JLLFdBQVcsRUFBRTtNQUFFLFdBQVMsR0FBWDtNQUFnQkwsWUFBWSxFQUFFO0lBQTlCLENBZEw7SUFlUk0s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Q0FBQyxDQUFELENBQXpCLEVBQThCQSxPQUFPLENBQUMsQ0FBRCxDQUFyQyxDQUE5QjtJQUNILENBRkQ7O0lBSUEsS0FBS0wsY0FBTDtFQUNILENBM1hJO0VBNlhML0MsdUJBN1hLLHFDQTZYcUI7SUFDdEIsS0FBSzVCLGlCQUFMLEdBQXlCLEtBQXpCO0lBQ0FwQixFQUFFLENBQUMrQixXQUFILENBQWV3RCxJQUFmLENBQW9CdkQscUJBQUEsQ0FBVXdELG9CQUE5QixFQUFvRCxJQUFwRDs7SUFDQSxLQUFLcUIsNEJBQUw7RUFDSCxDQWpZSTtFQW1ZTDNELG9CQW5ZSyxnQ0FtWWdCc0YsS0FuWWhCLEVBbVl1QkMsTUFuWXZCLEVBbVkrQjtJQUNoQyxLQUFLaEgsZUFBTCxHQUF1QixLQUF2QjtJQUNBLEtBQUtULFlBQUwsQ0FBa0J3SCxLQUFLLENBQUM5RSxFQUF4QixFQUE0QjhFLEtBQUssQ0FBQzdFLEVBQWxDLElBQXdDOEUsTUFBeEM7SUFDQSxLQUFLekgsWUFBTCxDQUFrQnlILE1BQU0sQ0FBQy9FLEVBQXpCLEVBQTZCK0UsTUFBTSxDQUFDOUUsRUFBcEMsSUFBMEM2RSxLQUExQztJQUhnQyxXQUlSLENBQUNDLE1BQU0sQ0FBQy9FLEVBQVIsRUFBWThFLEtBQUssQ0FBQzlFLEVBQWxCLENBSlE7SUFJL0I4RSxLQUFLLENBQUM5RSxFQUp5QjtJQUlyQitFLE1BQU0sQ0FBQy9FLEVBSmM7SUFBQSxZQUtSLENBQUMrRSxNQUFNLENBQUM5RSxFQUFSLEVBQVk2RSxLQUFLLENBQUM3RSxFQUFsQixDQUxRO0lBSy9CNkUsS0FBSyxDQUFDN0UsRUFMeUI7SUFLckI4RSxNQUFNLENBQUM5RSxFQUxjOztJQU1oQyxLQUFLeUIsZUFBTDtFQUNILENBMVlJLENBMllMOztBQTNZSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG5pbXBvcnQgQmxvY2tDb2xvclR5cGUgZnJvbSAnQmxvY2tDb2xvclR5cGUnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuaW1wb3J0IEVmZmVjdFR5cGUgZnJvbSAnRWZmZWN0VHlwZSc7XG5cbi8vI2VuZHJlZ2lvblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgbnVtZXJhbFRvRGVzdHJveTogeyBkZWZhdWx0OiAzIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBfZmllbGQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTm9kZSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfbnVtZXJhbFN0cmluZ3M6IHsgZGVmYXVsdDogNywgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfbnVtZXJhbENvbHVtbnM6IHsgZGVmYXVsdDogMTAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3dpZHRoQ29sdW1uOiB7IGRlZmF1bHQ6IDE1NSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfd2lkdGhPZmZzZXQ6IHsgZGVmYXVsdDogNjk3LCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9oaWdoQ29sdW1uOiB7IGRlZmF1bHQ6IDIzMywgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfaGlnaE9mZnNldDogeyBkZWZhdWx0OiA3MDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX251bWJlckNvbG9yczogeyBkZWZhdWx0OiA1LCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9ibG9ja3NBcnJheTogeyBkZWZhdWx0OiBbXSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfdGVtcENvYWxpdGlvbkFycmF5OiB7IGRlZmF1bHQ6IFtdLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9udW1lcmFsVG9EZXN0cm95OiB7IGRlZmF1bHQ6IDMsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX251bWVyYWxGYWxsQmxvY2tzOiB7IGRlZmF1bHQ6IDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3N0b3BTdXBlckFiaWxpdHk6IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2lzU2NvcmVFbm91Z2hGb3JCb21iOiB7IGRlZmF1bHQ6IGZhbHNlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9pc1Njb3JlRW5vdWdoRm9yVGVsZXBvcnQ6IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2Ftb3VudEJsb2Nrc0ZvckVyYXNlckFwcGVhcmluZzogeyBkZWZhdWx0OiA1LCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG4gICAgICAgIF9pc0ZpZWxkT246IHsgZGVmYXVsdDogZmFsc2UsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX2lzVGVsZXBvcnRNb2RlOiB7IGRlZmF1bHQ6IGZhbHNlLCBzZXJpYWxpemFibGU6IGZhbHNlIH0sXG5cblxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICAgICAgdGhpcy5fbnVtZXJhbFRvRGVzdHJveSA9IHRoaXMubnVtZXJhbFRvRGVzdHJveTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkZJRUxEX09OLCB0aGlzLm9uRmllbGRPbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5CTE9DS19DSE9TRU4sIHRoaXMub25CbG9ja0Nob3NlbiwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5CTE9DS19GQUxMLCB0aGlzLm9uQmxvY2tGYWxsLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkNSRUFURV9TVVBFUl9BQklMSVRZLCB0aGlzLm9uQ3JlYXRlU3VwZXJBYmlsaXR5LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkJPTUJfSVNfQVZBSUxBQkxFLCB0aGlzLm9uQm9tYklzQXZhaWxhYmxlLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LlRFTEVQT1JUX0lTX0FWQUlMQUJMRSwgdGhpcy5vblRlbGVwb3J0SXNBdmFpbGFibGUsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuRkVBVFVSRV9SRVNVTFQsIHRoaXMub25GZWF0dXJlUmVzdWx0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LlRFTEVQT1JUQVRJT05fQ09NUExFVEUsIHRoaXMub25UZWxlcG9ydGF0aW9uQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuU1RBUlRfVEVMRVBPUlRBVElPTiwgdGhpcy5vblN0YXJ0VGVsZXBvcnRhdGlvbiwgdGhpcyk7XG4gICAgfSxcblxuICAgIF9jcmVhdGVCbG9ja0FycmF5KCkge1xuICAgICAgICB0aGlzLl9ibG9ja3NBcnJheSA9IFtdO1xuICAgICAgICBsZXQgaWQgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bWVyYWxDb2x1bW5zOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtZXJhbFN0cmluZ3M7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fc2V0TG9jYXRpb24oaiwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9ibG9ja3NBcnJheVtqXSkgdGhpcy5fYmxvY2tzQXJyYXlbal0gPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtqXVtpXSA9IHRoaXMuX2NyZWF0ZUJsb2NrKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtqXVtpXS5pZCA9IGlkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2pdW2ldLmlJID0gajtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtqXVtpXS5pSiA9IGk7XG4gICAgICAgICAgICAgICAgaWQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfY3JlYXRlQmxvY2socG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9ibG9jayk7XG4gICAgICAgIG5ld0Jsb2NrLmtpbmQgPSB0aGlzLl9jaG9vc2VDb2xvcigpO1xuICAgICAgICBuZXdCbG9jay5zZXRQYXJlbnQodGhpcy5fZmllbGQpO1xuICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIG5ld0Jsb2NrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5ld0Jsb2NrLmNvYWxpdGlvbiA9IDA7XG4gICAgICAgIG5ld0Jsb2NrLnRyYW5zZmVycmVkID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0Jsb2NrO1xuICAgIH0sXG5cbiAgICBfc2V0TG9jYXRpb24oeSwgeCkge1xuICAgICAgICByZXR1cm4gY2MudjIoeCAqIHRoaXMuX3dpZHRoQ29sdW1uIC0gdGhpcy5fd2lkdGhPZmZzZXQsIHkgKiB0aGlzLl9oaWdoQ29sdW1uIC0gdGhpcy5faGlnaE9mZnNldCk7XG4gICAgfSxcblxuICAgIF9jaG9vc2VDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogdGhpcy5fbnVtYmVyQ29sb3JzKSAtIDE7XG4gICAgfSxcblxuICAgIF9maW5kQ29hbGl0aW9uKGJsb2NrLCBraW5kLCBjb2FsaXRpb24pIHtcbiAgICAgICAgaWYgKChibG9jayAmJiBibG9jay5pSSA8IDApIHx8IGJsb2NrLmlJID4gdGhpcy5fbnVtZXJhbFN0cmluZ3MgLSAxIHx8IGJsb2NrLmlKIDwgMCB8fCBibG9jay5pSiA+IHRoaXMuX251bWVyYWxDb2x1bW5zIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJsb2NrLmNvYWxpdGlvbiAhPT0gMCB8fCBibG9jay5raW5kICE9PSBraW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBibG9jay5jb2FsaXRpb24gPSBjb2FsaXRpb247XG4gICAgICAgIHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheS5wdXNoKGJsb2NrKTtcblxuICAgICAgICBpZiAodGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUkgLSAxXSAmJiB0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSSAtIDFdW2Jsb2NrLmlKXSlcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRDb2FsaXRpb24odGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUkgLSAxXVtibG9jay5pSl0sIGtpbmQsIGNvYWxpdGlvbik7XG4gICAgICAgIGlmICh0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSSArIDFdICYmIHRoaXMuX2Jsb2Nrc0FycmF5W2Jsb2NrLmlJICsgMV1bYmxvY2suaUpdKVxuICAgICAgICAgICAgdGhpcy5fZmluZENvYWxpdGlvbih0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSSArIDFdW2Jsb2NrLmlKXSwga2luZCwgY29hbGl0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2Jsb2NrLmlJXSAmJiB0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSV1bYmxvY2suaUogLSAxXSlcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRDb2FsaXRpb24odGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUldW2Jsb2NrLmlKIC0gMV0sIGtpbmQsIGNvYWxpdGlvbik7XG4gICAgICAgIGlmICh0aGlzLl9ibG9ja3NBcnJheVtibG9jay5pSV0gJiYgdGhpcy5fYmxvY2tzQXJyYXlbYmxvY2suaUldW2Jsb2NrLmlKICsgMV0pXG4gICAgICAgICAgICB0aGlzLl9maW5kQ29hbGl0aW9uKHRoaXMuX2Jsb2Nrc0FycmF5W2Jsb2NrLmlJXVtibG9jay5pSiArIDFdLCBraW5kLCBjb2FsaXRpb24pO1xuICAgIH0sXG5cbiAgICBfY2hlY2tPblNodWZmbGUoKSB7XG4gICAgICAgIHRoaXMuX251bWVyYWxDb2FsaXRpb24gPSAxO1xuICAgICAgICB0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bWVyYWxDb2x1bW5zIC0gMTsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluZENvYWxpdGlvbih0aGlzLl9ibG9ja3NBcnJheVtpXVtqXSwgdGhpcy5fYmxvY2tzQXJyYXlbaV1bal0ua2luZCwgdGhpcy5fbnVtZXJhbENvYWxpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheS5sZW5ndGggPj0gdGhpcy5fbnVtZXJhbFRvRGVzdHJveSkgdGhpcy5fbnVtZXJhbENvYWxpdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9udW1lcmFsQ29hbGl0aW9uID4gMSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBfY2hlY2tDbGlja2VkQmxvY2soYmxvY2ssIGtpbmRTdXBlckFiaWxpdHkgPSAwKSB7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRDb2FsaXRpb24oKTtcblxuICAgICAgICB0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkgPSBbXTtcblxuICAgICAgICBzd2l0Y2ggKGtpbmRTdXBlckFiaWxpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuQm9tYjpcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcFN1cGVyQWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkJMT0NLX0JPTUJfRE9ORSxibG9jay5pZCk7XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQkxPQ0tfQk9NQl9DSE9TRU4sIFtibG9jay5pSSxibG9jay5pSl0sIHRoaXMuX251bWVyYWxDb2x1bW5zLCB0aGlzLl9udW1lcmFsU3RyaW5ncyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXI6XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVE9HR0xFX1NVUEVSX0FCSUxJVFksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BTdXBlckFiaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DT0xVTU5fRVJBU0VSX0RPTkUsYmxvY2suaWQpO1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkFDVElWQVRFX0NPTFVNTl9FUkFTRVIsIFtibG9jay5pSSxibG9jay5pSl0sIHRoaXMuX251bWVyYWxDb2x1bW5zLCB0aGlzLl9udW1lcmFsU3RyaW5ncyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5kQ29hbGl0aW9uKGJsb2NrLCBibG9jay5raW5kLCAxKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkubGVuZ3RoIDwgdGhpcy5fbnVtZXJhbFRvRGVzdHJveSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNldENvYWxpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5CTE9DS19DQU5fQkVfQ0hPU0VOKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGVtcENvYWxpdGlvbkFycmF5Lmxlbmd0aCA+IHRoaXMuX2Ftb3VudEJsb2Nrc0ZvckVyYXNlckFwcGVhcmluZyAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNyZWF0ZVN1cGVyQWJpbGl0eShCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXIgLGNjLnYyKGJsb2NrLmlJLCBibG9jay5pSikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5hbENoZWNraW5nKCk7ICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF90cmFuc2ZlckJsb2Nrc1VwKCkge1xuICAgICAgICBsZXQgX2NvbHVtbnNBcnJheSA9W107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtZXJhbENvbHVtbnM7IGkrKykge1xuICAgICAgICAgICAgX2NvbHVtbnNBcnJheS5wdXNoKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbnVtZXJhbEZhbGxCbG9ja3MgPSB0aGlzLl90ZW1wQ29hbGl0aW9uQXJyYXkubGVuZ3RoO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TQ09SRV9HT1QsIHRoaXMuX251bWVyYWxGYWxsQmxvY2tzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3RlbXBDb2FsaXRpb25BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TUEFXTl9FRkZFQ1QsIGVsZW1lbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XG4gICAgICAgICAgICBlbGVtZW50Lm9wYWNpdHkgPSAwO1xuXG4gICAgICAgICAgICBsZXQgbmV3SSA9IHRoaXMuX251bWVyYWxTdHJpbmdzICsgX2NvbHVtbnNBcnJheVtlbGVtZW50LmlKXTtcblxuXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DQU1FUkFfU1RBUlRfU0hBS0UpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNBTUVSQV9TVE9QX1NIQUtFKTtcbiAgICAgICAgICAgIH0sIDAuMik7XG5cbiAgICAgICAgICAgIGVsZW1lbnQueSA9IHRoaXMuX3NldExvY2F0aW9uKG5ld0ksIGVsZW1lbnQuaUopLnk7XG5cbiAgICAgICAgICAgIF9jb2x1bW5zQXJyYXlbZWxlbWVudC5pSl0gKz0gMTtcbiAgICAgICAgICAgIGVsZW1lbnQua2luZCA9IHRoaXMuX2Nob29zZUNvbG9yKCk7XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DSE9PU0VfQ09MT1JfQkxPQ0ssIGVsZW1lbnQuaWQsIGVsZW1lbnQua2luZCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fYmxvY2tzQXJyYXlbbmV3SV0pIHRoaXMuX2Jsb2Nrc0FycmF5W25ld0ldID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W25ld0ldW2VsZW1lbnQuaUpdID0gZWxlbWVudDtcblxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbZWxlbWVudC5pSV1bZWxlbWVudC5pSl0gPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5pSTsgaSA8IHRoaXMuX251bWVyYWxTdHJpbmdzICsgX2NvbHVtbnNBcnJheVtlbGVtZW50LmlKXTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2VsZW1lbnQuaUpdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2VsZW1lbnQuaUpdLnRyYW5zZmVycmVkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LnRyYW5zZmVycmVkID0gbmV3SSAtIHRoaXMuX251bWVyYWxTdHJpbmdzO1xuICAgICAgICAgICAgZWxlbWVudC50cmFuc2ZlcnJlZCArKztcblxuICAgICAgICAgICAgZWxlbWVudC5pSSA9IG5ld0k7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfcmVndWxhcml6ZVRyYW5zZmVycmVkQmxvY2tzKCkge1xuICAgICAgICBjb25zdCBsZW5ndGhCbG9ja0FycmF5ID0gdGhpcy5fYmxvY2tzQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSA8IGxlbmd0aEJsb2NrQXJyYXk7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9udW1lcmFsQ29sdW1uczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2ldICYmIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoQmxvY2tBcnJheTsgayArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmxvY2tzQXJyYXlba10gJiYgdGhpcy5fYmxvY2tzQXJyYXlba11bal0gJiYgdGhpcy5fYmxvY2tzQXJyYXlba11bal0udHJhbnNmZXJyZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbayAtIHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdLnRyYW5zZmVycmVkXVtqXSA9IHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2sgLSB0aGlzLl9ibG9ja3NBcnJheVtrXVtqXS50cmFuc2ZlcnJlZF1bal0uaUkgPSBrIC0gdGhpcy5fYmxvY2tzQXJyYXlba11bal0udHJhbnNmZXJyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbayAtIHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdLnRyYW5zZmVycmVkXVtqXS50cmFuc2ZlcnJlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzQXJyYXlbayAtIHRoaXMuX2Jsb2Nrc0FycmF5W2tdW2pdLnRyYW5zZmVycmVkXVtqXS5jb2FsaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RGYWxsaW5nQmxvY2sgPSBsZW5ndGhCbG9ja0FycmF5IC0gdGhpcy5fbnVtZXJhbFN0cmluZ3M7XG4gICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5LnNwbGljZSh0aGlzLl9udW1lcmFsU3RyaW5ncywgbGVuZ3RoQmxvY2tBcnJheSAtIHRoaXMuX251bWVyYWxTdHJpbmdzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bWVyYWxTdHJpbmdzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbnVtZXJhbENvbHVtbnM7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWVsZC5hZGRDaGlsZCh0aGlzLl9ibG9ja3NBcnJheVtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2NoZWNrT25TaHVmZmxlKCkgJiYgIXRoaXMuX2lzU2NvcmVFbm91Z2hGb3JCb21iKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrT25TaHVmZmxlKCkpIHtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgVWlTY3JlZW5UeXBlLlJlc3VsdCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdoaWxlICghdGhpcy5fY2hlY2tPblNodWZmbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9yZXNldENvYWxpdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bWVyYWxDb2x1bW5zOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NBcnJheVtpXVtqXS5jb2FsaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9maW5hbENoZWNraW5nKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5QTEFZRVJfTU9WRUQpO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zZmVyQmxvY2tzVXAoKTtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5USU1FX1RPX0ZBTEwpO1xuXG4gICAgICAgIHRoaXMuX3JlZ3VsYXJpemVUcmFuc2ZlcnJlZEJsb2NrcygpO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0Q29hbGl0aW9uKCk7XG4gICAgfSxcblxuICAgIF9maW5kSW5kZXhlcyhibG9ja0lkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtZXJhbFN0cmluZ3M7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9udW1lcmFsQ29sdW1uczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdLmlkID09PSBibG9ja0lkKSByZXR1cm4gY2MudjIoaSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2ZpbmRJRChjb29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1lcmFsU3RyaW5nczsgaSArPSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX251bWVyYWxDb2x1bW5zOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmxvY2tzQXJyYXlbaV1bal0uaUkgPT09IGNvb3Jkcy54ICYmIHRoaXMuX2Jsb2Nrc0FycmF5W2ldW2pdLmlKID09PSBjb29yZHMueSkgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3NBcnJheVtpXVtqXS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXNlQWJpbGl0eVRudChibG9jaykge1xuICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNDT1JFX0dPVCwgdGhpcy5fbnVtZXJhbENvbHVtbnMgKiB0aGlzLl9udW1lcmFsU3RyaW5ncyk7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uQ3JlYXRlU3VwZXJBYmlsaXR5KGtpbmRBYmlsaXR5LCBjb29yZHMgPSBjYy52MigtMSwgLTEpKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0b3BTdXBlckFiaWxpdHkpIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9zdG9wU3VwZXJBYmlsaXR5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoa2luZEFiaWxpdHkgPT09IEJsb2NrQ29sb3JUeXBlLlRlbGVwb3J0KSB7XG4gICAgICAgICAgICB0aGlzLm9uVGVsZXBvcnRJc0F2YWlsYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlRFTEVQT1JUX1NUQVJURUQpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgbGV0IG5ld0lEXG4gICAgICAgICAgICBpZiAoY29vcmRzLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV3SUQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqICh0aGlzLl9udW1lcmFsU3RyaW5ncyAqIHRoaXMuX251bWVyYWxDb2x1bW5zIC0gMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJRCA9IHRoaXMuX2ZpbmRJRChjb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DUkVBVEVfU1VQRVJfQkxPQ0ssIG5ld0lELCBraW5kQWJpbGl0eSk7ICAgIFxuICAgICAgICB9LDAuMSlcbiAgICB9LFxuXG4gICAgb25GaWVsZE9uKGZpZWxkLCBibG9jaykge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5faXNGaWVsZE9uID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuX2Jsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmICh0aGlzLl9maWVsZCAmJiB0aGlzLl9ibG9jaykge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQmxvY2tBcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLl9jaGVja09uU2h1ZmZsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVCbG9ja0FycmF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CbG9ja0Nob3NlbihibG9jaykge1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1RlbGVwb3J0TW9kZSkge1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVEVMRVBPUlRFRF9CTE9DS19DSE9TRU4sIGJsb2NrKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TVE9QX0lOUFVUKTtcbiAgICAgICAgbGV0IGtpbmRTdXBlckFiaWxpdHkgPSAwO1xuICAgICAgICBpZiAoYmxvY2sua2luZCA9PT0gQmxvY2tDb2xvclR5cGUuQm9tYiB8fCBibG9jay5raW5kID09PSBCbG9ja0NvbG9yVHlwZS5Db2x1bW5FcmFzZXIpIHtcbiAgICAgICAgICAgIGtpbmRTdXBlckFiaWxpdHkgPSBibG9jay5raW5kO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoZWNrQ2xpY2tlZEJsb2NrKGJsb2NrLCBraW5kU3VwZXJBYmlsaXR5KTtcbiAgICB9LFxuXG4gICAgb25CbG9ja0ZhbGwodHJhbnNmZXJyZWQpIHtcbiAgICAgICAgaWYgKHRyYW5zZmVycmVkID09PSB0aGlzLl9sYXN0RmFsbGluZ0Jsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQkxPQ0tfQ0FOX0JFX0NIT1NFTik7XG4gICAgICAgICAgICB9LCAwLjM1KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkJvbWJJc0F2YWlsYWJsZShpc0F2YWlsYWJsZSkge1xuICAgICAgICB0aGlzLl9pc1Njb3JlRW5vdWdoRm9yQm9tYiA9IGlzQXZhaWxhYmxlO1xuICAgIH0sXG5cbiAgICBvblRlbGVwb3J0SXNBdmFpbGFibGUoaXNBdmFpbGFibGUpIHtcbiAgICAgICAgdGhpcy5faXNTY29yZUVub3VnaEZvclRlbGVwb3J0ID0gaXNBdmFpbGFibGU7XG4gICAgICAgIHRoaXMuX2lzVGVsZXBvcnRNb2RlID0gdHJ1ZTtcbiAgICB9LFxuXG5cbiAgICBvbkZlYXR1cmVSZXN1bHQobnVtYmVyc0FycmF5KSB7XG4gICAgICAgIG51bWJlcnNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdGVtcENvYWxpdGlvbkFycmF5LnB1c2godGhpcy5fYmxvY2tzQXJyYXlbZWxlbWVudFsxXV1bZWxlbWVudFswXV0pOyAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgIHRoaXMuX2ZpbmFsQ2hlY2tpbmcoKTtcbiAgICB9LFxuXG4gICAgb25UZWxlcG9ydGF0aW9uQ29tcGxldGUoKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RvcFN1cGVyQWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3JlZ3VsYXJpemVUcmFuc2ZlcnJlZEJsb2NrcygpO1xuICAgIH0sXG5cbiAgICBvblN0YXJ0VGVsZXBvcnRhdGlvbihmaXJzdCwgc2Vjb25kKSB7XG4gICAgICAgIHRoaXMuX2lzVGVsZXBvcnRNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W2ZpcnN0LmlJXVtmaXJzdC5pSl0gPSBzZWNvbmQ7XG4gICAgICAgIHRoaXMuX2Jsb2Nrc0FycmF5W3NlY29uZC5pSV1bc2Vjb25kLmlKXSA9IGZpcnN0O1xuICAgICAgICBbZmlyc3QuaUksIHNlY29uZC5pSV0gPSBbc2Vjb25kLmlJLCBmaXJzdC5pSV07XG4gICAgICAgIFtmaXJzdC5pSiwgc2Vjb25kLmlKXSA9IFtzZWNvbmQuaUosIGZpcnN0LmlKXTtcbiAgICAgICAgdGhpcy5fcmVzZXRDb2FsaXRpb24oKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/Teleport.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '110ebWVkl1OdIPvaRh59m8U', 'Teleport');
// scripts/Game/Logic/Features/Teleport.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _Feature = _interopRequireDefault(require("Feature"));

var _TeleportAnimationsType = _interopRequireDefault(require("TeleportAnimationsType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": _Feature["default"],
  properties: {
    _firstTeleportPosition: {
      "default": cc.v2(6, 4),
      serializable: false
    },
    _secondTeleportPosition: {
      "default": cc.v2(6, 7),
      serializable: false
    }
  },
  //#region life-cycle callbacks
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](this.initializingEvent, this.onInitializingEvent, this);
    cc.systemEvent[func](_GameEvent["default"].TELEPORTED_BLOCK_CHOSEN, this.onTeleportBlockChosen, this);
  },
  onTeleportBlockChosen: function onTeleportBlockChosen(block) {
    if (!this._firstBlock) {
      this._firstBlock = block;
      this._firstCoord = cc.v2(block.x, block.y);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._firstTeleportPosition, _TeleportAnimationsType["default"].None);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, cc.v2(block.iI, block.iJ), _TeleportAnimationsType["default"].Accepted);

      if (block.iJ === this._secondTeleportPosition.y) {
        this._secondTeleportPosition.x--;
      }

      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._secondTeleportPosition, _TeleportAnimationsType["default"].Choosing);
    } else {
      if (block.id === this._firstBlock.id) return;
      this._secondCoord = cc.v2(block.x, block.y);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._secondTeleportPosition, _TeleportAnimationsType["default"].None);
      cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, cc.v2(block.iI, block.iJ), _TeleportAnimationsType["default"].Accepted);
      cc.systemEvent.emit(_GameEvent["default"].START_TELEPORTATION, this._firstBlock, block, this._firstCoord, this._secondCoord);
      this._firstBlock = false;
    }
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    cc.systemEvent.emit(_GameEvent["default"].CHANGE_BLOCK_ANIMATION, this._firstTeleportPosition, _TeleportAnimationsType["default"].Choosing);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvVGVsZXBvcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiX2ZpcnN0VGVsZXBvcnRQb3NpdGlvbiIsInYyIiwic2VyaWFsaXphYmxlIiwiX3NlY29uZFRlbGVwb3J0UG9zaXRpb24iLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsImluaXRpYWxpemluZ0V2ZW50Iiwib25Jbml0aWFsaXppbmdFdmVudCIsIkdhbWVFdmVudCIsIlRFTEVQT1JURURfQkxPQ0tfQ0hPU0VOIiwib25UZWxlcG9ydEJsb2NrQ2hvc2VuIiwiYmxvY2siLCJfZmlyc3RCbG9jayIsIl9maXJzdENvb3JkIiwieCIsInkiLCJlbWl0IiwiQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiIsIlRlbGVwb3J0QW5pbWF0aW9uc1R5cGUiLCJOb25lIiwiaUkiLCJpSiIsIkFjY2VwdGVkIiwiQ2hvb3NpbmciLCJpZCIsIl9zZWNvbmRDb29yZCIsIlNUQVJUX1RFTEVQT1JUQVRJT04iLCJmZWF0dXJlQ29vcmRpbmF0ZSIsImZpZWxkV2lkdGgiLCJmaWVsZEhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUhBO0FBSUE7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTQyxtQkFESjtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsc0JBQXNCLEVBQUU7TUFBRSxXQUFTSixFQUFFLENBQUNLLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFYO01BQXVCQyxZQUFZLEVBQUU7SUFBckMsQ0FEaEI7SUFFUkMsdUJBQXVCLEVBQUU7TUFBRSxXQUFTUCxFQUFFLENBQUNLLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFYO01BQXVCQyxZQUFZLEVBQUU7SUFBckM7RUFGakIsQ0FIUDtFQVFMO0VBRUFFLG1CQVZLLCtCQVVlQyxJQVZmLEVBVXFCO0lBQ3RCLElBQU1DLElBQUksR0FBR0QsSUFBSSxHQUFHLElBQUgsR0FBVSxLQUEzQjtJQUVBVCxFQUFFLENBQUNXLFdBQUgsQ0FBZUQsSUFBZixFQUFxQixLQUFLRSxpQkFBMUIsRUFBNkMsS0FBS0MsbUJBQWxELEVBQXVFLElBQXZFO0lBQ0FiLEVBQUUsQ0FBQ1csV0FBSCxDQUFlRCxJQUFmLEVBQXFCSSxxQkFBQSxDQUFVQyx1QkFBL0IsRUFBd0QsS0FBS0MscUJBQTdELEVBQW9GLElBQXBGO0VBQ0gsQ0FmSTtFQWlCTEEscUJBakJLLGlDQWlCaUJDLEtBakJqQixFQWlCd0I7SUFDekIsSUFBSSxDQUFDLEtBQUtDLFdBQVYsRUFBdUI7TUFDbkIsS0FBS0EsV0FBTCxHQUFtQkQsS0FBbkI7TUFDQSxLQUFLRSxXQUFMLEdBQW1CbkIsRUFBRSxDQUFDSyxFQUFILENBQU1ZLEtBQUssQ0FBQ0csQ0FBWixFQUFlSCxLQUFLLENBQUNJLENBQXJCLENBQW5CO01BQ0FyQixFQUFFLENBQUNXLFdBQUgsQ0FBZVcsSUFBZixDQUFvQlIscUJBQUEsQ0FBVVMsc0JBQTlCLEVBQXNELEtBQUtuQixzQkFBM0QsRUFBbUZvQixrQ0FBQSxDQUF1QkMsSUFBMUc7TUFDQXpCLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVUyxzQkFBOUIsRUFBc0R2QixFQUFFLENBQUNLLEVBQUgsQ0FBTVksS0FBSyxDQUFDUyxFQUFaLEVBQWdCVCxLQUFLLENBQUNVLEVBQXRCLENBQXRELEVBQWlGSCxrQ0FBQSxDQUF1QkksUUFBeEc7O01BQ0EsSUFBSVgsS0FBSyxDQUFDVSxFQUFOLEtBQWEsS0FBS3BCLHVCQUFMLENBQTZCYyxDQUE5QyxFQUFpRDtRQUM3QyxLQUFLZCx1QkFBTCxDQUE2QmEsQ0FBN0I7TUFDSDs7TUFDRHBCLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVUyxzQkFBOUIsRUFBc0QsS0FBS2hCLHVCQUEzRCxFQUFvRmlCLGtDQUFBLENBQXVCSyxRQUEzRztJQUNILENBVEQsTUFTTztNQUNILElBQUlaLEtBQUssQ0FBQ2EsRUFBTixLQUFhLEtBQUtaLFdBQUwsQ0FBaUJZLEVBQWxDLEVBQ0k7TUFDSixLQUFLQyxZQUFMLEdBQW9CL0IsRUFBRSxDQUFDSyxFQUFILENBQU1ZLEtBQUssQ0FBQ0csQ0FBWixFQUFlSCxLQUFLLENBQUNJLENBQXJCLENBQXBCO01BQ0FyQixFQUFFLENBQUNXLFdBQUgsQ0FBZVcsSUFBZixDQUFvQlIscUJBQUEsQ0FBVVMsc0JBQTlCLEVBQXNELEtBQUtoQix1QkFBM0QsRUFBb0ZpQixrQ0FBQSxDQUF1QkMsSUFBM0c7TUFDQXpCLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVUyxzQkFBOUIsRUFBc0R2QixFQUFFLENBQUNLLEVBQUgsQ0FBTVksS0FBSyxDQUFDUyxFQUFaLEVBQWdCVCxLQUFLLENBQUNVLEVBQXRCLENBQXRELEVBQWlGSCxrQ0FBQSxDQUF1QkksUUFBeEc7TUFDQTVCLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVa0IsbUJBQTlCLEVBQW1ELEtBQUtkLFdBQXhELEVBQXFFRCxLQUFyRSxFQUE0RSxLQUFLRSxXQUFqRixFQUE4RixLQUFLWSxZQUFuRztNQUNBLEtBQUtiLFdBQUwsR0FBbUIsS0FBbkI7SUFDSDtFQUNKLENBcENJO0VBc0NMTCxtQkF0Q0ssK0JBc0Nlb0IsaUJBdENmLEVBc0NrQ0MsVUF0Q2xDLEVBc0M4Q0MsV0F0QzlDLEVBc0MyRDtJQUM1RG5DLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVUyxzQkFBOUIsRUFBc0QsS0FBS25CLHNCQUEzRCxFQUFtRm9CLGtDQUFBLENBQXVCSyxRQUExRztFQUNIO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBjbGFzc2VzLWhlbHBlcnNcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ0ZlYXR1cmUnO1xuaW1wb3J0IFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUgZnJvbSAnVGVsZXBvcnRBbmltYXRpb25zVHlwZSc7XG4vLyNlbmRyZWdpb25cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBGZWF0dXJlLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfZmlyc3RUZWxlcG9ydFBvc2l0aW9uOiB7IGRlZmF1bHQ6IGNjLnYyKDYsNCksIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3NlY29uZFRlbGVwb3J0UG9zaXRpb246IHsgZGVmYXVsdDogY2MudjIoNiw3KSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgIH0sXG4gIFxuICAgIC8vI3JlZ2lvbiBsaWZlLWN5Y2xlIGNhbGxiYWNrc1xuXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuIFxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXSh0aGlzLmluaXRpYWxpemluZ0V2ZW50LCB0aGlzLm9uSW5pdGlhbGl6aW5nRXZlbnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuVEVMRVBPUlRFRF9CTE9DS19DSE9TRU4sIHRoaXMub25UZWxlcG9ydEJsb2NrQ2hvc2VuLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25UZWxlcG9ydEJsb2NrQ2hvc2VuKGJsb2NrKSB7XG4gICAgICAgIGlmICghdGhpcy5fZmlyc3RCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3RCbG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgdGhpcy5fZmlyc3RDb29yZCA9IGNjLnYyKGJsb2NrLngsIGJsb2NrLnkpO1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiwgdGhpcy5fZmlyc3RUZWxlcG9ydFBvc2l0aW9uLCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLk5vbmUpO1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiwgY2MudjIoYmxvY2suaUksIGJsb2NrLmlKKSwgVGVsZXBvcnRBbmltYXRpb25zVHlwZS5BY2NlcHRlZCk7XG4gICAgICAgICAgICBpZiAoYmxvY2suaUogPT09IHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24ueCAtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNIQU5HRV9CTE9DS19BTklNQVRJT04sIHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24sIFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUuQ2hvb3NpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGJsb2NrLmlkID09PSB0aGlzLl9maXJzdEJsb2NrLmlkKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgdGhpcy5fc2Vjb25kQ29vcmQgPSBjYy52MihibG9jay54LCBibG9jay55KTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNIQU5HRV9CTE9DS19BTklNQVRJT04sIHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24sIFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUuTm9uZSk7XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DSEFOR0VfQkxPQ0tfQU5JTUFUSU9OLCBjYy52MihibG9jay5pSSwgYmxvY2suaUopLCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLkFjY2VwdGVkKTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNUQVJUX1RFTEVQT1JUQVRJT04sIHRoaXMuX2ZpcnN0QmxvY2ssIGJsb2NrLCB0aGlzLl9maXJzdENvb3JkLCB0aGlzLl9zZWNvbmRDb29yZCk7XG4gICAgICAgICAgICB0aGlzLl9maXJzdEJsb2NrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Jbml0aWFsaXppbmdFdmVudChmZWF0dXJlQ29vcmRpbmF0ZSwgZmllbGRXaWR0aCwgZmllbGRIZWlnaHQpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiwgdGhpcy5fZmlyc3RUZWxlcG9ydFBvc2l0aW9uLCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLkNob29zaW5nKTtcbiAgICB9XG4gfSk7XG4gXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/ScoreManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa94blfoFBIers1x8DxiGzj', 'ScoreManager');
// scripts/Game/Ui/ScoreManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

var _BombType = _interopRequireDefault(require("BombType"));

var _BlockColorType = _interopRequireDefault(require("../Enums/BlockColorType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    level: {
      "default": null,
      type: cc.Label
    },
    steps: {
      "default": null,
      type: cc.Label
    },
    localScores: {
      "default": null,
      type: cc.Label
    },
    totalScores: {
      "default": null,
      type: cc.Label
    },
    progress: {
      "default": null,
      type: cc.Node
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _level: {
      "default": 0,
      serializable: false
    },
    _steps: {
      "default": 20
    },
    _stepsFirstLevels: {
      "default": 10
    },
    _stepsNextLevels: {
      "default": 21
    },
    _numberForAvailableCreation: {
      "default": 10
    },
    _widthMultiplier: {
      "default": 1500
    },
    _scoresBorder: {
      "default": 18
    },
    _localScores: {
      "default": 40
    },
    _needingScores: {
      "default": 0,
      serializable: false
    },
    _totalScores: {
      "default": 0
    },
    _canCheckForScoresAbility: {
      "default": true
    },
    _isStopAdding: {
      "default": false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this._createNewLevel();

    this.totalScores.string = this._totalScores;
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].SCORE_GOT, this.onScoreGot, this);
    cc.systemEvent[func](_GameEvent["default"].PLAYER_MOVED, this.onPlayerMoved, this);
    cc.systemEvent[func](_GameEvent["default"].IS_SCORE_ENOUGH, this.onIsScoreEnough, this);
    cc.systemEvent[func](_GameEvent["default"].TOGGLE_SUPER_ABILITY, this.onToggleSuperAbility, this);
    cc.systemEvent[func](_GameEvent["default"].SHOW_SCREEN, this.onShowScreen, this);
  },
  _createNewLevel: function _createNewLevel() {
    this._level += 1;
    this._steps = this._stepsNextLevels - this._level;
    if (this._steps < this._stepsFirstLevels) this._steps = this._stepsFirstLevels;
    this._localScores = this._scoresBorder + Math.ceil(this._level * 2);
    this._needingScores = this._localScores;
    this.level.string = this._level;
    this.localScores.string = this._localScores;
    this.steps.string = this._steps;
    this.progress.width = 0;
  },
  _checkForScores: function _checkForScores(scores, comparedValue) {
    if (scores >= comparedValue) return true;
    return false;
  },
  //#endregion
  //#region event handlers
  onScoreGot: function onScoreGot(scores) {
    if (this._isStopAdding) return;
    this._localScores -= scores;
    this._totalScores += scores;
    this.totalScores.string = this._totalScores;
    if (this._checkForScores(this._totalScores, this._numberForAvailableCreation)) cc.systemEvent.emit(_GameEvent["default"].BOMB_IS_AVAILABLE, true);

    if (this._localScores < 1) {
      cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, true, true);

      this._createNewLevel();
    } else {
      this.localScores.string = this._localScores;
      pg.tweenManager.add(this.progress, {
        width: this._widthMultiplier * ((this._needingScores - this._localScores) / this._needingScores)
      }, 0.2);
    }
  },
  onPlayerMoved: function onPlayerMoved() {
    this._isStopAdding = false;
    this._steps -= 1;

    if (this._steps < 1) {
      cc.systemEvent.emit(_GameEvent["default"].SHOW_SCREEN, _UiScreenType["default"].Result, true, false);
    } else {
      this.steps.string = this._steps;
    }
  },
  onIsScoreEnough: function onIsScoreEnough(kindSuperAbility, score) {
    if (!this._canCheckForScoresAbility) return;
    var isAvailable = false;

    switch (kindSuperAbility) {
      case _BlockColorType["default"].Bomb:
        if (this._totalScores >= score) {
          isAvailable = true;
          this._totalScores -= score;
          if (!this._checkForScores(this._totalScores, score)) cc.systemEvent.emit(_GameEvent["default"].BOMB_IS_AVAILABLE, false);
        }

        break;

      case _BlockColorType["default"].Teleport:
        if (this._totalScores >= score) {
          isAvailable = true;
          this._totalScores -= score;
        }

        break;

      case _BombType["default"].Tnt:
        return;

        if (this._totalScores >= score) {
          isAvailable = true;
          this._totalScores -= score;
        }

        break;
    }

    if (isAvailable) {
      cc.systemEvent.emit(_GameEvent["default"].CREATE_SUPER_ABILITY, kindSuperAbility);
      this.totalScores.string = this._totalScores;
    }
  },
  onToggleSuperAbility: function onToggleSuperAbility(isOn) {
    this._canCheckForScoresAbility = isOn;
  },
  onShowScreen: function onShowScreen(typeScreen, isShow, isWin) {
    if (isWin === void 0) {
      isWin = true;
    }

    this._isStopAdding = true;
    if (isWin) return;
    this._level = 0;
    this._totalScores = 0;
    this.totalScores.string = this._totalScores;
    this._localScores = 0;

    this._createNewLevel();
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvU2NvcmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGV2ZWwiLCJ0eXBlIiwiTGFiZWwiLCJzdGVwcyIsImxvY2FsU2NvcmVzIiwidG90YWxTY29yZXMiLCJwcm9ncmVzcyIsIk5vZGUiLCJfbGV2ZWwiLCJzZXJpYWxpemFibGUiLCJfc3RlcHMiLCJfc3RlcHNGaXJzdExldmVscyIsIl9zdGVwc05leHRMZXZlbHMiLCJfbnVtYmVyRm9yQXZhaWxhYmxlQ3JlYXRpb24iLCJfd2lkdGhNdWx0aXBsaWVyIiwiX3Njb3Jlc0JvcmRlciIsIl9sb2NhbFNjb3JlcyIsIl9uZWVkaW5nU2NvcmVzIiwiX3RvdGFsU2NvcmVzIiwiX2NhbkNoZWNrRm9yU2NvcmVzQWJpbGl0eSIsIl9pc1N0b3BBZGRpbmciLCJvbkVuYWJsZSIsIl9oYW5kbGVTdWJzY3JpcHRpb24iLCJfY3JlYXRlTmV3TGV2ZWwiLCJzdHJpbmciLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiU0NPUkVfR09UIiwib25TY29yZUdvdCIsIlBMQVlFUl9NT1ZFRCIsIm9uUGxheWVyTW92ZWQiLCJJU19TQ09SRV9FTk9VR0giLCJvbklzU2NvcmVFbm91Z2giLCJUT0dHTEVfU1VQRVJfQUJJTElUWSIsIm9uVG9nZ2xlU3VwZXJBYmlsaXR5IiwiU0hPV19TQ1JFRU4iLCJvblNob3dTY3JlZW4iLCJNYXRoIiwiY2VpbCIsIndpZHRoIiwiX2NoZWNrRm9yU2NvcmVzIiwic2NvcmVzIiwiY29tcGFyZWRWYWx1ZSIsImVtaXQiLCJCT01CX0lTX0FWQUlMQUJMRSIsIlVpU2NyZWVuVHlwZSIsIlJlc3VsdCIsInBnIiwidHdlZW5NYW5hZ2VyIiwiYWRkIiwia2luZFN1cGVyQWJpbGl0eSIsInNjb3JlIiwiaXNBdmFpbGFibGUiLCJCbG9ja0NvbG9yVHlwZSIsIkJvbWIiLCJUZWxlcG9ydCIsIkJvbWJUeXBlIiwiVG50IiwiQ1JFQVRFX1NVUEVSX0FCSUxJVFkiLCJ0eXBlU2NyZWVuIiwiaXNTaG93IiwiaXNXaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFKQTtBQUtBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLEtBQUssRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBRkM7SUFHUkMsS0FBSyxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBMUIsQ0FIQztJQUlSRSxXQUFXLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJILElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUpMO0lBS1JHLFdBQVcsRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkosSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQTFCLENBTEw7SUFNUkksUUFBUSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1c7SUFBMUIsQ0FORjtJQVFSO0lBRUE7SUFDQTtJQUVBO0lBQ0FDLE1BQU0sRUFBRTtNQUFFLFdBQVMsQ0FBWDtNQUFjQyxZQUFZLEVBQUU7SUFBNUIsQ0FkQTtJQWVSQyxNQUFNLEVBQUU7TUFBRSxXQUFTO0lBQVgsQ0FmQTtJQWdCUkMsaUJBQWlCLEVBQUU7TUFBRSxXQUFTO0lBQVgsQ0FoQlg7SUFpQlJDLGdCQUFnQixFQUFFO01BQUUsV0FBUztJQUFYLENBakJWO0lBa0JSQywyQkFBMkIsRUFBQztNQUFFLFdBQVM7SUFBWCxDQWxCcEI7SUFtQlJDLGdCQUFnQixFQUFDO01BQUUsV0FBUztJQUFYLENBbkJUO0lBb0JSQyxhQUFhLEVBQUU7TUFBRSxXQUFTO0lBQVgsQ0FwQlA7SUFxQlJD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Syx3QkErSVF1QixVQS9JUixFQStJb0JDLE1BL0lwQixFQStJNEJDLEtBL0k1QixFQStJMEM7SUFBQSxJQUFkQSxLQUFjO01BQWRBLEtBQWMsR0FBTixJQUFNO0lBQUE7O0lBQzNDLEtBQUs1QyxhQUFMLEdBQXFCLElBQXJCO0lBQ0EsSUFBSTRDLEtBQUosRUFBVztJQUNYLEtBQUt4RCxNQUFMLEdBQWMsQ0FBZDtJQUNBLEtBQUtVLFlBQUwsR0FBb0IsQ0FBcEI7SUFDQSxLQUFLYixXQUFMLENBQWlCbUIsTUFBakIsR0FBMEIsS0FBS04sWUFBL0I7SUFDQSxLQUFLRixZQUFMLEdBQW9CLENBQXBCOztJQUNBLEtBQUtPLGVBQUw7RUFDSCxDQXZKSSxDQXdKTDs7QUF4SkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuaW1wb3J0IEJvbWJUeXBlIGZyb20gJ0JvbWJUeXBlJztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICcuLi9FbnVtcy9CbG9ja0NvbG9yVHlwZSc7XG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIGxldmVsOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIHN0ZXBzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIGxvY2FsU2NvcmVzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIHRvdGFsU2NvcmVzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLkxhYmVsIH0sXG4gICAgICAgIHByb2dyZXNzOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcblxuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHVibGljIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHJpdmF0ZSBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgX2xldmVsOiB7IGRlZmF1bHQ6IDAsIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3N0ZXBzOiB7IGRlZmF1bHQ6IDIwIH0sXG4gICAgICAgIF9zdGVwc0ZpcnN0TGV2ZWxzOiB7IGRlZmF1bHQ6IDEwIH0sXG4gICAgICAgIF9zdGVwc05leHRMZXZlbHM6IHsgZGVmYXVsdDogMjEgfSxcbiAgICAgICAgX251bWJlckZvckF2YWlsYWJsZUNyZWF0aW9uOnsgZGVmYXVsdDogMTAgfSxcbiAgICAgICAgX3dpZHRoTXVsdGlwbGllcjp7IGRlZmF1bHQ6IDE1MDAgfSxcbiAgICAgICAgX3Njb3Jlc0JvcmRlcjogeyBkZWZhdWx0OiAxOCB9LFxuICAgICAgICBfbG9jYWxTY29yZXM6IHsgZGVmYXVsdDogNDAgfSxcbiAgICAgICAgX25lZWRpbmdTY29yZXM6IHsgZGVmYXVsdDogMCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfdG90YWxTY29yZXM6IHsgZGVmYXVsdDogMCB9LFxuICAgICAgICBfY2FuQ2hlY2tGb3JTY29yZXNBYmlsaXR5OiB7IGRlZmF1bHQ6IHRydWUgfSxcbiAgICAgICAgX2lzU3RvcEFkZGluZzogeyBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlTmV3TGV2ZWwoKTtcbiAgICAgICAgdGhpcy50b3RhbFNjb3Jlcy5zdHJpbmcgPSB0aGlzLl90b3RhbFNjb3JlcztcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuICAgIF9oYW5kbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuU0NPUkVfR09ULCB0aGlzLm9uU2NvcmVHb3QsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuUExBWUVSX01PVkVELCB0aGlzLm9uUGxheWVyTW92ZWQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuSVNfU0NPUkVfRU5PVUdILCB0aGlzLm9uSXNTY29yZUVub3VnaCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5UT0dHTEVfU1VQRVJfQUJJTElUWSwgdGhpcy5vblRvZ2dsZVN1cGVyQWJpbGl0eSwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgdGhpcy5vblNob3dTY3JlZW4sIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfY3JlYXRlTmV3TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuX2xldmVsICs9IDE7XG4gICAgICAgIHRoaXMuX3N0ZXBzID0gdGhpcy5fc3RlcHNOZXh0TGV2ZWxzIC0gdGhpcy5fbGV2ZWw7XG4gICAgICAgIGlmICh0aGlzLl9zdGVwcyA8IHRoaXMuX3N0ZXBzRmlyc3RMZXZlbHMpIHRoaXMuX3N0ZXBzID0gdGhpcy5fc3RlcHNGaXJzdExldmVscztcbiAgICAgICAgdGhpcy5fbG9jYWxTY29yZXMgPSB0aGlzLl9zY29yZXNCb3JkZXIgKyBNYXRoLmNlaWwodGhpcy5fbGV2ZWwgKiAyKTtcbiAgICAgICAgdGhpcy5fbmVlZGluZ1Njb3JlcyA9IHRoaXMuX2xvY2FsU2NvcmVzO1xuICAgICAgICB0aGlzLmxldmVsLnN0cmluZyA9IHRoaXMuX2xldmVsO1xuICAgICAgICB0aGlzLmxvY2FsU2NvcmVzLnN0cmluZyA9IHRoaXMuX2xvY2FsU2NvcmVzO1xuICAgICAgICB0aGlzLnN0ZXBzLnN0cmluZyA9IHRoaXMuX3N0ZXBzO1xuICAgICAgICB0aGlzLnByb2dyZXNzLndpZHRoID0gMDtcbiAgICB9LFxuXG4gICAgX2NoZWNrRm9yU2NvcmVzKHNjb3JlcywgY29tcGFyZWRWYWx1ZSkge1xuICAgICAgICBpZiAoc2NvcmVzID49IGNvbXBhcmVkVmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25TY29yZUdvdChzY29yZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU3RvcEFkZGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLl9sb2NhbFNjb3JlcyAtPSBzY29yZXM7XG4gICAgICAgIHRoaXMuX3RvdGFsU2NvcmVzICs9IHNjb3JlcztcbiAgICAgICAgdGhpcy50b3RhbFNjb3Jlcy5zdHJpbmcgPSB0aGlzLl90b3RhbFNjb3JlcztcblxuICAgICAgICBpZiAodGhpcy5fY2hlY2tGb3JTY29yZXModGhpcy5fdG90YWxTY29yZXMsIHRoaXMuX251bWJlckZvckF2YWlsYWJsZUNyZWF0aW9uKSkgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQk9NQl9JU19BVkFJTEFCTEUsIHRydWUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2NhbFNjb3JlcyA8IDEpIHtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNIT1dfU0NSRUVOLCBVaVNjcmVlblR5cGUuUmVzdWx0LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5ld0xldmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU2NvcmVzLnN0cmluZyA9IHRoaXMuX2xvY2FsU2NvcmVzO1xuICAgICAgICAgICAgcGcudHdlZW5NYW5hZ2VyLmFkZCh0aGlzLnByb2dyZXNzLCB7IHdpZHRoOiB0aGlzLl93aWR0aE11bHRpcGxpZXIgKiAoKHRoaXMuX25lZWRpbmdTY29yZXMgLSB0aGlzLl9sb2NhbFNjb3JlcykgLyB0aGlzLl9uZWVkaW5nU2NvcmVzKSB9LCAwLjIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uUGxheWVyTW92ZWQoKSB7XG4gICAgICAgIHRoaXMuX2lzU3RvcEFkZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdGVwcyAtPSAxO1xuICAgICAgICBpZiAodGhpcy5fc3RlcHMgPCAxKSB7XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgVWlTY3JlZW5UeXBlLlJlc3VsdCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGVwcy5zdHJpbmcgPSB0aGlzLl9zdGVwcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbklzU2NvcmVFbm91Z2goa2luZFN1cGVyQWJpbGl0eSwgc2NvcmUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5DaGVja0ZvclNjb3Jlc0FiaWxpdHkpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGtpbmRTdXBlckFiaWxpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuQm9tYjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG90YWxTY29yZXMgPj0gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b3RhbFNjb3JlcyAtPSBzY29yZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja0ZvclNjb3Jlcyh0aGlzLl90b3RhbFNjb3Jlcywgc2NvcmUpKSBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5CT01CX0lTX0FWQUlMQUJMRSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQmxvY2tDb2xvclR5cGUuVGVsZXBvcnQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvdGFsU2NvcmVzID49IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG90YWxTY29yZXMgLT0gc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSBCb21iVHlwZS5UbnQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvdGFsU2NvcmVzID49IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG90YWxTY29yZXMgLT0gc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ1JFQVRFX1NVUEVSX0FCSUxJVFksIGtpbmRTdXBlckFiaWxpdHkpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFNjb3Jlcy5zdHJpbmcgPSB0aGlzLl90b3RhbFNjb3JlcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRvZ2dsZVN1cGVyQWJpbGl0eShpc09uKSB7XG4gICAgICAgIHRoaXMuX2NhbkNoZWNrRm9yU2NvcmVzQWJpbGl0eSA9IGlzT247XG4gICAgfSxcblxuICAgIG9uU2hvd1NjcmVlbih0eXBlU2NyZWVuLCBpc1Nob3csIGlzV2luID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9pc1N0b3BBZGRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAoaXNXaW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLl90b3RhbFNjb3JlcyA9IDA7XG4gICAgICAgIHRoaXMudG90YWxTY29yZXMuc3RyaW5nID0gdGhpcy5fdG90YWxTY29yZXM7XG4gICAgICAgIHRoaXMuX2xvY2FsU2NvcmVzID0gMDtcbiAgICAgICAgdGhpcy5fY3JlYXRlTmV3TGV2ZWwoKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/IScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4116cgCcRpB4JzE0qK5+5iz', 'IScreen');
// scripts/Game/Ui/IScreen.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    activated: {
      "default": false,
      notify: function notify(old) {
        for (var _iterator = _createForOfIteratorHelperLoose(this.node._children), _step; !(_step = _iterator()).done;) {
          var child = _step.value;
          child.active = this.activated;
        }

        this.onSwitchActiveCallback instanceof Function && this.onSwitchActiveCallback(this.activated);
      },
      tooltip: 'индикатор активности, при изменении активирует/ деактивирует детские ноды'
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  editor: {
    menu: 'Ui/IScreen'
  },
  //#region life-cycle callbacks
  onLoad: function onLoad() {
    this.activated = false;
    this.node.opacity = 0;
  },
  //#endregion
  //#region public methods
  show: function show(time) {
    if (time === void 0) {
      time = 0.5;
    }

    this.activated = true;
    var showTween = pg.tweenManager.add(this.node, {
      opacity: 255
    }, time);
    return showTween;
  },
  hide: function hide(time) {
    var _this = this;

    if (time === void 0) {
      time = 0.5;
    }

    var hideTween = pg.tweenManager.add(this.node, {
      opacity: 0
    }, time);
    hideTween.addCompleteCallback(function () {
      _this.activated = false;
    });
    return hideTween;
  },
  //#endregion
  //#region private methods
  //#endregion
  //#region event handlers
  onSwitchActiveCallback: null //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvSVNjcmVlbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFjdGl2YXRlZCIsIm5vdGlmeSIsIm9sZCIsIm5vZGUiLCJfY2hpbGRyZW4iLCJjaGlsZCIsImFjdGl2ZSIsIm9uU3dpdGNoQWN0aXZlQ2FsbGJhY2siLCJGdW5jdGlvbiIsInRvb2x0aXAiLCJlZGl0b3IiLCJtZW51Iiwib25Mb2FkIiwib3BhY2l0eSIsInNob3ciLCJ0aW1lIiwic2hvd1R3ZWVuIiwicGciLCJ0d2Vlbk1hbmFnZXIiLCJhZGQiLCJoaWRlIiwiaGlkZVR3ZWVuIiwiYWRkQ29tcGxldGVDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFNBQVMsRUFBRTtNQUNQLFdBQVMsS0FERjtNQUVQQyxNQUZPLGtCQUVBQyxHQUZBLEVBRUs7UUFDUixxREFBa0IsS0FBS0MsSUFBTCxDQUFVQyxTQUE1Qix3Q0FBdUM7VUFBQSxJQUE5QkMsS0FBOEI7VUFDbkNBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLEtBQUtOLFNBQXBCO1FBQ0g7O1FBRUQsS0FBS08sc0JBQUwsWUFBdUNDLFFBQXZDLElBQW1ELEtBQUtELHNCQUFMLENBQTRCLEtBQUtQLFNBQWpDLENBQW5EO01BQ0gsQ0FSTTtNQVNQUyxPQUFPLEVBQUU7SUFURixDQUZILENBYVI7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFqQlEsQ0FIUDtFQXVCTEMsTUFBTSxFQUFFO0lBQ0pDLElBQUksRUFBRTtFQURGLENBdkJIO0VBMkJMO0VBQ0FDLE1BNUJLLG9CQTRCSTtJQUNMLEtBQUtaLFNBQUwsR0FBaUIsS0FBakI7SUFDQSxLQUFLRyxJQUFMLENBQVVVLE9BQVYsR0FBb0IsQ0FBcEI7RUFDSCxDQS9CSTtFQWdDTDtFQUVBO0VBQ0FDLElBbkNLLGdCQW1DQUMsSUFuQ0EsRUFtQ1k7SUFBQSxJQUFaQSxJQUFZO01BQVpBLElBQVksR0FBTCxHQUFLO0lBQUE7O0lBQ2IsS0FBS2YsU0FBTCxHQUFpQixJQUFqQjtJQUNBLElBQU1nQixTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsWUFBSCxDQUFnQkMsR0FBaEIsQ0FBb0IsS0FBS2hCLElBQXpCLEVBQStCO01BQUVVLE9BQU8sRUFBRTtJQUFYLENBQS9CLEVBQWlERSxJQUFqRCxDQUFsQjtJQUVBLE9BQU9DLFNBQVA7RUFDSCxDQXhDSTtFQTBDTEksSUExQ0ssZ0JBMENBTCxJQTFDQSxFQTBDWTtJQUFBOztJQUFBLElBQVpBLElBQVk7TUFBWkEsSUFBWSxHQUFMLEdBQUs7SUFBQTs7SUFDYixJQUFNTSxTQUFTLEdBQUdKLEVBQUUsQ0FBQ0MsWUFBSCxDQUFnQkMsR0FBaEIsQ0FBb0IsS0FBS2hCLElBQXpCLEVBQStCO01BQUVVLE9BQU8sRUFBRTtJQUFYLENBQS9CLEVBQStDRSxJQUEvQyxDQUFsQjtJQUNBTSxTQUFTLENBQUNDLG1CQUFWLENBQThCLFlBQU07TUFDaEMsS0FBSSxDQUFDdEIsU0FBTCxHQUFpQixLQUFqQjtJQUNILENBRkQ7SUFJQSxPQUFPcUIsU0FBUDtFQUNILENBakRJO0VBa0RMO0VBRUE7RUFDQTtFQUVBO0VBQ0FkLHNCQUFzQixFQUFFLElBeERuQixDQXlETDs7QUF6REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuLy8jZW5kcmVnaW9uXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBhY3RpdmF0ZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgbm90aWZ5KG9sZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdGhpcy5hY3RpdmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vblN3aXRjaEFjdGl2ZUNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgdGhpcy5vblN3aXRjaEFjdGl2ZUNhbGxiYWNrKHRoaXMuYWN0aXZhdGVkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiAn0LjQvdC00LjQutCw0YLQvtGAINCw0LrRgtC40LLQvdC+0YHRgtC4LCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INCw0LrRgtC40LLQuNGA0YPQtdGCLyDQtNC10LDQutGC0LjQstC40YDRg9C10YIg0LTQtdGC0YHQutC40LUg0L3QvtC00YsnLFxuICAgICAgICB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIG1lbnU6ICdVaS9JU2NyZWVuJyxcbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIHNob3codGltZSA9IDAuNSkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNob3dUd2VlbiA9IHBnLnR3ZWVuTWFuYWdlci5hZGQodGhpcy5ub2RlLCB7IG9wYWNpdHk6IDI1NSB9LCB0aW1lKTtcblxuICAgICAgICByZXR1cm4gc2hvd1R3ZWVuO1xuICAgIH0sXG5cbiAgICBoaWRlKHRpbWUgPSAwLjUpIHtcbiAgICAgICAgY29uc3QgaGlkZVR3ZWVuID0gcGcudHdlZW5NYW5hZ2VyLmFkZCh0aGlzLm5vZGUsIHsgb3BhY2l0eTogMCB9LCB0aW1lKTtcbiAgICAgICAgaGlkZVR3ZWVuLmFkZENvbXBsZXRlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhpZGVUd2VlbjtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25Td2l0Y2hBY3RpdmVDYWxsYmFjazogbnVsbCxcbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/CrossPromoCross.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a598UGpmVK/65RKI7Kymy2', 'CrossPromoCross');
// scripts/Game/Ui/CrossPromoCross.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _inputCatcher: {
      "default": null,
      serializable: false
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    var _this = this;

    if (window.AD_TYPE !== 'cross-promo') {
      this.node.active = false;
    } else {
      if (!window.IS_END_CARD) {
        this._hadleSubscription(true);

        this._inputCatcher = this.getComponent('InputCatcher');
        this._inputCatcher.enabled = false;
        this.node.opacity = 0;
        this.scheduleOnce(function () {
          _this._enableCross();
        }, 4);
      }
    }
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _hadleSubscription: function _hadleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].FIRST_TAP, this.onFirstTap, this);
  },
  _enableCross: function _enableCross() {
    if (this.node.opacity === 0 && !this._inputCatcher.enabled) {
      this.node.opacity = 255;
      this._inputCatcher.enabled = true;
    }
  },
  //#endregion
  //#region event handlers
  onFirstTap: function onFirstTap() {
    this._enableCross();
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvQ3Jvc3NQcm9tb0Nyb3NzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiX2lucHV0Q2F0Y2hlciIsInNlcmlhbGl6YWJsZSIsIm9uRW5hYmxlIiwid2luZG93IiwiQURfVFlQRSIsIm5vZGUiLCJhY3RpdmUiLCJJU19FTkRfQ0FSRCIsIl9oYWRsZVN1YnNjcmlwdGlvbiIsImdldENvbXBvbmVudCIsImVuYWJsZWQiLCJvcGFjaXR5Iiwic2NoZWR1bGVPbmNlIiwiX2VuYWJsZUNyb3NzIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsIkdhbWVFdmVudCIsIkZJUlNUX1RBUCIsIm9uRmlyc3RUYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0E7SUFFQTtJQUNBO0lBRUE7SUFDQUMsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQURFO01BRVhDLFlBQVksRUFBRTtJQUZILENBUlAsQ0FZUjs7RUFaUSxDQUhQO0VBa0JMO0VBQ0FDLFFBbkJLLHNCQW1CTTtJQUFBOztJQUNQLElBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxLQUFtQixhQUF2QixFQUFzQztNQUNsQyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7SUFDSCxDQUZELE1BRU87TUFDSCxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksV0FBWixFQUF5QjtRQUNyQixLQUFLQyxrQkFBTCxDQUF3QixJQUF4Qjs7UUFFQSxLQUFLUixhQUFMLEdBQXFCLEtBQUtTLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBckI7UUFDQSxLQUFLVCxhQUFMLENBQW1CVSxPQUFuQixHQUE2QixLQUE3QjtRQUVBLEtBQUtMLElBQUwsQ0FBVU0sT0FBVixHQUFvQixDQUFwQjtRQUVBLEtBQUtDLFlBQUwsQ0FBa0IsWUFBTTtVQUNwQixLQUFJLENBQUNDLFlBQUw7UUFDSCxDQUZELEVBRUcsQ0FGSDtNQUdIO0lBQ0o7RUFDSixDQXBDSTtFQXFDTDtFQUVBO0VBQ0E7RUFFQTtFQUNBTCxrQkEzQ0ssOEJBMkNjTSxJQTNDZCxFQTJDb0I7SUFDckIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFsQixFQUFFLENBQUNvQixXQUFILENBQWVELElBQWYsRUFBcUJFLHFCQUFBLENBQVVDLFNBQS9CLEVBQTBDLEtBQUtDLFVBQS9DLEVBQTJELElBQTNEO0VBQ0gsQ0EvQ0k7RUFpRExOLFlBakRLLDBCQWlEVTtJQUNYLElBQUksS0FBS1IsSUFBTCxDQUFVTSxPQUFWLEtBQXNCLENBQXRCLElBQTJCLENBQUMsS0FBS1gsYUFBTCxDQUFtQlUsT0FBbkQsRUFBNEQ7TUFDeEQsS0FBS0wsSUFBTCxDQUFVTSxPQUFWLEdBQW9CLEdBQXBCO01BQ0EsS0FBS1gsYUFBTCxDQUFtQlUsT0FBbkIsR0FBNkIsSUFBN0I7SUFDSDtFQUNKLENBdERJO0VBdURMO0VBRUE7RUFDQVMsVUExREssd0JBMERRO0lBQ1QsS0FBS04sWUFBTDtFQUNILENBNURJLENBNkRMOztBQTdESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBfaW5wdXRDYXRjaGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgfSxcblxuICAgIC8vI3JlZ2lvbiBsaWZlLWN5Y2xlIGNhbGxiYWNrc1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAod2luZG93LkFEX1RZUEUgIT09ICdjcm9zcy1wcm9tbycpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghd2luZG93LklTX0VORF9DQVJEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFkbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dENhdGNoZXIgPSB0aGlzLmdldENvbXBvbmVudCgnSW5wdXRDYXRjaGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXRDYXRjaGVyLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5hYmxlQ3Jvc3MoKTtcbiAgICAgICAgICAgICAgICB9LCA0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFkbGVTdWJzY3JpcHRpb24oaXNPbikge1xuICAgICAgICBjb25zdCBmdW5jID0gaXNPbiA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuRklSU1RfVEFQLCB0aGlzLm9uRmlyc3RUYXAsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfZW5hYmxlQ3Jvc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUub3BhY2l0eSA9PT0gMCAmJiAhdGhpcy5faW5wdXRDYXRjaGVyLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5faW5wdXRDYXRjaGVyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uRmlyc3RUYXAoKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZUNyb3NzKCk7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/UiScreenType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eba07OJEJNGMrm5c06KLAaJ', 'UiScreenType');
// scripts/Game/Ui/UiScreenType.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = cc.Enum({
  None: 0,
  Ingame: 1,
  Result: 2,
  Tutorial: 3
});

exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvVWlTY3JlZW5UeXBlLmpzIl0sIm5hbWVzIjpbImNjIiwiRW51bSIsIk5vbmUiLCJJbmdhbWUiLCJSZXN1bHQiLCJUdXRvcmlhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZUEsRUFBRSxDQUFDQyxJQUFILENBQVE7RUFDbkJDLElBQUksRUFBRSxDQURhO0VBRW5CQyxNQUFNLEVBQUUsQ0FGVztFQUduQkMsTUFBTSxFQUFFLENBSFc7RUFJbkJDLFFBQVEsRUFBRTtBQUpTLENBQVIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNjLkVudW0oe1xuICAgIE5vbmU6IDAsXG4gICAgSW5nYW1lOiAxLFxuICAgIFJlc3VsdDogMixcbiAgICBUdXRvcmlhbDogMyxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/CatcherOff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d6f4WajfhFHYPGOnHqbeme', 'CatcherOff');
// scripts/Game/Ui/CatcherOff.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    inputCatcher: {
      "default": null,
      type: cc.Node
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this.inputCatcher.actived = false;
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].BLOCK_CHOSEN, this.onBlockChosen, this);
  },
  //#region event handlers
  onBlockChosen: function onBlockChosen() {
    this.inputCatcher.actived = true;
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvQ2F0Y2hlck9mZi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlucHV0Q2F0Y2hlciIsInR5cGUiLCJOb2RlIiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwiYWN0aXZlZCIsIm9uRGlzYWJsZSIsImlzT24iLCJmdW5jIiwic3lzdGVtRXZlbnQiLCJHYW1lRXZlbnQiLCJCTE9DS19DSE9TRU4iLCJvbkJsb2NrQ2hvc2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBREE7QUFFQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxZQUFZLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUZOLENBR1I7SUFFQTtJQUNBO0lBRUE7SUFDQTs7RUFUUSxDQUhQO0VBZUw7RUFDQUMsUUFoQkssc0JBZ0JNO0lBQ1AsS0FBS0MsbUJBQUwsQ0FBeUIsSUFBekI7O0lBQ0EsS0FBS0osWUFBTCxDQUFrQkssT0FBbEIsR0FBNEIsS0FBNUI7RUFDSCxDQW5CSTtFQXFCTEMsU0FyQkssdUJBcUJPO0lBQ1IsS0FBS0YsbUJBQUwsQ0FBeUIsS0FBekI7RUFDSCxDQXZCSTtFQXlCTDtFQUVBO0VBQ0E7RUFFQTtFQUNBQSxtQkEvQkssK0JBK0JlRyxJQS9CZixFQStCcUI7SUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFYLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlRCxJQUFmLEVBQXFCRSxxQkFBQSxDQUFVQyxZQUEvQixFQUE2QyxLQUFLQyxhQUFsRCxFQUFpRSxJQUFqRTtFQUNILENBbkNJO0VBb0NMO0VBQ0FBLGFBckNLLDJCQXFDVztJQUNaLEtBQUtaLFlBQUwsQ0FBa0JLLE9BQWxCLEdBQTRCLElBQTVCO0VBQ0gsQ0F2Q0ksQ0F3Q0w7O0FBeENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBjbGFzc2VzLWhlbHBlcnNcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50Jztcbi8vI2VuZHJlZ2lvblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgaW5wdXRDYXRjaGVyOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHByaXZhdGUgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKHRydWUpO1xuICAgICAgICB0aGlzLmlucHV0Q2F0Y2hlci5hY3RpdmVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHVibGljIG1ldGhvZHNcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkJMT0NLX0NIT1NFTiwgdGhpcy5vbkJsb2NrQ2hvc2VuLCB0aGlzKTtcbiAgICB9LFxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uQmxvY2tDaG9zZW4oKSB7XG4gICAgICAgIHRoaXMuaW5wdXRDYXRjaGVyLmFjdGl2ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/UiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '070a3zwyHlNto8VTnHNBhkX', 'UiManager');
// scripts/Game/Ui/UiManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

var _IScreen = _interopRequireDefault(require("IScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    PREVIEW: {
      "default": false,
      editorOnly: true,
      tooltip: 'показать все типы экранов и префабы к ним'
    },
    screenType: {
      "default": _UiScreenType["default"].None,
      type: _UiScreenType["default"],
      notify: function notify(old) {
        if (this.screenType !== _UiScreenType["default"].None) {
          if (this._convertScreenType.indexOf(this.screenType) === -1) {
            this._convertScreenType.push(this.screenType);

            this._prefabs.push(null);
          }

          this.prefab = this._prefabs[this._convertScreenType.indexOf(this.screenType)];

          var oldIndex = this._convertScreenType.indexOf(old);

          if (oldIndex > -1) {
            var oldPrefab = this._prefabs[oldIndex];

            if (oldPrefab === null) {
              this._prefabs.splice(oldIndex, 1);

              this._convertScreenType.splice(oldIndex, 1);
            }
          }
        }
      },
      serializable: false,
      tooltip: 'тип экрана для привязки префаба'
    },
    prefab: {
      "default": null,
      type: cc.Prefab,
      notify: function notify() {
        if (this.screenType !== _UiScreenType["default"].None && (this.prefab instanceof cc.Prefab || this.prefab === null)) {
          this._prefabs[this._convertScreenType.indexOf(this.screenType)] = this.prefab;
        }
      },
      visible: function visible() {
        return this.screenType !== _UiScreenType["default"].None;
      },
      serializable: false,
      tooltip: 'префаб для экрана'
    },
    convertScreenType: {
      get: function get() {
        return this._convertScreenType;
      },
      type: [_UiScreenType["default"]],
      visible: function visible() {
        return this.PREVIEW;
      }
    },
    prefabs: {
      get: function get() {
        return this._prefabs;
      },
      type: [cc.Prefab],
      visible: function visible() {
        return this.PREVIEW;
      }
    },
    //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    _screens: {
      "default": null,
      serializable: false
    },
    _prefabs: {
      "default": [],
      type: [cc.Prefab]
    },
    _convertScreenType: {
      "default": [],
      type: [_UiScreenType["default"]]
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._screens = {};

    for (var i = 0; i < this._convertScreenType.length; i++) {
      var type = this._convertScreenType[i];
      this._screens[type] = null;
    }

    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].TOGGLE_SCREEN, this.onToggleScreen, this);
  },
  //#endregion
  //#region event handlers
  onToggleScreen: function onToggleScreen(screenType, isOn) {
    var screenIndex = this._convertScreenType.indexOf(screenType);

    var screen;

    if (screenIndex < 0 || !this._prefabs[screenIndex]) {
      return;
    }

    if (!this._screens[screenType]) {
      var prefab = this._prefabs[screenIndex];
      screen = cc.instantiate(prefab);
      screen.parent = this.node;
      this._screens[screenType] = screen;
    } else {
      screen = this._screens[screenType];
    }

    if (isOn && !screen.getComponent(_IScreen["default"]).activated) {
      screen.getComponent(_IScreen["default"]).show();
    } else if (!isOn && screen.getComponent(_IScreen["default"]).activated) {
      screen.getComponent(_IScreen["default"]).hide();
    }
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvVWlNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUFJFVklFVyIsImVkaXRvck9ubHkiLCJ0b29sdGlwIiwic2NyZWVuVHlwZSIsIlVpU2NyZWVuVHlwZSIsIk5vbmUiLCJ0eXBlIiwibm90aWZ5Iiwib2xkIiwiX2NvbnZlcnRTY3JlZW5UeXBlIiwiaW5kZXhPZiIsInB1c2giLCJfcHJlZmFicyIsInByZWZhYiIsIm9sZEluZGV4Iiwib2xkUHJlZmFiIiwic3BsaWNlIiwic2VyaWFsaXphYmxlIiwiUHJlZmFiIiwidmlzaWJsZSIsImNvbnZlcnRTY3JlZW5UeXBlIiwiZ2V0IiwicHJlZmFicyIsIl9zY3JlZW5zIiwib25FbmFibGUiLCJpIiwibGVuZ3RoIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsIm9uRGlzYWJsZSIsImlzT24iLCJmdW5jIiwic3lzdGVtRXZlbnQiLCJHYW1lRXZlbnQiLCJUT0dHTEVfU0NSRUVOIiwib25Ub2dnbGVTY3JlZW4iLCJzY3JlZW5JbmRleCIsInNjcmVlbiIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsImdldENvbXBvbmVudCIsIklTY3JlZW4iLCJhY3RpdmF0ZWQiLCJzaG93IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxLQURKO01BRUxDLFVBQVUsRUFBRSxJQUZQO01BR0xDLE9BQU8sRUFBRTtJQUhKLENBRkQ7SUFRUkMsVUFBVSxFQUFFO01BQ1IsV0FBU0Msd0JBQUEsQ0FBYUMsSUFEZDtNQUVSQyxJQUFJLEVBQUVGLHdCQUZFO01BR1JHLE1BSFEsa0JB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QjtNQUVBLEtBQUtoQixRQUFMLENBQWNwQixVQUFkLElBQTRCaUMsTUFBNUI7SUFDSCxDQU5ELE1BTU87TUFDSEEsTUFBTSxHQUFHLEtBQUtiLFFBQUwsQ0FBY3BCLFVBQWQsQ0FBVDtJQUNIOztJQUVELElBQUkwQixJQUFJLElBQUksQ0FBQ08sTUFBTSxDQUFDSSxZQUFQLENBQW9CQyxtQkFBcEIsRUFBNkJDLFNBQTFDLEVBQXFEO01BQ2pETixNQUFNLENBQUNJLFlBQVAsQ0FBb0JDLG1CQUFwQixFQUE2QkUsSUFBN0I7SUFDSCxDQUZELE1BRU8sSUFBSSxDQUFDZCxJQUFELElBQVNPLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQkMsbUJBQXBCLEVBQTZCQyxTQUExQyxFQUFxRDtNQUN4RE4sTUFBTSxDQUFDSSxZQUFQLENBQW9CQyxtQkFBcEIsRUFBNkJHLElBQTdCO0lBQ0g7RUFDSixDQXhJSSxDQXlJTDs7QUF6SUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuaW1wb3J0IElTY3JlZW4gZnJvbSAnSVNjcmVlbic7XG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIFBSRVZJRVc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgZWRpdG9yT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfQv9C+0LrQsNC30LDRgtGMINCy0YHQtSDRgtC40L/RiyDRjdC60YDQsNC90L7QsiDQuCDQv9GA0LXRhNCw0LHRiyDQuiDQvdC40LwnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNjcmVlblR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFVpU2NyZWVuVHlwZS5Ob25lLFxuICAgICAgICAgICAgdHlwZTogVWlTY3JlZW5UeXBlLFxuICAgICAgICAgICAgbm90aWZ5KG9sZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcmVlblR5cGUgIT09IFVpU2NyZWVuVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb252ZXJ0U2NyZWVuVHlwZS5pbmRleE9mKHRoaXMuc2NyZWVuVHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb252ZXJ0U2NyZWVuVHlwZS5wdXNoKHRoaXMuc2NyZWVuVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZhYiA9IHRoaXMuX3ByZWZhYnNbdGhpcy5fY29udmVydFNjcmVlblR5cGUuaW5kZXhPZih0aGlzLnNjcmVlblR5cGUpXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlLmluZGV4T2Yob2xkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkUHJlZmFiID0gdGhpcy5fcHJlZmFic1tvbGRJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQcmVmYWIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzLnNwbGljZShvbGRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udmVydFNjcmVlblR5cGUuc3BsaWNlKG9sZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9GC0LjQvyDRjdC60YDQsNC90LAg0LTQu9GPINC/0YDQuNCy0Y/Qt9C60Lgg0L/RgNC10YTQsNCx0LAnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIG5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JlZW5UeXBlICE9PSBVaVNjcmVlblR5cGUuTm9uZSAmJiAodGhpcy5wcmVmYWIgaW5zdGFuY2VvZiBjYy5QcmVmYWIgfHwgdGhpcy5wcmVmYWIgPT09IG51bGwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNbdGhpcy5fY29udmVydFNjcmVlblR5cGUuaW5kZXhPZih0aGlzLnNjcmVlblR5cGUpXSA9IHRoaXMucHJlZmFiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcmVlblR5cGUgIT09IFVpU2NyZWVuVHlwZS5Ob25lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiAn0L/RgNC10YTQsNCxINC00LvRjyDRjdC60YDQsNC90LAnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnZlcnRTY3JlZW5UeXBlOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IFtVaVNjcmVlblR5cGVdLFxuICAgICAgICAgICAgdmlzaWJsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QUkVWSUVXO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBwcmVmYWJzOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZhYnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogW2NjLlByZWZhYl0sXG4gICAgICAgICAgICB2aXNpYmxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBSRVZJRVc7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHVibGljIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cblxuICAgICAgICAvLyNyZWdpb24gcHJpdmF0ZSBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgX3NjcmVlbnM6IHsgZGVmYXVsdDogbnVsbCwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgICAgICBfcHJlZmFiczogeyBkZWZhdWx0OiBbXSwgdHlwZTogW2NjLlByZWZhYl0gfSxcbiAgICAgICAgX2NvbnZlcnRTY3JlZW5UeXBlOiB7IGRlZmF1bHQ6IFtdLCB0eXBlOiBbVWlTY3JlZW5UeXBlXSB9LFxuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX3NjcmVlbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb252ZXJ0U2NyZWVuVHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlW2ldO1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuc1t0eXBlXSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24odHJ1ZSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5UT0dHTEVfU0NSRUVOLCB0aGlzLm9uVG9nZ2xlU2NyZWVuLCB0aGlzKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIGV2ZW50IGhhbmRsZXJzXG4gICAgb25Ub2dnbGVTY3JlZW4oc2NyZWVuVHlwZSwgaXNPbikge1xuICAgICAgICBjb25zdCBzY3JlZW5JbmRleCA9IHRoaXMuX2NvbnZlcnRTY3JlZW5UeXBlLmluZGV4T2Yoc2NyZWVuVHlwZSk7XG4gICAgICAgIGxldCBzY3JlZW47XG5cbiAgICAgICAgaWYgKHNjcmVlbkluZGV4IDwgMCB8fCAhdGhpcy5fcHJlZmFic1tzY3JlZW5JbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fc2NyZWVuc1tzY3JlZW5UeXBlXSkge1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiID0gdGhpcy5fcHJlZmFic1tzY3JlZW5JbmRleF07XG4gICAgICAgICAgICBzY3JlZW4gPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgc2NyZWVuLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuc1tzY3JlZW5UeXBlXSA9IHNjcmVlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcmVlbiA9IHRoaXMuX3NjcmVlbnNbc2NyZWVuVHlwZV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPbiAmJiAhc2NyZWVuLmdldENvbXBvbmVudChJU2NyZWVuKS5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHNjcmVlbi5nZXRDb21wb25lbnQoSVNjcmVlbikuc2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc09uICYmIHNjcmVlbi5nZXRDb21wb25lbnQoSVNjcmVlbikuYWN0aXZhdGVkKSB7XG4gICAgICAgICAgICBzY3JlZW4uZ2V0Q29tcG9uZW50KElTY3JlZW4pLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Ui/Screen/ScreenManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4303kOybFGuZ4EIneNDh0N', 'ScreenManager');
// scripts/Game/Ui/Screen/ScreenManager.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _UiScreenType = _interopRequireDefault(require("UiScreenType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
var ScreenShowSettings = cc.Class({
  name: 'ScreenStartSettings',
  properties: {
    type: {
      "default": _UiScreenType["default"].None,
      type: _UiScreenType["default"],
      tooltip: 'тип экрана для создания на старте'
    },
    zIndex: {
      "default": 0,
      tooltip: 'порядковый номер экрана для отрисовки. чем ниже номер, тем глубже он будет отрисован'
    },
    activateOnStart: {
      "default": false,
      tooltip: 'активировать данный экран при старте?'
    },
    disableOnShow: {
      "default": [],
      type: [_UiScreenType["default"]],
      tooltip: 'какие экраны скрыть при активации данного экрана (не используется при активации экрана на старте)'
    }
  }
}); //#endregion

cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    screenSettings: {
      "default": [],
      type: [ScreenShowSettings],
      notify: function notify(oldValue) {
        var array = [];
        this.activateOnStart.forEach(function (el) {
          if (el.type === _UiScreenType["default"].None || !array.find(function (set) {
            return set.type === el.type;
          })) {
            array.push(el);
          }
        });

        if (oldValue.length !== array.length) {
          this.activateOnStart = array;
        }
      },
      tooltip: 'определяет какие экраны должны быть созданы и активированы на старте'
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    this.screenSettings.sort(function (a, b) {
      return a.zIndex - b.zIndex;
    }).forEach(function (el) {
      cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, el.type, el.activateOnStart);
    });
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].SHOW_SCREEN, this.onShowScreen, this);
  },
  //#endregion
  //#region event handlers
  onShowScreen: function onShowScreen(screenType, isOff) {
    if (isOff === void 0) {
      isOff = true;
    }

    var settings = this.screenSettings.find(function (set) {
      return set.type === screenType;
    });

    if (!isOff) {
      cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, screenType, false);
      return;
    }

    if (settings) {
      settings.disableOnShow.forEach(function (disableScreenType) {
        cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, disableScreenType, false);
      });
      cc.systemEvent.emit(_GameEvent["default"].TOGGLE_SCREEN, screenType, true);
    }
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvVWkvU2NyZWVuL1NjcmVlbk1hbmFnZXIuanMiXSwibmFtZXMiOlsiU2NyZWVuU2hvd1NldHRpbmdzIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIlVpU2NyZWVuVHlwZSIsIk5vbmUiLCJ0b29sdGlwIiwiekluZGV4IiwiYWN0aXZhdGVPblN0YXJ0IiwiZGlzYWJsZU9uU2hvdyIsIkNvbXBvbmVudCIsInNjcmVlblNldHRpbmdzIiwibm90aWZ5Iiwib2xkVmFsdWUiLCJhcnJheSIsImZvckVhY2giLCJlbCIsImZpbmQiLCJzZXQiLCJwdXNoIiwibGVuZ3RoIiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwic29ydCIsImEiLCJiIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiVE9HR0xFX1NDUkVFTiIsIm9uRGlzYWJsZSIsImlzT24iLCJmdW5jIiwiU0hPV19TQ1JFRU4iLCJvblNob3dTY3JlZW4iLCJzY3JlZW5UeXBlIiwiaXNPZmYiLCJzZXR0aW5ncyIsImRpc2FibGVTY3JlZW5UeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxrQkFBa0IsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDaENDLElBQUksRUFBRSxxQkFEMEI7RUFHaENDLFVBQVUsRUFBRTtJQUNSQyxJQUFJLEVBQUU7TUFDRixXQUFTQyx3QkFBQSxDQUFhQyxJQURwQjtNQUVGRixJQUFJLEVBQUVDLHdCQUZKO01BR0ZFLE9BQU8sRUFBRTtJQUhQLENBREU7SUFNUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxDQURMO01BRUpELE9BQU8sRUFBRTtJQUZMLENBTkE7SUFVUkUsZUFBZSxFQUFFO01BQ2IsV0FBUyxLQURJO01BRWJGLE9BQU8sRUFBRTtJQUZJLENBVlQ7SUFjUkcsYUFBYSxFQUFFO01BQ1gsV0FBUyxFQURFO01B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NkNTLGlCQUE3QyxFQUFnRSxLQUFoRTtNQUNILENBRkQ7TUFHQXZDLEVBQUUsQ0FBQzJCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMscUJBQUEsQ0FBVUMsYUFBOUIsRUFBNkNNLFVBQTdDLEVBQXlELElBQXpEO0lBQ0g7RUFDSixDQXZFSSxDQXdFTDs7QUF4RUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IFVpU2NyZWVuVHlwZSBmcm9tICdVaVNjcmVlblR5cGUnO1xuXG4vLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG5jb25zdCBTY3JlZW5TaG93U2V0dGluZ3MgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ1NjcmVlblN0YXJ0U2V0dGluZ3MnLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBVaVNjcmVlblR5cGUuTm9uZSxcbiAgICAgICAgICAgIHR5cGU6IFVpU2NyZWVuVHlwZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfRgtC40L8g0Y3QutGA0LDQvdCwINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC90LAg0YHRgtCw0YDRgtC1JyxcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9C/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YAg0Y3QutGA0LDQvdCwINC00LvRjyDQvtGC0YDQuNGB0L7QstC60LguINGH0LXQvCDQvdC40LbQtSDQvdC+0LzQtdGALCDRgtC10Lwg0LPQu9GD0LHQttC1INC+0L0g0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstCw0L0nLFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmF0ZU9uU3RhcnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9Cw0LrRgtC40LLQuNGA0L7QstCw0YLRjCDQtNCw0L3QvdGL0Lkg0Y3QutGA0LDQvSDQv9GA0Lgg0YHRgtCw0YDRgtC1PycsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVPblNob3c6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW1VpU2NyZWVuVHlwZV0sXG4gICAgICAgICAgICB0b29sdGlwOiAn0LrQsNC60LjQtSDRjdC60YDQsNC90Ysg0YHQutGA0YvRgtGMINC/0YDQuCDQsNC60YLQuNCy0LDRhtC40Lgg0LTQsNC90L3QvtCz0L4g0Y3QutGA0LDQvdCwICjQvdC1INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQv9GA0Lgg0LDQutGC0LjQstCw0YbQuNC4INGN0LrRgNCw0L3QsCDQvdCwINGB0YLQsNGA0YLQtSknLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbi8vI2VuZHJlZ2lvblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcblxuICAgICAgICBzY3JlZW5TZXR0aW5nczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbU2NyZWVuU2hvd1NldHRpbmdzXSxcbiAgICAgICAgICAgIG5vdGlmeShvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZU9uU3RhcnQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT09IFVpU2NyZWVuVHlwZS5Ob25lIHx8ICFhcnJheS5maW5kKChzZXQpID0+IHNldC50eXBlID09PSBlbC50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZS5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlT25TdGFydCA9IGFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiAn0L7Qv9GA0LXQtNC10LvRj9C10YIg0LrQsNC60LjQtSDRjdC60YDQsNC90Ysg0LTQvtC70LbQvdGLINCx0YvRgtGMINGB0L7Qt9C00LDQvdGLINC4INCw0LrRgtC40LLQuNGA0L7QstCw0L3RiyDQvdCwINGB0YLQsNGA0YLQtScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICAgICAgdGhpcy5zY3JlZW5TZXR0aW5nc1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuekluZGV4IC0gYi56SW5kZXgpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5UT0dHTEVfU0NSRUVOLCBlbC50eXBlLCBlbC5hY3RpdmF0ZU9uU3RhcnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TSE9XX1NDUkVFTiwgdGhpcy5vblNob3dTY3JlZW4sIHRoaXMpO1xuICAgIH0sXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlcnNcbiAgICBvblNob3dTY3JlZW4oc2NyZWVuVHlwZSwgaXNPZmYgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5zY3JlZW5TZXR0aW5ncy5maW5kKChzZXQpID0+IHNldC50eXBlID09PSBzY3JlZW5UeXBlKTtcbiAgICAgICAgaWYgKCFpc09mZikge1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuVE9HR0xFX1NDUkVFTiwgc2NyZWVuVHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgICAgc2V0dGluZ3MuZGlzYWJsZU9uU2hvdy5mb3JFYWNoKChkaXNhYmxlU2NyZWVuVHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlRPR0dMRV9TQ1JFRU4sIGRpc2FibGVTY3JlZW5UeXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlRPR0dMRV9TQ1JFRU4sIHNjcmVlblR5cGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/FeatureManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eaf0nnGjtLarvScrszCDde', 'FeatureManager');
// scripts/Game/Logic/FeatureManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    features: {
      "default": [],
      type: cc.Node
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this.node.children.forEach(function (element) {
      if (element) element.active = false;
    });
    this.features.forEach(function (element) {
      if (element) element.active = true;
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmZWF0dXJlcyIsInR5cGUiLCJOb2RlIiwib25FbmFibGUiLCJub2RlIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiZWxlbWVudCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFHTEMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsUUFBUSxFQUFFO01BQUMsV0FBUyxFQUFWO01BQWNDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUF2QixDQUZGLENBR1I7O0VBSFEsQ0FIUDtFQVNMO0VBQ0FDLFFBVkssc0JBVU07SUFDUCxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUFDLE9BQU8sRUFBSTtNQUNsQyxJQUFHQSxPQUFILEVBQ0lBLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixLQUFqQjtJQUNQLENBSEQ7SUFLQSxLQUFLUixRQUFMLENBQWNNLE9BQWQsQ0FBc0IsVUFBQUMsT0FBTyxFQUFJO01BQzdCLElBQUdBLE9BQUgsRUFDSUEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLElBQWpCO0lBQ1AsQ0FIRDtFQUlIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyNyZWdpb24gZWRpdG9ycyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgZmVhdHVyZXM6IHtkZWZhdWx0OiBbXSwgdHlwZTogY2MuTm9kZX0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG4gXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudCkgXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZlYXR1cmVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50KSBcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbiBcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/World/Field.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a42boq6wlMgoj03qxQZKBF', 'Field');
// scripts/Game/World/Field.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    block: {
      "default": null,
      type: cc.Prefab
    },
    mask: {
      "default": null,
      type: cc.Node
    },
    inputCatcher: {
      "default": null,
      type: cc.Node
    } //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);

    cc.systemEvent.emit(_GameEvent["default"].FIELD_ON, this.mask, this.block);
    this.inputCatcher.active = false;
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].STOP_INPUT, this.onStopInput, this);
    cc.systemEvent[func](_GameEvent["default"].BLOCK_CAN_BE_CHOSEN, this.onBlockCanBeChosen, this);
  },
  //#endregion
  //#region event handlers
  onStopInput: function onStopInput() {
    this.inputCatcher.active = true;
  },
  onBlockCanBeChosen: function onBlockCanBeChosen() {
    this.inputCatcher.active = false;
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvV29ybGQvRmllbGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJtYXNrIiwiTm9kZSIsImlucHV0Q2F0Y2hlciIsIm9uRW5hYmxlIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkZJRUxEX09OIiwiYWN0aXZlIiwib25EaXNhYmxlIiwiaXNPbiIsImZ1bmMiLCJTVE9QX0lOUFVUIiwib25TdG9wSW5wdXQiLCJCTE9DS19DQU5fQkVfQ0hPU0VOIiwib25CbG9ja0NhbkJlQ2hvc2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBREE7QUFFQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxLQUFLLEVBQUU7TUFBRSxXQUFTLElBQVg7TUFBaUJDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUExQixDQUZDO0lBR1JDLElBQUksRUFBRTtNQUFFLFdBQVMsSUFBWDtNQUFpQkYsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0lBQTFCLENBSEU7SUFJUkMsWUFBWSxFQUFFO01BQUUsV0FBUyxJQUFYO01BQWlCSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFBMUIsQ0FKTixDQUtSO0lBRUE7SUFDQTtJQUVBO0lBQ0E7O0VBWFEsQ0FIUDtFQWlCTDtFQUNBRSxRQWxCSyxzQkFrQk07SUFDUCxLQUFLQyxtQkFBTCxDQUF5QixJQUF6Qjs7SUFDQVgsRUFBRSxDQUFDWSxXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLFFBQTlCLEVBQXdDLEtBQUtSLElBQTdDLEVBQW1ELEtBQUtILEtBQXhEO0lBQ0EsS0FBS0ssWUFBTCxDQUFrQk8sTUFBbEIsR0FBMkIsS0FBM0I7RUFDSCxDQXRCSTtFQXdCTEMsU0F4QkssdUJBd0JPO0lBQ1IsS0FBS04sbUJBQUwsQ0FBeUIsS0FBekI7RUFDSCxDQTFCSTtFQTJCTDtFQUVBO0VBQ0E7RUFFQTtFQUNBQSxtQkFqQ0ssK0JBaUNlTyxJQWpDZixFQWlDcUI7SUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFsQixFQUFFLENBQUNZLFdBQUgsQ0FBZU8sSUFBZixFQUFxQkwscUJBQUEsQ0FBVU0sVUFBL0IsRUFBMkMsS0FBS0MsV0FBaEQsRUFBNkQsSUFBN0Q7SUFDQXJCLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlTyxJQUFmLEVBQXFCTCxxQkFBQSxDQUFVUSxtQkFBL0IsRUFBb0QsS0FBS0Msa0JBQXpELEVBQTZFLElBQTdFO0VBQ0gsQ0F0Q0k7RUF3Q0w7RUFFQTtFQUNBRixXQTNDSyx5QkEyQ1M7SUFDVixLQUFLWixZQUFMLENBQWtCTyxNQUFsQixHQUEyQixJQUEzQjtFQUNILENBN0NJO0VBK0NMTyxrQkEvQ0ssZ0NBK0NnQjtJQUNqQixLQUFLZCxZQUFMLENBQWtCTyxNQUFsQixHQUEyQixLQUEzQjtFQUNILENBakRJLENBa0RMOztBQWxESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyNyZWdpb24gY2xhc3Nlcy1oZWxwZXJzXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gJ0dhbWVFdmVudCc7XG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIGJsb2NrOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLlByZWZhYiB9LFxuICAgICAgICBtYXNrOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgaW5wdXRDYXRjaGVyOiB7IGRlZmF1bHQ6IG51bGwsIHR5cGU6IGNjLk5vZGUgfSxcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHB1YmxpYyBmaWVsZHMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgLy8jcmVnaW9uIHByaXZhdGUgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKHRydWUpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5GSUVMRF9PTiwgdGhpcy5tYXNrLCB0aGlzLmJsb2NrKTtcbiAgICAgICAgdGhpcy5pbnB1dENhdGNoZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHB1YmxpYyBtZXRob2RzXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gcHJpdmF0ZSBtZXRob2RzXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TVE9QX0lOUFVULCB0aGlzLm9uU3RvcElucHV0LCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnRbZnVuY10oR2FtZUV2ZW50LkJMT0NLX0NBTl9CRV9DSE9TRU4sIHRoaXMub25CbG9ja0NhbkJlQ2hvc2VuLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlcnNcbiAgICBvblN0b3BJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dENhdGNoZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25CbG9ja0NhbkJlQ2hvc2VuKCkge1xuICAgICAgICB0aGlzLmlucHV0Q2F0Y2hlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vI2VuZHJlZ2lvblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/IInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99e6evg0NRAXYQg5060Ft6D', 'IInputCommand');
// scripts/Plugins/Input/Commands/IInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var IInputCommand = /*#__PURE__*/function () {
  function IInputCommand(manager) {
    this.node = manager.node;
    this.manager = manager;
    this.touches = manager.touches;
    this._currentTouch = null;
  }

  var _proto = IInputCommand.prototype;

  _proto.onDown = function onDown(touch, place, target) {};

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  _proto.createTouchInfo = function createTouchInfo(touch, place) {
    var touchInfo = {
      id: touch._id,
      down: this.getTouchInfo(touch, place),
      last: this.getTouchInfo(touch, place),
      current: this.getTouchInfo(touch, place)
    };
    var id = this.touches.indexOf(null);

    if (id === -1) {
      id = this.touches.length;
      this.touches.push(null);
    }

    touch.__id = id;
    this.touches[id] = touchInfo;
    return touchInfo;
  };

  _proto.refreshTouchInfo = function refreshTouchInfo(touchInfo, touch, place) {
    touchInfo.last = touchInfo.current;
    touchInfo.current = this.getTouchInfo(touch, place);
  };

  _proto.findTouch = function findTouch(touch) {
    return this.touches[touch.__id];
  };

  _proto.destroyTouch = function destroyTouch(touch) {
    this.touches[touch.__id] = null;
  };

  _proto.getTouchInfo = function getTouchInfo(touch, place) {
    var location = touch.getLocation();
    var position = location.clone();
    var worldPosition = cc.Camera.main.getScreenToWorldPoint(touch.getLocation());
    position = this.node.convertToNodeSpaceAR(worldPosition);
    return {
      time: this.manager.time,
      location: location,
      position: position,
      worldPosition: worldPosition
    };
  };

  return IInputCommand;
}();

exports["default"] = IInputCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvSUlucHV0Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJJSW5wdXRDb21tYW5kIiwibWFuYWdlciIsIm5vZGUiLCJ0b3VjaGVzIiwiX2N1cnJlbnRUb3VjaCIsIm9uRG93biIsInRvdWNoIiwicGxhY2UiLCJ0YXJnZXQiLCJvbk1vdmUiLCJvblVwIiwiY3JlYXRlVG91Y2hJbmZvIiwidG91Y2hJbmZvIiwiaWQiLCJfaWQiLCJkb3duIiwiZ2V0VG91Y2hJbmZvIiwibGFzdCIsImN1cnJlbnQiLCJpbmRleE9mIiwibGVuZ3RoIiwicHVzaCIsIl9faWQiLCJyZWZyZXNoVG91Y2hJbmZvIiwiZmluZFRvdWNoIiwiZGVzdHJveVRvdWNoIiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInBvc2l0aW9uIiwiY2xvbmUiLCJ3b3JsZFBvc2l0aW9uIiwiY2MiLCJDYW1lcmEiLCJtYWluIiwiZ2V0U2NyZWVuVG9Xb3JsZFBvaW50IiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ0aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkE7RUFDakIsdUJBQVlDLE9BQVosRUFBcUI7SUFDakIsS0FBS0MsSUFBTCxHQUFZRCxPQUFPLENBQUNDLElBQXBCO0lBQ0EsS0FBS0QsT0FBTCxHQUFlQSxPQUFmO0lBQ0EsS0FBS0UsT0FBTCxHQUFlRixPQUFPLENBQUNFLE9BQXZCO0lBRUEsS0FBS0MsYUFBTCxHQUFxQixJQUFyQjtFQUNIOzs7O1NBRURDLFNBQUEsZ0JBQU9DLEtBQVAsRUFBY0MsS0FBZCxFQUFxQkMsTUFBckIsRUFBNkIsQ0FBRTs7U0FDL0JDLFNBQUEsZ0JBQU9ILEtBQVAsRUFBY0MsS0FBZCxFQUFxQkMsTUFBckIsRUFBNkIsQ0FBRTs7U0FDL0JFLE9BQUEsY0FBS0osS0FBTCxFQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFOztTQUU3Qkcsa0JBQUEseUJBQWdCTCxLQUFoQixFQUF1QkMsS0FBdkIsRUFBOEI7SUFDMUIsSUFBTUssU0FBUyxHQUFHO01BQ2RDLEVBQUUsRUFBRVAsS0FBSyxDQUFDUSxHQURJO01BRWRDLElBQUksRUFBRSxLQUFLQyxZQUFMLENBQWtCVixLQUFsQixFQUF5QkMsS0FBekIsQ0FGUTtNQUdkVSxJQUFJLEVBQUUsS0FBS0QsWUFBTCxDQUFrQlYsS0FBbEIsRUFBeUJDLEtBQXpCLENBSFE7TUFJZFcsT0FBTyxFQUFFLEtBQUtGLFlBQUwsQ0FBa0JWLEtBQWxCLEVBQXlCQyxLQUF6QjtJQUpLLENBQWxCO0lBT0EsSUFBSU0sRUFBRSxHQUFHLEtBQUtWLE9BQUwsQ0FBYWdCLE9BQWIsQ0FBcUIsSUFBckIsQ0FBVDs7SUFFQSxJQUFJTixFQUFFLEtBQUssQ0FBQyxDQUFaLEVBQWU7TUFDWEEsRUFBRSxHQUFHLEtBQUtWLE9BQUwsQ0FBYWlCLE1BQWxCO01BRUEsS0FBS2pCLE9BQUwsQ0FBYWtCLElBQWIsQ0FBa0IsSUFBbEI7SUFDSDs7SUFFRGYsS0FBSyxDQUFDZ0IsSUFBTixHQUFhVCxFQUFiO0lBRUEsS0FBS1YsT0FBTCxDQUFhVSxFQUFiLElBQW1CRCxTQUFuQjtJQUNBLE9BQU9BLFNBQVA7RUFDSDs7U0FFRFcsbUJBQUEsMEJBQWlCWCxTQUFqQixFQUE0Qk4sS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDO0lBQ3RDSyxTQUFTLENBQUNLLElBQVYsR0FBaUJMLFNBQVMsQ0FBQ00sT0FBM0I7SUFDQU4sU0FBUyxDQUFDTSxPQUFWLEdBQW9CLEtBQUtGLFlBQUwsQ0FBa0JWLEtBQWxCLEVBQXlCQyxLQUF6QixDQUFwQjtFQUNIOztTQUVEaUIsWUFBQSxtQkFBVWxCLEtBQVYsRUFBaUI7SUFDYixPQUFPLEtBQUtILE9BQUwsQ0FBYUcsS0FBSyxDQUFDZ0IsSUFBbkIsQ0FBUDtFQUNIOztTQUVERyxlQUFBLHNCQUFhbkIsS0FBYixFQUFvQjtJQUNoQixLQUFLSCxPQUFMLENBQWFHLEtBQUssQ0FBQ2dCLElBQW5CLElBQTJCLElBQTNCO0VBQ0g7O1NBRUROLGVBQUEsc0JBQWFWLEtBQWIsRUFBb0JDLEtBQXBCLEVBQTJCO0lBQ3ZCLElBQU1tQixRQUFRLEdBQUdwQixLQUFLLENBQUNxQixXQUFOLEVBQWpCO0lBQ0EsSUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLEtBQVQsRUFBZjtJQUNBLElBQUlDLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxNQUFILENBQVVDLElBQVYsQ0FBZUMscUJBQWYsQ0FBcUM1QixLQUFLLENBQUNxQixXQUFOLEVBQXJDLENBQXBCO0lBRUFDLFFBQVEsR0FBRyxLQUFLMUIsSUFBTCxDQUFVaUMsb0JBQVYsQ0FBK0JMLGFBQS9CLENBQVg7SUFFQSxPQUFPO01BQ0hNLElBQUksRUFBRSxLQUFLbkMsT0FBTCxDQUFhbUMsSUFEaEI7TUFFSFYsUUFBUSxFQUFSQSxRQUZHO01BR0hFLFFBQVEsRUFBUkEsUUFIRztNQUlIRSxhQUFhLEVBQWJBO0lBSkcsQ0FBUDtFQU1IIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBJSW5wdXRDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG1hbmFnZXIubm9kZTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy50b3VjaGVzID0gbWFuYWdlci50b3VjaGVzO1xuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUb3VjaCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuICAgIG9uTW92ZSh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbiAgICBvblVwKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgY3JlYXRlVG91Y2hJbmZvKHRvdWNoLCBwbGFjZSkge1xuICAgICAgICBjb25zdCB0b3VjaEluZm8gPSB7XG4gICAgICAgICAgICBpZDogdG91Y2guX2lkLFxuICAgICAgICAgICAgZG93bjogdGhpcy5nZXRUb3VjaEluZm8odG91Y2gsIHBsYWNlKSxcbiAgICAgICAgICAgIGxhc3Q6IHRoaXMuZ2V0VG91Y2hJbmZvKHRvdWNoLCBwbGFjZSksXG4gICAgICAgICAgICBjdXJyZW50OiB0aGlzLmdldFRvdWNoSW5mbyh0b3VjaCwgcGxhY2UpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpZCA9IHRoaXMudG91Y2hlcy5pbmRleE9mKG51bGwpO1xuXG4gICAgICAgIGlmIChpZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlkID0gdGhpcy50b3VjaGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgdGhpcy50b3VjaGVzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3VjaC5fX2lkID0gaWQ7XG5cbiAgICAgICAgdGhpcy50b3VjaGVzW2lkXSA9IHRvdWNoSW5mbztcbiAgICAgICAgcmV0dXJuIHRvdWNoSW5mbztcbiAgICB9XG5cbiAgICByZWZyZXNoVG91Y2hJbmZvKHRvdWNoSW5mbywgdG91Y2gsIHBsYWNlKSB7XG4gICAgICAgIHRvdWNoSW5mby5sYXN0ID0gdG91Y2hJbmZvLmN1cnJlbnQ7XG4gICAgICAgIHRvdWNoSW5mby5jdXJyZW50ID0gdGhpcy5nZXRUb3VjaEluZm8odG91Y2gsIHBsYWNlKTtcbiAgICB9XG5cbiAgICBmaW5kVG91Y2godG91Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG91Y2hlc1t0b3VjaC5fX2lkXTtcbiAgICB9XG5cbiAgICBkZXN0cm95VG91Y2godG91Y2gpIHtcbiAgICAgICAgdGhpcy50b3VjaGVzW3RvdWNoLl9faWRdID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRUb3VjaEluZm8odG91Y2gsIHBsYWNlKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gbG9jYXRpb24uY2xvbmUoKTtcbiAgICAgICAgbGV0IHdvcmxkUG9zaXRpb24gPSBjYy5DYW1lcmEubWFpbi5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQodG91Y2guZ2V0TG9jYXRpb24oKSk7XG5cbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpbWU6IHRoaXMubWFuYWdlci50aW1lLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIHdvcmxkUG9zaXRpb24sXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/TeleportShopInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f11bhI/OhDzbfywTiIIQts', 'TeleportShopInputCommand');
// scripts/Plugins/Input/Commands/TeleportShopInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

var _BlockColorType = _interopRequireDefault(require("BlockColorType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TeleportShopInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(TeleportShopInputCommand, _IInputCommand);

  function TeleportShopInputCommand(manager) {
    return _IInputCommand.call(this, manager) || this;
  }

  var _proto = TeleportShopInputCommand.prototype;

  _proto.destroyTouch = function destroyTouch(touch) {
    _IInputCommand.prototype.destroyTouch.call(this, touch);

    this._currentTouch = null;
  };

  _proto.onDown = function onDown(touch, place, target, c4, c5) {
    cc.systemEvent.emit(_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, _BlockColorType["default"].Teleport);
  };

  _proto.onMove = function onMove(touch, place, target) {};

  _proto.onUp = function onUp(touch, place, target) {};

  return TeleportShopInputCommand;
}(_IInputCommand2["default"]);

var _default = TeleportShopInputCommand;
exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvVGVsZXBvcnRTaG9wSW5wdXRDb21tYW5kLmpzIl0sIm5hbWVzIjpbIlRlbGVwb3J0U2hvcElucHV0Q29tbWFuZCIsIm1hbmFnZXIiLCJkZXN0cm95VG91Y2giLCJ0b3VjaCIsIl9jdXJyZW50VG91Y2giLCJvbkRvd24iLCJwbGFjZSIsInRhcmdldCIsImM0IiwiYzUiLCJjYyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkNIRUNLX1NDT1JFU19GT1JfQUJJTElUWSIsIkJsb2NrQ29sb3JUeXBlIiwiVGVsZXBvcnQiLCJvbk1vdmUiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSx3QkFBd0I7RUFBQTs7RUFDMUIsa0NBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7RUFIeUI7O0VBQUEsT0FLMUJDLFlBTDBCLEdBSzFCLHNCQUFhQyxLQUFiLEVBQW9CO0lBQ2hCLHlCQUFNRCxZQUFOLFlBQW1CQyxLQUFuQjs7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLElBQXJCO0VBQ0gsQ0FSeUI7O0VBQUEsT0FVMUJDLE1BVjBCLEdBVTFCLGdCQUFPRixLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7SUFDakNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyx3QkFBOUIsRUFBd0RDLDBCQUFBLENBQWVDLFFBQXZFO0VBQ0gsQ0FaeUI7O0VBQUEsT0FjMUJDLE1BZDBCLEdBYzFCLGdCQUFPZCxLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCLENBQUUsQ0FkTDs7RUFBQSxPQWdCMUJXLElBaEIwQixHQWdCMUIsY0FBS2YsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBaEJIOztFQUFBO0FBQUEsRUFBMENZLDBCQUExQyxDQUE5Qjs7ZUFtQmVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBCbG9ja0NvbG9yVHlwZSBmcm9tICdCbG9ja0NvbG9yVHlwZSc7XG5cbmNvbnN0IFRlbGVwb3J0U2hvcElucHV0Q29tbWFuZCA9IGNsYXNzIFRlbGVwb3J0U2hvcElucHV0Q29tbWFuZCBleHRlbmRzIElJbnB1dENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XG4gICAgfVxuXG4gICAgZGVzdHJveVRvdWNoKHRvdWNoKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3lUb3VjaCh0b3VjaCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUb3VjaCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0LCBjNCwgYzUpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hFQ0tfU0NPUkVTX0ZPUl9BQklMSVRZLCBCbG9ja0NvbG9yVHlwZS5UZWxlcG9ydCk7XG4gICAgfVxuXG4gICAgb25Nb3ZlKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlbGVwb3J0U2hvcElucHV0Q29tbWFuZDtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/TntShopInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvVG50U2hvcElucHV0Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJUbnRTaG9wSW5wdXRDb21tYW5kIiwibWFuYWdlciIsImRlc3Ryb3lUb3VjaCIsInRvdWNoIiwiX2N1cnJlbnRUb3VjaCIsIm9uRG93biIsInBsYWNlIiwidGFyZ2V0IiwiYzQiLCJjNSIsImNjIiwic3lzdGVtRXZlbnQiLCJlbWl0IiwiR2FtZUV2ZW50IiwiQ0hFQ0tfU0NPUkVTX0ZPUl9BQklMSVRZIiwiQm9tYlR5cGUiLCJUbnQiLCJvbk1vdmUiLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUI7RUFBQTs7RUFDckIsNkJBQVlDLE9BQVosRUFBcUI7SUFBQSxPQUNqQiwwQkFBTUEsT0FBTixDQURpQjtFQUVwQjs7RUFIb0I7O0VBQUEsT0FLckJDLFlBTHFCLEdBS3JCLHNCQUFhQyxLQUFiLEVBQW9CO0lBQ2hCLHlCQUFNRCxZQUFOLFlBQW1CQyxLQUFuQjs7SUFDQSxLQUFLQyxhQUFMLEdBQXFCLElBQXJCO0VBQ0gsQ0FSb0I7O0VBQUEsT0FVckJDLE1BVnFCLEdBVXJCLGdCQUFPRixLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7SUFDakNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyx3QkFBOUIsRUFBd0RDLG9CQUFBLENBQVNDLEdBQWpFO0VBQ0gsQ0Fab0I7O0VBQUEsT0FjckJDLE1BZHFCLEdBY3JCLGdCQUFPZCxLQUFQLEVBQWNHLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCLENBQUUsQ0FkVjs7RUFBQSxPQWdCckJXLElBaEJxQixHQWdCckIsY0FBS2YsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBaEJSOztFQUFBO0FBQUEsRUFBcUNZLDBCQUFyQyxDQUF6Qjs7ZUFtQmVuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcbmltcG9ydCBCb21iVHlwZSBmcm9tICdCb21iVHlwZSc7XG5cbmNvbnN0IFRudFNob3BJbnB1dENvbW1hbmQgPSBjbGFzcyBUbnRTaG9wSW5wdXRDb21tYW5kIGV4dGVuZHMgSUlucHV0Q29tbWFuZCB7XG4gICAgY29uc3RydWN0b3IobWFuYWdlcikge1xuICAgICAgICBzdXBlcihtYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBkZXN0cm95VG91Y2godG91Y2gpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveVRvdWNoKHRvdWNoKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFRvdWNoID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkRvd24odG91Y2gsIHBsYWNlLCB0YXJnZXQsIGM0LCBjNSkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DSEVDS19TQ09SRVNfRk9SX0FCSUxJVFksIEJvbWJUeXBlLlRudCk7XG4gICAgfVxuXG4gICAgb25Nb3ZlKHRvdWNoLCBwbGFjZSwgdGFyZ2V0KSB7fVxuXG4gICAgb25VcCh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRudFNob3BJbnB1dENvbW1hbmQ7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Logic/Features/Feature.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6125Ma2UJLTJjSqpKXkf3h', 'Feature');
// scripts/Game/Logic/Features/Feature.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    initializingEvent: {
      "default": _GameEvent["default"].BOMB_IS_AVAILABLE,
      type: _GameEvent["default"]
    },
    scoreForInitializing: {
      "default": 0,
      type: cc.Integer
    },
    elementsForDeleting: {
      "default": [],
      type: Array
    } //#endregion

  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](this.initializingEvent, this.onInitializingEvent, this);
    cc.systemEvent[func](_GameEvent["default"].CHECK_SCORES_FOR_ABILITY, this.onCheckScoreForAbility, this);
  },
  onInitializingEvent: function onInitializingEvent(featureCoordinate, fieldWidth, fieldHeight) {
    if (!featureCoordinate || !fieldHeight || !fieldWidth) console.log("Not enough data for initializing!!!");
    return this._elementsForDeleting;
  },
  onCheckScoreForAbility: function onCheckScoreForAbility(kindAbility) {
    cc.systemEvent.emit(_GameEvent["default"].IS_SCORE_ENOUGH, kindAbility, this.scoreForInitializing);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvRmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXRpYWxpemluZ0V2ZW50IiwiR2FtZUV2ZW50IiwiQk9NQl9JU19BVkFJTEFCTEUiLCJ0eXBlIiwic2NvcmVGb3JJbml0aWFsaXppbmciLCJJbnRlZ2VyIiwiZWxlbWVudHNGb3JEZWxldGluZyIsIkFycmF5Iiwib25FbmFibGUiLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwib25EaXNhYmxlIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsIm9uSW5pdGlhbGl6aW5nRXZlbnQiLCJDSEVDS19TQ09SRVNfRk9SX0FCSUxJVFkiLCJvbkNoZWNrU2NvcmVGb3JBYmlsaXR5IiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiX2VsZW1lbnRzRm9yRGVsZXRpbmciLCJraW5kQWJpbGl0eSIsImVtaXQiLCJJU19TQ09SRV9FTk9VR0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUVBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLGlCQUFpQixFQUFFO01BQUUsV0FBU0MscUJBQUEsQ0FBVUMsaUJBQXJCO01BQXdDQyxJQUFJLEVBQUVGO0lBQTlDLENBRlg7SUFHUkcsb0JBQW9CLEVBQUU7TUFBRSxXQUFTLENBQVg7TUFBY0QsSUFBSSxFQUFFUCxFQUFFLENBQUNTO0lBQXZCLENBSGQ7SUFLUkMsbUJBQW1CLEVBQUU7TUFBQyxXQUFTLEVBQVY7TUFBY0gsSUFBSSxFQUFFSTtJQUFwQixDQUxiLENBTVI7O0VBTlEsQ0FIUDtFQVlMO0VBQ0FDLFFBYkssc0JBYU07SUFDUCxLQUFLQyxtQkFBTCxDQUF5QixJQUF6QjtFQUNILENBZkk7RUFpQkxDLFNBakJLLHVCQWlCTztJQUNSLEtBQUtELG1CQUFMLENBQXlCLEtBQXpCO0VBQ0gsQ0FuQkk7RUFxQkw7RUFFQTtFQUNBQSxtQkF4QkssK0JBd0JlRSxJQXhCZixFQXdCcUI7SUFDdEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLEdBQUcsSUFBSCxHQUFVLEtBQTNCO0lBRUFmLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZUQsSUFBZixFQUFxQixLQUFLWixpQkFBMUIsRUFBNkMsS0FBS2MsbUJBQWxELEVBQXVFLElBQXZFO0lBQ0FsQixFQUFFLENBQUNpQixXQUFILENBQWVELElBQWYsRUFBcUJYLHFCQUFBLENBQVVjLHdCQUEvQixFQUF5RCxLQUFLQyxzQkFBOUQsRUFBc0YsSUFBdEY7RUFDSCxDQTdCSTtFQStCTEYsbUJBL0JLLCtCQStCZUcsaUJBL0JmLEVBK0JrQ0MsVUEvQmxDLEVBK0I4Q0MsV0EvQjlDLEVBK0IyRDtJQUM1RCxJQUFHLENBQUNGLGlCQUFELElBQXNCLENBQUNFLFdBQXZCLElBQXNDLENBQUNELFVBQTFDLEVBQ0lFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaO0lBRUosT0FBTyxLQUFLQyxvQkFBWjtFQUNILENBcENJO0VBc0NMTixzQkF0Q0ssa0NBc0NrQk8sV0F0Q2xCLEVBc0MrQjtJQUNoQzNCLEVBQUUsQ0FBQ2lCLFdBQUgsQ0FBZVcsSUFBZixDQUFvQnZCLHFCQUFBLENBQVV3QixlQUE5QixFQUErQ0YsV0FBL0MsRUFBNEQsS0FBS25CLG9CQUFqRTtFQUNIO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBjbGFzc2VzLWhlbHBlcnNcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50Jztcbi8vI2VuZHJlZ2lvblxuIFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiBcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vI3JlZ2lvbiBlZGl0b3JzIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBpbml0aWFsaXppbmdFdmVudDogeyBkZWZhdWx0OiBHYW1lRXZlbnQuQk9NQl9JU19BVkFJTEFCTEUsIHR5cGU6IEdhbWVFdmVudCB9LFxuICAgICAgICBzY29yZUZvckluaXRpYWxpemluZzogeyBkZWZhdWx0OiAwLCB0eXBlOiBjYy5JbnRlZ2VyIH0sXG5cbiAgICAgICAgZWxlbWVudHNGb3JEZWxldGluZzoge2RlZmF1bHQ6IFtdLCB0eXBlOiBBcnJheX0sXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgIH0sXG4gXG4gICAgLy8jcmVnaW9uIGxpZmUtY3ljbGUgY2FsbGJhY2tzXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICB9LFxuIFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKGZhbHNlKTtcbiAgICB9LFxuIFxuICAgIC8vI2VuZHJlZ2lvblxuIFxuICAgIC8vI3JlZ2lvbiBwcml2YXRlIG1ldGhvZHNcbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG4gXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKHRoaXMuaW5pdGlhbGl6aW5nRXZlbnQsIHRoaXMub25Jbml0aWFsaXppbmdFdmVudCwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5DSEVDS19TQ09SRVNfRk9SX0FCSUxJVFksIHRoaXMub25DaGVja1Njb3JlRm9yQWJpbGl0eSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uSW5pdGlhbGl6aW5nRXZlbnQoZmVhdHVyZUNvb3JkaW5hdGUsIGZpZWxkV2lkdGgsIGZpZWxkSGVpZ2h0KSB7XG4gICAgICAgIGlmKCFmZWF0dXJlQ29vcmRpbmF0ZSB8fCAhZmllbGRIZWlnaHQgfHwgIWZpZWxkV2lkdGgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBlbm91Z2ggZGF0YSBmb3IgaW5pdGlhbGl6aW5nISEhXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50c0ZvckRlbGV0aW5nXG4gICAgfSxcblxuICAgIG9uQ2hlY2tTY29yZUZvckFiaWxpdHkoa2luZEFiaWxpdHkpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuSVNfU0NPUkVfRU5PVUdILCBraW5kQWJpbGl0eSwgdGhpcy5zY29yZUZvckluaXRpYWxpemluZyk7XG4gICAgfVxuIH0pO1xuIFxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/FakeScreenInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c82d8ZPdpGWpH21LCmJU7E', 'FakeScreenInputCommand');
// scripts/Plugins/Input/Commands/FakeScreenInputCommand.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _IInputCommand2 = _interopRequireDefault(require("IInputCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FakeScreenInputCommand = /*#__PURE__*/function (_IInputCommand) {
  _inheritsLoose(FakeScreenInputCommand, _IInputCommand);

  function FakeScreenInputCommand(manager) {
    var _this;

    _this = _IInputCommand.call(this, manager) || this;
    _this._vungleOnComplete = false;
    return _this;
  }

  var _proto = FakeScreenInputCommand.prototype;

  _proto.onDown = function onDown(touch, place, target) {
    if (!this._vungleOnComplete) {
      window.onGameComplete instanceof Function && window.onGameComplete();
      this._vungleOnComplete = true;
    }

    cc.systemEvent.emit(_GameEvent["default"].REDIRECT_PROCESSING);
  };

  _proto.onUp = function onUp(touch, place, target) {};

  return FakeScreenInputCommand;
}(_IInputCommand2["default"]);

exports["default"] = FakeScreenInputCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvRmFrZVNjcmVlbklucHV0Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJGYWtlU2NyZWVuSW5wdXRDb21tYW5kIiwibWFuYWdlciIsIl92dW5nbGVPbkNvbXBsZXRlIiwib25Eb3duIiwidG91Y2giLCJwbGFjZSIsInRhcmdldCIsIndpbmRvdyIsIm9uR2FtZUNvbXBsZXRlIiwiRnVuY3Rpb24iLCJjYyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIlJFRElSRUNUX1BST0NFU1NJTkciLCJvblVwIiwiSUlucHV0Q29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBOzs7RUFDakIsZ0NBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsa0NBQU1BLE9BQU47SUFFQSxNQUFLQyxpQkFBTCxHQUF5QixLQUF6QjtJQUhpQjtFQUlwQjs7OztTQUVEQyxTQUFBLGdCQUFPQyxLQUFQLEVBQWNDLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCO0lBQ3pCLElBQUksQ0FBQyxLQUFLSixpQkFBVixFQUE2QjtNQUN6QkssTUFBTSxDQUFDQyxjQUFQLFlBQWlDQyxRQUFqQyxJQUE2Q0YsTUFBTSxDQUFDQyxjQUFQLEVBQTdDO01BQ0EsS0FBS04saUJBQUwsR0FBeUIsSUFBekI7SUFDSDs7SUFDRFEsRUFBRSxDQUFDQyxXQUFILENBQWVDLElBQWYsQ0FBb0JDLHFCQUFBLENBQVVDLG1CQUE5QjtFQUNIOztTQUVEQyxPQUFBLGNBQUtYLEtBQUwsRUFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkIsQ0FBRTs7O0VBZm1CVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuaW1wb3J0IElJbnB1dENvbW1hbmQgZnJvbSAnSUlucHV0Q29tbWFuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZha2VTY3JlZW5JbnB1dENvbW1hbmQgZXh0ZW5kcyBJSW5wdXRDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKG1hbmFnZXIpO1xuXG4gICAgICAgIHRoaXMuX3Z1bmdsZU9uQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRvd24odG91Y2gsIHBsYWNlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl92dW5nbGVPbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB3aW5kb3cub25HYW1lQ29tcGxldGUgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiB3aW5kb3cub25HYW1lQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3Z1bmdsZU9uQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlJFRElSRUNUX1BST0NFU1NJTkcpO1xuICAgIH1cblxuICAgIG9uVXAodG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Enums/BlockColorType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9de196bzNFMJ47efUBGDTDy', 'BlockColorType');
// scripts/Game/Enums/BlockColorType.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = cc.Enum({
  Blue: 0,
  Green: 1,
  Purple: 2,
  Red: 3,
  Yellow: 4,
  Bomb: 5,
  Tnt: 6,
  ColumnEraser: 7,
  Teleport: 8
});

exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRW51bXMvQmxvY2tDb2xvclR5cGUuanMiXSwibmFtZXMiOlsiY2MiLCJFbnVtIiwiQmx1ZSIsIkdyZWVuIiwiUHVycGxlIiwiUmVkIiwiWWVsbG93IiwiQm9tYiIsIlRudCIsIkNvbHVtbkVyYXNlciIsIlRlbGVwb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlQSxFQUFFLENBQUNDLElBQUgsQ0FBUTtFQUNuQkMsSUFBSSxFQUFFLENBRGE7RUFFbkJDLEtBQUssRUFBRSxDQUZZO0VBR25CQyxNQUFNLEVBQUUsQ0FIVztFQUluQkMsR0FBRyxFQUFFLENBSmM7RUFLbkJDLE1BQU0sRUFBRSxDQUxXO0VBTW5CQyxJQUFJLEVBQUUsQ0FOYTtFQU9uQkMsR0FBRyxFQUFFLENBUGM7RUFRbkJDLFlBQVksRUFBRSxDQVJLO0VBU25CQyxRQUFRLEVBQUU7QUFUUyxDQUFSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjYy5FbnVtKHtcbiAgICBCbHVlOiAwLFxuICAgIEdyZWVuOiAxLFxuICAgIFB1cnBsZTogMixcbiAgICBSZWQ6IDMsXG4gICAgWWVsbG93OiA0LFxuICAgIEJvbWI6IDUsXG4gICAgVG50OiA2LFxuICAgIENvbHVtbkVyYXNlcjogNyxcbiAgICBUZWxlcG9ydDogOCxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Enums/InputDirection.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ebeGio1VOB7jSgH0EthDA', 'InputDirection');
// scripts/Plugins/Input/Enums/InputDirection.js

"use strict";

var InputDirection = cc.Enum({
  None: 0,
  GameArea: 1,
  RevivePopup: 20,
  ResultScreen: 40,
  IngameButton: 41,
  FakeScreen: 42,
  CrossPromoCross: 43,
  Block: 44,
  BombShop: 45,
  TntShop: 46,
  TeleportShop: 47
});
module.exports = InputDirection;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvRW51bXMvSW5wdXREaXJlY3Rpb24uanMiXSwibmFtZXMiOlsiSW5wdXREaXJlY3Rpb24iLCJjYyIsIkVudW0iLCJOb25lIiwiR2FtZUFyZWEiLCJSZXZpdmVQb3B1cCIsIlJlc3VsdFNjcmVlbiIsIkluZ2FtZUJ1dHRvbiIsIkZha2VTY3JlZW4iLCJDcm9zc1Byb21vQ3Jvc3MiLCJCbG9jayIsIkJvbWJTaG9wIiwiVG50U2hvcCIsIlRlbGVwb3J0U2hvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtFQUMzQkMsSUFBSSxFQUFFLENBRHFCO0VBRzNCQyxRQUFRLEVBQUUsQ0FIaUI7RUFLM0JDLFdBQVcsRUFBRSxFQUxjO0VBTzNCQyxZQUFZLEVBQUUsRUFQYTtFQVMzQkMsWUFBWSxFQUFFLEVBVGE7RUFXM0JDLFVBQVUsRUFBRSxFQVhlO0VBYTNCQyxlQUFlLEVBQUUsRUFiVTtFQWUzQkMsS0FBSyxFQUFFLEVBZm9CO0VBaUIzQkMsUUFBUSxFQUFFLEVBakJpQjtFQW1CM0JDLE9BQU8sRUFBRSxFQW5Ca0I7RUFxQjNCQyxZQUFZLEVBQUU7QUFyQmEsQ0FBUixDQUF2QjtBQXdCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixjQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW5wdXREaXJlY3Rpb24gPSBjYy5FbnVtKHtcbiAgICBOb25lOiAwLFxuXG4gICAgR2FtZUFyZWE6IDEsXG5cbiAgICBSZXZpdmVQb3B1cDogMjAsXG5cbiAgICBSZXN1bHRTY3JlZW46IDQwLFxuXG4gICAgSW5nYW1lQnV0dG9uOiA0MSxcblxuICAgIEZha2VTY3JlZW46IDQyLFxuXG4gICAgQ3Jvc3NQcm9tb0Nyb3NzOiA0MyxcblxuICAgIEJsb2NrOiA0NCxcblxuICAgIEJvbWJTaG9wOiA0NSxcblxuICAgIFRudFNob3A6IDQ2LFxuXG4gICAgVGVsZXBvcnRTaG9wOiA0Nyxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RGlyZWN0aW9uO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Effect/Effect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47808aZDq1NioaQH2fMTRwu', 'Effect');
// scripts/Game/Effect/Effect.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    effect: {
      "default": null,
      type: cc.Prefab
    }
  },
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  _handleSubscription: function _handleSubscription(isOn) {
    var func = isOn ? 'on' : 'off';
    cc.systemEvent[func](_GameEvent["default"].SPAWN_EFFECT, this.onSpawnEffect, this);
  },
  onSpawnEffect: function onSpawnEffect(coords) {
    var g = cc.instantiate(this.effect);
    g.setParent(this.node);
    g.x = coords.x;
    g.y = coords.y;
    g.active = true;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRWZmZWN0L0VmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImVmZmVjdCIsInR5cGUiLCJQcmVmYWIiLCJvbkVuYWJsZSIsIl9oYW5kbGVTdWJzY3JpcHRpb24iLCJvbkRpc2FibGUiLCJpc09uIiwiZnVuYyIsInN5c3RlbUV2ZW50IiwiR2FtZUV2ZW50IiwiU1BBV05fRUZGRUNUIiwib25TcGF3bkVmZmVjdCIsImNvb3JkcyIsImciLCJpbnN0YW50aWF0ZSIsInNldFBhcmVudCIsIm5vZGUiLCJ4IiwieSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFO01BQUMsV0FBUyxJQUFWO01BQWdCQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007SUFBekI7RUFEQSxDQUhQO0VBT0xDLFFBUEssc0JBT007SUFDUCxLQUFLQyxtQkFBTCxDQUF5QixJQUF6QjtFQUNILENBVEk7RUFXTEMsU0FYSyx1QkFXTztJQUNSLEtBQUtELG1CQUFMLENBQXlCLEtBQXpCO0VBQ0gsQ0FiSTtFQWVMQSxtQkFmSywrQkFlZUUsSUFmZixFQWVxQjtJQUN0QixJQUFNQyxJQUFJLEdBQUdELElBQUksR0FBRyxJQUFILEdBQVUsS0FBM0I7SUFDQVYsRUFBRSxDQUFDWSxXQUFILENBQWVELElBQWYsRUFBcUJFLHFCQUFBLENBQVVDLFlBQS9CLEVBQTZDLEtBQUtDLGFBQWxELEVBQWlFLElBQWpFO0VBQ0gsQ0FsQkk7RUFvQkxBLGFBcEJLLHlCQW9CU0MsTUFwQlQsRUFvQmlCO0lBQ2xCLElBQU1DLENBQUMsR0FBR2pCLEVBQUUsQ0FBQ2tCLFdBQUgsQ0FBZSxLQUFLZCxNQUFwQixDQUFWO0lBQ0FhLENBQUMsQ0FBQ0UsU0FBRixDQUFZLEtBQUtDLElBQWpCO0lBQ0FILENBQUMsQ0FBQ0ksQ0FBRixHQUFNTCxNQUFNLENBQUNLLENBQWI7SUFDQUosQ0FBQyxDQUFDSyxDQUFGLEdBQU1OLE1BQU0sQ0FBQ00sQ0FBYjtJQUNBTCxDQUFDLENBQUNNLE1BQUYsR0FBVyxJQUFYO0VBQ0g7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBlZmZlY3Q6IHtkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5QcmVmYWJ9LFxuICAgIH0sXG4gICAgXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbih0cnVlKTtcbiAgICB9LFxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTdWJzY3JpcHRpb24oZmFsc2UpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlU3Vic2NyaXB0aW9uKGlzT24pIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGlzT24gPyAnb24nIDogJ29mZic7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50W2Z1bmNdKEdhbWVFdmVudC5TUEFXTl9FRkZFQ1QsIHRoaXMub25TcGF3bkVmZmVjdCwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uU3Bhd25FZmZlY3QoY29vcmRzKSB7XG4gICAgICAgIGNvbnN0IGcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVmZmVjdCk7XG4gICAgICAgIGcuc2V0UGFyZW50KHRoaXMubm9kZSlcbiAgICAgICAgZy54ID0gY29vcmRzLng7XG4gICAgICAgIGcueSA9IGNvb3Jkcy55O1xuICAgICAgICBnLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/Commands/GameAreaInputCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvQ29tbWFuZHMvR2FtZUFyZWFJbnB1dENvbW1hbmQuanMiXSwibmFtZXMiOlsiR2FtZUFyZWFJbnB1dENvbW1hbmQiLCJtYW5hZ2VyIiwiZGVzdHJveVRvdWNoIiwidG91Y2giLCJfY3VycmVudFRvdWNoIiwib25Eb3duIiwicGxhY2UiLCJ0YXJnZXQiLCJjNCIsImM1Iiwia2luZEFiaWxpdHkiLCJjYyIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIkNSRUFURV9TVVBFUl9BQklMSVRZIiwibG9nIiwibm9kZSIsIm9uTW92ZSIsIm9uVXAiLCJJSW5wdXRDb21tYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQjtFQUFBOztFQUN0Qiw4QkFBWUMsT0FBWixFQUFxQjtJQUFBLE9BQ2pCLDBCQUFNQSxPQUFOLENBRGlCO0VBRXBCOztFQUhxQjs7RUFBQSxPQUt0QkMsWUFMc0IsR0FLdEIsc0JBQWFDLEtBQWIsRUFBb0I7SUFDaEIseUJBQU1ELFlBQU4sWUFBbUJDLEtBQW5COztJQUNBLEtBQUtDLGFBQUwsR0FBcUIsSUFBckI7RUFDSCxDQVJxQjs7RUFBQSxPQVV0QkMsTUFWc0IsR0FVdEIsZ0JBQU9GLEtBQVAsRUFBY0csS0FBZCxFQUFxQkMsTUFBckIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFxQ0MsV0FBckMsRUFBa0Q7SUFDOUNDLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyxvQkFBOUIsRUFBb0RMLFdBQXBEO0lBQ0FDLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPLEtBQUtDLElBQVo7RUFDSCxDQWJxQjs7RUFBQSxPQWV0QkMsTUFmc0IsR0FldEIsZ0JBQU9mLEtBQVAsRUFBY0csS0FBZCxFQUFxQkMsTUFBckIsRUFBNkIsQ0FBRSxDQWZUOztFQUFBLE9BaUJ0QlksSUFqQnNCLEdBaUJ0QixjQUFLaEIsS0FBTCxFQUFZRyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQixDQUFFLENBakJQOztFQUFBO0FBQUEsRUFBc0NhLDBCQUF0QyxDQUExQjs7ZUFvQmVwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVFdmVudCBmcm9tICdHYW1lRXZlbnQnO1xuXG5pbXBvcnQgSUlucHV0Q29tbWFuZCBmcm9tICdJSW5wdXRDb21tYW5kJztcblxuY29uc3QgR2FtZUFyZWFJbnB1dENvbW1hbmQgPSBjbGFzcyBHYW1lQXJlYUlucHV0Q29tbWFuZCBleHRlbmRzIElJbnB1dENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIobWFuYWdlcik7XG4gICAgfVxuXG4gICAgZGVzdHJveVRvdWNoKHRvdWNoKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3lUb3VjaCh0b3VjaCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUb3VjaCA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Eb3duKHRvdWNoLCBwbGFjZSwgdGFyZ2V0LCBjNCwgYzUsIGtpbmRBYmlsaXR5KSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNSRUFURV9TVVBFUl9BQklMSVRZLCBraW5kQWJpbGl0eSk7XG4gICAgICAgIGNjLmxvZyh0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIG9uTW92ZSh0b3VjaCwgcGxhY2UsIHRhcmdldCkge31cblxuICAgIG9uVXAodG91Y2gsIHBsYWNlLCB0YXJnZXQpIHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQXJlYUlucHV0Q29tbWFuZDtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Plugins/Input/InputCatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c208WPE0dJ94YMlwaqMAcI', 'InputCatcher');
// scripts/Plugins/Input/InputCatcher.js

"use strict";

var _GameEvent = _interopRequireDefault(require("GameEvent"));

var _InputDirection = _interopRequireDefault(require("InputDirection"));

var _InputType = _interopRequireDefault(require("InputType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//#region classes-helpers
//#endregion
cc.Class({
  "extends": cc.Component,
  properties: {
    //#region editors fields and properties
    direction: {
      "default": _InputDirection["default"].None,
      type: _InputDirection["default"],
      tooltip: 'место откуда пришел инпут, по энаму InputDirection'
    },
    target: {
      "default": null,
      type: cc.Component,
      tooltip: 'компонента, которая будет передана в команду. В команде можно будет использовать ее методы'
    },
    analyticsArea: '' //#endregion
    //#region public fields and properties
    //#endregion
    //#region private fields and properties
    //#endregion

  },
  editor: {
    menu: 'Input/InputCatcher'
  },
  //#region life-cycle callbacks
  onEnable: function onEnable() {
    this._handleSubscription(true);
  },
  onDisable: function onDisable() {
    this._handleSubscription(false);
  },
  //#endregion
  //#region public methods
  //#endregion
  //#region private methods
  _handleSubscription: function _handleSubscription(activated) {
    var func = activated ? 'on' : 'off';
    this.node[func](cc.Node.EventType.TOUCH_START, this.onDown, this);
    this.node[func](cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
    this.node[func](cc.Node.EventType.TOUCH_END, this.onUp, this);
    this.node[func](cc.Node.EventType.TOUCH_CANCEL, this.onUp, this);
  },
  //#endregion
  //#region event handlers
  onDown: function onDown(event) {
    cc.systemEvent.emit(_GameEvent["default"].INPUT, _InputType["default"].Down, this.direction, event.touch, this, this.target);
  },
  onMove: function onMove(event) {
    cc.systemEvent.emit(_GameEvent["default"].INPUT, _InputType["default"].Move, this.direction, event.touch, this, this.target);
  },
  onUp: function onUp(event) {
    cc.systemEvent.emit(_GameEvent["default"].INPUT, _InputType["default"].Up, this.direction, event.touch, this, this.target);
  } //#endregion

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsdWdpbnMvSW5wdXQvSW5wdXRDYXRjaGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGlyZWN0aW9uIiwiSW5wdXREaXJlY3Rpb24iLCJOb25lIiwidHlwZSIsInRvb2x0aXAiLCJ0YXJnZXQiLCJhbmFseXRpY3NBcmVhIiwiZWRpdG9yIiwibWVudSIsIm9uRW5hYmxlIiwiX2hhbmRsZVN1YnNjcmlwdGlvbiIsIm9uRGlzYWJsZSIsImFjdGl2YXRlZCIsImZ1bmMiLCJub2RlIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Eb3duIiwiVE9VQ0hfTU9WRSIsIm9uTW92ZSIsIlRPVUNIX0VORCIsIm9uVXAiLCJUT1VDSF9DQU5DRUwiLCJldmVudCIsInN5c3RlbUV2ZW50IiwiZW1pdCIsIkdhbWVFdmVudCIsIklOUFVUIiwiSW5wdXRUeXBlIiwiRG93biIsInRvdWNoIiwiTW92ZSIsIlVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0FBRUE7QUFFQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxTQUFTLEVBQUU7TUFDUCxXQUFTQywwQkFBQSxDQUFlQyxJQURqQjtNQUVQQyxJQUFJLEVBQUVGLDBCQUZDO01BR1BHLE9BQU8sRUFBRTtJQUhGLENBRkg7SUFPUkMsTUFBTSxFQUFFO01BQ0osV0FBUyxJQURMO01BRUpGLElBQUksRUFBRVAsRUFBRSxDQUFDRSxTQUZMO01BR0pNLE9BQU8sRUFBRTtJQUhMLENBUEE7SUFhUkUsYUFBYSxFQUFFLEVBYlAsQ0FjUjtJQUVBO0lBQ0E7SUFFQTtJQUNBOztFQXBCUSxDQUhQO0VBMEJMQyxNQUFNLEVBQUU7SUFDSkMsSUFBSSxFQUFFO0VBREYsQ0ExQkg7RUE4Qkw7RUFDQUMsUUEvQkssc0JBK0JNO0lBQ1AsS0FBS0MsbUJBQUwsQ0FBeUIsSUFBekI7RUFDSCxDQWpDSTtFQW1DTEMsU0FuQ0ssdUJBbUNPO0lBQ1IsS0FBS0QsbUJBQUwsQ0FBeUIsS0FBekI7RUFDSCxDQXJDSTtFQXNDTDtFQUVBO0VBQ0E7RUFFQTtFQUNBQSxtQkE1Q0ssK0JBNENlRSxTQTVDZixFQTRDMEI7SUFDM0IsSUFBTUMsSUFBSSxHQUFHRCxTQUFTLEdBQUcsSUFBSCxHQUFVLEtBQWhDO0lBRUEsS0FBS0UsSUFBTCxDQUFVRCxJQUFWLEVBQWdCakIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUFsQyxFQUErQyxLQUFLQyxNQUFwRCxFQUE0RCxJQUE1RDtJQUNBLEtBQUtKLElBQUwsQ0FBVUQsSUFBVixFQUFnQmpCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsVUFBbEMsRUFBOEMsS0FBS0MsTUFBbkQsRUFBMkQsSUFBM0Q7SUFDQSxLQUFLTixJQUFMLENBQVVELElBQVYsRUFBZ0JqQixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JLLFNBQWxDLEVBQTZDLEtBQUtDLElBQWxELEVBQXdELElBQXhEO0lBQ0EsS0FBS1IsSUFBTCxDQUFVRCxJQUFWLEVBQWdCakIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCTyxZQUFsQyxFQUFnRCxLQUFLRCxJQUFyRCxFQUEyRCxJQUEzRDtFQUNILENBbkRJO0VBb0RMO0VBRUE7RUFDQUosTUF2REssa0JBdURFTSxLQXZERixFQXVEUztJQUNWNUIsRUFBRSxDQUFDNkIsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyxLQUE5QixFQUFxQ0MscUJBQUEsQ0FBVUMsSUFBL0MsRUFBcUQsS0FBSzlCLFNBQTFELEVBQXFFd0IsS0FBSyxDQUFDTyxLQUEzRSxFQUFrRixJQUFsRixFQUF3RixLQUFLMUIsTUFBN0Y7RUFDSCxDQXpESTtFQTJETGUsTUEzREssa0JBMkRFSSxLQTNERixFQTJEUztJQUNWNUIsRUFBRSxDQUFDNkIsV0FBSCxDQUFlQyxJQUFmLENBQW9CQyxxQkFBQSxDQUFVQyxLQUE5QixFQUFxQ0MscUJBQUEsQ0FBVUcsSUFBL0MsRUFBcUQsS0FBS2hDLFNBQTFELEVBQXFFd0IsS0FBSyxDQUFDTyxLQUEzRSxFQUFrRixJQUFsRixFQUF3RixLQUFLMUIsTUFBN0Y7RUFDSCxDQTdESTtFQStETGlCLElBL0RLLGdCQStEQUUsS0EvREEsRUErRE87SUFDUjVCLEVBQUUsQ0FBQzZCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMscUJBQUEsQ0FBVUMsS0FBOUIsRUFBcUNDLHFCQUFBLENBQVVJLEVBQS9DLEVBQW1ELEtBQUtqQyxTQUF4RCxFQUFtRXdCLEtBQUssQ0FBQ08sS0FBekUsRUFBZ0YsSUFBaEYsRUFBc0YsS0FBSzFCLE1BQTNGO0VBQ0gsQ0FqRUksQ0FtRUw7O0FBbkVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcblxuaW1wb3J0IElucHV0RGlyZWN0aW9uIGZyb20gJ0lucHV0RGlyZWN0aW9uJztcbmltcG9ydCBJbnB1dFR5cGUgZnJvbSAnSW5wdXRUeXBlJztcblxuLy8jcmVnaW9uIGNsYXNzZXMtaGVscGVyc1xuXG4vLyNlbmRyZWdpb25cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8jcmVnaW9uIGVkaXRvcnMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogSW5wdXREaXJlY3Rpb24uTm9uZSxcbiAgICAgICAgICAgIHR5cGU6IElucHV0RGlyZWN0aW9uLFxuICAgICAgICAgICAgdG9vbHRpcDogJ9C80LXRgdGC0L4g0L7RgtC60YPQtNCwINC/0YDQuNGI0LXQuyDQuNC90L/Rg9GCLCDQv9C+INGN0L3QsNC80YMgSW5wdXREaXJlY3Rpb24nLFxuICAgICAgICB9LFxuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQsXG4gICAgICAgICAgICB0b29sdGlwOiAn0LrQvtC80L/QvtC90LXQvdGC0LAsINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0L/QtdGA0LXQtNCw0L3QsCDQsiDQutC+0LzQsNC90LTRgy4g0JIg0LrQvtC80LDQvdC00LUg0LzQvtC20L3QviDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtdC1INC80LXRgtC+0LTRiycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgYW5hbHl0aWNzQXJlYTogJycsXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwdWJsaWMgZmllbGRzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vI3JlZ2lvbiBwcml2YXRlIGZpZWxkcyBhbmQgcHJvcGVydGllc1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICB9LFxuXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIG1lbnU6ICdJbnB1dC9JbnB1dENhdGNoZXInLFxuICAgIH0sXG5cbiAgICAvLyNyZWdpb24gbGlmZS1jeWNsZSBjYWxsYmFja3NcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU3Vic2NyaXB0aW9uKHRydWUpO1xuICAgIH0sXG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN1YnNjcmlwdGlvbihmYWxzZSk7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBwdWJsaWMgbWV0aG9kc1xuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIHByaXZhdGUgbWV0aG9kc1xuICAgIF9oYW5kbGVTdWJzY3JpcHRpb24oYWN0aXZhdGVkKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBhY3RpdmF0ZWQgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgdGhpcy5ub2RlW2Z1bmNdKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRG93biwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZVtmdW5jXShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZVtmdW5jXShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25VcCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZVtmdW5jXShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25VcCwgdGhpcyk7XG4gICAgfSxcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyc1xuICAgIG9uRG93bihldmVudCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5JTlBVVCwgSW5wdXRUeXBlLkRvd24sIHRoaXMuZGlyZWN0aW9uLCBldmVudC50b3VjaCwgdGhpcywgdGhpcy50YXJnZXQpO1xuICAgIH0sXG5cbiAgICBvbk1vdmUoZXZlbnQpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuSU5QVVQsIElucHV0VHlwZS5Nb3ZlLCB0aGlzLmRpcmVjdGlvbiwgZXZlbnQudG91Y2gsIHRoaXMsIHRoaXMudGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgb25VcChldmVudCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5JTlBVVCwgSW5wdXRUeXBlLlVwLCB0aGlzLmRpcmVjdGlvbiwgZXZlbnQudG91Y2gsIHRoaXMsIHRoaXMudGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgLy8jZW5kcmVnaW9uXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Enums/BombType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fae3agLT85Kp6SY2HS5ZCbp', 'BombType');
// scripts/Game/Enums/BombType.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _default = cc.Enum({
  None: 0,
  Bomb: 1,
  Tnt: 2
});

exports["default"] = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvRW51bXMvQm9tYlR5cGUuanMiXSwibmFtZXMiOlsiY2MiLCJFbnVtIiwiTm9uZSIsIkJvbWIiLCJUbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQWVBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0VBQ25CQyxJQUFJLEVBQUUsQ0FEYTtFQUVuQkMsSUFBSSxFQUFFLENBRmE7RUFHbkJDLEdBQUcsRUFBRTtBQUhjLENBQVIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNjLkVudW0oe1xuICAgIE5vbmU6IDAsXG4gICAgQm9tYjogMSxcbiAgICBUbnQ6IDIsXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
