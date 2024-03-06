import { Button, View, TextInput, Alert, ScrollView } from 'react-native';
import CardsDetails from '../components/CardsDetail';
import { Text } from 'react-native-elements';
import { useState, useEffect } from 'react';

const MoviesScreen = ({ route, navigation }) => {
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
                <CardsDetails data={data}>
                    </CardsDetails>
            </View>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default MoviesScreen;