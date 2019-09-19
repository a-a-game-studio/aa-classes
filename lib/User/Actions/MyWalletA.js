"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const Wallet_1 = require("../../Wallet/Wallet");
class MyWalletA extends BaseActions_1.BaseActions {
    async getBalance() {
        let resp;
        try {
            if (!this.object.is()) {
                this.object.errorSys.error(this.fClassName() + '.getBalance.', 'EmptyUser');
                throw 'EmptyUser';
            }
            let wallet = new Wallet_1.Wallet(this.object.errorSys, this.object.listDB);
            resp = await wallet.actions.walletInfoA.getBalance(this.object.data.id);
        }
        catch (e) {
            this.object.errorSys.error(this.fClassName() + '.getBalance', String(e));
        }
        return resp;
    }
    async getWalletList(arg) {
        let resp;
        try {
            if (!this.object.is()) {
                this.object.errorSys.error(this.fClassName() + '.getBalance.', 'EmptyUser');
                throw 'EmptyUser';
            }
            let wallet = new Wallet_1.Wallet(this.object.errorSys, this.object.listDB);
            let argT = arg;
            argT.userId = this.object.data.id;
            resp = await wallet.actions.walletListA.get(argT);
        }
        catch (e) {
            this.object.errorSys.error(this.fClassName() + '.getBalance', String(e));
        }
        return resp;
    }
    async insert(data) {
        let resp = 0;
        try {
            if (!this.object.is()) {
                this.object.errorSys.error(this.fClassName() + '.insert.', 'EmptyUser');
                throw 'EmptyUser';
            }
            if (data.amount == 0) {
                this.object.errorSys.error(this.fClassName() + '.insert.', 'AmountIsNull');
                throw 'AmountIsNull';
            }
            data.user_id = this.object.data.id;
            let wallet = new Wallet_1.Wallet(this.object.errorSys, this.object.listDB);
            resp = await wallet.actions.walletModifyA.insert(data);
        }
        catch (e) {
            this.object.errorSys.error(this.fClassName() + '.getBalance', String(e));
        }
        return resp;
    }
}
exports.MyWalletA = MyWalletA;
//# sourceMappingURL=MyWalletA.js.map