import { AABaseDataI } from "../../BaseClass/AABase";
import { Validator } from "@a-a-game-studio/aa-components/lib";

export interface UserI extends AABaseDataI {
    id?: number;
    phone?: string;
    name?: string;
    surname?: string;
    currency_id?: number;
    patronymic?: string;
    create_date?: string;
    email?: string;
    birthday?: string;
    avatar?: string;
    city?: string;
    pass?: string;
    login?: string;
    token?: string;
    hash?: string;
}


// Компоненты


export class UserE {
    //Имя таблицы
    public static NAME = 'aa_user';


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

        /* **************************************** */
        /* ************** insert ****************** */
        if (typeRules == 'insert') {
            rules.set(rules.rule('login')
                .typeText()
                .require()
                .minLen(4)
                .error(UserE.NAME + ' - login')
            );

            rules.set(rules.rule('hash')
                .typeText()
                .require()
                .error(UserE.NAME + ' - hash')
            );

            rules.set(rules.rule('pass')
                .typeText()
                .require()
                .error(UserE.NAME + ' - pass')
            );

            rules.set(rules.rule('email')
                .typeText()
                .error(UserE.NAME + ' - email')
            );

            rules.set(rules.rule('name')
                .typeText()
                .error(UserE.NAME + ' - name')
            );

            rules.set(rules.rule('surname')
                .typeText()
                .error(UserE.NAME + ' - surname')
            );


            rules.set(rules.rule('currency_id')
                .typeInt()
                .error(UserE.NAME + ' - currency_id')
            );

            rules.set(rules.rule('email')
                .typeText()
                .error(UserE.NAME + ' - email')
            );

            rules.set(rules.rule('birthday')
                .typeDate()
                .error(UserE.NAME + ' - birthday')
            );

            rules.set(rules.rule('city')
                .typeText()
                .error(UserE.NAME + ' - city')
            );
        }



        /* ****************************************** */
        /* **************** update ****************** */
        if (typeRules == 'update') {

            rules.set(rules.rule('email')
                .typeText()
                .error(UserE.NAME + ' - email')
            );

            rules.set(rules.rule('name')
                .typeText()
                .error(UserE.NAME + ' - name')
            );

            rules.set(rules.rule('surname')
                .typeText()
                .error(UserE.NAME + ' - surname')
            );
            
            rules.set(rules.rule('patronymic')
                .typeText()
                .error(UserE.NAME + ' - surname')
            );

            rules.set(rules.rule('currency_id')
                .typeInt()
                .error(UserE.NAME + ' - currency_id')
            );

            rules.set(rules.rule('birthday')
                .typeDate()
                .error(UserE.NAME + ' - birthday')
            );

            rules.set(rules.rule('city')
                .typeText()
                .error(UserE.NAME + ' - city')
            );
        }

        return rules.get();
    }


}
