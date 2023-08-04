// import { Home } from 'components/Home/Home'
// import  { useState } from 'react'
// import Notiflix from 'notiflix';

import { getTrendingFilms } from "API/filmsApi";
import { Home } from "components/Home/Home";
import { useCallback, useEffect, useState } from "react"

export const HomePage = () => {
  
const [trending, setTrending] = useState()

const getFilms = useCallback(async () => {

  try {
    const data = await getTrendingFilms()
    console.log(data.results)
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
