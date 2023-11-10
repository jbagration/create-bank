export interface ManageTabProps {
    cardId: string
    cardNumber: string
    cardStatus: string
    cardType: string
    cardAlias?: string | null
}

export interface useManageTabProps {
    cardNumber: string
    initialLimit: string
    disableFields: () => void
    handleModalOpen: () => void
}
