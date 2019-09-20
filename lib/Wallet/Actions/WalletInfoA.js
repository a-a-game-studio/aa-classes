"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class WalletInfoA extends BaseActions_1.BaseActions {
    async faGetBalance(userId) {
        return await this.object.listDB.walletDB.faGetBalance(userId);
        ;
    }
}
exports.WalletInfoA = WalletInfoA;
//# sourceMappingURL=WalletInfoA.js.map