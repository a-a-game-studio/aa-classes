import { AABase } from '../BaseClass/AABase';
import { FileI } from './FileDB/FileE';

import { FileActions } from './Actions/FileActions';
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";
import { ListDB } from '../BaseClass/ListDB';

/**
 * Пользователь системы
 */
export class File extends AABase {

    public data: FileI;

    public actions: FileActions; // события пользователя

    constructor(errorSys: ErrorSys, listDB: ListDB) {
        super(errorSys, listDB);

        this.actions = new FileActions(this);
        this.clearData();
    }


    public clearData() {
        this.data = {
            id: 0, // Идентификатор
            filename: null, // Уникальное имя картинки
            size: null, // Размер
            source_url: null, // Исходный URL картинки
            is_uploaded: false, // Статус загружена ли картинка да|нет
            uploaded_at: null, //Время когда была загружена картинки
            created_at: null, //Время создания записи
            updated_at: null, // Время обновления записи
        }
    }

    /**
     * Переводит FileI в File
     * @param errorSys 
     * @param data 
     * @param userDB 
     */
    public static Init(errorSys: ErrorSys, data: FileI, listDB: ListDB): File {
        /* создаем пользоватля */
        let object = new File(errorSys, listDB);
        /* копируем в него поля из базы */
        object.data = data;
        return object;
    }

}