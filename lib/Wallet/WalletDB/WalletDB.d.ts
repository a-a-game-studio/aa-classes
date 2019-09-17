import { BaseDB } from "../../BaseClass/BaseDB";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
import { WalletE, WalletI } from "./WalletE";
export declare class WalletDB extends BaseDB {
    walletE: WalletE;
    constructor(errorSys: ErrorSys);
    insert(data: WalletI): Promise<number>;
    getBalance(userId: number): Promise<number>;
    getUserWalletList(userId: number, arg: SimpleI.listArg): Promise<WalletI[]>;
}
