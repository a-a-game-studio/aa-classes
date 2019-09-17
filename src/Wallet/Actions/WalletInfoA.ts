import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";

/**
 * Информация об доставке
 */
export class WalletInfoA extends BaseActions {

    public object: Wallet;

    /**
     * Получить текущий баланс пользователя
     * @param userId 
     */
    public async getBalance(userId: number): Promise<number> {

        let resp: number;
        try {

            resp = await this.object.listDB.walletDB.getBalance(userId);

        } catch (e) {
            this.object.errorSys.error(this.className() + '.getBalance', String(e));
        }

        return resp;
    }

}