import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
import { RegisterA } from "./RegisterA";
import { InfoA } from "./InfoA";
import { AuthA } from "./AuthA";
import { UpdateA } from "./UpdateA";
export declare class UserActions extends BaseActions {
    registerA: RegisterA;
    infoA: InfoA;
    authA: AuthA;
    updateA: UpdateA;
    constructor(object: User);
}
