"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const RegisterA_1 = require("./RegisterA");
const InfoA_1 = require("./InfoA");
const AuthA_1 = require("./AuthA");
const UpdateA_1 = require("./UpdateA");
class UserActions extends BaseActions_1.BaseActions {
    constructor(object) {
        super(object);
        this.registerA = new RegisterA_1.RegisterA(object);
        this.infoA = new InfoA_1.InfoA(object);
        this.authA = new AuthA_1.AuthA(object);
        this.updateA = new UpdateA_1.UpdateA(object);
    }
}
exports.UserActions = UserActions;
//# sourceMappingURL=UserActions.js.map