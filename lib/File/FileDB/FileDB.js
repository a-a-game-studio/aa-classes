"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDB_1 = require("../../BaseClass/BaseDB");
const FileE_1 = require("./FileE");
class FileDB extends BaseDB_1.BaseDB {
    constructor(errorSys) {
        super(errorSys);
        this.errorSys.errorClass = 'FileDB';
        this.fileE = new FileE_1.FileE;
    }
    async faGetInfoById(fileId) {
        let res;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }
    async faGetFileList(arg) {
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
}
exports.FileDB = FileDB;
//# sourceMappingURL=FileDB.js.map