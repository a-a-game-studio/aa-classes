import { AABase } from '../BaseClass/AABase';
import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { WalletActions } from './Actions/WalletActions';
import { ListDB } from '../BaseClass/ListDB';
import { WalletI } from './WalletDB/WalletE';
export declare class Wallet extends AABase {
    data: WalletI;
    actions: WalletActions;
    constructor(errorSys: ErrorSys, listDB: ListDB);
    clearData(): void;
    static Init(errorSys: ErrorSys, data: WalletI, listDB: ListDB): Wallet;
}
