import { UserI } from '../UserDB/UserE';
import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from '../User';
import { registerByLoginAndPassREQ } from '../UserR';

/**
 * События для доставки заказа НЕ своего
 */
export class RegisterA extends BaseActions {


    public object: User;


    /**
     * Регистрация
     * @param userI 
     */
    public async registerStart(userI: UserI): Promise<boolean> {
        let res = false;
        return res;
    }


    /**
     * Подтверждение регистрации
     * @param userI 
     */
    public async registerCommit(userI: UserI): Promise<boolean> {
        let res = false;
        return res;
    }


    /**
     * Регистрация по логину и паролю
     * @param login 
     * @param pass 
     * @param passConfirm 
     * 
     * @returns token: string
     */
    public async registerByLoginAndPass(data: registerByLoginAndPassREQ): Promise<string> {
        let res = '';

        try {
            if (!data.login) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'emptyLogin');
            }
            if (!data.pass) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'emptypass');
            }
            if (!data.passConfirm) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'emptypassConfirm');
            }

            if (!this.object.errorSys.isOk()) {
                throw 'error input';
            }

            if (data.login.length < 5) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'loginToShort');
            }

            if (data.pass.length < 7) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'passToShort');
            }

            if (data.passConfirm != data.pass) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'passConfirm');
            }

            if (!this.object.errorSys.isOk()) {
                throw 'error validate';
            }

            /* использован ли такой логин */
            let existUser = await this.object.listDB.userDB.getInfoByLogin(data.login);
            if (existUser) {
                this.object.errorSys.error(this.className() + '.registerByLoginAndPass', 'loginAlreadyUsed');
            }

            if (!this.object.errorSys.isOk()) {
                throw 'error loginAlreadyUsed';
            }

            res = await this.object.listDB.userDB.registerByLoginAndPass(data.login, data.pass);

        } catch (e) {
            this.object.errorSys.error('someEror', String(e));
        }

        return res;
    }

}
