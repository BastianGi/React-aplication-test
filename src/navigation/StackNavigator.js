import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MovieScreen';
import { addFavoriteMovie, removeFavoriteMovie } from '../shared/actions';
import SearchMovieScreen from '../screens/SearchScreen';
import { connect } from 'react-redux';
import FavoritesScreen from '../screens/FavoriteScreen';
import Cards from '../components/Cards';
const mapStateToProps = (state) => ({
        favoriteMovies: state.favoriteMovies,
        });
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Movies" component={MoviesScreen} />
                <Stack.Screen name="Favorites" component={ConnectedFavoriteMovieScreen} />
                <Stack.Screen name="Search" component={ConnectedSearchMovieScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const ConnectedSearchMovieScreen = connect(mapStateToProps, { addFavoriteMovie })(SearchMovieScreen);
const ConnectedFavoriteMovieScreen = connect(mapStateToProps, { removeFavoriteMovie })(FavoritesScreen);
export default StackNavigator;