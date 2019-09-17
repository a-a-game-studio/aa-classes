import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { ListDB } from "./ListDB";
export interface AABaseDataI {
    id?: number;
}
export declare class AABase {
    data: AABaseDataI;
    listDB: ListDB;
    errorSys: ErrorSys;
    constructor(errorSys: ErrorSys, listDB: ListDB);
    is(): boolean;
    protected className(): string;
    sync(id: number): Promise<AABase>;
    sysGetProperties(): any;
    sysCopyInterface(cInterface: any, cClass: any): any;
}
