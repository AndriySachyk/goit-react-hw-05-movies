import { MovieDetails } from 'components/MovieDetails/MovieDetails'
import { Link, } from 'react-router-dom'
// import { useState } from 'react'

export const MovieDetailsPage = () => {
 




  return (
    <><MovieDetails />
    <div>
      <h3>Additional information</h3>
      <Link to={`/cast`}>Cast</Link>
      <Link to={`/reviews`}>Reviews</Link>
    </div>
 
    </>
  )
}
