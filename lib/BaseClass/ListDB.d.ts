import { UserDB } from '../User/UserDB/UserDB';
import { WalletDB } from '../Wallet/WalletDB/WalletDB';
import { FileDB } from '../File/FileDB/FileDB';
export interface ListDBI {
    userDB?: UserDB;
    walletDB?: WalletDB;
    fileDB?: FileDB;
}
export declare class ListDB {
    userDB: UserDB;
    walletDB: WalletDB;
    fileDB: FileDB;
    constructor(data: ListDBI);
}
