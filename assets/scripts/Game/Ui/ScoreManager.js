//#region classes-helpers
import GameEvent from 'GameEvent';
import UiScreenType from 'UiScreenType';
import BombType from 'BombType';
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        level: { default: null, type: cc.Label },
        steps: { default: null, type: cc.Label },
        localScores: { default: null, type: cc.Label },
        totalScores: { default: null, type: cc.Label },
        progress: { default: null, type: cc.Node },

        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _level: { default: 0, serializable: false },
        _steps: { default: 20 },
        _localScores: { default: 40 },
        _needingScores: { default: 0, serializable: false },
        _totalScores: { default: 0 },
        _canCheckForScoresAbility: { default: true },
        _isStopAdding: { default: false },
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        this._handleSubscription(true);
        this._createNewLevel();
        this.totalScores.string = this._totalScores;
    },

    onDisable() {
        this._handleSubscription(false);
    },

    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.SCORE_GOT, this.onScoreGot, this);
        cc.systemEvent[func](GameEvent.PLAYER_MOVED, this.onPlayerMoved, this);
        cc.systemEvent[func](GameEvent.CHECK_SCORES_FOR_ABILITY, this.onCheckScoreForAbility, this);
        cc.systemEvent[func](GameEvent.TOGGLE_SUPER_ABILITY, this.onToggleSuperAbility, this);
        cc.systemEvent[func](GameEvent.SHOW_SCREEN, this.onShowScreen, this);
    },

    _createNewLevel() {
        this._level += 1;
        this._steps = 21 - this._level;
        if (this._steps < 10) this._steps = 10;
        this._localScores = 18 + Math.ceil(this._level * 2);
        this._needingScores = this._localScores;
        this.level.string = this._level;
        this.localScores.string = this._localScores;
        this.steps.string = this._steps;
        this.progress.width = 0;
    },

    _checkForScores(scores, comparedValue) {
        if (scores >= comparedValue) return true;
        return false;
    },

    //#endregion

    //#region event handlers
    onScoreGot(scores) {
        if (this._isStopAdding) return;
        this._localScores -= scores;
        this._totalScores += scores;
        this.totalScores.string = this._totalScores;

        if (this._checkForScores(this._totalScores, 10)) cc.systemEvent.emit(GameEvent.BOMB_IS_AVAILABLE, true);

        if (this._localScores < 1) {
            cc.systemEvent.emit(GameEvent.SHOW_SCREEN, UiScreenType.Result, true, true);
            this._createNewLevel();
        } else {
            this.localScores.string = this._localScores;
            pg.tweenManager.add(this.progress, { width: 1500 * ((this._needingScores - this._localScores) / this._needingScores) }, 0.2);
        }
    },

    onPlayerMoved() {
        this._isStopAdding = false;
        this._steps -= 1;
        if (this._steps < 1) {
            cc.systemEvent.emit(GameEvent.SHOW_SCREEN, UiScreenType.Result, true, false);
        } else {
            this.steps.string = this._steps;
        }
    },

    onCheckScoreForAbility(kindSuperAbility) {
        if (!this._canCheckForScoresAbility) return;
        let isAvailable = false;
        switch (kindSuperAbility) {
            case BombType.Bomb:
                if (this._totalScores >= 10) {
                    isAvailable = true;
                    this._totalScores -= 10;
                    if (!this._checkForScores(this._totalScores, 10)) cc.systemEvent.emit(GameEvent.BOMB_IS_AVAILABLE, false);
                }
                break;
            case BombType.Tnt:
                if (this._totalScores >= 30000) {
                    isAvailable = true;
                    this._totalScores -= 30000;
                }
                break;
        }
        if (isAvailable) {
            cc.systemEvent.emit(GameEvent.CREATE_SUPER_ABILITY, kindSuperAbility);
            this.totalScores.string = this._totalScores;
        }
    },

    onToggleSuperAbility(isOn) {
        this._canCheckForScoresAbility = isOn;
    },

    onShowScreen(typeScreen, isShow, isWin = true) {
        this._isStopAdding = true;
        if (isWin) return;
        this._level = 0;
        this._totalScores = 0;
        this.totalScores.string = this._totalScores;
        this._localScores = 0;
        this._createNewLevel();
    },
    //#endregion
});
