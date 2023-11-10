export const ratioToPercent = (amount: number, maxFractionDigits: number) =>
    Number(((amount > 1 ? amount - 1 : 0) * 100).toFixed(maxFractionDigits))
