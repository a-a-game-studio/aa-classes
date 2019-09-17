import { BaseActions } from "../../BaseClass/BaseActions";
import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { Wallet } from "../Wallet";

/**
 * Входные параметры для списка доставок
 */
export interface ListWalletArg extends SimpleI.listArg {
    userId?: number;
}

/**
 * Информация об платежах список
 */
export class WalletListA extends BaseActions {

    public object: Wallet;



    /**
     * Список платежей в кошельке
     */
    async get(arg: ListWalletArg): Promise<Wallet[]> {
        let resp: Wallet[] = [];

        try {

            let temp = await this.object.listDB.walletDB.getUserWalletList(arg.userId, arg);

            for (let i = 0; i < temp.length; i++) {
                resp.push(Wallet.Init(this.object.errorSys, temp[i], this.object.listDB));
            }

        } catch (e) {
            this.object.errorSys.error(this.className() + '.get', String(e));
        }

        return resp;
    }

}