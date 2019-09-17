import { AABase } from './AABase';

/**
 * Базовый класс событий
 */
export class BaseActions {

    protected object: AABase; // текущий объект


    protected className() {
        return this.constructor.name;
    }

    constructor(object: AABase) {
        this.object = object;
    }
}