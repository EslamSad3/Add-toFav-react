import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { removeFromFavorites } from '../addAndRemove';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div>
      <h1>Favorites</h1>
      <div className='d-flex flex-wrap'>
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            InFav={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;