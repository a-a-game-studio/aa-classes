"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDB_1 = require("../../BaseClass/BaseDB");
const WalletE_1 = require("./WalletE");
class WalletDB extends BaseDB_1.BaseDB {
    constructor(errorSys) {
        super(errorSys);
        this.errorSys.errorClass = 'WalletDB';
        this.walletE = new WalletE_1.WalletE();
    }
    async faInsert(data) {
        let balance;
        this.errorSys.error(this.fClassName() + this.fMethodName(), 'abstract method');
        return balance;
    }
    async faGetBalance(userId) {
        let balance;
        this.errorSys.error(this.fClassName() + this.fMethodName(), 'abstract method');
        return balance;
    }
    async faGetUserWalletList(userId, arg) {
        let res = [];
        this.errorSys.error(this.fClassName() + this.fMethodName(), 'abstract method');
        return res;
    }
}
exports.WalletDB = WalletDB;
//# sourceMappingURL=WalletDB.js.map