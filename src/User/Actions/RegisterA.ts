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
     * @param pswd 
     * @param pswdConfirm 
     * 
     * @returns token: string
     */
    public async faRegisterByLoginAndPass(data: registerByLoginAndPassREQ): Promise<string> {
        let res = '';
        const errorString = this.fClassName() + '.' + this.fMethodName();

        /* Валидация полей */
        let fv = new FieldValidator(this.object.errorSys, data.login)

            /* Проверякм login */
            .fSetErrorString(errorString + '.login')
            .fExist()
            .fText()
            .fMinLen(5)

            /* проверяем пароль */
            .fSetData(data.pswd)
            .fSetErrorString(errorString + '.pswd')
            .fExist()
            .fText()
            .fMinLen(7)

            /* проверяем подтверждение пароля */
            .fSetData(data.pswdConfirm)
            .fSetErrorString(errorString + '.pswdConfirm')
            .fExist()
            .fText()
            .fEqual(data.pswd)
            .fMinLen(7)
            
            .fSetErrorString('getInfoByLogin');

        /* проверяем на существование пользователя */
        let user = await fv.faDoIfOkAsync(
            async () => await this.object.listDB.userDB.faGetInfoByLogin(data.login)
        );
        fv.fSetData(user)
            .fSetErrorString(errorString + '.loginAlreadyUsed')
            .fNotExist(); // такого логина быть не должно в DB

        /* регистрируем пользователя если все OK */
        fv.fSetErrorString('regDB');
        res = await fv.faDoIfOkAsync(
            async () => await this.object.listDB.userDB.faRegisterByLoginAndPass(data.login, data.pswd)
        );

        return res;
    }

}
