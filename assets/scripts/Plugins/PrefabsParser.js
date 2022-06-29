//#region import
//#endregion

//#region classes-helpers
//#endregion

cc.Class({
    extends: cc.Component,

    properties: {
        //#region editors fields and properties
        targetJson: {
            default: null,
            type: cc.JsonAsset,
        },

        properties: { default: [], type: cc.String, tooltip: 'Названия параметров ноды - position/angle/scale и т.д. Кроме name' },

        EXPORT: {
            get() {
                return false;
            },

            set(value) {
                if (value) {
                    const exportJSON = this._getJsonObject();

                    let content = JSON.stringify(exportJSON);
                    let downloadElement = document.createElement('a');
                    let file = new Blob([content], { type: 'application/json' });

                    downloadElement.href = URL.createObjectURL(file);

                    const name = (this.targetJson ? this.targetJson.name : 'Export' + this.node.name) + '.json';

                    downloadElement.download = name;
                    downloadElement.click();
                }
            },
        },
        //#endregion
        //#region public fields and properties
        //#endregion
        //#region private fields and properties
        //#endregion
    },

    editor: {
        menu: 'PrefabsParser/PrefabsParser',
    },

    //#region life-cycle callbacks

    //  onLoad() { },
    //  start() { },
    //  onEnable() { },
    //  onDisable() { },
    //  update(dt) { },
    //  onDestroy() { },

    //#endregion

    //#region public methods
    //#endregion

    //#region private methods
    _getJsonObject() {
        const node = this.node;
        let jsonObject;
        let jsonArray = [];

        node.children.forEach((child) => {
            jsonObject = {};
            jsonObject['name'] = child.name;
            for (let i = 0; i < this.properties.length; i += 1) {
                const property = child[this.properties[i]];
                jsonObject[this.properties[i]] = this._parseValue(property);
            }

            jsonArray.push(jsonObject);
        });

        return jsonArray;
    },

    _parseValue(value) {
        const isArray = Array.isArray(value);

        if (!isArray) {
            if (typeof value === 'object') {
                const obj = {};
                const allowedProps = value.constructor.__values__;

                for (let i = 0; i < allowedProps.length; i += 1) {
                    obj[allowedProps[i]] = this._parseValue(value[allowedProps[i]]);
                }

                return obj;
            } else {
                return value;
            }
        } else {
            const array = [];

            for (let i = 0; i < value.length; i += 1) {
                array.push(this._parseValue(value[i]));
            }

            return array;
        }
    },
    //#endregion

    //#region event handlers
    //#endregion
});

//#region export
//#endregion
