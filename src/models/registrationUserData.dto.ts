export interface ClientUsersData {
    id: string
    mobilePhone: string
    clientStatus: 'NOT_REGISTERED' | 'ACTIVE' | 'NOT_ACTIVE' | 'CLOSED'
    password: string
    securityQuestion: string
    securityAnswer: string
    email: string
}

export interface NonClientUsersData
    extends Omit<ClientUsersData, 'clientStatus' | 'id'> {
    clientStatus: 'NOT_CLIENT'
    firstName: string
    middleName: string
    lastName: string
    passportNumber: string
    countryOfResidence: boolean
}
