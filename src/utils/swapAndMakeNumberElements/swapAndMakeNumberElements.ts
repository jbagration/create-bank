export function swapAndMakeNumberElements(value: string) {
    const coordinates = value.split(',').map(Number)
    const isArrayWithNumbers = coordinates.every(Boolean)
    if (isArrayWithNumbers) {
        return coordinates.reverse()
    }

    return [0, 0]
}
