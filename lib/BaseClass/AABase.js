"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AABase {
    constructor(errorSys, listDB) {
        this.errorSys = errorSys;
        this.listDB = listDB;
    }
    is() {
        let resp = false;
        try {
            if (this.data.id) {
                resp = true;
            }
        }
        catch (e) {
        }
        return resp;
    }
    className() {
        return this.constructor.name;
    }
    async sync(id) {
        return this;
    }
    sysGetProperties() {
        const result = {};
        for (let property in this) {
            if (this.hasOwnProperty(property) && !property.startsWith('_') &&
                ((typeof this[property] == 'string' || typeof this[property] == 'number'))) {
                result[property] = this[property];
            }
        }
        return result;
    }
    sysCopyInterface(cInterface, cClass) {
        for (let k in cInterface) {
            cClass[k] = cInterface[k];
        }
        return cClass;
    }
}
exports.AABase = AABase;
//# sourceMappingURL=AABase.js.map