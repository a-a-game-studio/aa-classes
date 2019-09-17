"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class RegisterA extends BaseActions_1.BaseActions {
    async registerStart(userI) {
        let res = false;
        return res;
    }
    async registerCommit(userI) {
        let res = false;
        return res;
    }
    async registerByLoginAndPass(data) {
        let res = '';
        try {
            if (!data.login) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'emptyLogin');
            }
            if (!data.pass) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'emptypass');
            }
            if (!data.passConfirm) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'emptypassConfirm');
            }
            if (!this.object.errorSys.isOk()) {
                throw 'error input';
            }
            if (data.login.length < 5) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'loginToShort');
            }
            if (data.pass.length < 7) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'passToShort');
            }
            if (data.passConfirm != data.pass) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'passConfirm');
            }
            if (!this.object.errorSys.isOk()) {
                throw 'error validate';
            }
            let existUser = await this.object.listDB.userDB.getInfoByLogin(data.login);
            if (existUser) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'loginAlreadyUsed');
            }
            if (!this.object.errorSys.isOk()) {
                throw 'error loginAlreadyUsed';
            }
            res = await this.object.listDB.userDB.registerByLoginAndPass(data.login, data.pass);
        }
        catch (e) {
            this.object.errorSys.error('someEror', String(e));
        }
        return res;
    }
}
exports.RegisterA = RegisterA;
//# sourceMappingURL=RegisterA.js.map