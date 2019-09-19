import { AABase } from './AABase';

/**
 * Базовый класс событий
 */
export class BaseActions {

    protected object: AABase; // текущий объект


    protected className() {
        return this.constructor.name;
    }

    protected methodName(): string {
        var err = new Error();
        return /at \w+\.(\w+)/.exec(err.stack.split('\n')[2])[1] // we want the 2nd method in the call stack
    }

    constructor(object: AABase) {
        this.object = object;
    }
}