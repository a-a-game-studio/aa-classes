"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const WalletInfoA_1 = require("./WalletInfoA");
const WalletListA_1 = require("./WalletListA");
const WalletModifyA_1 = require("./WalletModifyA");
class WalletActions extends BaseActions_1.BaseActions {
    constructor(object) {
        super(object);
        this.walletInfoA = new WalletInfoA_1.WalletInfoA(object);
        this.walletListA = new WalletListA_1.WalletListA(object);
        this.walletModifyA = new WalletModifyA_1.WalletModifyA(object);
    }
}
exports.WalletActions = WalletActions;
//# sourceMappingURL=WalletActions.js.map