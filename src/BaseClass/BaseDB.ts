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
}