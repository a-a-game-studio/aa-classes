import { BaseDB } from "../../BaseClass/BaseDB";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
import { WalletE, WalletI } from "./WalletE";


/**
 * Класс работы с таблицей wallet
 */
export class WalletDB extends BaseDB {

    public walletE: WalletE;

    constructor(errorSys: ErrorSys) {
        super(errorSys);
        this.errorSys.errorClass = 'WalletDB';
        this.walletE = new WalletE();
    }


    /**
     * Вставить в кошелек
     * @param data 
     * return balance
     */
    public async insert(data: WalletI): Promise<number> {
        let balance: number;
        this.errorSys.error(this.className() + '.insert', 'abstract method');
        return balance;
    }

    /**
     * Текущий баланс пользователя
     * @param userId 
     */
    public async getBalance(userId: number): Promise<number> {
        let balance: number;
        this.errorSys.error(this.className() + '.getBalance', 'abstract method');
        return balance;
    }


    /**
     * Кошелек польхователя
     * @param userId 
     * @param arg 
     */
    public async getUserWalletList(userId: number, arg: SimpleI.listArg): Promise<WalletI[]> {
        let res: WalletI[] = [];
        this.errorSys.error(this.className() + '.getUserWalletList', 'abstract method');
        return res;
    }

}