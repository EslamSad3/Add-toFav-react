export const addToFavorites = (movie) => ({
    type: 'Add',
    payload: movie,
  });
  
  export const removeFromFavorites = (movie) => ({
    type: 'Remove',
    payload: movie,
  });