import { AABase } from '../BaseClass/AABase';
import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { WalletActions } from './Actions/WalletActions';
import { ListDB } from '../BaseClass/ListDB';
import { WalletI } from './WalletDB/WalletE';

/**
 * Кошелек пользователя
 */
export class Wallet extends AABase {

    public data: WalletI;

    /* собтия */
    public actions: WalletActions;

    constructor(errorSys: ErrorSys, listDB: ListDB) {
        super(errorSys, listDB);
        this.actions = new WalletActions(this);
        this.clearData();
    }

    public clearData() {
        this.data = {
            id: 0,
            user_id: 0, // Владелец
            date: null, // дата
        
            type: null, // тип записи
            amount: 0, // колличество денег
            balance: 0, // баланс текущий
        }
    }

    /**
     * Переводит DeliveryI в Delivery
     * @param data : DeliveryI
     */
    public static Init(errorSys: ErrorSys, data: WalletI, listDB: ListDB): Wallet {
        let object = new Wallet(errorSys, listDB);
        object.data = data;
        return object;
    }

}