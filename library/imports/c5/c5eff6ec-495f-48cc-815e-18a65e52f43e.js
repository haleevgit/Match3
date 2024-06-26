"use strict";
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