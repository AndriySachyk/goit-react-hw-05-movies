import React, { Suspense } from 'react'

import { HeaderPage, StyledLink, StyledNav,  } from './Header-style'
import { Outlet } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'

const Header = () => {
  return (
        <>
          <HeaderPage>
            <StyledNav>
              <StyledLink to='/' >Home</StyledLink>
              <StyledLink to='movies' >Movies</StyledLink>
            </StyledNav>
          </HeaderPage>
        <Suspense fallback={<TailSpin
          height="80"
          width="80"
          color="#CD0005"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />}>
          <Outlet />
        </Suspense>
        </>
  )
}
export default Header