import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { FileI } from "./FileDB/FileE";
export interface getFileInfoREQ {
}
export interface getFileInfoRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: FileI;
}
export interface getInfoByUrlREQ {
    url: string;
}
export interface getInfoByUrlRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: FileI;
}
export interface registerByLoginAndPassREQ {
    login?: string;
    pswd?: string;
    pswdConfirm?: string;
}
export interface registerByLoginAndPassRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: {
        token: string;
    };
}
export interface updateREQ {
    user: FileI;
}
export interface updateRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: null;
}
