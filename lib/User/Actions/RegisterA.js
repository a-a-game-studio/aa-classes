"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class RegisterA extends BaseActions_1.BaseActions {
    async faRegisterStart(userI) {
        let res = false;
        return res;
    }
    async faRegisterCommit(userI) {
        let res = false;
        return res;
    }
    async faRegisterByLoginAndPass(data) {
        let res = '';
        const errorString = this.fClassName() + '.' + this.fMethodName();
        let fv = new lib_1.FieldValidator(this.object.errorSys, data.login)
            .fSetErrorString(errorString + '.login')
            .fExist()
            .fText()
            .fMinLen(5)
            .fSetData(data.pswd)
            .fSetErrorString(errorString + '.pswd')
            .fExist()
            .fText()
            .fMinLen(7)
            .fSetData(data.pswdConfirm)
            .fSetErrorString(errorString + '.pswdConfirm')
            .fExist()
            .fText()
            .fEqual(data.pswd)
            .fMinLen(7)
            .fSetErrorString('getInfoByLogin');
        let user = await fv.faDoIfOkAsync(async () => await this.object.listDB.userDB.faGetInfoByLogin(data.login));
        fv.fSetData(user)
            .fSetErrorString(errorString + '.loginAlreadyUsed')
            .fNotExist();
        fv.fSetErrorString('regDB');
        res = await fv.faDoIfOkAsync(async () => await this.object.listDB.userDB.faRegisterByLoginAndPass(data.login, data.pswd));
        return res;
    }
}
exports.RegisterA = RegisterA;
//# sourceMappingURL=RegisterA.js.map