import { BaseActions } from "../../BaseClass/BaseActions";
import { File } from "../File";

/**
 * Информация об пользователе
 */
export class InfoA extends BaseActions {

    public object: File;

    /**
     * Получить юзера по ID
     * @param fileId 
     */
    public async faGetInfoById(fileId: number): Promise<boolean> {
        if (this.object.errorSys.isOk()) {
            this.object.data = await this.object.listDB.fileDB.faGetInfoById(fileId);
        }
        return this.object.errorSys.isOk();
    }


}