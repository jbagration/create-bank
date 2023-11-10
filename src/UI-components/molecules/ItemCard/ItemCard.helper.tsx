import { MasterCard, Mir, Visa } from '../../../assets/svg'

export const definitionPaymentSystem = (paymentSystem: string) => {
    switch (paymentSystem) {
        case paymentSystem.match(/visa/i) ? paymentSystem : true:
            return <Visa />
        case paymentSystem.match(/mastercard/i) ? paymentSystem : true:
            return <MasterCard />
        case paymentSystem.match(/mir/i) ? paymentSystem : true:
            return <Mir />
    }
}

export const transformDate = (date: Date) => {
    const year = date.getFullYear()
    let month = (date.getMonth() + 1).toString()
    month = +month < 10 ? `0${month}` : month
    return `${month}/${year.toString().substr(-2)}`
}
