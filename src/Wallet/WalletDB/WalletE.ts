import { Validator } from "@a-a-game-studio/aa-components/lib";
import { AABaseDataI } from "../../BaseClass/AABase";

export interface WalletI extends AABaseDataI {
    id?: number;
    user_id?: number; // Владелец
    date?: string; // дата записи

    type?: number; // тип записи
    amount?: number; // колличество денег
    balance?: number; // баланс текущий
}


// Компоненты


export class WalletE {
    //Имя таблицы
    public static NAME = 'wallet';


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

            rules.set(rules.rule('user_id')
                .type('int')
                .require()
                .error(WalletE.NAME + ' - user_id')
            );
            rules.set(rules.rule('type')
                .type('int')
                .require()
                .error(WalletE.NAME + ' - type')
            );
            rules.set(rules.rule('amount')
                .type('int')
                .require()
                .error(WalletE.NAME + ' - amount')
            );


        }



        /* ****************************************** */
        /* **************** update ****************** */
        if (typeRules == 'update') {

        }


        return rules.get();
    }


}
