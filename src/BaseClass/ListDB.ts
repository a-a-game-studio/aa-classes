import { UserDB } from '../User/UserDB/UserDB';
import { WalletDB } from '../Wallet/WalletDB/WalletDB';
import { FileDB } from '../File/FileDB/FileDB';

export interface ListDBI {
    userDB?: UserDB;
    walletDB?: WalletDB;
    fileDB?: FileDB;
}

/**
 * Список подключений к данным
 * используется во всех классах
 */
export class ListDB {

    public userDB: UserDB;
    public walletDB: WalletDB;
    public fileDB: FileDB;

    constructor(data: ListDBI) {
        if(data.userDB) {
            this.userDB = data.userDB;
        }
        if(data.walletDB) {
            this.walletDB = data.walletDB;
        }
        if(data.fileDB) {
            this.fileDB = data.fileDB;
        }
    }


}