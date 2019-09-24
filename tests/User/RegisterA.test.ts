declare var global: any;

import * as mocha from 'mocha';
import { assert } from 'chai';


import { User } from '../../src/User/User';
import { listDB, errorSys } from "../ListDBTest";
import { registerByLoginAndPassREQ } from '../../src/User/UserR';

async function run() {

    /* описание теста */
    mocha.describe('RegisterA test', async () => {

        mocha.it('faRegisterByLoginAndPass 1', async () => {
            const user = new User(errorSys, listDB);
            errorSys.clear();

            let regData: registerByLoginAndPassREQ = {
                login: 'user',
                pswd: 'strier',
                pswdConfirm: 'stringuser'
            }
            let data = await user.actions.registerA.faRegisterByLoginAndPass(regData);

            console.log(errorSys.getErrors());

            assert.ok(errorSys.getErrorCount() == 3);


        }); //it ****

        mocha.it('faRegisterByLoginAndPass 2 ', async () => {
            const user = new User(errorSys, listDB);
            errorSys.clear();

            let regData: registerByLoginAndPassREQ = {
                login: 'useruser',
                pswd: 'strieruser',
                pswdConfirm: 'strieruser'
            }
            let data = await user.actions.registerA.faRegisterByLoginAndPass(regData);

            console.log(errorSys.getErrors());

            assert.ok(errorSys.getErrorCount() == 2);


        }); //it ****


    });
}


run();


