import { Card, Button as RNEButton } from 'react-native-elements';
import { View, Text } from 'react-native';
import { addFavoriteMovie, removeFavoriteMovie } from '../shared/actions';
import { useSelector, useDispatch, connect } from 'react-redux';
import rootReducer from '../store/store';
import { useState } from 'react';


const CardsFav = ({ result , navigation}) => {
    const [movie, setValue] = useState(result.imdbID)
    console.log(movie)
    const dispatch = useDispatch()
    const handleDetailPress = (imdbID) => {
        navigation.navigate('Movies', { itemId: imdbID })
    };
    const handleFavoritesPress = (result) => {
        addFavoriteMovie(() => dispatch({ type:'ADDFAVORITE'}),[result])
    };
    return (
        <Card key={result.imdbID} containerStyle={{ marginBottom: 10, borderRadius: 10 }}>
            <Card.Image source={{ uri: result?.Poster }} style={{ height: 450, width: 300 }} />
            <View style={{ marginBottom: 10, marginTop: 10 }}>
                <Text>{result?.Title}</Text>
                <Text>Año: {result?.Year}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <RNEButton
                    title="Detalles"
                    onPress={() => handleDetailPress(result?.imdbID)}
                />
                <RNEButton
                    title="Remover de Favoritos"
                    onPress={() => dispatch(removeFavoriteMovie({movie}))}
                />
            </View>
        </Card>
    )
}
export default CardsFav;