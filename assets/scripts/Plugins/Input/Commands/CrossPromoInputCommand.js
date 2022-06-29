import GameEvent from 'GameEvent';
import IInputCommand from 'IInputCommand';

export default class CrossPromoInputCommand extends IInputCommand {
    constructor(manager) {
        super(manager);
    }

    onDown(touch, place, target) {}

    onUp(touch, place, target) {
        try {
            closeTab();
        } catch (err) {
            cc.log('Close Button');
        }
    }
}
