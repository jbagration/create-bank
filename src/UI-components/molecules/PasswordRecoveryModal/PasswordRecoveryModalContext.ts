import { createContext } from 'react'

import { IPasswordRecoveryModalContext } from './PasswordRecoveryModal.type'

const defaultContextValue = {} as IPasswordRecoveryModalContext

export const PasswordRecoveryModalContext = createContext(defaultContextValue)
