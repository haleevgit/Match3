
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