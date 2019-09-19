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
    public async faRegisterStart(userI: UserI): Promise<boolean> {
        let res = false;
        return res;
    }


    /**
     * Подтверждение регистрации
     * @param userI 
     */
    public async faRegisterCommit(userI: UserI): Promise<boolean> {
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
    public async faRegisterByLoginAndPass(data: registerByLoginAndPassREQ): Promise<string> {
        let res = '';
        const errorString = this.className() + '.' + this.methodName();

        /* Валидация полей */
        let cV = new FieldValidator(this.object.errorSys, data.login)

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

        /* проверяем на существование пользователя */
        let user = await cV.faDoIfOkAsync(
            async () => await this.object.listDB.userDB.getInfoByLogin(data.login)
        );
        cV.fSetData(user)
            .fSetErrorString(errorString + '.loginAlreadyUsed')
            .fNotExist();

        /* регистрируем пользователя если все OK */
        res = await cV.faDoIfOkAsync(
            async () => await this.object.listDB.userDB.registerByLoginAndPass(data.login, data.pass)
        );

        return res;
    }

}
