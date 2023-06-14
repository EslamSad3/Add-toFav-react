import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesList from '../pages/MoviesList';
import MovieDetails from '../pages/MovieDetails';
import Favorites from '../pages/Favorites';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default AppRouter;