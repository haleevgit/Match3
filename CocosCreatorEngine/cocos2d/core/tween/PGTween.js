export default class PGTween extends cc.EventTarget {
    // #region static fields

    static EventType = {
        Start: 'Start',
        Update: 'Update',
        Complete: 'Complete',
    };

    // #endregion

    // #region create

    constructor(manager) {
        super();

        this.timeToThrowEventsMap = {};

        this.manager = manager;
        this.timeScale = 1;

        this.states = {
            isLoop: false,
            isYoyo: false,
            isReverse: false,
            isPingPong: false,
        };

        this.reverseCoef = 1;
        this.isWaitingForDelay = false;
    }

    create(node, finishProps, duration, easing, isAutoStart, delay, initCallback, completeCallback, updateCallback) {
        this.node = node;

        this.delay = delay;
        this.delayTimer = 0;

        this.commonDuration = duration;
        this.commonInterpol = 0;
        this.prevCommonInterpol = 0;

        this.properties = [];
        this.initialProperties = {};
        this.finishProperties = {};

        this.easingFunc = cc.easing[easing];

        this.durations = {};
        this.interpols = {};
        this.iterators = {};

        for (const i in finishProps) {
            this.properties.push(i);
            this.initialProperties[i] = this.node[i];
            this.finishProperties[i] = finishProps[i];

            if (finishProps[i].length === 0 || finishProps[i].length === undefined) {
                this.durations[i] = duration;
                this.iterators[i] = null;
            } else {
                this.durations[i] = duration / finishProps[i].length;
                this.iterators[i] = 0;
            }
            this.interpols[i] = 0;
        }

        this.startCallback = initCallback;
        this.completeCallback = completeCallback;
        this.updateCallback = updateCallback;

        this.isActive = false;
        this.isEventsReversed = false;

        if (this.delay !== 0 && isAutoStart) {
            this.isWaitingForDelay = true;
        }

        return this;
    }

    // #endregion

    // #region properties

    set TimeScale(value) {
        this.timeScale = value;
    }

    get TimeScale() {
        return this.timeScale;
    }

    get IsActive() {
        return this.isActive;
    }

    get IsLoop() {
        return this.states.isLoop;
    }

    get IsReverse() {
        return this.states.isReverse;
    }

    get IsYoyo() {
        return this.states.isYoyo;
    }

    get IsPingPong() {
        return this.states.isPingPong;
    }

    set onComplete(value) {
        if (typeof value === 'function') this.completeCallback = value;
    }

    set onUpdate(value) {
        if (typeof value === 'function') this.updateCallback = value;
    }

    set onStart(value) {
        if (typeof value === 'function') this.startCallback = value;
    }

    // #endregion

    // #region life-cycle

    start() {
        this.manager.addTween(this);

        if (!this.isActive) {
            if (this.delay === 0) {
                this.activate();
            } else {
                this.isWaitingForDelay = true;
                this.delayTimer = 0;
            }
        }
    }

    stop(shouldCallCallback = false) {
        this.isActive = false;
        this.manager.deleteTween(this, shouldCallCallback && typeof this.completeCallback === 'function' ? this.completeCallback : null);
    }

    activate() {
        if (typeof this.startCallback === 'function') {
            this.startCallback();
        }

        this.emit(PGTween.EventType.Start);

        this.isActive = true;
        this.commonInterpol = 0;

        for (const property in this.finishProperties) {
            if (!this.states.isLoop) {
                this.initialProperties[property] = this.node[property];
            }

            if (this.finishProperties[property].length !== 0 && this.finishProperties[property].length !== undefined) {
                this.iterators[property] = 0;
            }

            this.interpols[property] = 0;
        }
    }

    restart(withCompleteCallback = true) {
        if (withCompleteCallback) {
            if (typeof this.completeCallback === 'function') {
                this.completeCallback();
            }

            this.emit(PGTween.EventType.Complete);
        }

        if (typeof this.updateCallback === 'function') {
            this.updateCallback();
        }

        this.commonInterpol = 0;

        for (const i in this.properties) {
            const property = this.properties[i];

            this.iterators[property] = this.iterators[property] === null ? null : 0;
            this.interpols[property] = this.timeScale < 0 ? this.durations[property] : 0;
        }

        this.isActive = false;

        if (this.delay !== 0) {
            this.isWaitingForDelay = true;
            this.delayTimer = 0;
        } else {
            this.activate();
        }
    }

    // #endregion

    // #region states controllers

    // loop tween [0 -> 1, 0 -> 1, .., 0 -> 1]
    loop(isInternalCall = false) {
        this.updateStates('isLoop');
    }

    // reverse tween [1 -> 0]
    reverse(isInternalCall = false) {
        if (isInternalCall) {
            this.states.isReverse = true;
        } else {
            this.updateStates('isReverse');
        }

        this.reverseAllEvents();

        this.reverseCoef *= -1;

        for (const i in this.properties) {
            this.reverseProperty(this.properties[i]);
        }
    }

    reverseAllEvents() {
        this.isEventsReversed = !this.isEventsReversed;
        const newTimeToThrowEventsMap = {};

        Object.keys(this.timeToThrowEventsMap).forEach((time) => (newTimeToThrowEventsMap[1 - time] = this.timeToThrowEventsMap[time]));
        this.timeToThrowEventsMap = newTimeToThrowEventsMap;
    }

    reverseProperty(property) {
        if (this.iterators[property] === null) {
            const finishProperty = this.finishProperties[property];

            this.finishProperties[property] = this.initialProperties[property];
            this.initialProperties[property] = finishProperty;
        } else {
            let properties = [this.initialProperties[property]];

            for (const i in this.finishProperties[property]) {
                properties.push(this.finishProperties[property][i]);
            }

            properties = properties.reverse(true);

            this.initialProperties[property] = properties[0];
            this.finishProperties[property] = [];

            const propertiesAmount = properties.length;

            for (let i = 1; i < propertiesAmount; i++) {
                this.finishProperties[property].push(properties[i]);
            }
        }
    }

    // [0 -> 1, 1 -> 0]
    yoyo(isInternalCall = false) {
        if (this.states.isYoyo) {
            return;
        }

        this.updateStates('isYoyo');
        this.yoyoCounter = 0;
    }

    // loop yoyo [0 -> 1, 1 -> 0, 0 -> 1, 1 -> 0, .., 0 -> 1, 1 -> 0]
    pingPong(isInternalCall = false) {
        this.updateStates('isPingPong');
    }

    // reverse and loop yoyo [1 -> 0, 0 -> 1, 1 -> 0, 0 -> 1, .., 1 -> 0, 0 -> 1]
    pingPongReverse() {
        this.reverse(true);

        this.pingPong();
    }

    // revserse and loop tween [1 -> 0, 1 -> 0, .., 1 -> 0]
    reverseLoop() {
        this.reverse(true);
        this.loop();
    }

    // reverse tween and yoyo [1 -> 0, 0 -> 1]
    yoyoReverse() {
        this.reverse(true);
        this.yoyo();
    }

    updateStates(currentState) {
        for (const i in this.states) {
            this.states[i] = false;
        }

        this.states[currentState] = true;
    }

    // #endregion

    // #region built-in tween event handlers

    /**
     *
     * @param {number || string} interpolCoef - relative time to throwEvent. For example, you add event with .5 coef. If your tween duration = 3, your event throws at 1.5 sec
     * @param {Function} callback - callback
     * @param {Object} target - context or target
     * @example
     * tween.addEvent(.5, () => {my callback code});
     * tween.addEvent(.5, this.myClassFunction, this);
     */
    addEvent(interpolCoef, callback, target) {
        this.subscribeEvent(interpolCoef, callback, target, false);

        return this;
    }

    /**
     *
     * @param {number || string} interpolCoef - relative time to throwEvent. For example, you add event with .5 coef. If your tween duration = 3, your event throws at 1.5 sec
     * @param {Function} callback - callback
     * @param {Object} target - context or target
     * @example
     * tween.addEventOnce(.01, this.sayHelloOnce, this);
     */

    addEventOnce(interpolCoef, callback, target) {
        this.subscribeEvent(interpolCoef, callback, target, true);

        return this;
    }

    subscribeEvent(interpolCoef, callback, target, isOnce) {
        if (Array.isArray(interpolCoef)) {
            interpolCoef.forEach((interpolCoef) => {
                this.addEvent(interpolCoef, callback, target);
            });

            return;
        }

        if (typeof interpolCoef !== 'number') {
            console.error('Incorrect event time');

            return;
        }

        const coefToThrowEvent = this.isEventsReversed ? 1 - interpolCoef : interpolCoef;
        let key = this.timeToThrowEventsMap[coefToThrowEvent];

        if (coefToThrowEvent <= 1 && coefToThrowEvent >= 0) {
            if (!key) {
                key = `ic${coefToThrowEvent}`;
                this.timeToThrowEventsMap[coefToThrowEvent] = key;
            }
        }

        // mb in future use this
        // else if (coefToThrowEvent === 1) {
        //     key = PGTween.EventType.Complete;
        // } else if (coefToThrowEvent === 0) {
        //     key = PGTween.EventType.Start;
        // }
        const func = isOnce ? 'once' : 'on';

        this[func](key, callback, target);
    }

    removeEvent(interpolCoef, callback, target) {
        if (Array.isArray(interpolCoef)) {
            interpolCoef.forEach((interpolCoef) => {
                this.addEvent(interpolCoef, callback, target);
            });

            return;
        }

        if (typeof interpolCoef !== 'number') {
            console.error('Incorrect event time');

            return;
        }

        let coefToRemoveEvent = interpolCoef;

        if (this.isEventsReversed) coefToRemoveEvent = 1 - coefToRemoveEvent;

        const key = this.timeToThrowEventsMap[coefToRemoveEvent];

        if (!key) {
            console.error('No such event');

            return;
        }

        this.off(key, callback, target);

        return this;
    }

    // #endregion

    // #region  change tween in real time

    /** change node's properties initial and finish values
     * @param {Object} props = {
     *             property1 : {
     *                 initial : 0,
     *                 finish : 1,
     *             },
     *             property2 : {
     *                 initial : 1,
     *                 finish : 2,
     *             },
     *         }
     */
    changeProperties(props) {
        for (const i in props) {
            if (this.properties.indexOf(i) !== -1) {
                this.initialProperties[i] = props[i].initial === null || props[i].initial === undefined ? this.node[i] : props[i].initial;
                this.finishProperties[i] = props[i].finish === null || props[i].initial === undefined ? 0 : props[i].finish;

                if (props[i].finish.length === 0 || props[i].finish.length === undefined) {
                    this.durations[i] = this.commonDuration;
                    this.interpols[i] = this.commonInterpol;
                    this.iterators[i] = null;
                } else {
                    this.durations[i] = this.commonDuration / props[i].finish.length;
                    this.iterators[i] = 0;

                    for (let j = props[i].finish.length - 1; j >= 0; j--) {
                        if (this.commonInterpol >= this.durations[i] * j) {
                            this.interpols[i] = this.commonInterpol - j;
                            break;
                        }
                    }
                }

                if (this.IsReverse && this.reverseCoef < 0) {
                    this.reverseProperty(i);
                }
            }
        }
    }

    /** add callback that will be called right before tween's start
     * @param {Function} startCallback - callback function
     */
    addStartCallback(startCallback) {
        this.startCallback = startCallback;
    }

    /** add callback that will be called right after tween's stop, will be called if tween is looped
     * @param {Function} completeCallback - callback function
     */
    addCompleteCallback(completeCallback) {
        this.completeCallback = completeCallback;
    }

    /** add callback that will be called every tween's update
     * @param {Function} updateCallback - callback function
     */
    addUpdateCallback(updateCallback) {
        this.updateCallback = updateCallback;
    }

    // #endregion

    // #region update

    update(dt) {
        let deltaTime = dt;

        if (this.isActive) {
            deltaTime *= this.timeScale;
            this.prevCommonInterpol = this.commonInterpol;
            this.commonInterpol += Math.abs(deltaTime);

            this.checkEvents();

            if (this.commonInterpol > this.commonDuration) {
                this.updateProperties(deltaTime, true);

                if (this.states.isLoop) {
                    this.restart();
                } else if (this.states.isYoyo && this.yoyoCounter === 0) {
                    this.yoyoCounter++;

                    this.reverse(true);
                    this.restart();
                } else if (this.states.isPingPong) {
                    this.reverse(true);
                    this.restart();
                } else {
                    this.stop(true);
                }
            } else {
                this.updateProperties(deltaTime);

                if (typeof this.updateCallback === 'function') {
                    this.updateCallback();
                }

                this.emit(PGTween.EventType.Update);
            }
        } else if (this.isWaitingForDelay) {
            this.delayTimer += deltaTime;

            if (this.delayTimer >= this.delay) {
                this.activate();
            }
        }
    }

    checkEvents() {
        const relativeCoef = this.commonInterpol / this.commonDuration;
        const relativePrevCoef = this.prevCommonInterpol / this.commonDuration;

        for (const time in this.timeToThrowEventsMap) {
            if (relativeCoef >= time && relativePrevCoef <= time && this.timeToThrowEventsMap[time]) {
                this.emit(this.timeToThrowEventsMap[time], Number(time));
            }
        }
    }

    updateProperties(dt, isFinish = false) {
        for (const i in this.properties) {
            const property = this.properties[i];

            if (this.iterators[property] === null) {
                this.interpols[property] += dt;

                this.node[property] =
                    this.initialProperties[property] +
                    (this.finishProperties[property] - this.initialProperties[property]) *
                        (isFinish ? 1 : this.easingFunc(this.interpols[property] / this.durations[property]));
            } else if (this.iterators[property] < this.finishProperties[property].length) {
                this.interpols[property] += dt;

                if (this.interpols[property] > this.durations[property]) {
                    this.iterators[property]++;

                    this.interpols[property] = 0;
                } else {
                    const startPropertyValue =
                        this.iterators[property] === 0
                            ? this.initialProperties[property]
                            : this.finishProperties[property][this.iterators[property] - 1];

                    this.node[property] =
                        startPropertyValue +
                        (this.finishProperties[property][this.iterators[property]] - startPropertyValue) *
                            (isFinish ? 1 : this.easingFunc(this.interpols[property] / this.durations[property]));
                }
            }
        }
    }

    // #endregion

    // #region event handlers

    onRemove() {
        this.removeAll(this);
        this.timeToThrowEventsMap = {};

        this.isActive = false;
        this.emit(PGTween.EventType.Complete);
    }

    // TODO
    onReturnToPool() {
        this.removeAll(this);

        this.isActive = false;
        this.delay = 0;

        this.durations = 0;
        this.commonDuration = 0;
        this.commonInterpol = 0;
        this.prevCommonInterpol = 0;

        this.properties = [];
        this.initialProperties = {};
        this.finishProperties = {};

        this.easingFunc = 'linear';

        this.durations = {};
        this.interpols = {};
        this.iterators = {};

        this.startCallback = null;
        this.updateCallback = null;
        this.completeCallback = null;
    }

    // #endregion
}

pg.Tween = module.exports = PGTween;
pg.PGTween = module.exports = PGTween;
