import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
export declare class InfoA extends BaseActions {
    object: User;
    getInfoById(userId: number): Promise<boolean>;
    getInfoByToken(token: string): Promise<boolean>;
}
