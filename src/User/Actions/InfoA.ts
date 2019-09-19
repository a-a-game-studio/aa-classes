
import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";

/**
 * Информация об пользователе
 */
export class InfoA extends BaseActions {

    public object: User;

    /**
     * Получить юзера по ID
     * @param userId 
     */
    public async faGetInfoById(userId: number): Promise<boolean> {
        if (this.object.errorSys.isOk()) {
            this.object.data = await this.object.listDB.userDB.faGetInfoById(userId);
        }
        return this.object.errorSys.isOk();
    }

    /**
     * Получить юзера по токену
     * @param token 
     */
    public async faGetUserInfoByToken(token: string): Promise<boolean> {

        this.object.data = await this.object.listDB.userDB.faGetUserInfoByToken(token);

        if (this.object.is()) {
            this.object.data.token = token;
        }
        return this.object.errorSys.isOk();
    }

}