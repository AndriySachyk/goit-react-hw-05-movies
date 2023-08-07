import { Cast } from 'components/Cast/Cast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails'
import { Reviews } from 'components/Reviews/Reviews';
import {  useLocation, useParams, } from 'react-router-dom'
import { BoxLinks, ContainerLinks, Links, TitleLinks } from './MovieDetailsPage-style';




const MovieDetailsPage = () => {

  const location = useLocation();
  const params = useParams();

  return (
    
      <>
        <MovieDetails />
        <BoxLinks>
          <TitleLinks>Additional information</TitleLinks>
          <ContainerLinks>
            <Links to={`/movies/${params.movieId}/cast`} state={location}>Cast</Links>
            <Links to={`/movies/${params.movieId}/reviews`} state={location}>Reviews</Links>
          </ContainerLinks>
        </BoxLinks>
          {location.pathname.includes('cast') && <Cast />}
          {location.pathname.includes('reviews') && <Reviews/>}
      </>
    
  )
}

export default MovieDetailsPage