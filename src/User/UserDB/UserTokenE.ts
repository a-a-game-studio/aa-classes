import { Validator } from "@a-a-game-studio/aa-components/lib";


export interface UserTokenI {
    id?: number;
    user_id?: string;
    date?: string;
    token?: string;
    deleted?: number;
}


// Компоненты


export class UserTokenE {
    //Имя таблицы
    public static NAME = 'aa_user_token';


    /**
     * Получить правила валидации на вставку
     */
    public getRulesInsert() {
        return this.getRules('insert');
    }

    /**
     * Получить правила валидации на обновление
     */
    public getRulesUpdate() {
        return this.getRules('update');
    }

    /**
     * Описание правил валидации
     * @param typeRules
     */
    private getRules(typeRules: string) {
        let rules = new Validator();

        /* todo переделать */
        /* **************************************** */
        /* ************** insert ****************** */
        if (typeRules == 'insert') {
            rules.set(rules.rule('token')
                .type('text')
                .require()
                .minLen(4)
                .error(UserTokenE.NAME + ' - token')
            );
        }
        if (typeRules == 'insert') {
            rules.set(rules.rule('user_id')
                .type('int')
                .require()
                .error(UserTokenE.NAME + ' - user_id')
            );
        }


        /* ****************************************** */
        /* **************** update ****************** */
        if (typeRules == 'update') {
            rules.set(rules.rule('deleted')
                .type('int')
                .require()
                .error(UserTokenE.NAME + ' - deleted')
            );
        }


        return rules.get();
    }


}
