"use strict";
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