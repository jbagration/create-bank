import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { NoInternetConnection } from './pages/NoInternetConnection/NoInternetConnection'
import { useAppSelector } from './redux/hooks/redux'
import { useScrollToTop } from './redux/hooks/useScrollToTop'
import { PrivateRoute } from './routes/PrivateRoute'
import { RestrictedRoute } from './routes/RestrictedRoute'
import { privateRoutes, restrictedRoutes, routes } from './routes/routes'
import { darkTheme, lightTheme } from './themes/styleConfig'
import { ErrorBoundary } from './UI-components/organisms/ErrorBoundary/ErrorBoundary'

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    useScrollToTop()

    const profileTheme = useAppSelector(
        (state) => state.auth.user?.profileSettings?.profileTheme
    )

    return (
        <ThemeProvider theme={profileTheme === 'DARK' ? darkTheme : lightTheme}>
            <CssBaseline>
                <NoInternetConnection>
                    <ErrorBoundary isButton>
                        <>
                            <ToastContainer />
                            <Routes>
                                {routes.map(
                                    ({ path, component: Component }) => (
                                        <Route
                                            path={path}
                                            element={<Component />}
                                            key={path}
                                        />
                                    )
                                )}

                                {restrictedRoutes.map(
                                    ({ path, component: Component }) => (
                                        <Route
                                            path={path}
                                            key={path}
                                            element={
                                                <RestrictedRoute>
                                                    <Component />
                                                </RestrictedRoute>
                                            }
                                        />
                                    )
                                )}

                                {privateRoutes.map(
                                    ({ path, component: Component }) => (
                                        <Route
                                            path={path}
                                            key={path}
                                            element={
                                                <PrivateRoute>
                                                    <Component />
                                                </PrivateRoute>
                                            }
                                        />
                                    )
                                )}
                                <Route
                                    path="/"
                                    element={
                                        <Navigate to="/user_main" replace />
                                    }
                                />
                                <Route
                                    path="*"
                                    element={<ErrorPage isSideBar={false} />}
                                />
                            </Routes>
                        </>
                    </ErrorBoundary>
                </NoInternetConnection>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
