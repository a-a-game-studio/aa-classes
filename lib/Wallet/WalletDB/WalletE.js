"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class WalletE {
    getRulesInsert() {
        return this.getRules('insert');
    }
    getRulesUpdate() {
        return this.getRules('update');
    }
    getRules(typeRules) {
        let rules = new lib_1.Validator();
        if (typeRules == 'insert') {
            rules.set(rules.rule('user_id')
                .type('int')
                .require()
                .error(WalletE.NAME + ' - user_id'));
            rules.set(rules.rule('type')
                .type('int')
                .require()
                .error(WalletE.NAME + ' - type'));
            rules.set(rules.rule('amount')
                .type('int')
                .require()
                .error(WalletE.NAME + ' - amount'));
        }
        if (typeRules == 'update') {
        }
        return rules.get();
    }
}
exports.WalletE = WalletE;
WalletE.NAME = 'wallet';
//# sourceMappingURL=WalletE.js.map