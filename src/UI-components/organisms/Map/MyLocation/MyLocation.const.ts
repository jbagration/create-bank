export const createCircleOption = (center: number[]) => {
    return {
        coordinates: center,
        radius: 16,
        color: 'rgba(255, 214, 0, 1)',
        strokeWidth: 6,
        strokeColor: '#ffffff',
        stroke2Width: 20,
        stroke2Color: 'rgba(255, 214, 0, 0.25)',
    }
}
