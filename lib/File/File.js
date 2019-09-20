"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AABase_1 = require("../BaseClass/AABase");
const FileActions_1 = require("./Actions/FileActions");
class File extends AABase_1.AABase {
    constructor(errorSys, listDB) {
        super(errorSys, listDB);
        this.actions = new FileActions_1.FileActions(this);
        this.clearData();
    }
    clearData() {
        this.data = {
            id: 0,
            filename: null,
            size: null,
            source_url: null,
            is_uploaded: false,
            uploaded_at: null,
            created_at: null,
            updated_at: null,
        };
    }
    static Init(errorSys, data, listDB) {
        let object = new File(errorSys, listDB);
        object.data = data;
        return object;
    }
}
exports.File = File;
//# sourceMappingURL=File.js.map