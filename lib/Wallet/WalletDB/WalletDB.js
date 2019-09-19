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
    async insert(data) {
        let balance;
        this.errorSys.error(this.fClassName() + '.insert', 'abstract method');
        return balance;
    }
    async getBalance(userId) {
        let balance;
        this.errorSys.error(this.fClassName() + '.getBalance', 'abstract method');
        return balance;
    }
    async getUserWalletList(userId, arg) {
        let res = [];
        this.errorSys.error(this.fClassName() + '.getUserWalletList', 'abstract method');
        return res;
    }
}
exports.WalletDB = WalletDB;
//# sourceMappingURL=WalletDB.js.map