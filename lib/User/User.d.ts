import { AABase } from '../BaseClass/AABase';
import { UserI } from './UserDB/UserE';
import { UserActions } from './Actions/UserActions';
import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { ListDB } from '../BaseClass/ListDB';
export declare class User extends AABase {
    data: UserI;
    actions: UserActions;
    constructor(errorSys: ErrorSys, listDB: ListDB);
    getName(): string;
    getAvatar(): string;
    clearData(): void;
    static Init(errorSys: ErrorSys, data: UserI, listDB: ListDB): User;
}
