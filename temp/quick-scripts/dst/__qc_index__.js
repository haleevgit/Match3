
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