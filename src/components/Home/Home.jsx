import PropTypes  from 'prop-types';
import { useLocation } from "react-router-dom"
import { ListFilms, ContainerFilms, LinkFilms} from "./Home-style"

const Home = ({trending}) => {
    const location = useLocation();

  return (
    <ContainerFilms>
      <ListFilms>
         {trending.map((film)=> <li key={film.id}><LinkFilms to={`movies/${film.id}`} state={{ from: location }}>{film.original_title}</LinkFilms></li>)}
      </ListFilms>
    </ContainerFilms>
  )
}

Home.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired,  original_title: PropTypes.string.isRequired})
  )
}


export default Home