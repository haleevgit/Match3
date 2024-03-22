
(function () {
var scripts = [{"deps":{"./assets/scripts/Game/Enums/GameEvent":3,"./assets/scripts/Game/Enums/TeleportAnimationsType":9,"./assets/scripts/Game/Enums/BlockColorType":30,"./assets/scripts/Game/Logic/GameLogicManager":11,"./assets/scripts/Game/Logic/FeatureManager":20,"./assets/scripts/Game/Logic/Features/ColumnEraser":1,"./assets/scripts/Game/Logic/Features/Feature":28,"./assets/scripts/Game/Logic/Features/Teleport":12,"./assets/scripts/Game/Logic/Features/BombLogic":10,"./assets/scripts/Game/Ui/CrossPromoCross":15,"./assets/scripts/Game/Ui/IScreen":14,"./assets/scripts/Game/Ui/ScoreManager":13,"./assets/scripts/Game/Ui/UiManager":18,"./assets/scripts/Game/Ui/UiScreenType":16,"./assets/scripts/Game/Ui/CatcherOff":17,"./assets/scripts/Game/Ui/Screen/ScreenManager":19,"./assets/scripts/Game/Ui/Screen/ResultManager":4,"./assets/scripts/Game/World/Field":21,"./assets/scripts/Game/World/Block":5,"./assets/scripts/Game/Effect/EffectType":6,"./assets/scripts/Plugins/Input/InputManager":22,"./assets/scripts/Plugins/Input/Commands/BombShopInputCommand":2,"./assets/scripts/Plugins/Input/Commands/CrossPromoInputCommand":25,"./assets/scripts/Plugins/Input/Commands/FakeScreenInputCommand":29,"./assets/scripts/Plugins/Input/Commands/GameAreaInputCommand":34,"./assets/scripts/Plugins/Input/Commands/IInputCommand":23,"./assets/scripts/Plugins/Input/Commands/IngameButtonInputCommand":24,"./assets/scripts/Plugins/Input/Commands/TeleportShopInputCommand":26,"./assets/scripts/Plugins/Input/Commands/TntShopInputCommand":27,"./assets/scripts/Plugins/Input/Commands/BlockInputCommand":33,"./assets/scripts/Plugins/Input/Enums/InputType":7,"./assets/scripts/Plugins/Input/Enums/InputDirection":31,"./assets/scripts/Plugins/Input/InputCatcher":35,"./assets/scripts/Plugins/Camera/CameraController2D":8,"./assets/scripts/Game/Effect/Effect":32,"./assets/scripts/Game/Enums/BombType":36},"path":"preview-scripts/__qc_index__.js"},{"deps":{"GameEvent":3,"Feature":28},"path":"preview-scripts/assets/scripts/Game/Logic/Features/ColumnEraser.js"},{"deps":{"GameEvent":3,"IInputCommand":23,"BlockColorType":30},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/BombShopInputCommand.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Enums/GameEvent.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/Ui/Screen/ResultManager.js"},{"deps":{"GameEvent":3,"BlockColorType":30,"InputDirection":31,"BombType":36,"../Enums/TeleportAnimationsType":9},"path":"preview-scripts/assets/scripts/Game/World/Block.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Effect/EffectType.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Plugins/Input/Enums/InputType.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Plugins/Camera/CameraController2D.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Enums/TeleportAnimationsType.js"},{"deps":{"GameEvent":3,"Feature":28},"path":"preview-scripts/assets/scripts/Game/Logic/Features/BombLogic.js"},{"deps":{"GameEvent":3,"BlockColorType":30,"UiScreenType":16,"EffectType":6},"path":"preview-scripts/assets/scripts/Game/Logic/GameLogicManager.js"},{"deps":{"Feature":28,"TeleportAnimationsType":9,"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/Logic/Features/Teleport.js"},{"deps":{"GameEvent":3,"UiScreenType":16,"BombType":36,"../Enums/BlockColorType":30},"path":"preview-scripts/assets/scripts/Game/Ui/ScoreManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Ui/IScreen.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/Ui/CrossPromoCross.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Ui/UiScreenType.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/Ui/CatcherOff.js"},{"deps":{"GameEvent":3,"UiScreenType":16,"IScreen":14},"path":"preview-scripts/assets/scripts/Game/Ui/UiManager.js"},{"deps":{"GameEvent":3,"UiScreenType":16},"path":"preview-scripts/assets/scripts/Game/Ui/Screen/ScreenManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Logic/FeatureManager.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/World/Field.js"},{"deps":{"GameEvent":3,"InputDirection":31,"InputType":7,"IInputCommand":23,"GameAreaInputCommand":34,"BombShopInputCommand":2,"TeleportShopInputCommand":26,"TntShopInputCommand":27,"IngameButtonInputCommand":24,"FakeScreenInputCommand":29,"CrossPromoInputCommand":25,"BlockInputCommand":33},"path":"preview-scripts/assets/scripts/Plugins/Input/InputManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/IInputCommand.js"},{"deps":{"GameEvent":3,"IInputCommand":23,"UiScreenType":16},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/IngameButtonInputCommand.js"},{"deps":{"GameEvent":3,"IInputCommand":23},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/CrossPromoInputCommand.js"},{"deps":{"GameEvent":3,"IInputCommand":23,"BlockColorType":30},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/TeleportShopInputCommand.js"},{"deps":{"GameEvent":3,"IInputCommand":23,"BombType":36},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/TntShopInputCommand.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/Logic/Features/Feature.js"},{"deps":{"GameEvent":3,"IInputCommand":23},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/FakeScreenInputCommand.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Enums/BlockColorType.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Plugins/Input/Enums/InputDirection.js"},{"deps":{"GameEvent":3},"path":"preview-scripts/assets/scripts/Game/Effect/Effect.js"},{"deps":{"GameEvent":3,"IInputCommand":23},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/BlockInputCommand.js"},{"deps":{"GameEvent":3,"IInputCommand":23},"path":"preview-scripts/assets/scripts/Plugins/Input/Commands/GameAreaInputCommand.js"},{"deps":{"GameEvent":3,"InputDirection":31,"InputType":7},"path":"preview-scripts/assets/scripts/Plugins/Input/InputCatcher.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/Enums/BombType.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    