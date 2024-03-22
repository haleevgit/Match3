"use strict";
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