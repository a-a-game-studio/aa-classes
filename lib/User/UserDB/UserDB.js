"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDB_1 = require("../../BaseClass/BaseDB");
const UserE_1 = require("./UserE");
const UserTokenE_1 = require("./UserTokenE");
class UserDB extends BaseDB_1.BaseDB {
    constructor(errorSys) {
        super(errorSys);
        this.errorSys.errorClass = 'UserDB';
        this.userE = new UserE_1.UserE;
        this.userTokenE = new UserTokenE_1.UserTokenE;
    }
    async faGetInfoById(userId) {
        let res;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }
    async faGetInfoByLogin(sLogin) {
        let res;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }
    async faGetUserInfoByToken(sToken) {
        let res;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }
    async faGetUserList(arg) {
        let res = [];
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }
    async faInsert(data) {
        let resp;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return resp;
    }
    async faUpdate(data) {
        let resp;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return this.errorSys.isOk();
    }
    async faRemove(data) {
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return this.errorSys.isOk();
    }
    async faRegisterByLoginAndPass(sLogin, sPass) {
        let res = '';
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }
    async faGetTokenByLoginAndPass(sLogin, sPass) {
        let res = '';
        this.errorSys.error(this.fClassName() + this.fMethodName(), 'abstract method');
        return res;
    }
}
exports.UserDB = UserDB;
//# sourceMappingURL=UserDB.js.map