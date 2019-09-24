import { AABaseDataI } from "../../BaseClass/AABase";
export interface UserI extends AABaseDataI {
    id?: number;
    phone?: string;
    name?: string;
    surname?: string;
    currency_id?: number;
    patronymic?: string;
    create_date?: string;
    email?: string;
    birthday?: string;
    avatar?: string;
    city?: string;
    pswd?: string;
    login?: string;
    token?: string;
    hash?: string;
}
export declare class UserE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
    getRulesUpdate(): {
        [key: string]: any;
    };
    private getRules;
}
