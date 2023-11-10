import { HelperMakeFullAdressProps } from './ByPostTab.type'

export const makeFullAdress = ({
    streetName,
    houseNumber,
    buildingNumber,
    apartmentNumber,
    indexAddress,
}: HelperMakeFullAdressProps) => {
    let address = `ул. ${streetName}`

    if (houseNumber) {
        address += `, д. ${houseNumber}`
    }

    if (buildingNumber) {
        address += `, корпус ${buildingNumber}`
    }

    if (apartmentNumber) {
        address += `, кв. ${apartmentNumber}`
    }

    if (indexAddress) {
        address += `, индекс ${indexAddress}`
    }

    return address
}
