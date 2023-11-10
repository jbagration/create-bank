export interface LoginDto {
    login: string
    password: string
    type: 'PASSPORT_NUMBER' | 'PHONE_NUMBER'
}
export interface LoginResponseDto {
    accessToken: string
    refreshToken: string
    clientId: string
}
