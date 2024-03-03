import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteMovies: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDFAVORITE':
            console.log(state.favoriteMovies)
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload]
                
            };
        case 'REMOVEFAVORITE':
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.filter(movie => movie.imdbID !== action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;