"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class WalletModifyA extends BaseActions_1.BaseActions {
    async faInsert(data) {
        return await this.object.listDB.walletDB.faInsert(data);
        ;
    }
}
exports.WalletModifyA = WalletModifyA;
//# sourceMappingURL=WalletModifyA.js.map