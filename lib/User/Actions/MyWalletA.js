"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const Wallet_1 = require("../../Wallet/Wallet");
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class MyWalletA extends BaseActions_1.BaseActions {
    async faGetBalance() {
        let resp;
        const errorString = this.fClassName() + '.' + this.fMethodName();
        const wallet = new Wallet_1.Wallet(this.object.errorSys, this.object.listDB);
        let fv = new lib_1.FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser');
        resp = await fv.faDoIfOkAsync(async () => await wallet.actions.walletInfoA.faGetBalance(this.object.data.id));
        return resp;
    }
    async faGetWalletList(arg) {
        let resp;
        const errorString = this.fClassName() + '.' + this.fMethodName();
        const wallet = new Wallet_1.Wallet(this.object.errorSys, this.object.listDB);
        let fv = new lib_1.FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser');
        fv.fSetErrorString(errorString + '.getWallet');
        resp = await fv.faDoIfOkAsync(async () => {
            let argT = arg;
            argT.userId = this.object.data.id;
            return await wallet.actions.walletListA.faGet(argT);
        });
        return resp;
    }
    async faInsert(data) {
        let resp = 0;
        const errorString = this.fClassName() + '.' + this.fMethodName();
        const wallet = new Wallet_1.Wallet(this.object.errorSys, this.object.listDB);
        let fv = new lib_1.FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser')
            .fSetData(data.amount)
            .fSetErrorString(errorString + '.amount')
            .fMore(0);
        fv.fSetErrorString(errorString + '.insert');
        resp = await fv.faDoIfOkAsync(async () => {
            data.user_id = this.object.data.id;
            return await wallet.actions.walletModifyA.faInsert(data);
        });
        return resp;
    }
}
exports.MyWalletA = MyWalletA;
//# sourceMappingURL=MyWalletA.js.map