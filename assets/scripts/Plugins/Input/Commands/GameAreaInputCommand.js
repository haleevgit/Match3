import GameEvent from 'GameEvent';

import IInputCommand from 'IInputCommand';

const GameAreaInputCommand = class GameAreaInputCommand extends IInputCommand {
    constructor(manager) {
        super(manager);
    }

    destroyTouch(touch) {
        super.destroyTouch(touch);
        this._currentTouch = null;
    }

    onDown(touch, place, target, c4, c5, kindAbility) {
        cc.systemEvent.emit(GameEvent.CREATE_SUPER_ABILITY, kindAbility);
        cc.log(this.node);
    }

    onMove(touch, place, target) {}

    onUp(touch, place, target) {}
};

export default GameAreaInputCommand;
