
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
     * Обновить польователя по id
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

            /* сохраняем userId */
            let userId = this.object.data.id;

            /* посдставляем новые данные */
            this.object.data = data;
            this.object.data['id'] = userId; // возвращаем сохраненный userId

            /* Обновляем данные */
            await this.object.listDB.userDB.faUpdate(this.object.data);

            /* если обновились пересчитываем их */
            this.object.data = await this.object.listDB.userDB.faGetInfoById(this.object.data.id);

        });

        return this.object.errorSys.isOk();
    }

}