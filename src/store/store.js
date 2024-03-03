import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
const initialState = {
    favoriteMovies: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDFAVORITE':
            const filter= state.favoriteMovies.filter(movie =>  movie.imdbID == action.payload.imdbID)
            if (filter.length){
                Alert.alert('Error', 'Pelicula ya en favoritos.');
                return{
                    ...state
                }
            }
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