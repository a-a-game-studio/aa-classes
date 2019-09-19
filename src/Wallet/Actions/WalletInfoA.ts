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
    public async faGetBalance(userId: number): Promise<number> {
        return await this.object.listDB.walletDB.faGetBalance(userId);;
    }

}