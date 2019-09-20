import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
import { WalletI } from "../WalletDB/WalletE";
export declare class WalletModifyA extends BaseActions {
    object: Wallet;
    faInsert(data: WalletI): Promise<number>;
}
