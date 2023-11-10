import { FC } from 'react'
import {
    ErrorNotificator,
    FooterPanel,
    Header,
    ModalActionButton,
    StyledContentContainerLarge,
} from 'src/UI-components/molecules'

import { ErrorComponentProps } from './ErrorComponent.type'

export const ErrorComponent: FC<ErrorComponentProps> = ({
    isSideBar,
    isModalActionButton = true,
    ...props
}) => {
    return (
        <>
            {!isSideBar && <Header main={false} />}
            <StyledContentContainerLarge>
                {isModalActionButton && (
                    <ModalActionButton modalAction="back" />
                )}
                <ErrorNotificator {...props} />
            </StyledContentContainerLarge>
            {!isSideBar && <FooterPanel />}
        </>
    )
}
