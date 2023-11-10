export const myCreditOrdersStubData = [
    {
        id: '942930c9-ecea-44c5-8e6e-0aa223f2e084',
        productId: 5,
        productName: 'Рефинансирование',
        status: 'APPROVED',
        amount: 200000,
        periodMonths: 100,
        creationDate: '2023-03-23',
        principal: null,
        interest: null,
        principalDebt: null,
        interestDebt: null,
        paymentDate: null,
    },
]

export const myCreditsStubData = [
    {
        creditId: '1b7667d7-599a-4ce7-b695-7e5d52e74f95',
        name: 'Рефинансирование',
        principalDebt: 200000,
        creditLimit: 316667,
        creditCurrencyCode: 'RUB',
        terminationDate: '2024-07-23',
    },
    {
        creditId: '92b26686-9ba1-43d4-8664-0324e2a8cff8',
        name: 'Кредитная карточка',
        principalDebt: 5588,
        creditLimit: 60000,
        creditCurrencyCode: 'RUB',
        terminationDate: '2024-03-03',
    },
]

export const creditItemInfoStubData = {
    paymentDate: '2029-12-12',
    creditLimit: 10000000,
    loanPeriod: '12 years (144 months)',
    interestDebt: 10000,
    accountNumber: '30232810100000000004',
    interestRate: '0.18',
    paymentInterest: 600,
    paymentPrincipal: 1250000,
    agreementNumber: '87654321',
    principalDebt: 0,
}

export const depositInfoStubData = {
    interestRate: 12,
    autoRenewal: true,
    name: 'Thrifty deposit',
    schemaName: 'RECCURING',
    isCapitalization: true,
    isRevocable: true,
    agreementId: 'string',
    accountNumber: '374245455400126',
    currencyCode: 'RUB',
    currentBalance: 12000,
    endDate: '2042-04-01',
    productName: 'Deposit Save!',
    startDate: '2022-04-01',
}

export const myDepositsItemStubData = [
    {
        agreementId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        startDate: '2022-11-18T13:00:07.300Z',
        endDate: '2023-01-18T13:00:07.300Z',
        currentBalance: 311110,
        productName: 'DEP2',
        currencyCode: 'EUR',
        accountNumber: '374245455400126',
    },
    {
        agreementId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        startDate: '2021-01-18T13:00:07.300Z',
        endDate: '2023-01-18T13:00:07.300Z',
        currentBalance: 21110,
        productName: 'DEP1',
        currencyCode: 'EUR',
        accountNumber: '374245455400126',
    },
    {
        agreementId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        startDate: '2020-01-18T13:00:07.300Z',
        endDate: '2023-01-18T13:00:07.300Z',
        currentBalance: 4411110,
        productName: 'DEP',
        currencyCode: 'EUR',
        accountNumber: '4965713028943784',
    },
]

export const depositStoreStubData = {
    initialState: {
        depositProducts: {
            data: [
                {
                    amountMax: 500000,
                    amountMin: 200,
                    currencyCode: 'RUB',
                    id: 88,
                    interestRateEarly: 0.5,
                    isCapitalization: true,
                    isRevocable: true,
                    maxDurationMonths: 12,
                    maxInterestRate: 9,
                    minDurationMonths: 6,
                    minInterestRate: 3,
                    name: 'DEP',
                    schemaName: 'RECCURING',
                },
            ],
        },
    },
}

export const cardProductStubData = [
    {
        id: 1,
        cardName: 'Visa GOLD Super',
        coBrand: 'AZBUKAVKUSA',
        isActive: true,
        isVirtual: true,
        productPrice: 100,
        servicePrice: 120,
        premiumStatus: 'BLACK',
        cashback: 3,
        currencyCode: 'RUB',
    },
]

export const cardProductsInfoStubData = {
    cashback: 3,
    id: 1,
    paymentSystem: 'MIR',
    premiumStatus: 'BLACK',
    servicePrice: 1000,
    cardName: 'Visa GOLD Super',
    coBrand: 'AZBUKAVKUSA',
    currencyCode: 'RUB',
}

