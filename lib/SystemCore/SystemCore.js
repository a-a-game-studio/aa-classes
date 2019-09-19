"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AABase_1 = require("../BaseClass/AABase");
const SystemCoreActions_1 = require("./Actions/SystemCoreActions");
class SystemCore extends AABase_1.AABase {
    constructor(errorSys, user, listDB) {
        super(errorSys, listDB);
        this.actions = new SystemCoreActions_1.SystemCoreActions(this);
        this.user = user;
        if (!this.user.is()) {
            this.errorSys.error(this.fClassName() + '.constructor', 'EmptyUser');
        }
    }
}
exports.SystemCore = SystemCore;
//# sourceMappingURL=SystemCore.js.map