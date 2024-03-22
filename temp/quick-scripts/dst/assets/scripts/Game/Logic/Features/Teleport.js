
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUvTG9naWMvRmVhdHVyZXMvVGVsZXBvcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiX2ZpcnN0VGVsZXBvcnRQb3NpdGlvbiIsInYyIiwic2VyaWFsaXphYmxlIiwiX3NlY29uZFRlbGVwb3J0UG9zaXRpb24iLCJfaGFuZGxlU3Vic2NyaXB0aW9uIiwiaXNPbiIsImZ1bmMiLCJzeXN0ZW1FdmVudCIsImluaXRpYWxpemluZ0V2ZW50Iiwib25Jbml0aWFsaXppbmdFdmVudCIsIkdhbWVFdmVudCIsIlRFTEVQT1JURURfQkxPQ0tfQ0hPU0VOIiwib25UZWxlcG9ydEJsb2NrQ2hvc2VuIiwiYmxvY2siLCJfZmlyc3RCbG9jayIsIl9maXJzdENvb3JkIiwieCIsInkiLCJlbWl0IiwiQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiIsIlRlbGVwb3J0QW5pbWF0aW9uc1R5cGUiLCJOb25lIiwiaUkiLCJpSiIsIkFjY2VwdGVkIiwiQ2hvb3NpbmciLCJfc2Vjb25kQ29vcmQiLCJTVEFSVF9URUxFUE9SVEFUSU9OIiwiZmVhdHVyZUNvb3JkaW5hdGUiLCJmaWVsZFdpZHRoIiwiZmllbGRIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFIQTtBQUlBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0MsbUJBREo7RUFHTEMsVUFBVSxFQUFFO0lBQ1JDLHNCQUFzQixFQUFFO01BQUUsV0FBU0osRUFBRSxDQUFDSyxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBWDtNQUF1QkMsWUFBWSxFQUFFO0lBQXJDLENBRGhCO0lBRVJDLHVCQUF1QixFQUFFO01BQUUsV0FBU1AsRUFBRSxDQUFDSyxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBWDtNQUF1QkMsWUFBWSxFQUFFO0lBQXJDO0VBRmpCLENBSFA7RUFRTDtFQUVBRSxtQkFWSywrQkFVZUMsSUFWZixFQVVxQjtJQUN0QixJQUFNQyxJQUFJLEdBQUdELElBQUksR0FBRyxJQUFILEdBQVUsS0FBM0I7SUFFQVQsRUFBRSxDQUFDVyxXQUFILENBQWVELElBQWYsRUFBcUIsS0FBS0UsaUJBQTFCLEVBQTZDLEtBQUtDLG1CQUFsRCxFQUF1RSxJQUF2RTtJQUNBYixFQUFFLENBQUNXLFdBQUgsQ0FBZUQsSUFBZixFQUFxQkkscUJBQUEsQ0FBVUMsdUJBQS9CLEVBQXdELEtBQUtDLHFCQUE3RCxFQUFvRixJQUFwRjtFQUNILENBZkk7RUFpQkxBLHFCQWpCSyxpQ0FpQmlCQyxLQWpCakIsRUFpQndCO0lBQ3pCLElBQUksQ0FBQyxLQUFLQyxXQUFWLEVBQXVCO01BQ25CLEtBQUtBLFdBQUwsR0FBbUJELEtBQW5CO01BQ0EsS0FBS0UsV0FBTCxHQUFtQm5CLEVBQUUsQ0FBQ0ssRUFBSCxDQUFNWSxLQUFLLENBQUNHLENBQVosRUFBZUgsS0FBSyxDQUFDSSxDQUFyQixDQUFuQjtNQUNBckIsRUFBRSxDQUFDVyxXQUFILENBQWVXLElBQWYsQ0FBb0JSLHFCQUFBLENBQVVTLHNCQUE5QixFQUFzRCxLQUFLbkIsc0JBQTNELEVBQW1Gb0Isa0NBQUEsQ0FBdUJDLElBQTFHO01BQ0F6QixFQUFFLENBQUNXLFdBQUgsQ0FBZVcsSUFBZixDQUFvQlIscUJBQUEsQ0FBVVMsc0JBQTlCLEVBQXNEdkIsRUFBRSxDQUFDSyxFQUFILENBQU1ZLEtBQUssQ0FBQ1MsRUFBWixFQUFnQlQsS0FBSyxDQUFDVSxFQUF0QixDQUF0RCxFQUFpRkgsa0NBQUEsQ0FBdUJJLFFBQXhHOztNQUNBLElBQUlYLEtBQUssQ0FBQ1UsRUFBTixLQUFhLEtBQUtwQix1QkFBTCxDQUE2QmMsQ0FBOUMsRUFBaUQ7UUFDN0MsS0FBS2QsdUJBQUwsQ0FBNkJhLENBQTdCO01BQ0g7O01BQ0RwQixFQUFFLENBQUNXLFdBQUgsQ0FBZVcsSUFBZixDQUFvQlIscUJBQUEsQ0FBVVMsc0JBQTlCLEVBQXNELEtBQUtoQix1QkFBM0QsRUFBb0ZpQixrQ0FBQSxDQUF1QkssUUFBM0c7SUFDSCxDQVRELE1BU087TUFDSCxLQUFLQyxZQUFMLEdBQW9COUIsRUFBRSxDQUFDSyxFQUFILENBQU1ZLEtBQUssQ0FBQ0csQ0FBWixFQUFlSCxLQUFLLENBQUNJLENBQXJCLENBQXBCO01BQ0FyQixFQUFFLENBQUNXLFdBQUgsQ0FBZVcsSUFBZixDQUFvQlIscUJBQUEsQ0FBVVMsc0JBQTlCLEVBQXNELEtBQUtoQix1QkFBM0QsRUFBb0ZpQixrQ0FBQSxDQUF1QkMsSUFBM0c7TUFDQXpCLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVUyxzQkFBOUIsRUFBc0R2QixFQUFFLENBQUNLLEVBQUgsQ0FBTVksS0FBSyxDQUFDUyxFQUFaLEVBQWdCVCxLQUFLLENBQUNVLEVBQXRCLENBQXRELEVBQWlGSCxrQ0FBQSxDQUF1QkksUUFBeEc7TUFDQTVCLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVaUIsbUJBQTlCLEVBQW1ELEtBQUtiLFdBQXhELEVBQXFFRCxLQUFyRSxFQUE0RSxLQUFLRSxXQUFqRixFQUE4RixLQUFLVyxZQUFuRztNQUNBLEtBQUtaLFdBQUwsR0FBbUIsS0FBbkI7SUFDSDtFQUNKLENBbENJO0VBb0NMTCxtQkFwQ0ssK0JBb0NlbUIsaUJBcENmLEVBb0NrQ0MsVUFwQ2xDLEVBb0M4Q0MsV0FwQzlDLEVBb0MyRDtJQUM1RGxDLEVBQUUsQ0FBQ1csV0FBSCxDQUFlVyxJQUFmLENBQW9CUixxQkFBQSxDQUFVUyxzQkFBOUIsRUFBc0QsS0FBS25CLHNCQUEzRCxFQUFtRm9CLGtDQUFBLENBQXVCSyxRQUExRztFQUNIO0FBdENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vI3JlZ2lvbiBjbGFzc2VzLWhlbHBlcnNcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSAnR2FtZUV2ZW50JztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ0ZlYXR1cmUnO1xuaW1wb3J0IFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUgZnJvbSAnVGVsZXBvcnRBbmltYXRpb25zVHlwZSc7XG4vLyNlbmRyZWdpb25cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBGZWF0dXJlLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfZmlyc3RUZWxlcG9ydFBvc2l0aW9uOiB7IGRlZmF1bHQ6IGNjLnYyKDYsNCksIHNlcmlhbGl6YWJsZTogZmFsc2UgfSxcbiAgICAgICAgX3NlY29uZFRlbGVwb3J0UG9zaXRpb246IHsgZGVmYXVsdDogY2MudjIoNiw3KSwgc2VyaWFsaXphYmxlOiBmYWxzZSB9LFxuICAgIH0sXG4gIFxuICAgIC8vI3JlZ2lvbiBsaWZlLWN5Y2xlIGNhbGxiYWNrc1xuXG4gICAgX2hhbmRsZVN1YnNjcmlwdGlvbihpc09uKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBpc09uID8gJ29uJyA6ICdvZmYnO1xuIFxuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXSh0aGlzLmluaXRpYWxpemluZ0V2ZW50LCB0aGlzLm9uSW5pdGlhbGl6aW5nRXZlbnQsIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudFtmdW5jXShHYW1lRXZlbnQuVEVMRVBPUlRFRF9CTE9DS19DSE9TRU4sIHRoaXMub25UZWxlcG9ydEJsb2NrQ2hvc2VuLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgb25UZWxlcG9ydEJsb2NrQ2hvc2VuKGJsb2NrKSB7XG4gICAgICAgIGlmICghdGhpcy5fZmlyc3RCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3RCbG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgdGhpcy5fZmlyc3RDb29yZCA9IGNjLnYyKGJsb2NrLngsIGJsb2NrLnkpO1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiwgdGhpcy5fZmlyc3RUZWxlcG9ydFBvc2l0aW9uLCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLk5vbmUpO1xuICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiwgY2MudjIoYmxvY2suaUksIGJsb2NrLmlKKSwgVGVsZXBvcnRBbmltYXRpb25zVHlwZS5BY2NlcHRlZCk7XG4gICAgICAgICAgICBpZiAoYmxvY2suaUogPT09IHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24ueCAtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNIQU5HRV9CTE9DS19BTklNQVRJT04sIHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24sIFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUuQ2hvb3NpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2Vjb25kQ29vcmQgPSBjYy52MihibG9jay54LCBibG9jay55KTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LkNIQU5HRV9CTE9DS19BTklNQVRJT04sIHRoaXMuX3NlY29uZFRlbGVwb3J0UG9zaXRpb24sIFRlbGVwb3J0QW5pbWF0aW9uc1R5cGUuTm9uZSk7XG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KEdhbWVFdmVudC5DSEFOR0VfQkxPQ0tfQU5JTUFUSU9OLCBjYy52MihibG9jay5pSSwgYmxvY2suaUopLCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLkFjY2VwdGVkKTtcbiAgICAgICAgICAgIGNjLnN5c3RlbUV2ZW50LmVtaXQoR2FtZUV2ZW50LlNUQVJUX1RFTEVQT1JUQVRJT04sIHRoaXMuX2ZpcnN0QmxvY2ssIGJsb2NrLCB0aGlzLl9maXJzdENvb3JkLCB0aGlzLl9zZWNvbmRDb29yZCk7XG4gICAgICAgICAgICB0aGlzLl9maXJzdEJsb2NrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Jbml0aWFsaXppbmdFdmVudChmZWF0dXJlQ29vcmRpbmF0ZSwgZmllbGRXaWR0aCwgZmllbGRIZWlnaHQpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuZW1pdChHYW1lRXZlbnQuQ0hBTkdFX0JMT0NLX0FOSU1BVElPTiwgdGhpcy5fZmlyc3RUZWxlcG9ydFBvc2l0aW9uLCBUZWxlcG9ydEFuaW1hdGlvbnNUeXBlLkNob29zaW5nKTtcbiAgICB9XG4gfSk7XG4gXG4iXX0=