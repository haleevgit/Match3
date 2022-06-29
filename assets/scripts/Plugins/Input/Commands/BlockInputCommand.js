import GameEvent from 'GameEvent';
import IInputCommand from 'IInputCommand';

export default class BlockInputCommand extends IInputCommand {
    constructor(manager) {
        super(manager);
    }

    onDown(touch, place, target) {
        cc.systemEvent.emit(GameEvent.BLOCK_CHOSEN, place.node.parent);
    }

    onUp(touch, place, target) {}
}
