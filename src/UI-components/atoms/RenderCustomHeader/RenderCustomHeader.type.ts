export interface RenderCustomHeaderProps {
    monthDate: Date
    decreaseMonth: () => void
    increaseMonth: () => void
    prevMonthButtonDisabled: boolean
    nextMonthButtonDisabled: boolean
    changeYear: (year: number) => void
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}
