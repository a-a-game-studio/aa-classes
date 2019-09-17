import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { WalletI } from "./WalletDB/WalletE";
export interface insertREQ {
    wallet: WalletI;
}
export interface insertRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: {
        balance: number;
    };
}
export interface getBalanceREQ {
}
export interface getBalanceRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: {
        balance: number;
    };
}
export interface getUserWalletListREQ {
}
export interface getUserWalletListRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: {
        walletList: WalletI[];
        total: number;
    };
}
