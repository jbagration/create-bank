import { FC } from 'react'
import { render, screen } from '@testing-library/react'

import { StepperModal } from './StepperModal'

const Child: FC<{ text: string }> = ({ text }) => <span>{text}</span>
const children = new Array(2)
    .fill(null)
    .map((el, i) => <Child key={i} text={`test text ${i}`} />)

describe('stepper modal', () => {
    it('renders first child on first step', () => {
        render(<StepperModal currentStep={0}>{children}</StepperModal>)
        expect(screen.getByText('test text 0')).toBeInTheDocument()
        expect(screen.queryByText('test text 1')).not.toBeInTheDocument()
    })
    it('renders second child on second step', () => {
        render(<StepperModal currentStep={1}>{children}</StepperModal>)
        expect(screen.queryByText('test text 0')).not.toBeInTheDocument()
        expect(screen.getByText('test text 1')).toBeInTheDocument()
    })
})
