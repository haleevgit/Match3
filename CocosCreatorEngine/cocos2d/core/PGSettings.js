class Settings {
	constructor() {
		const instance = this.constructor.instance;

		if (instance) {
			return this.constructor.instance;
		}

		this.constructor.instance = this;

		this._default_width = 640;
		this._default_height = 1136;
		this._game_width = 640;
		this._game_height = 1136;
		this._scale = 1;
		this._is_landscape = false;
		this._half_width = 320;
		this._half_height = 568;
	}

	get DEFAULT_WIDTH() {
		return this._default_width;
	}
	get DEFAULT_HEIGHT() {
		return this._default_height;
	}
	get GAME_WIDTH() {
		return this._game_width;
	}
	get GAME_HEIGHT() {
		return this._game_height;
	}
	get SCALE() {
		return this._scale;
	}
	get IS_LANDSCAPE() {
		return this._is_landscape;
	}
	get HALF_WIDTH() {
		return this._half_width;
	}
	get HALF_HEIGHT() {
		return this._half_height;
	}

	_updateSettings() {
		this._game_width = cc.winSize.width;
		this._game_height = cc.winSize.height;

		this._half_width = this.GAME_WIDTH * 0.5;
		this._half_height = this.GAME_HEIGHT * 0.5;

		this._is_landscape = this.GAME_WIDTH > this.GAME_HEIGHT;
		this._scale = this._calculateScale();
	}

	_chooseDefaultWidth() {
		const width = this.IS_LANDSCAPE ? this.DEFAULT_WIDTH : this.DEFAULT_HEIGHT;
		return width;
	}

	_chooseDefaultHeight() {
		const height = this.IS_LANDSCAPE ? this.DEFAULT_HEIGHT : this.DEFAULT_WIDTH;
		return height;
	}

	_calculateScale() {
		const widthRatio = this.GAME_WIDTH / this._chooseDefaultWidth();
		const heightRatio = this.GAME_HEIGHT / this._chooseDefaultHeight();
		const minRatio = Math.min(widthRatio, heightRatio);

		return minRatio;
	}
}

module.export = pg.settings = new Settings();
