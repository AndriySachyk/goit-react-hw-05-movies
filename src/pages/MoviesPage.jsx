import { getFilmsBySearch } from 'API/filmsApi';
import { Movies } from 'components/Movies/Movies'
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const MoviesPage = () => {

  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams ] = useSearchParams()

  const searchValue = searchParams.get('search') || ''

  // console.log(searchValue)
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

// console.log(films)
  return (
    <>
      <Movies 
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        handleSearch={handleSearch}
        firstRender={firstRender}
        />
        {films && <MoviesList films={films}/>}
    </>
  )
}