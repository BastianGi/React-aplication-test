import * as React from 'react';
import { Card, Button as RNEButton } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, Alert , ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rootReducer from './src/store/store';
import { addFavoriteMovie, removeFavoriteMovie } from './src/shared/actions';
import { Provider, connect, createStoreHook } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';


const mapStateToProps = (state) => ({
  favoriteMovies: state.favoriteMovies,
});
const store = createStore(rootReducer);
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
      <Text>Home Screen</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
      <Button title="Go to Favorites" onPress={() => navigation.navigate('Favorites')} />
  
    </View>
  );
}
function SearchMovieScreen({ navigation, addFavoriteMovie }) {
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
      <View style={{marginTop: 20,flexDirection: 'column', gap: 20 }} >
      <Button title="Enviar Datos" onPress={handleButtonPress} />
      <Button title="Go to Favorites" onPress={() => navigation.navigate('Favorites')} />
      </View>
      {data?.Search ? (
        <View style={{ marginTop: 20 }}>
          {data?.Search.map((result) => (
            <Card key={result.imdbID} containerStyle={{ marginBottom: 10 }}>
              <Card.Image source={{ uri: result.Poster }} style={{ height: 400 }} />
              <Text>{result.Title}</Text>
              <Text>Año: {result.Year}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RNEButton
                  title="Detalles"
                  onPress={() => handleDetailPress(result.imdbID)}
                />
                <RNEButton
                  title="Agregar a Favoritos"
                  onPress={() => handleFavoritesPress(result)}
                />
              </View>
            </Card>
          ))}
        </View>
      ) : (
        <Text>No hay resultados para mostrar.</Text>
      )}
    </View>
    </ScrollView>
  );
}

function Movies({ route, navigation }) {
  const { itemId } = route.params;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=b8045a0f&i=${itemId}`)
      .then((Response) => Response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Movie Details</Text>
      <View>
        <Card key={data?.imdbID} containerStyle={{ marginBottom: 10 }}>
          <Card.Image source={{ uri: data?.Poster }} style={{ height: 450, width: 300 }} />
          <Text>{data?.Title}</Text>
          <Text>año: {data?.Year}</Text>
          <Text>genero: {data?.Genre}</Text>
          <Text>director: {data?.Director}</Text>
          <Text>duracion: {data?.Runtime}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          </View>
        </Card>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function Favorites({ navigation, favoriteMovies, removeFavoriteMovie }) {
  const handleRemoveFavoritesPress = (movie) => {
    removeFavoriteMovie(movie);
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
        {favoriteMovies?.map((movie, index) => (
          <Card key={movie?.imdbID} containerStyle={{ marginBottom: 10 }}>
            <Card.Image source={{ uri: movie?.Poster }} style={{ height: 450, width: 300 }} />
            <Text>{movie?.Title}</Text>
            <Text>{movie?.Year}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <RNEButton 
              title="Detalles"
              onPress={() => handleDetailPress(movie?.imdbID)}
            />
            <RNEButton
              title="Eliminar de Favoritos"
              onPress={() => handleRemoveFavoritesPress(movie?.imdbID)}
            />
            
            </View>
          </Card>
        ))}
      </View>
      ) : (
        <View>
          <Text>Aun no se añaden favoritos.</Text>
        </View>
      )}
      <View style={{ flexDirection: 'column', gap: 20, marginTop: 20, marginBottom: 20  }}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
      </View>
    </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Favorites" component={ConnectedFavoriteMovieScreen} />
          <Stack.Screen name="Search" component={ConnectedSearchMovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const ConnectedFavoriteMovieScreen = connect(mapStateToProps, { removeFavoriteMovie })(Favorites);
const ConnectedSearchMovieScreen = connect(mapStateToProps, { addFavoriteMovie })(SearchMovieScreen);
export default App;