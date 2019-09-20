import { BaseDB } from "../../BaseClass/BaseDB";
import { UserI, UserE } from "./UserE";
import { UserTokenE } from "./UserTokenE";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
export declare class UserDB extends BaseDB {
    userE: UserE;
    userTokenE: UserTokenE;
    constructor(errorSys: ErrorSys);
    faGetInfoById(userId: number): Promise<UserI>;
    faGetInfoByLogin(sLogin: string): Promise<UserI>;
    faGetUserInfoByToken(sToken: string): Promise<UserI>;
    faGetUserList(arg: SimpleI.listArg): Promise<UserI[]>;
    faInsert(data: UserI): Promise<UserI>;
    faUpdate(data: UserI): Promise<boolean>;
    faRemove(data: UserI): Promise<boolean>;
    faRegisterByLoginAndPass(sLogin: string, sPass: string): Promise<string>;
    faGetTokenByLoginAndPass(sLogin: string, sPass: string): Promise<string>;
}
