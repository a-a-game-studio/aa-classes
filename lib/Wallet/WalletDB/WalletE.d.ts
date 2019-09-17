import { AABaseDataI } from "../../BaseClass/AABase";
export interface WalletI extends AABaseDataI {
    id?: number;
    user_id?: number;
    date?: string;
    type?: number;
    amount?: number;
    balance?: number;
}
export declare class WalletE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
    getRulesUpdate(): {
        [key: string]: any;
    };
    private getRules;
}
