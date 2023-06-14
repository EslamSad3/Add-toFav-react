import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../APIs/config";
import MovieCard from "../components/MovieCard";

const api_Key = "357d46d3b0be23510eb44a285e06602a"

function MovieDetails() {
  const [mymovies, setMyMovies] = useState({});
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`${params.id}?api_key=${api_Key}`)
      .then((res) => setMyMovies(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <div>
      <h1>Movie Details</h1>
      <MovieCard movie={mymovies} />
    </div>
  );
}

export default MovieDetails;
