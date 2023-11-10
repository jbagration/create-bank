import { FC } from 'react'

import { BlockAbout } from './BlockAbout/BlockAbout'
import { BlockApps } from './BlockApps/BlockApps'
import { BlockFooter } from './BlockFooter/BlockFooter'
import { BlockServices } from './BlockServices/BlockServices'
import { BlockInfo } from './BlockInfo'
import { BlockStatistics } from './BlockStatistics'

export const MainPageInfo: FC = () => {
    return (
        <>
            <BlockStatistics />
            <BlockAbout />
            <BlockServices />
            <BlockApps />
            <BlockInfo />
            <BlockFooter />
        </>
    )
}
