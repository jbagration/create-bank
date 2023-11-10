export function createRound(count: number) {
    const itemRounds = new Array(4).fill('⬤').join(' ')
    return new Array(count).fill(itemRounds)
}
