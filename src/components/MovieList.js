import React, { useState } from 'react';

const movies = [
  { title: 'Movie 1', description: 'Description for Movie 1' },
  { title: 'Movie 2', description: 'Description for Movie 2' },
  { title: 'Movie 3', description: 'Description for Movie 3' },
];

const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;