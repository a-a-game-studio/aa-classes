"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseActions {
    constructor(object) {
        this.object = object;
    }
    fClassName() {
        return this.constructor.name;
    }
    fMethodName() {
        var err = new Error();
        return /at \w+\.(\w+)/.exec(err.stack.split('\n')[2])[1];
    }
}
exports.BaseActions = BaseActions;
//# sourceMappingURL=BaseActions.js.map