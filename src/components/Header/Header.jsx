import React from 'react'

import { HeaderPage, StyledLink, StyledNav,  } from './Header-style'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  return (
        <>
          <HeaderPage>
            <StyledNav>
              <StyledLink to='/' >Home</StyledLink>
              <StyledLink to='movies' >Movies</StyledLink>
            </StyledNav>
          </HeaderPage>
        <Outlet />
        </>
  )
}
