import { UserDB } from '../User/UserDB/UserDB';
import { WalletDB } from '../Wallet/WalletDB/WalletDB';

export interface ListDBI {
    userDB?: UserDB;
    walletDB?: WalletDB;
}

/**
 * Список подключений к данным
 * используется во всех классах
 */
export class ListDB {

    public userDB: UserDB;
    public walletDB: WalletDB;

    constructor(data: ListDBI) {
        if(data.userDB) {
            this.userDB = data.userDB;
        }
        if(data.walletDB) {
            this.walletDB = data.walletDB;
        }
    }


}