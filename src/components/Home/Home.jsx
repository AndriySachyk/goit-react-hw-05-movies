// import { useState } from "react"
import PropTypes  from 'prop-types';
// import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { ListFilms, ContainerFilms, LinkFilms} from "./Home-style"

export const Home = ({trending}) => {
    const location = useLocation();

    // console.log(location)
  return (
    <ContainerFilms>
      <ListFilms>
         {trending.map((film)=> <li key={film.id}><LinkFilms to={`movies/${film.id}`} state={location}>{film.original_title}</LinkFilms></li>)}
      </ListFilms>
    </ContainerFilms>
  )
}

Home.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired,  original_title: PropTypes.string.isRequired})
  )
}