import PropTypes  from 'prop-types';

import { ContainerFilms, LinkFilms, ListFilms } from "components/Home/Home-style"
import { useLocation } from "react-router-dom"

export const MoviesList = ({films}) => {
    const location = useLocation();
    const FilmList = films
  return (
      <ContainerFilms>
            <ListFilms>
                {FilmList.map((film)=> <li key={film.id}><LinkFilms to={`${film.id}`} state={{ from: location }}>{film.original_title}</LinkFilms></li>)}
            </ListFilms>
        </ContainerFilms>
  )
}


MoviesList.propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired,  original_title: PropTypes.string.isRequired})
    )
  }