import { UserDB } from '../User/UserDB/UserDB';
import { WalletDB } from '../Wallet/WalletDB/WalletDB';
export interface ListDBI {
    userDB?: UserDB;
    walletDB?: WalletDB;
}
export declare class ListDB {
    userDB: UserDB;
    walletDB: WalletDB;
    constructor(data: ListDBI);
}
