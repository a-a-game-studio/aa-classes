"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class InfoA extends BaseActions_1.BaseActions {
    async getInfoById(userId) {
        if (this.object.errorSys.isOk()) {
            this.object.data = await this.object.listDB.userDB.getInfoById(userId);
        }
        return this.object.errorSys.isOk();
    }
    async getInfoByToken(token) {
        try {
            this.object.data = await this.object.listDB.userDB.getUserInfoByToken(token);
        }
        catch (e) {
            this.object.errorSys.error(this.className() + 'getInfoByToken', e);
        }
        if (this.object.is()) {
            this.object.data.token = token;
        }
        return this.object.errorSys.isOk();
    }
}
exports.InfoA = InfoA;
//# sourceMappingURL=InfoA.js.map