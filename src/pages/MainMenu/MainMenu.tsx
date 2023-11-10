import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from 'src/routes/PrivateRoute'
import { sidebarRoutes } from 'src/routes/routes'
import {
    FooterPanel,
    Header,
    StyledContentContainerLarge,
} from 'src/UI-components/molecules'
import { MainSidebar } from 'src/UI-components/organisms'
import { Grid } from '@mui/material'

import { ErrorPage } from '../ErrorPage/ErrorPage'

export const MainMenu = () => {
    return (
        <>
            <Header main={false} />
            <StyledContentContainerLarge sx={{ marginTop: '26px' }}>
                <Grid container position="relative">
                    <Grid item md={3}>
                        <MainSidebar />
                    </Grid>
                    <Grid alignItems="flex-end" item md={8.5}>
                        <Routes>
                            <>
                                {sidebarRoutes.map(
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
                                    path="*"
                                    element={<ErrorPage isSideBar />}
                                />
                            </>
                        </Routes>
                    </Grid>
                </Grid>
            </StyledContentContainerLarge>
            <FooterPanel />
        </>
    )
}
