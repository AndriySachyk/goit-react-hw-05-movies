
import { getTrendingFilms } from "API/filmsApi";
import  Home  from "components/Home/Home";
import { useCallback, useEffect, useState } from "react"

export const HomePage = () => {
  
const [trending, setTrending] = useState()

const getFilms = useCallback(async () => {

  try {
    const data = await getTrendingFilms()
    setTrending(data.results)
  } catch (error) {
    console.log(error)
  }
}, [setTrending])

useEffect(() => {
  
!trending && getFilms()
 
},[getFilms, trending])


  return (
    <>
      {trending && <Home trending={trending}/>}
    </>
    
  )
}

export default HomePage