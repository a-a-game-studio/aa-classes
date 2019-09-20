"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class BaseDB {
    constructor(errorSys) {
        this.modelValidatorSys = new lib_1.ModelValidatorSys(errorSys);
        this.errorSys = errorSys;
    }
    fClassName() {
        return this.constructor.name;
    }
    fMethodName() {
        var err = new Error();
        return /at \w+\.(\w+)/.exec(err.stack.split('\n')[2])[1];
    }
}
exports.BaseDB = BaseDB;
//# sourceMappingURL=BaseDB.js.map