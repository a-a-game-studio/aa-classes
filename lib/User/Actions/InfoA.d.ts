import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
export declare class InfoA extends BaseActions {
    object: User;
    faGetInfoById(userId: number): Promise<boolean>;
    faGetUserInfoByToken(token: string): Promise<boolean>;
}
