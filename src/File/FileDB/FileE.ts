import { AABaseDataI } from "../../BaseClass/AABase";
import { Validator } from "@a-a-game-studio/aa-components/lib";

export interface FileI extends AABaseDataI {
    id?:number; // Идентификатор
	filename?: string; // Уникальное имя файла
	size?: number; // Размер
	source_url?: string // Исходный URL файла
	is_uploaded?: boolean; // Статус загружена ли картинка да|нет
	uploaded_at?: string; //Время когда была загружена файла
	created_at?: string; //Время создания записи
    updated_at?: string; // Время обновления записи
    fileData?: Buffer; // Данные файла
}


// Компоненты


export class FileE {
    //Имя таблицы
    public static NAME = 'files';


    /**
     * Получить правила валидации на вставку
     */
    public getRulesInsert() {
        let rules = new Validator();

        // ID filename
        rules.set(rules.rule('filename')
            .type('text')
            .require()
            .maxLen(50)
            .error(FileE.NAME+' - filename')
        );

        // Исходный URL файла
        rules.set(rules.rule('source_url')
            .type('text')
            .require()
            .maxLen(1024)
            .error(FileE.NAME+' - source_url')
        );

        return rules.get();

    }

    /**
     * Получить правила валидации на обновление
     */
    public getRulesUpdate() {
        let rules = new Validator();

        // Время когда картинка была загружена
        rules.set(rules.rule('uploaded_at')
            .type('int')
            .if(/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/)
            .error(FileE.NAME+' - uploaded_at')
        );

        // Изменение статуса загружена картинка или нет
        rules.set(rules.rule('is_uploaded')
            .type('boolean')
            .if([true, false])
            .error(FileE.NAME+' - is_uploaded')
        );

        // Размер исходной файла
        rules.set(rules.rule('size')
            .type('int')
            .more(0)
            .error(FileE.NAME+' - size')
        );

        return rules.get();

    }

}
