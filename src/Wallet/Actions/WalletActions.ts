import { BaseActions } from "../../BaseClass/BaseActions";
import { Wallet } from "../Wallet";
import { WalletInfoA } from "./WalletInfoA";
import { WalletListA } from "./WalletListA";
import { WalletModifyA } from "./WalletModifyA";

/**
 * Кошелек пользователя
 */
export class WalletActions extends BaseActions {
    public walletInfoA: WalletInfoA;
    public walletListA: WalletListA;
    public walletModifyA: WalletModifyA;
    
    constructor(object: Wallet) {
        super(object);

        this.walletInfoA = new WalletInfoA(object);
        this.walletListA = new WalletListA(object);
        this.walletModifyA = new WalletModifyA(object);

    }

}