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
     * @returns balance: number
     */
    public async faGetBalance(): Promise<number> {
        let resp: number;
        const errorString = this.className() + '.' + this.methodName();
        const wallet = new Wallet(this.object.errorSys, this.object.listDB);

        /* проверяем существование пользователя */
        let fv = new FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser'); // юзер должен быть

        resp = await fv.faDoIfOkAsync(async () =>
            await wallet.actions.walletInfoA.faGetBalance(this.object.data.id)
        );

        return resp;
    }


    /**
     * Лог платежей
     * @param arg 
     * @returns Wallet[]
     */
    public async faGetWalletList(arg: SimpleI.listArg): Promise<Wallet[]> {
        let resp: Wallet[];

        const errorString = this.className() + '.' + this.methodName();
        const wallet = new Wallet(this.object.errorSys, this.object.listDB);

        /* проверяем существование пользователя */
        let fv = new FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser'); // юзер должен быть

        /* получаем список */
        fv.fSetErrorString(errorString + '.getWallet');
        resp = await fv.faDoIfOkAsync(async () => {
            /* аргументы для списка */
            let argT: ListWalletArg = arg;
            argT.userId = this.object.data.id; // подставляем пользователя

            return await wallet.actions.walletListA.faGet(argT);
        });

        return resp;
    }

    /**
     * Вставка записи в кошелек пользователя
     * @param data: WalletI
     * @returns walletId: number 
     */
    public async faInsert(data: WalletI): Promise<number> {

        let resp = 0;

        const errorString = this.className() + '.' + this.methodName();
        const wallet = new Wallet(this.object.errorSys, this.object.listDB);

        /* проверяем существование пользователя */
        let fv = new FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkUser')
            .fTrue('EmptyUser') // юзер должен быть

            .fSetData(data.amount)
            .fSetErrorString(errorString + '.amount')
            .fMore(0); // сумма должна быть > 0


        /* вставляем данные */
        fv.fSetErrorString(errorString + '.insert');
        resp = await fv.faDoIfOkAsync(async () => {
            /* Подставляем пользователя в запрос */
            data.user_id = this.object.data.id;

            return await wallet.actions.walletModifyA.faInsert(data);
        });

        return resp;

    }

}