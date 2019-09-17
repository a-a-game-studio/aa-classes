"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class WalletModifyA extends BaseActions_1.BaseActions {
    async insert(data) {
        let resp;
        try {
            resp = await this.object.listDB.walletDB.insert(data);
        }
        catch (e) {
            this.object.errorSys.error(this.className() + '.insert', String(e));
        }
        return resp;
    }
}
exports.WalletModifyA = WalletModifyA;
//# sourceMappingURL=WalletModifyA.js.map