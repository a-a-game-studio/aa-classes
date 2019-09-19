import { ErrorSys, ModelValidatorSys } from "@a-a-game-studio/aa-components/lib";


export class BaseDB {

    public errorSys: ErrorSys;
    public modelValidatorSys: ModelValidatorSys;

    constructor(errorSys: ErrorSys) {
        this.modelValidatorSys = new ModelValidatorSys(errorSys);
        this.errorSys = errorSys;
    }

    protected className() {
        return this.constructor.name;
    }

    protected methodName(): string {
        var err = new Error();
        return /at \w+\.(\w+)/.exec(err.stack.split('\n')[2])[1] // we want the 2nd method in the call stack
    }
}