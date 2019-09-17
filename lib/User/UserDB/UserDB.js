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
    async getInfoById(userId) {
        let res;
        this.errorSys.error(this.className + '.getInfoById', 'abstract method');
        return res;
    }
    async getInfoByLogin(login) {
        let res;
        this.errorSys.error(this.className + '.getInfoByLogin', 'abstract method');
        return res;
    }
    async getUserInfoByToken(token) {
        let res;
        this.errorSys.error(this.className + '.getUserInfoByToken', 'abstract method');
        return res;
    }
    async getUserList(arg) {
        let res = [];
        this.errorSys.error(this.className + '.getUserList', 'abstract method');
        return res;
    }
    async insert(data) {
        let resp;
        this.errorSys.error(this.className + '.insert', 'abstract method');
        return resp;
    }
    async update(data) {
        let resp;
        this.errorSys.error(this.className + '.update', 'abstract method');
        return this.errorSys.isOk();
    }
    async remove(data) {
        this.errorSys.error(this.className + '.remove', 'abstract method');
        return this.errorSys.isOk();
    }
    async registerByLoginAndPass(login, pass) {
        let res = '';
        this.errorSys.error(this.className + '.registerByLoginAndPass', 'abstract method');
        return res;
    }
    async getTokenByLoginAndPass(login, pass) {
        let res = '';
        this.errorSys.error(this.className + '.getTokenByLoginAndPass', 'abstract method');
        return res;
    }
}
exports.UserDB = UserDB;
//# sourceMappingURL=UserDB.js.map