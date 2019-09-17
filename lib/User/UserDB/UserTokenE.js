"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class UserTokenE {
    getRulesInsert() {
        return this.getRules('insert');
    }
    getRulesUpdate() {
        return this.getRules('update');
    }
    getRules(typeRules) {
        let rules = new lib_1.Validator();
        if (typeRules == 'insert') {
            rules.set(rules.rule('token')
                .type('text')
                .require()
                .minLen(4)
                .error(UserTokenE.NAME + ' - token'));
        }
        if (typeRules == 'insert') {
            rules.set(rules.rule('user_id')
                .type('int')
                .require()
                .error(UserTokenE.NAME + ' - user_id'));
        }
        if (typeRules == 'update') {
            rules.set(rules.rule('deleted')
                .type('int')
                .require()
                .error(UserTokenE.NAME + ' - deleted'));
        }
        return rules.get();
    }
}
exports.UserTokenE = UserTokenE;
UserTokenE.NAME = 'user_token';
//# sourceMappingURL=UserTokenE.js.map