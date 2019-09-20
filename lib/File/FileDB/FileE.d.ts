/// <reference types="node" />
import { AABaseDataI } from "../../BaseClass/AABase";
export interface FileI extends AABaseDataI {
    id?: number;
    filename?: string;
    size?: number;
    source_url?: string;
    is_uploaded?: boolean;
    uploaded_at?: string;
    created_at?: string;
    updated_at?: string;
    fileData?: Buffer;
}
export declare class FileE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
    getRulesUpdate(): {
        [key: string]: any;
    };
}
