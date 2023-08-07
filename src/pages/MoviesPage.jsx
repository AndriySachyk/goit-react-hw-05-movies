import { getFilmsBySearch } from 'API/filmsApi';
import { FormMovies, } from 'components/FormMovies/FormMovies'
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const MoviesPage = () => {

  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams ] = useSearchParams()

  const searchValue = searchParams.get('search') || ''

  const firstRender = useRef(true)

  const handleSearch = async (query) => {
		try {
			const data = await getFilmsBySearch(query)
			setFilms(data)
		} catch (error) {
			console.log(error)
		} 
	}
  useEffect(
		function getFilmsBySearchFirstRender() {
			firstRender.current && searchValue && handleSearch(searchValue)
		},
		[searchValue]
	)

	useEffect(() => {
		!searchValue && setSearchParams({})
	}, [searchValue, setSearchParams])

  return (
    <>
      <FormMovies 
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        handleSearch={handleSearch}
        firstRender={firstRender}
        />
        {films && <MoviesList films={films}/>}
    </>
  )
}


export default MoviesPage