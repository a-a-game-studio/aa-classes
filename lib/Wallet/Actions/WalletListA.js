"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const Wallet_1 = require("../Wallet");
class WalletListA extends BaseActions_1.BaseActions {
    async get(arg) {
        let resp = [];
        try {
            let temp = await this.object.listDB.walletDB.getUserWalletList(arg.userId, arg);
            for (let i = 0; i < temp.length; i++) {
                resp.push(Wallet_1.Wallet.Init(this.object.errorSys, temp[i], this.object.listDB));
            }
        }
        catch (e) {
            this.object.errorSys.error(this.className() + '.get', String(e));
        }
        return resp;
    }
}
exports.WalletListA = WalletListA;
//# sourceMappingURL=WalletListA.js.map