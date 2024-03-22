
const JsonParser = cc.Class({
	extends: cc.Component,

	name: 'JsonParser',

	properties: {
		targetJson: {
			default: null,
			type: cc.JsonAsset
		},

		componentName: '',

		propertyNames: {
			default: [],
			type: cc.String,
		},

		EXPORT: {
			get() {
				return false
			},

			set(value) {
				if (value) {
					const exportJSON = this.getJsonObject();
		
					let content = JSON.stringify(exportJSON);
					let downloadElement = document.createElement("a");
					let file = new Blob([content], {type : 'application/json'});
		
					downloadElement.href = URL.createObjectURL(file);
		
					const name = (this.targetJson ? this.targetJson.name : 'Export' + this.node.name) + '.json';
		
					downloadElement.download = name;
					downloadElement.click();
				}
			}
		}
	},

	editor: {
        menu: "JsonParser/JsonParser",
	},

	getJsonObject() {
		const component = this.node.getComponent(this.componentName);
		let jsonObject;

		if (this.targetJson) {
			jsonObject = this.targetJson.json;
		} else {
			jsonObject = {};
		}

		if (component) {
			for (let i = 0; i < this.propertyNames.length; i += 1) {
				const property = component[this.propertyNames[i]];
				jsonObject[this.propertyNames[i]] = this.parseValue(property);
			}
		}

		return jsonObject;
	},

	parseValue(value) {
		const isArray = Array.isArray(value);

		if (!isArray) {
			if (typeof value === 'object') {
				const obj = {};
				const allowedProps = value.constructor.__values__;

				for (let i = 0; i < allowedProps.length; i += 1) {
					obj[allowedProps[i]] = this.parseValue(value[allowedProps[i]]);
				}

				return obj;
			}
			else {
				return value;
			}
		} 
		else {
			const array = [];

			for (let i = 0; i < value.length; i += 1) {
				array.push(this.parseValue(value[i]));
			}

			return array;
		}
	},

	parseJson(jsonAsset, target) {
		if (jsonAsset instanceof cc.JsonAsset) {
			const data = jsonAsset.json;

			this.setProperties(data, target);
		}
	},

	setProperties(data, target) {
		for (let prop in data) {
			const isArray = Array.isArray(data[prop]);

			if (!isArray) {
				if (typeof data[prop] === 'object') {
					if (typeof target[prop] !== 'object') {
						target[prop] = {};
					}
					this.setProperties(data[prop], target[prop]);
				}
				else {
					target[prop] = data[prop];
				}
			}
			else {
				if (!Array.isArray(target[prop])) {
					target[prop] = [];
					target.length = data[prop].length;
				}
				else if (target[prop].length !== data[prop].length) {
					target[prop].length = data[prop].length;
				}

				this.setProperties(data[prop], target[prop]);
			}
		}
	},

	setArrayProperties(dataArray, targetArray) {
		if (targetArray.length !== dataArray.length) {
			targetArray.length = dataArray.length;
		}

		for (let i = 0; i < targetArray.length; i += 1) {
			if (typeof dataArray[i] !== typeof targetArray[i] && typeof dataArray[i] === 'object') {
				targetArray[i] = {};

				this.setProperties(dataArray[i], targetArray[i])
			} 
			else {
				targetArray[i] = dataArray[i];
			}
		}
	},
})

module.export = pg.JsonParser = JsonParser;