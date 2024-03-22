const Events = {
	SIZE_CHANGE: 'size_change',
	ANALYTICS_SEND_EVENT: 'analytics_send_event',
	ANALYTICS_SET_TIMER: 'analytics_set_timer',
	ANALYTICS_REMOVE_TIMER: 'analytics_remove_timer',
	ANALYTICS_GET_CURRENT_PRESET: 'analytics_get_current_preset',
	PRESET_CHANGED: 'preset_changed',
};

pg.Events = module.exports = Events;
