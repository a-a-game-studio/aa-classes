"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class UserE {
    getRulesInsert() {
        return this.getRules('insert');
    }
    getRulesUpdate() {
        return this.getRules('update');
    }
    getRules(typeRules) {
        let rules = new lib_1.Validator();
        if (typeRules == 'insert') {
            rules.set(rules.rule('login')
                .typeText()
                .require()
                .minLen(4)
                .error(UserE.NAME + ' - login'));
            rules.set(rules.rule('hash')
                .typeText()
                .require()
                .error(UserE.NAME + ' - hash'));
            rules.set(rules.rule('pass')
                .typeText()
                .require()
                .error(UserE.NAME + ' - pass'));
            rules.set(rules.rule('email')
                .typeText()
                .error(UserE.NAME + ' - email'));
            rules.set(rules.rule('name')
                .typeText()
                .error(UserE.NAME + ' - name'));
            rules.set(rules.rule('surname')
                .typeText()
                .error(UserE.NAME + ' - surname'));
            rules.set(rules.rule('currency_id')
                .typeInt()
                .error(UserE.NAME + ' - currency_id'));
            rules.set(rules.rule('email')
                .typeText()
                .error(UserE.NAME + ' - email'));
            rules.set(rules.rule('birthday')
                .typeDate()
                .error(UserE.NAME + ' - birthday'));
            rules.set(rules.rule('city')
                .typeText()
                .error(UserE.NAME + ' - city'));
        }
        if (typeRules == 'update') {
            rules.set(rules.rule('email')
                .typeText()
                .error(UserE.NAME + ' - email'));
            rules.set(rules.rule('name')
                .typeText()
                .error(UserE.NAME + ' - name'));
            rules.set(rules.rule('surname')
                .typeText()
                .error(UserE.NAME + ' - surname'));
            rules.set(rules.rule('patronymic')
                .typeText()
                .error(UserE.NAME + ' - surname'));
            rules.set(rules.rule('currency_id')
                .typeInt()
                .error(UserE.NAME + ' - currency_id'));
            rules.set(rules.rule('birthday')
                .typeDate()
                .error(UserE.NAME + ' - birthday'));
            rules.set(rules.rule('city')
                .typeText()
                .error(UserE.NAME + ' - city'));
        }
        return rules.get();
    }
}
exports.UserE = UserE;
UserE.NAME = 'aa_user';
//# sourceMappingURL=UserE.js.map