export const myCardsWithTextStubData = [
    {
        cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
        expirationDate: '2022-10-07',
        cardName: 'Visa GOLD Super',
        paymentSystem: 'VISA',
        currencyCode: 'EUR',
        balance: 20000,
        cardNumber: '590000000000000',
        type: 'creditCard',
    },
    {
        cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
        expirationDate: '2022-10-07',
        cardName: 'Universal GOLD',
        paymentSystem: 'MIR',
        currencyCode: 'EUR',
        balance: 1400,
        cardNumber: '590000000000000',
        type: 'depositCard',
    },
    {
        cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa3',
        expirationDate: '2022-10-07',
        cardName: 'Universal 34',
        paymentSystem: 'MIR',
        currencyCode: 'EUR',
        balance: 1400,
        cardNumber: '590000000000000',
        type: 'depositCard',
    },
    {
        cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa4',
        expirationDate: '2022-10-07',
        cardName: 'Universal 2',
        paymentSystem: 'MIR',
        currencyCode: 'EUR',
        balance: 1400,
        cardNumber: '590000000000000',
        type: 'depositCard',
    },
    {
        cardId: '3fa85f64-5717-4562-b3fc-2c963f66afa5',
        expirationDate: '2022-10-07',
        cardName: 'Universal 3',
        paymentSystem: 'MIR',
        currencyCode: 'EUR',
        balance: 1400,
        cardNumber: '590000000000000',
        type: 'depositCard',
    },
]

export const operationHistoryStubData = [
    {
        transferOrderId: '01',
        sum: '2000',
        transferTypeName: 'BETWEEN_CARDS',
        currencyCode: 'RUB',
        time: '11:16',
        remitterCardNumber: '1111222233335555',
        name: 'Андрей',
        purpose: 'Пополнение баланса',
    },
    {
        transferOrderId: '02',
        sum: '200000',
        transferTypeName: 'BETWEEN_CARDS',
        currencyCode: 'RUB',
        time: '19:16',
        remitterCardNumber: '1111222233335555',
        name: 'Андрей',
        purpose: 'Перевод',
    },
    {
        transferOrderId: '03',
        sum: '20000',
        transferTypeName: 'BETWEEN_CARDS',
        currencyCode: 'RUB',
        time: '08:47',
        remitterCardNumber: '2222444477773986',
        name: 'Андрей',
        purpose: 'Перевод',
    },
]

export const MyCreditCardsStubData = [
    {
        id: 'f331c076-a991-4ca7-ab7a-2e1d191d3756',
        accountNumber: '54465362139193744782',
        cardNumber: '3287916999448888',
        balance: 1000,
        currencyCode: 'EUR',
        paymentSystem: 'VISA',
        expirationDate: '2026-07-05',
        name: 'Рефинансирование',
        type: 'creditCard',
        cardId: 'f331c076-a991-4ca7-ab7a-2e1d191d3756',
        cardName: 'Рефинансирование',
    },
    {
        id: '23c4be8e-fdf5-4fe6-ab3a-a5a1830381a9',
        accountNumber: '89019890265357896856',
        cardNumber: '0123896055446765',
        balance: 40000,
        currencyCode: 'EUR',
        paymentSystem: 'VISA',
        expirationDate: '2026-07-05',
        name: 'Кредитная карточка',
        type: 'creditCard',
        cardId: '23c4be8e-fdf5-4fe6-ab3a-a5a1830381a9',
        cardName: 'Кредитная карточка',
    },
    {
        id: '23c4be8e-fdf5-4fe6-ab3a-a5a1330382a9',
        accountNumber: '89019890265357896856',
        cardNumber: '0123896055446765',
        balance: 40000,
        currencyCode: 'EUR',
        paymentSystem: 'VISA',
        expirationDate: '2026-07-05',
        name: 'Кредитная карточка',
        type: 'hello',
        cardId: '23c4b28e-fdf5-4fe6-ab3a-a5a1830381a9',
        cardName: 'Кредитная карточка',
    },
]
