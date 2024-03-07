import { View, Button, TextInput, Alert, ScrollView } from 'react-native';
import { Card ,Button as RNEButton} from 'react-native-elements';
import { addFavoriteMovie, removeFavoriteMovie } from './src/shared/actions';
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import CardsFav from '../components/CardsFav';

const FavoritesScreen = ({ navigation, favoriteMovies, removeFavoriteMovie }) => {
    const dispatch = useDispatch()
    const favoriteMoviesss = useSelector((state)=> state.imdbID)
    const handleRemoveFavoritesPress = (movie) => {
        dispatch(removeFavoriteMovie({movie}));
    }
    const handleDetailPress = (imdbID) => {
        navigation.navigate('Movies', { itemId: imdbID })
    };
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                {favoriteMovies.length ? (
                    <View>
                        <Text> Peliculas favoritas </Text>
                        {favoriteMovies?.map((movie) => (
                            <CardsFav navigation={navigation} result={movie}></CardsFav>
                        ))}
                    </View>
                ) : (
                    <View>
                        <Text>Aun no se añaden favoritos.</Text>
                    </View>
                )}
                <View style={{ flexDirection: 'column', gap: 20, marginTop: 20, marginBottom: 20 }}>
                    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                    <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
                </View>
            </View>
        </ScrollView>
    );
}

export default FavoritesScreen;