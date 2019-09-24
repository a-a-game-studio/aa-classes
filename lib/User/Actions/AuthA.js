"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class AuthA extends BaseActions_1.BaseActions {
    async login(data) {
        let res = '';
        res = await this.object.listDB.userDB.faGetTokenByLoginAndPass(data.login, data.pswd);
        if (!res) {
            this.object.errorSys.error('cantLogin', 'cantLogin');
        }
        return res;
    }
}
exports.AuthA = AuthA;
//# sourceMappingURL=AuthA.js.map