import { AABase } from '../BaseClass/AABase';
import { FileI } from './FileDB/FileE';
import { FileActions } from './Actions/FileActions';
import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { ListDB } from '../BaseClass/ListDB';
export declare class File extends AABase {
    data: FileI;
    actions: FileActions;
    constructor(errorSys: ErrorSys, listDB: ListDB);
    clearData(): void;
    static Init(errorSys: ErrorSys, data: FileI, listDB: ListDB): File;
}
