"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AABase_1 = require("../BaseClass/AABase");
const WalletActions_1 = require("./Actions/WalletActions");
class Wallet extends AABase_1.AABase {
    constructor(errorSys, listDB) {
        super(errorSys, listDB);
        this.actions = new WalletActions_1.WalletActions(this);
        this.clearData();
    }
    clearData() {
        this.data = {
            id: 0,
            user_id: 0,
            date: null,
            type: null,
            amount: 0,
            balance: 0,
        };
    }
    static Init(errorSys, data, listDB) {
        let object = new Wallet(errorSys, listDB);
        object.data = data;
        return object;
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map