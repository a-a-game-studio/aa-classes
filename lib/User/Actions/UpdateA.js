"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
class UpdateA extends BaseActions_1.BaseActions {
    async update(data) {
        if (this.object.errorSys.isOk()) {
            try {
                if (!this.object.is()) {
                    this.object.errorSys.error(this.fClassName() + '.update', 'objectIsEmpty');
                    throw 'objectIsEmpty';
                }
                let userId = this.object.data.id;
                this.object.data = data;
                this.object.data['id'] = userId;
                await this.object.listDB.userDB.update(this.object.data);
                this.object.data = await this.object.listDB.userDB.getInfoById(this.object.data.id);
            }
            catch (e) {
                this.object.errorSys.error(this.fClassName() + '.update', String(e));
            }
        }
        return this.object.errorSys.isOk();
    }
}
exports.UpdateA = UpdateA;
//# sourceMappingURL=UpdateA.js.map