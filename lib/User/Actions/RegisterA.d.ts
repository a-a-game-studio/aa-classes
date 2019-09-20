import { UserI } from '../UserDB/UserE';
import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from '../User';
import { registerByLoginAndPassREQ } from '../UserR';
export declare class RegisterA extends BaseActions {
    object: User;
    faRegisterStart(userI: UserI): Promise<boolean>;
    faRegisterCommit(userI: UserI): Promise<boolean>;
    faRegisterByLoginAndPass(data: registerByLoginAndPassREQ): Promise<string>;
}
