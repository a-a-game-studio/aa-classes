import { BaseDB } from "../../BaseClass/BaseDB";
import { UserI, UserE } from "./UserE";
import { UserTokenE } from "./UserTokenE";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
export declare class UserDB extends BaseDB {
    userE: UserE;
    userTokenE: UserTokenE;
    constructor(errorSys: ErrorSys);
    getInfoById(userId: number): Promise<UserI>;
    getInfoByLogin(login: string): Promise<UserI>;
    getUserInfoByToken(token: string): Promise<UserI>;
    getUserList(arg: SimpleI.listArg): Promise<UserI[]>;
    insert(data: UserI): Promise<UserI>;
    update(data: UserI): Promise<boolean>;
    remove(data: UserI): Promise<boolean>;
    registerByLoginAndPass(login: string, pass: string): Promise<string>;
    getTokenByLoginAndPass(login: string, pass: string): Promise<string>;
}
