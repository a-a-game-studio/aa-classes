"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class InfoA extends BaseActions_1.BaseActions {
    async faGetInfoById(userId) {
        if (this.object.errorSys.isOk()) {
            this.object.data = await this.object.listDB.userDB.faGetInfoById(userId);
        }
        return this.object.errorSys.isOk();
    }
    async faGetUserInfoByToken(token) {
        this.object.data = await this.object.listDB.userDB.faGetUserInfoByToken(token);
        if (this.object.is()) {
            this.object.data.token = token;
        }
        return this.object.errorSys.isOk();
    }
}
exports.InfoA = InfoA;
//# sourceMappingURL=InfoA.js.map