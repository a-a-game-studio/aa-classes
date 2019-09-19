import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
import { WalletI } from "../WalletDB/WalletE";

/**
 * Информация об доставке
 */
export class WalletModifyA extends BaseActions {

    public object: Wallet;

    /**
     * Добавить транзакцию оплаты/списания
     * возвращает остаток баланса
     * @param data 
     */
    public async faInsert(data: WalletI): Promise<number> {
        return await this.object.listDB.walletDB.faInsert(data);;
    }

}