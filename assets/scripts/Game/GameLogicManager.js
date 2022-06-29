//#region classes-helpers
import GameEvent from 'GameEvent';
import GameObjectType from 'GameObjectType';
import BlockColorType from 'BlockColorType';
import UiScreenType from 'UiScreenType';
import EffectType from 'EffectType';

//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        numeralToDestroy: { default: 3 },
        //#endregion

        //#region public fields and properties
        //#endregion

        //#region private fields and properties
        _field: { default: null, type: cc.Node, serializable: false },
        _numeralStrings: { default: 7, serializable: false },
        _numeralColumns: { default: 10, serializable: false },
        _blocksArray: { default: [], serializable: false },
        _tempCoalitionArray: { default: [], serializable: false },
        _numeralToDestroy: { default: 3, serializable: false },
        _numeralFallBlocks: { default: 0, serializable: false },
        _stopSuperAbility: { default: false, serializable: false },
        _isScoreEnoughForBomb: { default: false, serializable: false },
        //#endregion
    },

    //#region life-cycle callbacks
    onEnable() {
        this._handleSubscription(true);
        this._numeralToDestroy = this.numeralToDestroy;
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

        cc.systemEvent[func](GameEvent.FIELD_ON, this.onFieldOn, this);
        cc.systemEvent[func](GameEvent.BLOCK_CHOSEN, this.onBlockChosen, this);
        cc.systemEvent[func](GameEvent.BLOCK_FALL, this.onBlockFall, this);
        cc.systemEvent[func](GameEvent.CREATE_SUPER_ABILITY, this.onCreateSuperAbility, this);
        cc.systemEvent[func](GameEvent.BOMB_IS_AVAILABLE, this.onBombIsAvailable, this);
    },

    _createBlockArray() {
        this._blocksArray = [];
        let id = 1;
        for (let i = 0; i < this._numeralColumns; i += 1) {
            for (let j = 0; j < this._numeralStrings; j += 1) {
                const position = this._setLocation(j, i);
                if (!this._blocksArray[j]) this._blocksArray[j] = [];
                this._blocksArray[j][i] = this._createBlock(position);
                this._blocksArray[j][i].id = id;
                this._blocksArray[j][i].iI = j;
                this._blocksArray[j][i].iJ = i;
                id += 1;
            }
        }
    },

    _createBlock(position) {
        const newBlock = cc.instantiate(this._block);
        newBlock.kind = this._chooseColor();
        newBlock.setParent(this._field);
        newBlock.setPosition(position);
        newBlock.active = true;
        newBlock.coalition = 0;
        newBlock.transferred = 0;
        return newBlock;
    },

    _setLocation(y, x) {
        return cc.v2(x * 155 - 697, y * 233 - 700);
    },

    _chooseColor() {
        return Math.ceil(Math.random() * 5) - 1;
    },

    _findCoalition(block, kind, coalition) {
        if ((block && block.iI < 0) || block.iI > this._numeralStrings - 1 || block.iJ < 0 || block.iJ > this._numeralColumns - 1) {
            return;
        }

        if (block.coalition !== 0 || block.kind !== kind) {
            return;
        }

        block.coalition = coalition;
        this._tempCoalitionArray.push(block);

        if (this._blocksArray[block.iI - 1] && this._blocksArray[block.iI - 1][block.iJ])
            this._findCoalition(this._blocksArray[block.iI - 1][block.iJ], kind, coalition);
        if (this._blocksArray[block.iI + 1] && this._blocksArray[block.iI + 1][block.iJ])
            this._findCoalition(this._blocksArray[block.iI + 1][block.iJ], kind, coalition);
        if (this._blocksArray[block.iI] && this._blocksArray[block.iI][block.iJ - 1])
            this._findCoalition(this._blocksArray[block.iI][block.iJ - 1], kind, coalition);
        if (this._blocksArray[block.iI] && this._blocksArray[block.iI][block.iJ + 1])
            this._findCoalition(this._blocksArray[block.iI][block.iJ + 1], kind, coalition);
    },

    _checkOnShuffle() {
        this._numeralCoalition = 1;
        this._tempCoalitionArray = [];
        for (let i = 0; i < this._numeralStrings; i += 1) {
            for (let j = 0; j < this._numeralColumns - 1; j += 1) {
                this._findCoalition(this._blocksArray[i][j], this._blocksArray[i][j].kind, this._numeralCoalition);
                if (this._tempCoalitionArray.length >= this._numeralToDestroy) this._numeralCoalition += 1;
                this._tempCoalitionArray = [];
                if (this._numeralCoalition > 1) return true;
            }
        }
        return false;
    },

    _checkClickedBlock(block, kindSuperAbility = 0) {
        if (kindSuperAbility === BlockColorType.Tnt) {
            this._useAbilityTnt(block);
            cc.systemEvent.emit(GameEvent.BLOCK_CAN_BE_CHOSEN);
            this._stopSuperAbility = false;
            cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, true);
            return;
        }

        this._resetCoalition();

        this._tempCoalitionArray = [];

        if (kindSuperAbility !== BlockColorType.Bomb) {
            this._findCoalition(block, block.kind, 1);

            if (this._tempCoalitionArray.length < this._numeralToDestroy) {
                this._resetCoalition();
                cc.systemEvent.emit(GameEvent.BLOCK_CAN_BE_CHOSEN);
                return;
            }
        } else {
            cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, true);
            this._stopSuperAbility = false;
            cc.systemEvent.emit(GameEvent.BLOCK_BOMB_CHOSEN);
            const iI = block.iI;
            const iJ = block.iJ;
            for (let i = 1; i > -2; i -= 1) {
                for (let j = 1; j > -2; j -= 1) {
                    if (this._blocksArray[iI - i] && this._blocksArray[iI - i]) {
                        if (this._blocksArray[iI - i][iJ - j]) {
                            this._tempCoalitionArray.push(this._blocksArray[iI - i][iJ - j]);
                        }
                    }
                }
            }
        }

        cc.systemEvent.emit(GameEvent.PLAYER_MOVED);

        this._transferBlocksUp();

        cc.systemEvent.emit(GameEvent.TIME_TO_FALL);

        this._regularizeTransferredBlocks();

        this._resetCoalition();
    },

    _transferBlocksUp() {
        let _columnsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        this._numeralFallBlocks = this._tempCoalitionArray.length;
        cc.systemEvent.emit(GameEvent.SCORE_GOT, this._numeralFallBlocks);

        this._tempCoalitionArray.forEach((element) => {
            element.opacity = 0;

            let newI = 7 + _columnsArray[element.iJ];

            cc.systemEvent.emit(GameEvent.SPAWN_EFFECT, EffectType.Explosion, {
                position: element.convertToWorldSpaceAR(cc.v2(0, 0)),
                scale: cc.v2(0.6, 0.6),
            });
            cc.systemEvent.emit(GameEvent.CAMERA_START_SHAKE);
            this.scheduleOnce(() => {
                cc.systemEvent.emit(GameEvent.CAMERA_STOP_SHAKE);
            }, 0.2);

            element.y = this._setLocation(newI, element.iJ).y;

            _columnsArray[element.iJ] += 1;

            element.kind = this._chooseColor();
            cc.systemEvent.emit(GameEvent.CHOOSE_COLOR_BLOCK, element.id, element.kind);

            if (!this._blocksArray[newI]) this._blocksArray[newI] = [];

            this._blocksArray[newI][element.iJ] = element;

            this._blocksArray[element.iI][element.iJ] = null;

            for (let i = element.iI; i < this._numeralStrings + _columnsArray[element.iJ]; i += 1) {
                if (this._blocksArray[i][element.iJ]) {
                    this._blocksArray[i][element.iJ].transferred += 1;
                }
            }

            element.transferred = newI - 6;

            element.iI = newI;
        });
    },

    _regularizeTransferredBlocks() {
        const lengthBlockArray = this._blocksArray.length;

        for (let i = 7; i < lengthBlockArray; i += 1) {
            for (let j = 0; j < this._numeralColumns; j += 1) {
                if (this._blocksArray[i] && this._blocksArray[i][j]) {
                    for (let k = 0; k < lengthBlockArray; k += 1) {
                        if (this._blocksArray[k] && this._blocksArray[k][j] && this._blocksArray[k][j].transferred > 0) {
                            this._blocksArray[k - this._blocksArray[k][j].transferred][j] = this._blocksArray[k][j];
                            this._blocksArray[k - this._blocksArray[k][j].transferred][j].iI = k - this._blocksArray[k][j].transferred;
                            this._blocksArray[k - this._blocksArray[k][j].transferred][j].transferred = 0;
                            this._blocksArray[k - this._blocksArray[k][j].transferred][j].coalition = 0;
                        }
                    }
                }
            }
        }
        this._lastFallingBlock = lengthBlockArray - 7;
        this._blocksArray.splice(7, lengthBlockArray - 7);

        for (let i = 0; i < this._numeralStrings; i += 1) {
            for (let j = 0; j < this._numeralColumns; j += 1) {
                this._blocksArray[i][j].removeFromParent();
                this._field.addChild(this._blocksArray[i][j]);
            }
        }

        if (!this._checkOnShuffle() && !this._isScoreEnoughForBomb) {
            this._createBlockArray();
            if (!this._checkOnShuffle()) {
                cc.systemEvent.emit(GameEvent.SHOW_SCREEN, UiScreenType.Result, true, false);
                while (!this._checkOnShuffle()) {
                    this._createBlockArray();
                }
            }
        }
    },

    _resetCoalition() {
        for (let i = 0; i < this._numeralStrings; i += 1) {
            for (let j = 0; j < this._numeralColumns; j += 1) {
                this._blocksArray[i][j].coalition = 0;
            }
        }
    },

    _findIndexes(blockId) {
        for (let i = 0; i < this._numeralStrings; i += 1) {
            for (let j = 0; j < this._numeralColumns; j += 1) {
                if (this._blocksArray[i][j].id === blockId) return cc.v2(i, j);
            }
        }
    },

    _useAbilityTnt(block) {
        this._createBlockArray();
        cc.systemEvent.emit(GameEvent.SCORE_GOT, this._numeralColumns * this._numeralStrings);
    },
    //#endregion

    //#region event handlers
    onCreateSuperAbility(kindAbility) {
        if (this._stopSuperAbility) return;
        cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, false);
        this._stopSuperAbility = true;

        const randomId = Math.ceil(Math.random() * 69);
        cc.systemEvent.emit(GameEvent.CREATE_SUPER_BLOCK, randomId, kindAbility);
    },

    onFieldOn(field, block) {
        this._field = field;
        this._block = block;
        if (this._field && this._block) this._createBlockArray();
        while (!this._checkOnShuffle()) {
            this._createBlockArray();
        }
    },

    onBlockChosen(block) {
        cc.systemEvent.emit(GameEvent.STOP_INPUT);
        let kindSuperAbility = 0;
        if (block.kind === BlockColorType.Bomb || block.kind === BlockColorType.Tnt) {
            kindSuperAbility = block.kind;
        }
        this._checkClickedBlock(block, kindSuperAbility);
    },

    onBlockFall(transferred) {
        if (transferred === this._lastFallingBlock) {
            this.scheduleOnce(() => {
                cc.systemEvent.emit(GameEvent.BLOCK_CAN_BE_CHOSEN);
            }, 0.35);
        }
    },

    onBombIsAvailable(isAvailable) {
        this._isScoreEnoughForBomb = isAvailable;
    },
    //#endregion
});
