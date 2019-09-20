"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@a-a-game-studio/aa-components/lib");
class FileE {
    getRulesInsert() {
        let rules = new lib_1.Validator();
        rules.set(rules.rule('filename')
            .type('text')
            .require()
            .maxLen(50)
            .error(FileE.NAME + ' - filename'));
        rules.set(rules.rule('source_url')
            .type('text')
            .require()
            .maxLen(1024)
            .error(FileE.NAME + ' - source_url'));
        return rules.get();
    }
    getRulesUpdate() {
        let rules = new lib_1.Validator();
        rules.set(rules.rule('uploaded_at')
            .type('int')
            .if(/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/)
            .error(FileE.NAME + ' - uploaded_at'));
        rules.set(rules.rule('is_uploaded')
            .type('boolean')
            .if([true, false])
            .error(FileE.NAME + ' - is_uploaded'));
        rules.set(rules.rule('size')
            .type('int')
            .more(0)
            .error(FileE.NAME + ' - size'));
        return rules.get();
    }
}
exports.FileE = FileE;
FileE.NAME = 'files';
//# sourceMappingURL=FileE.js.map