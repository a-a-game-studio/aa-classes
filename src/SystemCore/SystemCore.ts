import { AABase } from "../BaseClass/AABase";
import { SystemCoreActions } from "./Actions/SystemCoreActions";
import { ListDB } from "../BaseClass/ListDB";
import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { User } from "../User/User";

/**
 * Класс системы выполняемый на backend
 */
export class SystemCore extends AABase {

    public actions: SystemCoreActions;

    /* Юзер в системе */
    public user: User;

    constructor(errorSys: ErrorSys, user: User, listDB: ListDB) {
        super(errorSys, listDB);
        this.actions = new SystemCoreActions(this);
        this.user = user;

        /* исполнитель обящателен */
        if (!this.user.is()) {
            this.errorSys.error(this.className() + '.constructor', 'EmptyUser');
        }
    }

}