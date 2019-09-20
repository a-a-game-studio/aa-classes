import { BaseActions } from "../../BaseClass/BaseActions";
import { File } from "../File";
import { FileI } from "../FileDB/FileE";
export declare class ModifyA extends BaseActions {
    object: File;
    faInsert(data: FileI): Promise<boolean>;
    faUpdate(data: FileI): Promise<boolean>;
}
