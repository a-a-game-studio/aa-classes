import { AABase } from '../BaseClass/AABase';
import { UserI } from './UserDB/UserE';

import { UserActions } from './Actions/UserActions';
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
import { ListDB } from '../BaseClass/ListDB';

/**
 * Пользователь системы
 */
export class User extends AABase {

    public data: UserI;

    public actions: UserActions; // события пользователя

    constructor(errorSys: ErrorSys, listDB: ListDB) {
        super(errorSys, listDB);

        this.actions = new UserActions(this);
        this.clearData();
    }

    /**
     * Выдает имя ползователя в щависимости от данных
     */
    public getName(): string {
        let res = this.data.login;
        if (this.data.name) {
            res = this.data.surname + " " + this.data.name;
        }
        return res;
    }

    public getAvatar(): string {
        return 'https://cs8.pikabu.ru/post_img/big/2017/07/28/7/1501237789154870253.jpg';
    }


    public clearData() {
        this.data = {
            id: 0,
            phone: '',
            name: '',
            surname: '',
            currency_id: 0,
            patronymic: '',
            create_date: '',
            email: '',
            birthday: '',
            avatar: '',
            city: '',
            pass: '',
            login: '',
            token: ''
        }
    }

    /**
     * Переводит UserI в User
     * @param errorSys 
     * @param data 
     * @param userDB 
     */
    public static Init(errorSys: ErrorSys, data: UserI, listDB: ListDB): User {
        /* создаем пользоватля */
        let object = new User(errorSys, listDB);
        /* копируем в него поля из базы */
        object.data = data;
        return object;
    }

}