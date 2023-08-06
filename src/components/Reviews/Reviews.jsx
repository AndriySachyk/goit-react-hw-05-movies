import { getReviews } from 'API/filmsApi';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BoxReviews, ListReviews, TextReviews, TitleErrorReviews, TitleReviews } from './Reviews-style';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    const addReviews = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    addReviews();
  }, [movieId]);
  return reviews.length === 0? 
  (<TitleErrorReviews>We don't have any reviews for this movie.</TitleErrorReviews>): (
    <BoxReviews>
      <ListReviews>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <TitleReviews>Author: {author}</TitleReviews>
            <TextReviews>{content}</TextReviews>
          </li>
        ))}
      </ListReviews>
    </BoxReviews>
  );
}
