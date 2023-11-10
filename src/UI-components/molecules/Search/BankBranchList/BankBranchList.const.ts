import { Atm, LocalBranch } from '../../../../assets/svg'

import { SpecificBankBranchType } from './BankBranchList.type'

export const specificBankBranch: SpecificBankBranchType = {
    LOCAL_BRANCH: {
        name: 'Отделение',
        icon: `${LocalBranch}`,
    },
    ATM: {
        name: 'Банкомат',
        icon: `${Atm}`,
    },
    INFOKIOSK: {
        name: 'Инфокиоск',
        icon: `${Atm}`,
    },
    CURRENCY_EXCHANGE: {
        name: 'Обмен валют',
        icon: `${Atm}`,
    },
    REMOTE_WORKPLACE: {
        name: 'Удалённое рабочее место',
        icon: `${Atm}`,
    },
}
export const entriesIconsBankBranch = Object.entries(specificBankBranch)
