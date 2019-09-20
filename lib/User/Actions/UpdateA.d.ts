import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
import { UserI } from "../UserDB/UserE";
export declare class UpdateA extends BaseActions {
    object: User;
    faUpdate(data: UserI): Promise<boolean>;
}
