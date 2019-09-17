import { UserI } from '../UserDB/UserE';
import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from '../User';
import { registerByLoginAndPassREQ } from '../UserR';
export declare class RegisterA extends BaseActions {
    object: User;
    registerStart(userI: UserI): Promise<boolean>;
    registerCommit(userI: UserI): Promise<boolean>;
    registerByLoginAndPass(data: registerByLoginAndPassREQ): Promise<string>;
}
