import React, { Suspense } from 'react'

import { HeaderPage, StyledLink, StyledNav,  } from './Header-style'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
        <>
          <HeaderPage>
            <StyledNav>
              <StyledLink to='/' >Home</StyledLink>
              <StyledLink to='movies' >Movies</StyledLink>
            </StyledNav>
          </HeaderPage>
        <Suspense>
          <Outlet />
        </Suspense>
        </>
  )
}
export default Header