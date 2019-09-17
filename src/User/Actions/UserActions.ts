import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
import { RegisterA } from "./RegisterA";
import { InfoA } from "./InfoA";
import { AuthA } from "./AuthA";
import { UpdateA } from "./UpdateA";

/**
 * События пользователя
 */
export class UserActions extends BaseActions {

    public registerA: RegisterA; // регистрация
    public infoA: InfoA; // инфо об пользователе
    public authA: AuthA; // авторизация
    public updateA: UpdateA; // обновленеи 

    constructor(object: User) {
        super(object);

        this.registerA = new RegisterA(object);
        this.infoA = new InfoA(object);
        this.authA = new AuthA(object);
        this.updateA = new UpdateA(object);
    }

}