import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
import { WalletI } from "../WalletDB/WalletE";
export declare class WalletModifyA extends BaseActions {
    object: Wallet;
    insert(data: WalletI): Promise<number>;
}
