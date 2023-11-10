import { ErrorNotificatorProps } from 'src/UI-components/molecules/ErrorNotificator/ErrorNotificator.type'

export interface ErrorComponentProps extends ErrorNotificatorProps {
    isSideBar: boolean
    isModalActionButton?: boolean
}
