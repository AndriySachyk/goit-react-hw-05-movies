// import { useState } from "react"

// import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { ListFilms, ContainerFilms, LinkFilms} from "./Home-style"

export const Home = ({trending}) => {
    const location = useLocation();

    console.log(location)
  return (
    <ContainerFilms>
      <ListFilms>
         {trending.map((film)=> <li key={film.id}><LinkFilms to={`movies/:${film.id}`} state={location}>{film.original_title}</LinkFilms></li>)}
      </ListFilms>
    </ContainerFilms>
  )
}

