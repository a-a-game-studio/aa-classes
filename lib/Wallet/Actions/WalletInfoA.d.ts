import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
export declare class WalletInfoA extends BaseActions {
    object: Wallet;
    getBalance(userId: number): Promise<number>;
}
