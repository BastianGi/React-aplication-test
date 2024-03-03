export const addFavoriteMovie = (movie) => {
    return {
        type: 'ADDFAVORITE',
        payload: movie
    };
};
export const removeFavoriteMovie = (movie) => {
    return {
        type: 'REMOVEFAVORITE',
        payload: movie
    };
};