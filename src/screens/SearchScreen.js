import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View, TextInput, Alert, ScrollView } from 'react-native';
import { addFavoriteMovie, removeFavoriteMovie } from '../shared/actions';
import { Text } from 'react-native-elements';
import Cards from '../components/Cards';
import { useNavigation } from '@react-navigation/native';

const SearchMovieScreen=({ navigation, addFavoriteMovie }) => {
    const [data, setData] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const handleFavoritesPress = (movie) => {
        addFavoriteMovie(movie);
    }
    const handleInputChange = (text) => {
        setInputValue(text);
    };
    const handleButtonPress = () => {
        if (inputValue.trim() !== '') {
            fetch(`http://www.omdbapi.com/?apikey=b8045a0f&s='${inputValue}'`)
                .then((response) => response.json())
                .then((responseData) => {
                    setData(responseData);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } else {
            Alert.alert('Error', 'Por favor, ingresa datos válidos.');
        }
    };
    const handleDetailPress = (imdbID) => {
        navigation.navigate('Movies', { itemId: imdbID })
    };

    return (
        <ScrollView>
            <View style={{ padding: 16 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 }}
                    placeholder="Ingresa datos"
                    value={inputValue}
                    onChangeText={handleInputChange}
                />
                <View style={{ marginTop: 20, flexDirection: 'column', gap: 20 }} >
                    <Button title="Enviar Datos" onPress={handleButtonPress} />
                    <Button title="Go to Favorites" onPress={() => navigation.navigate('Favorites')} />
                </View>
                {data?.Search ? (
                    <View style={{ marginTop: 20 }}>
                        {data?.Search.map((result) => (
                            <Cards navigation={navigation} result={result}>
                            </Cards>
                        ))}
                    </View>
                ) : (
                    <Text>No hay resultados para mostrar.</Text>
                )}
            </View>
        </ScrollView>
    );
}

export default SearchMovieScreen;