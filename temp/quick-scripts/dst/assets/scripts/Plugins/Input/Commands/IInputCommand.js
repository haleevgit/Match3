
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