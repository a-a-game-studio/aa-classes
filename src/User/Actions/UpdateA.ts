
import { BaseActions } from "../../BaseClass/BaseActions";
import { User } from "../User";
import { UserI } from "../UserDB/UserE";

/**
 * Информация об пользователе
 */
export class UpdateA extends BaseActions {

    public object: User;

    /**
     * Обновить польователя по id
     */
    public async update(data: UserI): Promise<boolean> {
        if (this.object.errorSys.isOk()) {

            try {
                /* если нет объекта */
                if (!this.object.is()) {
                    this.object.errorSys.error(this.className() + '.update', 'objectIsEmpty')
                    throw 'objectIsEmpty';
                }

                /* созраняем userId */
                let userId = this.object.data.id;
                /* посдставляем новые данные */
                this.object.data = data;
                this.object.data['id'] = userId;

                /* Обновляем данные */
                await this.object.listDB.userDB.update(this.object.data);

                /* если обновились пересчитываем их */
                this.object.data = await this.object.listDB.userDB.getInfoById(this.object.data.id);

            } catch (e) {
                this.object.errorSys.error(this.className() + '.update', String(e))
            }

        }

        return this.object.errorSys.isOk();
    }

}