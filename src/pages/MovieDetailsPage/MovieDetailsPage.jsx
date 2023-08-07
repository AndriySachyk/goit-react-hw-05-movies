import { MovieDetails } from 'components/MovieDetails/MovieDetails'
import {  Outlet, useLocation,   } from 'react-router-dom'
import { BoxLinks, ContainerLinks, Links, TitleLinks } from './MovieDetailsPage-style';
import { Suspense } from 'react';

import { TailSpin } from  'react-loader-spinner'



const MovieDetailsPage = () => {

const location = useLocation();

  return (
    
      <>
        <MovieDetails />
        <BoxLinks>
          <TitleLinks>Additional information</TitleLinks>
          <ContainerLinks>
            <Links to={`cast`} state={{ from: location }}>Cast</Links>
            <Links to={`reviews`}state={{ from: location }} >Reviews</Links>
          </ContainerLinks>
        </BoxLinks>
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

export default MovieDetailsPage