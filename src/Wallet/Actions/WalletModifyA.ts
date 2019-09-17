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
    public async insert(data: WalletI): Promise<number> {

        let resp: number;
        try {

            resp = await this.object.listDB.walletDB.insert(data);

        } catch (e) {
            this.object.errorSys.error(this.className() + '.insert', String(e));
        }

        return resp;
    }

}