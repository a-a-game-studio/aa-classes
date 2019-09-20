import { BaseActions } from "../../BaseClass/BaseActions";
import { File } from "../File";
import { FileI } from "../FileDB/FileE";
import { FieldValidator } from "@a-a-game-studio/aa-components/lib";

/**
 * Модификация файла
 */
export class ModifyA extends BaseActions {

    public object: File;

    /**
     * Добавить файл
     */
    public async faInsert(data: FileI): Promise<boolean> {
        const errorString = this.fClassName() + '.' + this.fMethodName();

        /* проверяем существование пользователя */
        let fv = new FieldValidator(this.object.errorSys, data.fileData)
            .fSetErrorString(errorString + '.fileData')
            .fExist() // файл должен быть

            .fSetErrorString(errorString + '.filename')
            .fExist() // должно быть имя файла
            .fText()
            .fMinLen(5);

        /* если все хорошо начинаем процедуру вставки */
        fv.fSetErrorString(errorString + '.insert');
        await fv.faDoIfOkAsync(async () => {
            /* Загружаем файл */
            this.object.data = await this.object.listDB.fileDB.faInsert(this.object.data);

            /* проставляем данные в объект */
            this.object.data = data;
        });

        return this.object.errorSys.isOk();

    }

    /**
     * Обновить файл по id
     */
    public async faUpdate(data: FileI): Promise<boolean> {
        const errorString = this.fClassName() + '.' + this.fMethodName();

        /* проверяем существование пользователя */
        let fv = new FieldValidator(this.object.errorSys, this.object.is())
            .fSetErrorString(errorString + '.checkFile')
            .fTrue('EmptyFile'); // юзер должен быть

        /* если все хорошо начинаем процедуру обновления */
        fv.fSetErrorString(errorString + '.update');
        await fv.faDoIfOkAsync(async () => {

            /* сохраняем fileId */
            let id = this.object.data.id;

            /* посдставляем новые данные */
            this.object.data = data;
            this.object.data['id'] = id; // возвращаем сохраненный id

            /* Обновляем данные */
            await this.object.listDB.fileDB.faUpdate(this.object.data);

            /* если обновились пересчитываем их */
            this.object.data = await this.object.listDB.fileDB.faGetInfoById(this.object.data.id);

        });

        return this.object.errorSys.isOk();
    }

}