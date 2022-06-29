import GameEvent from 'GameEvent';

import IInputCommand from 'IInputCommand';
import BombType from 'BombType';

const TntShopInputCommand = class TntShopInputCommand extends IInputCommand {
    constructor(manager) {
        super(manager);
    }

    destroyTouch(touch) {
        super.destroyTouch(touch);
        this._currentTouch = null;
    }

    onDown(touch, place, target, c4, c5) {
        cc.systemEvent.emit(GameEvent.CHECK_SCORES_FOR_ABILITY, BombType.Tnt);
    }

    onMove(touch, place, target) {}

    onUp(touch, place, target) {}
};

export default TntShopInputCommand;
