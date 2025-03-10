import { View, Button, TextInput, Alert, ScrollView } from 'react-native';
import { Card, Button as RNEButton } from 'react-native-elements';
import { addFavoriteMovie, removeFavoriteMovie } from './src/shared/actions';
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import CardsFav from '../components/CardsFav';
import { Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

const FavoritesScreen = ({ navigation, favoriteMovies, removeFavoriteMovie }) => {
    const dispatch = useDispatch()
    const favoriteMoviesss = useSelector((state) => state.imdbID)
    const handleRemoveFavoritesPress = (movie) => {
        dispatch(removeFavoriteMovie({ movie }));
    }
    const handleDetailPress = (imdbID) => {
        navigation.navigate('Movies', { itemId: imdbID })
    };
    return (
        <View style={{ marginBottom:'20'}}>
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
                            <Text style={{ fontSize: 30, color: 'cyan' }}>Aun no se añaden Horarios</Text>
                        </View>
                    )}
                    <View style={{ flexDirection: 'column', gap: 20, marginTop: 20, marginBottom: 20 }}>
                        <Button title="Go to Home" onPress={() => navigation.navigate('Alimentador de mascotas')} />
                        <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
                    </View>

                </View>

            </ScrollView>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: 'white' }}>
                <View style={{ position: 'absolute', alignItems: 'center', bottom: 20 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#85D4FB', width: '90%', justifyContent: 'space-evenly' }}>
                        <Pressable style={{ padding: 14 }} onPress={() => navigation.navigate('Home')} android_ripple={{borderless:true, radius:50}}>
                            <Icon name="home-button" />
                        </Pressable>
                        <Pressable style={{ padding: 14 }} onPress={() => navigation.navigate('Search')} android_ripple={{borderless:true, radius:50}}>
                            <Icon name="searching-magnifying-glass" />
                        </Pressable>
                        <Pressable style={{ padding: 14 }} onPress={() => navigation.navigate('Favorites')} android_ripple={{borderless:true, radius:50}}>
                            <Icon name="favorite-heart-button" />
                        </Pressable>
                    </View>
                </View>
            </View> */}
        </View>
    );
}

export default FavoritesScreen;