import GameEvent from 'GameEvent';
import IInputCommand from 'IInputCommand';

export default class FakeScreenInputCommand extends IInputCommand {
    constructor(manager) {
        super(manager);

        this._vungleOnComplete = false;
    }

    onDown(touch, place, target) {
        if (!this._vungleOnComplete) {
            window.onGameComplete instanceof Function && window.onGameComplete();
            this._vungleOnComplete = true;
        }
        cc.systemEvent.emit(GameEvent.REDIRECT_PROCESSING);
    }

    onUp(touch, place, target) {}
}
