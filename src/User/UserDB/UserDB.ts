import { BaseDB } from "../../BaseClass/BaseDB";
import { UserI, UserE } from "./UserE";
import { UserTokenE } from "./UserTokenE";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";


/**
 * Класс работы с DB пользовтеля
 * тут описанн какие должны бить функции
 * реализация идет или на Back или Fron через extends
 */
export class UserDB extends BaseDB {

    public userE: UserE;
    public userTokenE: UserTokenE;

    constructor(errorSys: ErrorSys) {
        super(errorSys);
        this.errorSys.errorClass = 'UserDB';

        this.userE = new UserE;
        this.userTokenE = new UserTokenE;
    }

    /**
     * Получить пользователя по его id
     * @param userId: number 
     */
    public async faGetInfoById(userId: number): Promise<UserI> {
        let res: UserI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }

    /**
     * Получить пользователя по его login
     * @param sLogin: string 
     */
    public async faGetInfoByLogin(sLogin: string): Promise<UserI> {
        let res: UserI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }


    /**
     * Инфа об пользователе по его токену
     * @param sToken: string 
     */
    public async faGetUserInfoByToken(sToken: string): Promise<UserI> {
        let res: UserI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }

    /**
     * Список пользователей
     * @param arg 
     */
    public async faGetUserList(arg: SimpleI.listArg): Promise<UserI[]> {
        let res: UserI[] = [];
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }

    /**
     * Вставка нового юзера
     * @param data: UserI 
     */
    public async faInsert(data: UserI): Promise<UserI> {
        let resp: UserI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return resp;
    }

    /**
     * Обновлене инфы об юзере
     * @param data: UserI 
     */
    public async faUpdate(data: UserI): Promise<boolean> {
        let resp: UserI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return this.errorSys.isOk();
    }

    /**
     * Удаляет полльзователя из базы
     * @param data: UserI 
     */
    public async faRemove(data: UserI): Promise<boolean> {
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return this.errorSys.isOk();
    }

    /**
    * Регистрация по логину и паролю
    * @param sLogin: string 
    * @param sPass: string 
    * 
    * @returns token: string
    */
    public async faRegisterByLoginAndPass(sLogin: string, sPass: string): Promise<string> {
        let res = '';
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }


    /**
     * Выдает токен по логину и паролю
     * @param sPass: string 
     * @param sLogin: string 
     * @returns token: string 
     */
    public async faGetTokenByLoginAndPass(sLogin: string, sPass: string): Promise<string> {
        let res = '';
        this.errorSys.error(this.fClassName() + this.fMethodName(), 'abstract method');
        return res;
    }

}