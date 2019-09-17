import { BaseDB } from"../../BaseClass/BaseDB";
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
     * @param userId 
     */
    public async getInfoById(userId: number): Promise<UserI> {
        let res: UserI;
        this.errorSys.error(this.className+'.getInfoById', 'abstract method');
        return res;
    }

    /**
     * Получить пользователя по его login
     * @param userId 
     */
    public async getInfoByLogin(login: string): Promise<UserI> {
        let res: UserI;
        this.errorSys.error(this.className+'.getInfoByLogin', 'abstract method');
        return res;
    }


    /**
     * Инфа об пользователе по его токену
     * @param token 
     */
    public async getUserInfoByToken(token: string): Promise<UserI> {
        let res: UserI;
        this.errorSys.error(this.className+'.getUserInfoByToken', 'abstract method');
        return res;
    }

    /**
     * Список пользователей
     * @param arg 
     */
    public async getUserList(arg: SimpleI.listArg): Promise<UserI[]> {
        let res: UserI[] = [];
        this.errorSys.error(this.className+'.getUserList', 'abstract method');
        return res;
    }

    /**
     * Вставка нового юзера
     * @param data 
     */
    public async insert(data: UserI): Promise<UserI> {
        let resp: UserI;
        this.errorSys.error(this.className+'.insert', 'abstract method');
        return resp;
    }

    /**
     * Обновлене инфы об юзере
     * @param data 
     */
    public async update(data: UserI): Promise<boolean> {
        let resp: UserI;
        this.errorSys.error(this.className+'.update', 'abstract method');
        return this.errorSys.isOk();
    }

    /**
     * Удаляет полльзователя из базы
     * @param data 
     */
    public async remove(data: UserI): Promise<boolean> {
        this.errorSys.error(this.className+'.remove', 'abstract method');
        return this.errorSys.isOk();
    }

    /**
    * Регистрация по логину и паролю
    * @param login 
    * @param pass 
    * @param passConfirm 
    * 
    * @returns token: string
    */
    public async registerByLoginAndPass(login: string, pass: string): Promise<string> {
        let res = '';
        this.errorSys.error(this.className+'.registerByLoginAndPass', 'abstract method');
        return res;
    }

    
    /**
     * Выбает токен по логину и паролю
     * @param login 
     * @param pass 
     * @returns token
     */
    public async getTokenByLoginAndPass(login: string, pass: string): Promise<string> {
        let res = '';
        this.errorSys.error(this.className+'.getTokenByLoginAndPass', 'abstract method');
        return res;
    }

}