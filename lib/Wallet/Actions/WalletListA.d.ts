import { BaseActions } from "../../BaseClass/BaseActions";
import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { Wallet } from "../Wallet";
export interface ListWalletArg extends SimpleI.listArg {
    userId?: number;
}
export declare class WalletListA extends BaseActions {
    object: Wallet;
    faGet(arg: ListWalletArg): Promise<Wallet[]>;
}
