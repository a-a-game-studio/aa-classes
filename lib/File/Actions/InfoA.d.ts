import { BaseActions } from "../../BaseClass/BaseActions";
import { File } from "../File";
export declare class InfoA extends BaseActions {
    object: File;
    faGetInfoById(fileId: number): Promise<boolean>;
}
