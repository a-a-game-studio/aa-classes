"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class InfoA extends BaseActions_1.BaseActions {
    async faGetInfoById(fileId) {
        if (this.object.errorSys.isOk()) {
            this.object.data = await this.object.listDB.fileDB.faGetInfoById(fileId);
        }
        return this.object.errorSys.isOk();
    }
}
exports.InfoA = InfoA;
//# sourceMappingURL=InfoA.js.map