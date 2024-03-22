import GameEvent from 'GameEvent';

cc.Class({
    extends: cc.Component,

    properties: {
        effect: {default: null, type: cc.Prefab},
    },
    
    onEnable() {
        this._handleSubscription(true);
    },

    onDisable() {
        this._handleSubscription(false);
    },

    _handleSubscription(isOn) {
        const func = isOn ? 'on' : 'off';
        cc.systemEvent[func](GameEvent.SPAWN_EFFECT, this.onSpawnEffect, this);
    },

    onSpawnEffect(coords) {
        const g = cc.instantiate(this.effect);
        g.setParent(this.node)
        g.x = coords.x;
        g.y = coords.y;
        g.active = true;
    }

});
