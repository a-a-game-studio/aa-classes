import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
export interface LoginI {
    login?: string;
    pswd?: string;
}
export declare class AuthA extends BaseActions {
    object: User;
    login(data: LoginI): Promise<string>;
}
