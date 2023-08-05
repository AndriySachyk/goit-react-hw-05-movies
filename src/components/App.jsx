import { HomePage } from "pages/HomePage";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { MoviesPage } from "pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";

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
        {/* <Route path='*' element={<ErrorPage />} /> */}
    </Routes>
   </>
  );
};
