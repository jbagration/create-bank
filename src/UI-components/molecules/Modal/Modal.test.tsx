import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { provideTheme } from 'src/utils'
import { fireEvent, render, screen } from '@testing-library/react'

import { Modal } from './Modal'

/*eslint-disable*/

const Child: FC = () => <span>{childText}</span>

const title = 'TestModalTitle'
const childText = 'modal test text'
const goBack = jest.fn()

describe('modal', () => {
    it('renders', () => {
        render(
            <Router>
                {provideTheme(
                    <Modal
                        show={true}
                        title={title}
                        goBack={goBack}
                        isModalFinished={false}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(childText)).toBeInTheDocument()
    })
    it('goes back when go back button is clicked', () => {
        const { container } = render(
            <Router>
                {provideTheme(
                    <Modal
                        show={true}
                        title={title}
                        goBack={goBack}
                        isModalFinished={false}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        const goBackButton = container.querySelector('svg')
        fireEvent.click(goBackButton!)
        expect(goBack).toHaveBeenCalled()
    })
    it('doesnt display anything when show set to false', () => {
        render(
            <Router>
                {provideTheme(
                    <Modal
                        show={false}
                        title={title}
                        goBack={goBack}
                        isModalFinished={false}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        expect(screen.queryByText(title)).not.toBeInTheDocument()
        expect(screen.queryByText(childText)).not.toBeInTheDocument()
    })
    it('doesnt display title when isModalFinished set to true', () => {
        render(
            <Router>
                {provideTheme(
                    <Modal
                        show={true}
                        title={title}
                        goBack={goBack}
                        isModalFinished={true}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        expect(screen.queryByText(title)).not.toBeInTheDocument()
    })
    it('renders correct sizes based on type', () => {
        const { container: containerCommon } = render(
            <Router>
                {provideTheme(
                    <Modal
                        show={true}
                        title={title}
                        goBack={goBack}
                        isModalFinished={true}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        const dialogCommon = containerCommon.querySelector('.MuiDialog-root')
        expect(dialogCommon).toHaveStyle({ width: '803px' })

        const { container: containerCongrats } = render(
            <Router>
                {provideTheme(
                    <Modal
                        show={true}
                        title={title}
                        goBack={goBack}
                        isModalFinished={true}
                        type={'congrats'}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        const dialogCongrats =
            containerCongrats.querySelector('.MuiDialog-root')
        expect(dialogCongrats).toHaveStyle({ width: '455px' })

        const { container: containerLoginForm } = render(
            <Router>
                {provideTheme(
                    <Modal
                        show={true}
                        title={title}
                        goBack={goBack}
                        isModalFinished={true}
                        type={'loginForm'}
                    >
                        <Child />
                    </Modal>
                )}
            </Router>
        )
        const dialogLoginForm =
            containerLoginForm.querySelector('.MuiDialog-root')
        expect(dialogLoginForm).toHaveStyle({ width: '407px' })
    })
})
