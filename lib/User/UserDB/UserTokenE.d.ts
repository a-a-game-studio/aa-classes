export interface UserTokenI {
    id?: number;
    user_id?: string;
    date?: string;
    token?: string;
    deleted?: number;
}
export declare class UserTokenE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
    getRulesUpdate(): {
        [key: string]: any;
    };
    private getRules;
}
