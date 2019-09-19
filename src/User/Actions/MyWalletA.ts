import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { Wallet } from "../../Wallet/Wallet";
import { ListWalletArg } from "../../Wallet/Actions/WalletListA";
import { WalletI } from "../../Wallet/WalletDB/WalletE";
import { FieldValidator } from "@a-a-game-studio/aa-components/lib";

/**
 * Кошелек юзера
 */
export class MyWalletA extends BaseActions {

    public object: User;

    /**
     * Текущий баланс
     */
    public async faGetBalance(): Promise<number> {
        let resp: number;
        const errorString = this.className() + '.' + this.methodName();

        const wallet = new Wallet(this.object.errorSys, this.object.listDB);

        let cV = new FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser');

        resp = await cV.faDoIfOkAsync(async () =>
            await wallet.actions.walletInfoA.getBalance(this.object.data.id)
        );

        return resp;
    }


    /**
     * Лог платежей
     * @param arg 
     */
    public async getWalletList(arg: SimpleI.listArg): Promise<Wallet[]> {
        let resp: Wallet[];

        try {

            if (!this.object.is()) {
                this.object.errorSys.error(this.className() + '.getBalance.', 'EmptyUser');
                throw 'EmptyUser';
            }

            let wallet = new Wallet(this.object.errorSys, this.object.listDB);
            let argT: ListWalletArg = arg;
            argT.userId = this.object.data.id;

            resp = await wallet.actions.walletListA.get(argT);

        } catch (e) {
            this.object.errorSys.error(this.className() + '.getBalance', String(e));
        }

        return resp;
    }

    public async insert(data: WalletI): Promise<number> {

        let resp = 0;
        try {

            if (!this.object.is()) {
                this.object.errorSys.error(this.className() + '.insert.', 'EmptyUser');
                throw 'EmptyUser';
            }

            if (data.amount == 0) {
                this.object.errorSys.error(this.className() + '.insert.', 'AmountIsNull');
                throw 'AmountIsNull';
            }

            data.user_id = this.object.data.id;

            let wallet = new Wallet(this.object.errorSys, this.object.listDB);
            resp = await wallet.actions.walletModifyA.insert(data);

        } catch (e) {
            this.object.errorSys.error(this.className() + '.getBalance', String(e));
        }

        return resp;

    }



}