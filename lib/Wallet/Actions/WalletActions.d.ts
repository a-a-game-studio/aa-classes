import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
import { WalletInfoA } from "./WalletInfoA";
import { WalletListA } from "./WalletListA";
import { WalletModifyA } from "./WalletModifyA";
export declare class WalletActions extends BaseActions {
    walletInfoA: WalletInfoA;
    walletListA: WalletListA;
    walletModifyA: WalletModifyA;
    constructor(object: Wallet);
}
