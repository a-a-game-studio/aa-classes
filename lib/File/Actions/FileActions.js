"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseActions_1 = require("../../BaseClass/BaseActions");
const ModifyA_1 = require("./ModifyA");
const InfoA_1 = require("./InfoA");
class FileActions extends BaseActions_1.BaseActions {
    constructor(object) {
        super(object);
        this.infoA = new InfoA_1.InfoA(object);
        this.modifyA = new ModifyA_1.ModifyA(object);
    }
}
exports.FileActions = FileActions;
//# sourceMappingURL=FileActions.js.map