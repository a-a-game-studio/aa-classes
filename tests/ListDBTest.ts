import { ErrorSys } from "@a-a-game-studio/aa-components/lib";
import { UserDB } from "../src/User/UserDB/UserDB";
import { WalletDB } from "../src/Wallet/WalletDB/WalletDB";
import { ListDB } from "../src/BaseClass/ListDB";

const errorSys = new ErrorSys();


const listDB = new ListDB({
    userDB: new UserDB(errorSys),
    walletDB: new WalletDB(errorSys),
});

export {
    errorSys,
    listDB
}
