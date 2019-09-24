"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AABase_1 = require("../BaseClass/AABase");
const UserActions_1 = require("./Actions/UserActions");
class User extends AABase_1.AABase {
    constructor(errorSys, listDB) {
        super(errorSys, listDB);
        this.actions = new UserActions_1.UserActions(this);
        this.clearData();
    }
    getName() {
        let res = this.data.login;
        if (this.data.name) {
            res = this.data.surname + " " + this.data.name;
        }
        return res;
    }
    getAvatar() {
        return 'https://cs8.pikabu.ru/post_img/big/2017/07/28/7/1501237789154870253.jpg';
    }
    clearData() {
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
            pswd: '',
            login: '',
            token: ''
        };
    }
    static Init(errorSys, data, listDB) {
        let object = new User(errorSys, listDB);
        object.data = data;
        return object;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map