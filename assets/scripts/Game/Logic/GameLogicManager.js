//#region classes-helpers
import GameEvent from 'GameEvent';
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
        _widthColumn: { default: 155, serializable: false },
        _widthOffset: { default: 697, serializable: false },
        _highColumn: { default: 233, serializable: false },
        _highOffset: { default: 700, serializable: false },
        _numberColors: { default: 5, serializable: false },
        _blocksArray: { default: [], serializable: false },
        _tempCoalitionArray: { default: [], serializable: false },
        _numeralToDestroy: { default: 3, serializable: false },
        _numeralFallBlocks: { default: 0, serializable: false },
        _stopSuperAbility: { default: false, serializable: false },
        _isScoreEnoughForBomb: { default: false, serializable: false },
        _isScoreEnoughForTeleport: { default: false, serializable: false },
        _amountBlocksForEraserAppearing: { default: 5, serializable: false },
        _isFieldOn: { default: false, serializable: false },
        _isTeleportMode: { default: false, serializable: false },


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

    //#region private methods
    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';

        cc.systemEvent[func](GameEvent.FIELD_ON, this.onFieldOn, this);
        cc.systemEvent[func](GameEvent.BLOCK_CHOSEN, this.onBlockChosen, this);
        cc.systemEvent[func](GameEvent.BLOCK_FALL, this.onBlockFall, this);
        cc.systemEvent[func](GameEvent.CREATE_SUPER_ABILITY, this.onCreateSuperAbility, this);
        cc.systemEvent[func](GameEvent.BOMB_IS_AVAILABLE, this.onBombIsAvailable, this);
        cc.systemEvent[func](GameEvent.TELEPORT_IS_AVAILABLE, this.onTeleportIsAvailable, this);
        cc.systemEvent[func](GameEvent.FEATURE_RESULT, this.onFeatureResult, this);
        cc.systemEvent[func](GameEvent.TELEPORTATION_COMPLETE, this.onTeleportationComplete, this);
        cc.systemEvent[func](GameEvent.START_TELEPORTATION, this.onStartTeleportation, this);
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
        return cc.v2(x * this._widthColumn - this._widthOffset, y * this._highColumn - this._highOffset);
    },

    _chooseColor() {
        return Math.ceil(Math.random() * this._numberColors) - 1;
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

        this._resetCoalition();

        this._tempCoalitionArray = [];

        switch (kindSuperAbility) {
            case BlockColorType.Bomb:
                cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, true);
                this._stopSuperAbility = false;
                cc.systemEvent.emit(GameEvent.BLOCK_BOMB_DONE,block.id);
                cc.systemEvent.emit(GameEvent.BLOCK_BOMB_CHOSEN, [block.iI,block.iJ], this._numeralColumns, this._numeralStrings);                    
                break;
            
            case BlockColorType.ColumnEraser:
                cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, true);
                this._stopSuperAbility = false;
                cc.systemEvent.emit(GameEvent.COLUMN_ERASER_DONE,block.id);
                cc.systemEvent.emit(GameEvent.ACTIVATE_COLUMN_ERASER, [block.iI,block.iJ], this._numeralColumns, this._numeralStrings);                    
                break;
            
            default:
                this._findCoalition(block, block.kind, 1);

                if (this._tempCoalitionArray.length < this._numeralToDestroy) {
                    this._resetCoalition();
                    cc.systemEvent.emit(GameEvent.BLOCK_CAN_BE_CHOSEN);
                    return;
                }
    
                if (this._tempCoalitionArray.length > this._amountBlocksForEraserAppearing - 1) {
                    this.onCreateSuperAbility(BlockColorType.ColumnEraser ,cc.v2(block.iI, block.iJ));
                }
                
                this._finalChecking();    
                break;
        }
    },

    _transferBlocksUp() {
        let _columnsArray =[];
        for (let i = 0; i < this._numeralColumns; i++) {
            _columnsArray.push(0);
        }

        this._numeralFallBlocks = this._tempCoalitionArray.length;
        cc.systemEvent.emit(GameEvent.SCORE_GOT, this._numeralFallBlocks);
        
        this._tempCoalitionArray.forEach((element) => {
         cc.systemEvent.emit(GameEvent.SPAWN_EFFECT, element.convertToWorldSpaceAR(cc.v2(0, 0)));
            element.opacity = 0;

            let newI = this._numeralStrings + _columnsArray[element.iJ];


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

            element.transferred = newI - this._numeralStrings;
            element.transferred ++;

            element.iI = newI;
        });
    },

    _regularizeTransferredBlocks() {
        const lengthBlockArray = this._blocksArray.length;

        for (let i = this._numeralStrings; i < lengthBlockArray; i += 1) {
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
        this._lastFallingBlock = lengthBlockArray - this._numeralStrings;
        this._blocksArray.splice(this._numeralStrings, lengthBlockArray - this._numeralStrings);

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

    _finalChecking() {
        cc.systemEvent.emit(GameEvent.PLAYER_MOVED);

        this._transferBlocksUp();

        cc.systemEvent.emit(GameEvent.TIME_TO_FALL);

        this._regularizeTransferredBlocks();

        this._resetCoalition();
    },

    _findIndexes(blockId) {
        for (let i = 0; i < this._numeralStrings; i += 1) {
            for (let j = 0; j < this._numeralColumns; j += 1) {
                if (this._blocksArray[i][j].id === blockId) return cc.v2(i, j);
            }
        }
    },

    _findID(coords) {
        for (let i = 0; i < this._numeralStrings; i += 1) {
            for (let j = 0; j < this._numeralColumns; j += 1) {
                if (this._blocksArray[i][j].iI === coords.x && this._blocksArray[i][j].iJ === coords.y) 
                    return this._blocksArray[i][j].id;
            }
        }
    },

    _useAbilityTnt(block) {
        this._createBlockArray();
        cc.systemEvent.emit(GameEvent.SCORE_GOT, this._numeralColumns * this._numeralStrings);
    },
    //#endregion

    //#region event handlers
    onCreateSuperAbility(kindAbility, coords = cc.v2(-1, -1)) {

        if (this._stopSuperAbility) 
            return;
        cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, false);
        this._stopSuperAbility = true;

        if (kindAbility === BlockColorType.Teleport) {
            this.onTeleportIsAvailable(true);
            cc.systemEvent.emit(GameEvent.TELEPORT_STARTED);
            return
        }

        this.scheduleOnce(()=>{
            let newID
            if (coords.x < 0) {
                newID = Math.ceil(Math.random() * (this._numeralStrings * this._numeralColumns - 1));
            } else {
                newID = this._findID(coords);
            }
            
            cc.systemEvent.emit(GameEvent.CREATE_SUPER_BLOCK, newID, kindAbility);    
        },0.1)
    },

    onFieldOn(field, block) {
        
        this._isFieldOn = true;
        
        this._field = field;
        this._block = block;
        if (this._field && this._block) {
            this._createBlockArray();
        }

        while (!this._checkOnShuffle()) {
            this._createBlockArray();
        }
    },

    onBlockChosen(block) {

        if (this._isTeleportMode) {
            cc.systemEvent.emit(GameEvent.TELEPORTED_BLOCK_CHOSEN, block);            
            return
        }
        
        cc.systemEvent.emit(GameEvent.STOP_INPUT);
        let kindSuperAbility = 0;
        if (block.kind === BlockColorType.Bomb || block.kind === BlockColorType.ColumnEraser) {
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

    onTeleportIsAvailable(isAvailable) {
        this._isScoreEnoughForTeleport = isAvailable;
        this._isTeleportMode = true;
    },


    onFeatureResult(numbersArray) {
        numbersArray.forEach(element => {
            this._tempCoalitionArray.push(this._blocksArray[element[1]][element[0]]);     
        });
         
        this._finalChecking();
    },

    onTeleportationComplete() {        
        this._stopSuperAbility = false;
        cc.systemEvent.emit(GameEvent.TOGGLE_SUPER_ABILITY, true);
        this._regularizeTransferredBlocks();
    },

    onStartTeleportation(first, second) {
        this._isTeleportMode = false;
        this._blocksArray[first.iI][first.iJ] = second;
        this._blocksArray[second.iI][second.iJ] = first;
        [first.iI, second.iI] = [second.iI, first.iI];
        [first.iJ, second.iJ] = [second.iJ, first.iJ];
        this._resetCoalition();
    }
    //#endregion
});
