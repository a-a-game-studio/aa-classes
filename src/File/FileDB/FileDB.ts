import { BaseDB } from "../../BaseClass/BaseDB";
import { FileI, FileE } from "./FileE";
import { ErrorSys, SimpleI } from "@a-a-game-studio/aa-components/lib";


/**
 * Класс работы с DB файлов
 * тут описанн какие должны бить функции
 * реализация идет или на Back или Fron через extends
 */
export class FileDB extends BaseDB {

    public fileE: FileE;

    constructor(errorSys: ErrorSys) {
        super(errorSys);
        this.errorSys.errorClass = 'FileDB';

        this.fileE = new FileE;
    }

    /**
     * Получить файла по его id
     * @param fileId: number 
     */
    public async faGetInfoById(fileId: number): Promise<FileI> {
        let res: FileI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }

    

    /**
     * Список пользователей
     * @param arg 
     */
    public async faGetFileList(arg: SimpleI.listArg): Promise<FileI[]> {
        let res: FileI[] = [];
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return res;
    }

    /**
     * Вставка нового файла
     * @param data: FileI 
     */
    public async faInsert(data: FileI): Promise<FileI> {
        let resp: FileI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return resp;
    }

    /**
     * Обновлене инфы об файле
     * @param data: FileI 
     */
    public async faUpdate(data: FileI): Promise<boolean> {
        let resp: FileI;
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return this.errorSys.isOk();
    }

    /**
     * Удаляет файла из базы
     * @param data: FileI 
     */
    public async faRemove(data: FileI): Promise<boolean> {
        this.errorSys.error(this.fClassName() + '.' + this.fMethodName(), 'abstract method');
        return this.errorSys.isOk();
    }


}