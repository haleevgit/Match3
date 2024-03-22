
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