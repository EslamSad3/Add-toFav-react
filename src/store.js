import { createStore } from 'redux';

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'Remove':
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;