import PGTween from './PGTween';

export default class PGTweenManager {
    // #region static fields

    static _instance = null;
    static enableAccumulator = false;
    static maxAccumulator = 1 / 10;
    static fixedTimeStep = 1 / 60;

    // #endregion

    // #region life-cycle

    constructor() {
        if (PGTweenManager._instance) {
            return PGTweenManager._instance;
        }

        PGTweenManager._instance = this;

        this._director = cc.director;
        cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this.update, this);

        this.tweens = [];

        return PGTweenManager._instance;
    }

    update(dt = this._director._deltaTime) {
        let deltaTime = dt;

        if (PGTweenManager.enableAccumulator && dt > PGTweenManager.maxAccumulator) {
            const fixedTimeStep = PGTweenManager.fixedTimeStep;

            while (deltaTime > fixedTimeStep) {
                this.update(fixedTimeStep);
                deltaTime -= fixedTimeStep;
            }
        }

        if (this.tweens !== null) {
            for (const i in this.tweens) {
                if (this.tweens[i] !== null) {
                    this.tweens[i].update(deltaTime);
                }
            }
        }
    }

    // #endregion

    // #region tween creation

    /**  Public
     * add tween to tween manager pool
     * @param {Object} target - target
     * @param {Object} finishProps - finite values properties
     *        finishProps = {
     *             property1 : value1,
     *             property2 : value2,
     *             ...
     *             propertyN : valueN,
     *        }
     * @param {number} duration - tween duration (seconds) - 1 second by default
     * @param {string} easing - easing function type - 'linear' by default
     * @param {boolean} autoStart - should tween run immediately - true by default
     * @param {number} delay - delay before tween will start - 0 by default
     * @param {Function} initCallback - callback that will be called right before tween's start - null by default
     * @param {Function} completeCallback - callback that will be called right after tween's stop, will be called if tween is looped - null by default
     * @param {Function} updateCallback - callback that will be called every tween's update - null by default
     * @example
     * cc.tweenManager.add(targetNode, {opacity : 255}, .5, 'sineOut', false, 0);
     */
    add(
        node,
        finishProps,
        duration = 1,
        easing = 'linear',
        autoStart = true,
        delay = 0,
        initCallback = null,
        completeCallback = null,
        updateCallback = null
    ) {
        const tween = new PGTween(this);

        tween.create(node, finishProps, duration, easing, autoStart, delay, initCallback, completeCallback, updateCallback);

        this.addTween(tween);

        if (autoStart) {
            tween.start();
            // this.tweens.push(tween);
        }

        return tween;
    }

    addTween(tween) {
        if (this.getTweenIndex(tween) === -1) {
            this.tweens.push(tween);
        }
    }

    getTweenIndex(tween) {
        return this.tweens.indexOf(tween);
    }

    // #endregion

    deleteTween(tween, callback) {
        if (!(tween instanceof PGTween)) return;

        const index = this.getTweenIndex(tween);

        if (index !== -1) {
            this.tweens.splice(index, 1);
            tween.onRemove();
            if (typeof callback === 'function') callback();
        }

        return null;
    }
}

pg.PGTweenManager = module.exports = PGTweenManager;
pg.TweenManager = module.exports = PGTweenManager;
pg.tweenManager = new PGTweenManager();
