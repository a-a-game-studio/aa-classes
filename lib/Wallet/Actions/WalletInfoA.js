"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class WalletInfoA extends BaseActions_1.BaseActions {
    async getBalance(userId) {
        let resp;
        try {
            resp = await this.object.listDB.walletDB.getBalance(userId);
        }
        catch (e) {
            this.object.errorSys.error(this.fClassName() + '.getBalance', String(e));
        }
        return resp;
    }
}
exports.WalletInfoA = WalletInfoA;
//# sourceMappingURL=WalletInfoA.js.map