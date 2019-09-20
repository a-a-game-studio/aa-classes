"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class UpdateA extends BaseActions_1.BaseActions {
    async faUpdate(data) {
        const errorString = this.fClassName() + '.' + this.fMethodName();
        let fv = new lib_1.FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser');
        fv.fSetErrorString(errorString + '.update');
        await fv.faDoIfOkAsync(async () => {
            let userId = this.object.data.id;
            this.object.data = data;
            this.object.data['id'] = userId;
            await this.object.listDB.userDB.faUpdate(this.object.data);
            this.object.data = await this.object.listDB.userDB.faGetInfoById(this.object.data.id);
        });
        return this.object.errorSys.isOk();
    }
}
exports.UpdateA = UpdateA;
//# sourceMappingURL=UpdateA.js.map