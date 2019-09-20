import { BaseActions } from "../../BaseClass/BaseActions";
import { File } from "../File";
import { ModifyA } from "./ModifyA";
import { InfoA } from "./InfoA";
export declare class FileActions extends BaseActions {
    infoA: InfoA;
    modifyA: ModifyA;
    constructor(object: File);
}
