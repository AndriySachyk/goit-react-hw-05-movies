// import { HomePage } from "pages/HomePage";
// import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
// import { MoviesPage } from "pages/MoviesPage";
// import { Header } from "./Header/Header";
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import ErrorPage from "pages/ErrorPage/ErrorPage";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const HomePage = lazy(()=> import('../pages/HomePage'))
const MoviesPage = lazy(()=> import('../pages/MoviesPage'))
const Header = lazy(()=> import('./Header/Header'))
const MovieDetailsPage = lazy(()=> import('../pages/MovieDetailsPage/MovieDetailsPage'))
const Cast = lazy(()=> import('./Cast/Cast'))
const Reviews = lazy(()=> import('./Reviews/Reviews'))
const ErrorPage = lazy(()=> import('../pages/ErrorPage/ErrorPage'))


export const App = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path='movies/:movieId/' element={<MovieDetailsPage />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        <Route path="*" element={<ErrorPage/>}/>
        </Route>
    </Routes>
   </>
  );
};
