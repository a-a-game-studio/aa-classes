import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { Wallet } from "../../Wallet/Wallet";
import { WalletI } from "../../Wallet/WalletDB/WalletE";
export declare class MyWalletA extends BaseActions {
    object: User;
    getBalance(): Promise<number>;
    getWalletList(arg: SimpleI.listArg): Promise<Wallet[]>;
    insert(data: WalletI): Promise<number>;
}
