export default class IInputCommand {
    constructor(manager) {
        this.node = manager.node;
        this.manager = manager;
        this.touches = manager.touches;

        this._currentTouch = null;
    }

    onDown(touch, place, target) {}
    onMove(touch, place, target) {}
    onUp(touch, place, target) {}

    createTouchInfo(touch, place) {
        const touchInfo = {
            id: touch._id,
            down: this.getTouchInfo(touch, place),
            last: this.getTouchInfo(touch, place),
            current: this.getTouchInfo(touch, place),
        };

        let id = this.touches.indexOf(null);

        if (id === -1) {
            id = this.touches.length;

            this.touches.push(null);
        }

        touch.__id = id;

        this.touches[id] = touchInfo;
        return touchInfo;
    }

    refreshTouchInfo(touchInfo, touch, place) {
        touchInfo.last = touchInfo.current;
        touchInfo.current = this.getTouchInfo(touch, place);
    }

    findTouch(touch) {
        return this.touches[touch.__id];
    }

    destroyTouch(touch) {
        this.touches[touch.__id] = null;
    }

    getTouchInfo(touch, place) {
        const location = touch.getLocation();
        let position = location.clone();
        let worldPosition = cc.Camera.main.getScreenToWorldPoint(touch.getLocation());

        position = this.node.convertToNodeSpaceAR(worldPosition);

        return {
            time: this.manager.time,
            location,
            position,
            worldPosition,
        };
    }
}
