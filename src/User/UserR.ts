import { SimpleI } from "@a-a-game-studio/aa-components/lib";
import { UserI } from "./UserDB/UserE";

/* интерфейсы для API /user */

export interface getUserInfoREQ {
    
}

export interface getUserInfoRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: UserI;
}

export interface getInfoByUrlREQ {
    url: string;
}

export interface getInfoByUrlRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: UserI;
}

export interface registerByLoginAndPassREQ {
    login?: string;
    pass?: string;
    passConfirm?: string
}

export interface registerByLoginAndPassRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: {
        token: string;
    };
}

export interface updateREQ {
    user: UserI;
}

export interface updateRESP {
    ok: boolean;
    errors: SimpleI.KeyVal[];
    data: null;
}
