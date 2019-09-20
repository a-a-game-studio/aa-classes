import { BaseDB } from "../../BaseClass/BaseDB";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
import { WalletE, WalletI } from "./WalletE";
export declare class WalletDB extends BaseDB {
    walletE: WalletE;
    constructor(errorSys: ErrorSys);
    faInsert(data: WalletI): Promise<number>;
    faGetBalance(userId: number): Promise<number>;
    faGetUserWalletList(userId: number, arg: SimpleI.listArg): Promise<WalletI[]>;
}
