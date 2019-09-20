import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
export declare class WalletInfoA extends BaseActions {
    object: Wallet;
    faGetBalance(userId: number): Promise<number>;
}
