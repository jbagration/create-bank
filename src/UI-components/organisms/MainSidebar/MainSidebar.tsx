import { FC, Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ButtonWithIcon } from 'src/UI-components/atoms'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { ListItem } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'

import { SidebarLinks } from './MainSidebar.const'
import { SidebarInfoLinks } from './MainSidebarInfo.const'

import { linkStyles, Props, subLinkStyles } from './MainSidebar.style'

export const MainSidebar: FC<Props> = ({ active = false }) => {
    const { pathname } = useLocation()

    const linkSubtitle = pathname.split('/').splice(2, 2).join('/')

    return (
        <List
            component="nav"
            sx={{
                padding: '0',
                position: 'sticky',
                top: '20px',
                maxWidth: '300px',
            }}
        >
            <ListItem sx={linkStyles}>
                <NavLink
                    data-testid="item-link"
                    className={
                        pathname === '/user_main' ? 'link-active' : 'link'
                    }
                    to=""
                >
                    <ButtonWithIcon yellow={pathname === '/user_main'}>
                        <HomeOutlinedIcon />
                    </ButtonWithIcon>
                    Главная страница
                </NavLink>
            </ListItem>

            {SidebarLinks.map((item, index) => (
                <Fragment key={index}>
                    <ListItem sx={linkStyles} tabIndex={index}>
                        {item.sublink ? (
                            <NavLink
                                data-testid="item-link"
                                className={
                                    pathname.match(item.link)
                                        ? 'link-active'
                                        : 'link'
                                }
                                to={item.sublink[0].link}
                            >
                                <ButtonWithIcon
                                    yellow={!!pathname.match(item.link)}
                                >
                                    {item.icon}
                                </ButtonWithIcon>

                                {item.title}
                            </NavLink>
                        ) : (
                            <NavLink
                                data-testid="item-link"
                                className={
                                    pathname.match(item.link)
                                        ? 'link-active'
                                        : 'link'
                                }
                                to={item.link}
                            >
                                <ButtonWithIcon
                                    yellow={!!pathname.match(item.link)}
                                >
                                    {item.icon}
                                </ButtonWithIcon>

                                {item.title}
                            </NavLink>
                        )}
                    </ListItem>

                    {item.sublink && (
                        <Collapse
                            sx={{ paddingLeft: '68px' }}
                            in={!!pathname.match(item.link)}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                {item.sublink.map((sublink, index) => (
                                    <ListItem
                                        sx={subLinkStyles({
                                            active:
                                                linkSubtitle === sublink.link
                                                    ? 'true'
                                                    : 'false',
                                        })}
                                        key={index}
                                        tabIndex={index}
                                    >
                                        <NavLink
                                            data-testid="item-sublink"
                                            to={sublink.link}
                                            onClick={(e) => {
                                                sublink.link.match(/apply/i) &&
                                                    e.preventDefault()
                                            }}
                                        >
                                            {sublink.subtitle}
                                        </NavLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    )}
                </Fragment>
            ))}
            <ListItem
                sx={{
                    fontWeight: 'bold',
                    paddingLeft: '17px',
                    paddingBottom: '32px',
                }}
            >
                ИНФОРМАЦИЯ
            </ListItem>
            {SidebarInfoLinks.map((item, index) => (
                <Fragment key={index}>
                    <ListItem sx={linkStyles} tabIndex={index}>
                        <NavLink
                            data-testid="item-link"
                            className="link"
                            to={item.link}
                        >
                            <ButtonWithIcon
                                yellow={!!pathname.match(item.link)}
                            >
                                {item.icon}
                            </ButtonWithIcon>
                            {item.title}
                        </NavLink>
                    </ListItem>
                </Fragment>
            ))}
        </List>
    )
}
