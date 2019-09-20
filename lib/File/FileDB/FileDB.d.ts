import { BaseDB } from "../../BaseClass/BaseDB";
import { FileI, FileE } from "./FileE";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
export declare class FileDB extends BaseDB {
    fileE: FileE;
    constructor(errorSys: ErrorSys);
    faGetInfoById(fileId: number): Promise<FileI>;
    faGetFileList(arg: SimpleI.listArg): Promise<FileI[]>;
    faInsert(data: FileI): Promise<FileI>;
    faUpdate(data: FileI): Promise<boolean>;
    faRemove(data: FileI): Promise<boolean>;
}
