import { ErrorSys, ModelValidatorSys } from "@a-a-game-studio/aa-components/lib";
export declare class BaseDB {
    errorSys: ErrorSys;
    modelValidatorSys: ModelValidatorSys;
    constructor(errorSys: ErrorSys);
    protected fClassName(): string;
    protected fMethodName(): string;
}
