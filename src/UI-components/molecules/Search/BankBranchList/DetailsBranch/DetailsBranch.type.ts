export interface TimetableBankBranchProps {
    workAtWeekends?: boolean
    openingTime: string
    closingTime: string
}

export interface WorkDaysProps {
    workAtWeekends?: boolean
}

export interface WorkTimeBranchProps {
    isIcon?: boolean
    openingTime?: string
    closingTime?: string
}

export interface WorkDetailsType {
    day?: string
    dayToday?: string
}
