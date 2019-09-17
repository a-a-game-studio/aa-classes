# aa-classes
TypeScript классы для frontend и backend

# BaseModule
- AABase - базовый класс
- BaseActions - базовые действия
- BaseDB - базовый доступ к данным
- ListDB - список доступов к данным

        Доступа к данным - процедурный класс с методами типа getUserInfoSQL

# UserModule - Пользователь системы
- User
- UserR
- UserDB
    - UserDB
    - UserE
    - UserToken
- UserActions
    - AuthA
    - InfoA
    - MyWalletA
    - RegisterA
    - UpdateA

# SystemCoreModule - Класс системы выполняемый на backend
- SystemCore
- SystemCoreActions
- ListDB

        так как не все дейсвия схожи у фронта и бека этот класс SystemCore и нужен как обертка на беке

# Wallet - Кошелек
- Wallet
- WalletR
- WalletDB
    - WalletDB
    - WalletE
    - WalletI
- WalletActions
    - WalletInfoA
    - WalletListA
    - WalletModifyA




