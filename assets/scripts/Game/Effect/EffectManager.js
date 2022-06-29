import GameEvent from 'GameEvent';

import EffectType from 'EffectType';

//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        PREVIEW: {
            default: false,
            editorOnly: true,
            tooltip: 'показать все типы эффектов и префабы к ним',
        },

        effectType: {
            default: EffectType.None,
            type: EffectType,
            notify() {
                if (this.effectType !== EffectType.None) {
                    if (this._convertEffectType.indexOf(this.effectType) === -1) {
                        this._convertEffectType.push(this.effectType);
                        this._effectPrefabs.push(null);
                    }
                    this.effectPrefab = this._effectPrefabs[this._convertEffectType.indexOf(this.effectType)];
                }
            },
            serializable: false,
            tooltip: 'тип эффекта для привязки префаба',
        },

        effectPrefab: {
            default: null,
            type: cc.Prefab,
            notify() {
                if (this.effectType !== EffectType.None && (this.effectPrefab instanceof cc.Prefab || this.effectPrefab === null)) {
                    this._effectPrefabs[this._convertEffectType.indexOf(this.effectType)] = this.effectPrefab;
                }
            },

            visible() {
                return this.effectType !== EffectType.None;
            },
            serializable: false,
            tooltip: 'префаб эффекта',
        },

        effectPrefabs: {
            get() {
                return this._effectPrefabs;
            },
            type: [cc.Prefab],
            visible() {
                return this.PREVIEW;
            },
        },

        convertEffectType: {
            get() {
                return this._convertEffectType;
            },
            type: [EffectType],
            visible() {
                return this.PREVIEW;
            },
        },
        //#endregion
        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _effectPrefabs: { default: [], type: [cc.Prefab] },
        _convertEffectType: { default: [], type: [EffectType] },

        _effectPools: { default: null, serializable: false },
        _playingEffects: { default: null, serializable: false },
        //#endregion
    },

    editor: {
        menu: 'ParticleEffects/EffectManager',
    },

    //#region life-cycle callbacks
    onLoad() {
        this._effectPools = new Map();
        this._playingEffects = new Map();

        const poolManager = pg.poolManager || new pg.PoolManager();

        for (let i in this._convertEffectType) {
            this._effectPools.set(this._convertEffectType[i], {
                pool: poolManager.poolForObject(this._effectPrefabs[i], {
                    parent: this.node,
                }),
            });

            this._playingEffects.set(this._convertEffectType[i], new Map().set('default', []));
        }

        this._handleSubscription(true);
    },

    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.SPAWN_EFFECT, this.onSpawnEffect, this);
        cc.systemEvent[func](GameEvent.GET_PLAYING_EFFECTS, this.onGetPlayingEffects, this);
    },

    _getDeactivateTime(poolManager) {
        let isLoop = false;
        let maxDeactivation = 0;

        const emitters = poolManager.emitters;

        for (let i = 0; i < emitters.length; i++) {
            const emitter = emitters[i];
            const duration = emitter.life.duration;
            const delay =
                emitter.life.delay.valueType === pg.ParticleValue.ValueType.Value ? emitter.life.delay.value : emitter.life.delay.value.max;
            const maxParticleLife =
                emitter.life.lifetime.valueType === pg.ParticleValue.ValueType.Value
                    ? emitter.life.lifetime.value
                    : emitter.life.lifetime.value.max;
            const totalDeactivateTime = duration + delay + maxParticleLife;

            isLoop = isLoop || emitter.life.isLoop;
            maxDeactivation = Math.max(maxDeactivation, totalDeactivateTime);
        }

        return isLoop ? -1 : maxDeactivation;
    },
    //#endregion

    //#region event handlers
    onSpawnEffect(effectName, config, preAction, key = null) {
        const poolData = this._effectPools.get(effectName);
        if (poolData) {
            const pool = poolData.pool;
            const effect = pool.pop(preAction);

            for (let property in config) {
                effect[property] = config[property];
            }

            let effectParent;

            cc.systemEvent.emit(GameEvent.GET_GAME_OBJECT_PARENT, effect.getComponent('Effect').order, (parent) => {
                effectParent = parent;
            });

            effect.parent = effectParent;

            const particleManager = effect.getComponent('ParticleManager');

            if (particleManager) {
                const playingEffectsMap = this._playingEffects.get(effectName);
                const deactivateTime = this._getDeactivateTime(particleManager);

                if (key) {
                    if (playingEffectsMap.has(key)) {
                        playingEffectsMap.get(key).push(particleManager);
                    } else {
                        playingEffectsMap.set(key, [particleManager]);
                    }
                } else {
                    playingEffectsMap.get('default').push(particleManager);
                }

                deactivateTime >= 0 &&
                    this.scheduleOnce(() => {
                        if (pool) {
                            pool.push(effect);
                            particleManager.stop();
                            let particleManagers = playingEffectsMap.get(key || 'default');
                            let managerIndex = particleManagers.indexOf(particleManager);

                            if (managerIndex > -1) {
                                particleManagers.splice(managerIndex, 1);
                            }
                        }
                    }, deactivateTime);

                particleManager.play();
            }
        }
    },

    onGetPlayingEffects(effectName, callback) {
        if (callback instanceof Function && this._playingEffects.has(effectName)) {
            let playingParticleManagersMap = this._playingEffects.get(effectName);
            callback(playingParticleManagersMap);
        }
    },

    //#endregion
});
