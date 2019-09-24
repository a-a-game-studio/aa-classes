import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";


export interface LoginI {
  login?: string;
  pswd?: string;
}

/**
 * События авторизации
 */
export class AuthA extends BaseActions {

  public object: User;

  /**
    * Проверка на авторизацию
    * @param login 
    * @param pswd 
    * 
    * @returns token
    */
  public async login(data: LoginI): Promise<string> {
    let res: string = '';
    res = await this.object.listDB.userDB.faGetTokenByLoginAndPass(data.login, data.pswd);
    if (!res) {
      this.object.errorSys.error('cantLogin', 'cantLogin')
    }
    return res;
  }

}