import { getReviews } from 'API/filmsApi';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
  (<h2>We don't have any reviews for this movie.</h2>): (
    <div>
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
