export interface UserDto {
    firstName: string
    lastName: string
    middleName?: string
    mobilePhone: string
    passportNumber?: string
    email: string
    countryOfResidence?: boolean
    clientId: string
    clientStatus: string
    profileSettings?: Partial<UserProfileSettingsDto>
}

export interface UserVerificateDto {
    page3: {
        id: string
        clientId: string
        creationDate: string
        documentName: string
        fileFormat: string
        file: string
    }
    registrationPage: {
        id: string
        clientId: string
        creationDate: string
        documentName: string
        fileFormat: string
        file: string
    }
}

export type ClientId = string

export interface UserProfileSettingsDto {
    avatarFile: string
    fileFormat: 'image/jpeg' | 'image/png'
    profileTheme: 'LIGHT' | 'DARK'
    profileLanguage: 'RU' | 'EN'
}
