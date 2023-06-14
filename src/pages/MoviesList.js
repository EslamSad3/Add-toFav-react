import React, { useState, useEffect } from 'react';
import axiosInstance from '../APIs/config';
import MovieCard from '../components/MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../addAndRemove';
import { Form } from 'react-bootstrap';

const MoviesList = () => {
  const api_Key = "357d46d3b0be23510eb44a285e06602a"
  const [movies, setMovies] = useState([]);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance
      .get(
        `popular?api_key=${api_Key}`
      )
      .then((res) => setMovies(res.data.results)) // resolve promise
      .catch((err) => console.log(err)) // reject promise
  }, []);
  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div>
      <h1 className="text-center mb-4">Movies List</h1>
      <Form
        className="d-flex justify-content-center mb-4"
        onSubmit={(e) => e.preventDefault()}
      >
      </Form>
      <div className='d-flex flex-wrap'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            InFav={favorites.some((fav) => fav.id === movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;