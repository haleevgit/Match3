"use strict";
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