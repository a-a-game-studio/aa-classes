"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListDB {
    constructor(data) {
        if (data.userDB) {
            this.userDB = data.userDB;
        }
        if (data.walletDB) {
            this.walletDB = data.walletDB;
        }
    }
}
exports.ListDB = ListDB;
//# sourceMappingURL=ListDB.js.map