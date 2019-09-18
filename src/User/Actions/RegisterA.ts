import { UserI } from '../UserDB/UserE';
import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from '../User';
import { registerByLoginAndPassREQ } from '../UserR';
import { FieldValidator } from "@a-a-game-studio/aa-components/lib";
/**
 * Регистрация пользователя в системе
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
        const errorString = this.className() + '.registerByLoginAndPass';
        try {

            /* Валидация полей */
            let cValidator = new FieldValidator(this.object.errorSys, data.login)

                /* Проверякм login */
                .fSetErrorString(errorString + '.login')
                .fExist()
                .fText()
                .fMinLen(5)

                /* проверяем пароль */
                .fSetData(data.pass)
                .fSetErrorString(errorString + '.pass')
                .fExist()
                .fText()
                .fMinLen(7)

                /* проверяем подтверждение пароля */
                .fSetData(data.passConfirm)
                .fSetErrorString(errorString + '.passConfirm')
                .fExist()
                .fText()
                .fEqual(data.pass)
                .fMinLen(7);

            if (cValidator.fIsOk()) {
                cValidator
                    .fSetData(await this.object.listDB.userDB.getInfoByLogin(data.login))
                    .fSetErrorString(errorString + '.loginAlreadyUsed')
                    .fNotExist()
            }

            res = await cValidator.fDoIfOkAsync(
                /* регистрируем пользователя если все OK */
                this.object.listDB.userDB.registerByLoginAndPass,
                [data.login, data.pass]
            );
            

        } catch (e) {
            this.object.errorSys.error(errorString, String(e));
        }

        return res;
    }

}
