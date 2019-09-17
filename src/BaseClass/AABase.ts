import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { ListDB } from "./ListDB";

export interface AABaseDataI {
    id?: number;
}

/**
 * Базовый объект
 */
export class AABase {

    public data: AABaseDataI; // данные

    public listDB: ListDB; // список подключений к DB

    public errorSys: ErrorSys; // обработчик ошибок

    constructor(errorSys: ErrorSys, listDB: ListDB) {
        this.errorSys = errorSys;
        this.listDB = listDB;
    }

    /**
     * Есть данные из DB
     */
    public is(): boolean {
        let resp = false;
        try {
            if (this.data.id) {
                resp = true;
            }
        } catch (e) {

        }

        return resp;
    }

    protected className() {
        return this.constructor.name;
    }

    /**
     * Синхронизация объекта с данными в базе
     * Все данные объекта заменяются данными базы
     * @param id 
     */
    public async sync(id: number): Promise<AABase> {


        return this;
    }

    /**
     * Список полей DB объекта
     */
    public sysGetProperties(): any {
        const result: any = {};
        for (let property in this) {
            if (
                this.hasOwnProperty(property) && !property.startsWith('_') &&
                ((typeof this[property] == 'string' || typeof this[property] == 'number'))
            ) {
                result[property] = this[property];
            }
        }
        return result;
    }

    /**
     * копирует поля интерфейса в поля класса
     * @param cInterface 
     * @param cClass 
     */
    public sysCopyInterface(cInterface: any, cClass: any): any {
        for (let k in cInterface) {
            cClass[k] = cInterface[k];
        }

        return cClass;
    }

}