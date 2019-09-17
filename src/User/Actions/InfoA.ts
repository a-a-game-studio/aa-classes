
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
    public async getInfoById(userId: number): Promise<boolean> {
        if (this.object.errorSys.isOk()) {
            this.object.data = await this.object.listDB.userDB.getInfoById(userId);
        }
        return this.object.errorSys.isOk();
    }

    /**
     * Получить юзера по токену
     * @param token 
     */
    public async getInfoByToken(token: string): Promise<boolean> {

        try {
            this.object.data = await this.object.listDB.userDB.getUserInfoByToken(token);
        } catch (e) {
            this.object.errorSys.error(this.className() + 'getInfoByToken', e);
        }

        if (this.object.is()) {
            this.object.data.token = token;
        }
        return this.object.errorSys.isOk();
    }

}