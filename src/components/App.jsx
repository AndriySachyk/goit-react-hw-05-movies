// import { HomePage } from "pages/HomePage";
// import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
// import { MoviesPage } from "pages/MoviesPage";
// import { Header } from "./Header/Header";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const HomePage = lazy(()=> import('../pages/HomePage'))
const MoviesPage = lazy(()=> import('../pages/MoviesPage'))
const Header = lazy(()=> import('./Header/Header'))
const MovieDetailsPage = lazy(()=> import('../pages/MovieDetailsPage/MovieDetailsPage'))

export const App = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path='movies/:movieId/' element={<MovieDetailsPage />} />
          <Route path='movies/:movieId/cast' element={<MovieDetailsPage />} />
          <Route path='movies/:movieId/reviews' element={<MovieDetailsPage />} />
        </Route>
    </Routes>
   </>
  );
};
