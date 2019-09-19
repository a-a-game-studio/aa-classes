import { BaseActions } from "../../BaseClass/BaseActions";
import { File } from "../File";
import { ModifyA } from "./ModifyA";
import { InfoA } from "./InfoA";

/**
 * События файлов
 */
export class FileActions extends BaseActions {

    public infoA: InfoA; // инфо об файле
    public modifyA: ModifyA; // модификация 

    constructor(object: File) {
        super(object);

        this.infoA = new InfoA(object);
        this.modifyA = new ModifyA(object);
    }

}