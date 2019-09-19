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
        this.errorSys.error(this.fClassName + '.getInfoById', 'abstract method');
        return res;
    }
    async getInfoByLogin(login) {
        let res;
        this.errorSys.error(this.fClassName + '.getInfoByLogin', 'abstract method');
        return res;
    }
    async getUserInfoByToken(token) {
        let res;
        this.errorSys.error(this.fClassName + '.getUserInfoByToken', 'abstract method');
        return res;
    }
    async getUserList(arg) {
        let res = [];
        this.errorSys.error(this.fClassName + '.getUserList', 'abstract method');
        return res;
    }
    async insert(data) {
        let resp;
        this.errorSys.error(this.fClassName + '.insert', 'abstract method');
        return resp;
    }
    async update(data) {
        let resp;
        this.errorSys.error(this.fClassName + '.update', 'abstract method');
        return this.errorSys.isOk();
    }
    async remove(data) {
        this.errorSys.error(this.fClassName + '.remove', 'abstract method');
        return this.errorSys.isOk();
    }
    async registerByLoginAndPass(login, pass) {
        let res = '';
        this.errorSys.error(this.fClassName + '.registerByLoginAndPass', 'abstract method');
        return res;
    }
    async getTokenByLoginAndPass(login, pass) {
        let res = '';
        this.errorSys.error(this.fClassName + '.getTokenByLoginAndPass', 'abstract method');
        return res;
    }
}
exports.UserDB = UserDB;
//# sourceMappingURL=UserDB.js.map