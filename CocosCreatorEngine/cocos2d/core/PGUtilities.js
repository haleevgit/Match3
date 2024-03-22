const Utilities = {
	createDebugPoint(size = 10, color) {
		const point = new cc.Node('DebugPoint');
		point.setParent(cc.director.getScene());

		const graphics = point.addComponent(cc.Graphics);
		graphics.fillColor = color || cc.Color.RED;
		graphics.roundRect(size * -0.5, size * -0.5, size, size, size * 0.2);
		graphics.fill();

		return point;
	},

	randomInt(min = 0, max = 2) {
		return Math.floor(Math.random() * (max - min)) + min;
	},

	randomBoolean() {
		return !Math.floor(Math.random() * 2);
	},

	randomRange(min = 0, max = 1) {
		return Math.random() * (max - min) + min;
	},

	randomRangeAroundZero(min = 0, max = 1) {
		return Math.sign(Math.random() - 0.5) * Utilities.randomRange(min, max);
	},

	randomElementFromArray(array = []) {
		let randomIndex = Utilities.randomInt(0, array.length);
		return array[randomIndex];
	},

	randomItemFromObject(obj) {
		const keys = Object.keys(obj);
		const randomKey = Math.floor(Math.random() * keys.length);

		return obj[keys[randomKey]];
	},

	clamp(value, min = 1, max = 1) {
		return Math.min(Math.max(value, min), max);
	},

	toString(value) {
		if (typeof value === 'object' && typeof value.toString === 'function') {
			return value.toString();
		}

		return `${value}`;
	},

	lerp(from = 0, to = 1, ratio = 0) {
		return from + (to - from) * ratio;
	},
	inverseLerp(from, to, value) {
		return (value - from) / (to - from);
	},

	roundWithPrecision(value = 1, precision = Utilities.PRECISION) {
		return Math.floor(value * p) / p;
	},

	getMaxOfVec(vec1, vec2, out) {
		if (!(vec1 instanceof vec2.constructor)) return;

		if (!(out instanceof vec1.constructor)) {
			out = new vec1.constructor();
		}

		if (typeof out.x === 'number') {
			out.x = Math.max(vec1.x, vec2.x);
		}

		if (typeof out.y === 'number') {
			out.y = Math.max(vec1.y, vec2.y);
		}

		if (typeof out.z === 'number') {
			out.z = Math.max(vec1.z, vec2.z);
		}

		if (typeof out.w === 'number') {
			out.w = Math.max(vec1.w, vec2.w);
		}

		return out;
	},

	getMinOfVec(vec1, vec2, out) {
		if (!(vec1 instanceof vec2.constructor)) return;

		if (!(out instanceof vec1.constructor)) {
			out = new vec1.constructor();
		}

		if (typeof out.x === 'number') {
			out.x = Math.min(vec1.x, vec2.x);
		}

		if (typeof out.y === 'number') {
			out.y = Math.min(vec1.y, vec2.y);
		}

		if (typeof out.z === 'number') {
			out.z = Math.min(vec1.z, vec2.z);
		}

		if (typeof out.w === 'number') {
			out.w = Math.min(vec1.w, vec2.w);
		}

		return out;
	},

	getAverageOfVec(...args) {
		let vecs = args;

		if (args[0] instanceof Array) {
			vecs = args[0];
		}

		let out = new vecs[0].constructor();

		for (let vec of vecs) {
			out.addSelf(vec);
		}

		return out.divSelf(vecs.length || 1);
	},

	getAverageOfVecMag(...args) {
		let vecs = args;

		if (args[0] instanceof Array) {
			vecs = args[0];
		}

		let out = 0;

		for (let vec of vecs) {
			out += vec.mag();
		}

		out /= vecs.length || 1;

		return out;
	},

	nextPow2(val) {
		--val;
		val = (val >> 1) | val;
		val = (val >> 2) | val;
		val = (val >> 4) | val;
		val = (val >> 8) | val;
		val = (val >> 16) | val;
		++val;

		return val;
	},

	log2(v) {
		var r, shift;
		r = (v > 0xffff) << 4;
		v >>>= r;
		shift = (v > 0xff) << 3;
		v >>>= shift;
		r |= shift;
		shift = (v > 0xf) << 2;
		v >>>= shift;
		r |= shift;
		shift = (v > 0x3) << 1;
		v >>>= shift;
		r |= shift;
		return r | (v >> 1);
	},

	log10(v) {
		return v >= 1000000000
			? 9
			: v >= 100000000
			? 8
			: v >= 10000000
			? 7
			: v >= 1000000
			? 6
			: v >= 100000
			? 5
			: v >= 10000
			? 4
			: v >= 1000
			? 3
			: v >= 100
			? 2
			: v >= 10
			? 1
			: 0;
	},

	multiplyQuats(quat1, quat2, out) {
		if (!(out instanceof cc.Quat)) {
			out = cc.quat();
		}

		out.w = quat1.w * quat2.w - quat1.x * quat2.x - quat1.y * quat2.y - quat1.z * quat2.z;
		out.x = quat1.w * quat2.x + quat1.x * quat2.w + quat1.y * quat2.z - quat1.z * quat2.y;
		out.y = quat1.w * quat2.y + quat1.y * quat2.w + quat1.z * quat2.x - quat1.x * quat2.z;
		out.z = quat1.w * quat2.z + quat1.z * quat2.w + quat1.x * quat2.y - quat1.y * quat2.x;

		return out;
	},

	rotateVec3ByQuat(vec, quat, out) {
		let u = cc.v3(quat.x, quat.y, quat.z);
		let s = quat.w;

		let v1 = cc.v3();
		let v2 = cc.v3();
		let v3 = cc.v3();

		v1 = u.mul(u.dot(vec) * 2);
		v2 = vec.mul(s * s - u.dot(u));
		v3 = u.cross(vec).mul(2 * s);

		out.x = v1.x + v2.x + v3.x;
		out.y = v1.y + v2.y + v3.y;
		out.z = v1.z + v2.z + v3.z;

		return out;
	},

	DEG_TO_RAD: Math.PI / 180,
	RAD_TO_DEG: 180 / Math.PI,
	PRECISION: 100,
};

module.export = pg.utilities = Utilities;
