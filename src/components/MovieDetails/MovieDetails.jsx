import { getDetailsFilm } from "API/filmsApi"
import { useCallback,  useEffect, useRef, useState,  } from "react"
import {  useLocation,  useParams } from "react-router-dom"
import { BoxDetails, ImgDetails, BoxDetailsPhotoText, BoxDetailsText, DetailsText, ArrowBck,  LinkBck} from "./MovieDetails-style";

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_URL_IMG = 'https://placehold.co/600x400?font=roboto';

export const MovieDetails = () => {

const [filmDetails, setFilmDetails] = useState([])


// const navigate = useNavigate()

// const location = useLocation();


const {movieId} = useParams()


const getFilm = useCallback( async () => {

  try {
    const data = await getDetailsFilm(movieId)
    setFilmDetails(data)
  } catch (error) {
    console.log(error)
  }
// eslint-disable-next-line
},[setFilmDetails])

useEffect(() => {
  
if (filmDetails) {
  getFilm()
}
 // eslint-disable-next-line
},[ ])


const location = useLocation();
const backLink = useRef(location.state?.from ?? '/movies');


// const handleBackBtn = () =>{
//     navigate(location.state)
// }
const {original_title, poster_path, vote_average, overview, genres} = filmDetails
  return (
    <>
    <BoxDetails>
          <LinkBck to={backLink.current}><ArrowBck>&#10148;</ArrowBck>Go Back</LinkBck>
      <BoxDetailsPhotoText>
        <div>
          <ImgDetails src={poster_path? BASE_URL_IMG + filmDetails.poster_path : DEFAULT_URL_IMG} alt="" />
        </div>
        <BoxDetailsText>
            <div>
              <h2>{original_title}</h2>
              <DetailsText>User Score: {Math.round(vote_average) * 10}%</DetailsText>
            </div>
            <div>
              <h3>Overview</h3>
              <DetailsText>{overview}</DetailsText>
            </div>  
            <div>
              <h3>Genres</h3>
              <DetailsText>{genres?.map(genre => genre.name).join(' ')}</DetailsText>
            </div>
          
        </BoxDetailsText>
      </BoxDetailsPhotoText>
      
    </BoxDetails>
  </>
  )
}

