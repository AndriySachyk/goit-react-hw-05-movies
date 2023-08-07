import { getCastFilm } from 'API/filmsApi'
import  { useCallback, useState, } from 'react'
import { useEffect } from 'react';
import { BoxCast, ImgCast, ItemCast, ListCast, TextCast } from './Cast-style';
import { useParams } from 'react-router-dom';


const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_URL_IMG = 'https://placehold.co/600x400?font=roboto';



const Cast = () => {

const [filmCast, setFilmCast] = useState([])
const params= useParams();


  const getFilmCast = useCallback( async () => {

    try {
      const data = await getCastFilm(params.movieId)
      setFilmCast(data.cast)
    } catch (error) {
      console.log(error)
    }
  // eslint-disable-next-line
  },[setFilmCast])
  
  useEffect(() => {
    
  if (filmCast) {
    getFilmCast()
  }
   // eslint-disable-next-line
  },[ ])

  return (
    <BoxCast>
      <ListCast>
        { filmCast.map((actor)=> 
          <li key={actor.id}>
            <ItemCast>
              <ImgCast src={actor.profile_path ? BASE_URL_IMG + actor.profile_path : DEFAULT_URL_IMG} alt="" />
              <TextCast>{actor.name}</TextCast>
              <TextCast> Character: {actor.character}</TextCast>
            </ItemCast>
          </li>
        )}
      </ListCast>
    </BoxCast>
  )
}


export default Cast