
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