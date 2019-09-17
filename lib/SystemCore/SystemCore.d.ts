import { AABase } from "../BaseClass/AABase";
import { SystemCoreActions } from "./Actions/SystemCoreActions";
import { ListDB } from "../BaseClass/ListDB";
import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { User } from "../User/User";
export declare class SystemCore extends AABase {
    actions: SystemCoreActions;
    user: User;
    constructor(errorSys: ErrorSys, user: User, listDB: ListDB);
}
