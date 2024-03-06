import * as React from 'react';
import rootReducer from './src/store/store';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import StackNavigator from './src/navigation/StackNavigator';
// const mapStateToProps = (state) => ({
//   favoriteMovies: state.favoriteMovies,
// });
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
  );
}
// const ConnectedFavoriteMovieScreen = connect(mapStateToProps, { removeFavoriteMovie })(FavoritesScreen);
// const ConnectedSearchMovieScreen = connect(mapStateToProps, { addFavoriteMovie })(SearchMovieScreen);
export default App;