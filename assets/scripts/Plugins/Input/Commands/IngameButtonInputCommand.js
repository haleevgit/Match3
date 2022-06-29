import GameEvent from 'GameEvent';
import IInputCommand from 'IInputCommand';
import UiScreenType from 'UiScreenType';

export default class IngameButtonCommand extends IInputCommand {
    constructor(manager) {
        super(manager);
    }

    onDown(touch, place, target) {
        cc.systemEvent.emit(GameEvent.SHOW_SCREEN, UiScreenType.Result, false);
    }

    onUp(touch, place, target) {}
}
