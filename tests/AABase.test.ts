declare var global: any;
import * as mocha from 'mocha';
import { assert } from 'chai';

import { AABase } from '../src/BaseClass/AABase';
import { ErrorSys } from '@a-a-game-studio/aa-components/lib';
import { ListDB } from '../src/BaseClass/ListDB';

class TestClass extends AABase {

    /**
     * getClassName
     */
    public getClassName() {
        return this.className();
    }

    /**
     * getMethodName
     */
    public getMethodName() {
        return this.methodName();
    }
}

function run() {

    /* описание теста */
    mocha.describe('Test AABase', () => {

        mocha.it('className', () => {
            const errorSys = new ErrorSys();
            let listDB: ListDB;
            const tc = new TestClass(errorSys, listDB);

            assert.ok((tc.getClassName()) == 'TestClass');
        }); //it ****

        mocha.it('getMethodName', () => {
            const errorSys = new ErrorSys();
            let listDB: ListDB;
            const tc = new TestClass(errorSys, listDB);

            assert.ok((tc.getMethodName()) == 'getMethodName');
            assert.ok(true);
        }); //it ****


    });
}


run();


