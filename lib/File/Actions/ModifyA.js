"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class ModifyA extends BaseActions_1.BaseActions {
    async faInsert(data) {
        const errorString = this.fClassName() + '.' + this.fMethodName();
        let fv = new lib_1.FieldValidator(this.object.errorSys, data.fileData)
            .fSetErrorString(errorString + '.fileData')
            .fExist()
            .fSetErrorString(errorString + '.filename')
            .fExist()
            .fText()
            .fMinLen(5);
        fv.fSetErrorString(errorString + '.insert');
        await fv.faDoIfOkAsync(async () => {
            this.object.data = await this.object.listDB.fileDB.faInsert(this.object.data);
            this.object.data = data;
        });
        return this.object.errorSys.isOk();
    }
    async faUpdate(data) {
        const errorString = this.fClassName() + '.' + this.fMethodName();
        let fv = new lib_1.FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkFile')
            .fTrue('EmptyFile');
        fv.fSetErrorString(errorString + '.update');
        await fv.faDoIfOkAsync(async () => {
            let id = this.object.data.id;
            this.object.data = data;
            this.object.data['id'] = id;
            await this.object.listDB.fileDB.faUpdate(this.object.data);
            this.object.data = await this.object.listDB.fileDB.faGetInfoById(this.object.data.id);
        });
        return this.object.errorSys.isOk();
    }
}
exports.ModifyA = ModifyA;
//# sourceMappingURL=ModifyA.js.map