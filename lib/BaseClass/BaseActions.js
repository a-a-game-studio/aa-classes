"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseActions {
    constructor(object) {
        this.object = object;
    }
    fClassName() {
        return this.constructor.name;
    }
}
exports.BaseActions = BaseActions;
//# sourceMappingURL=BaseActions.js.map