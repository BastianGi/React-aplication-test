import { Button, View, TextInput, Alert, ScrollView } from 'react-native';
import CardsDetails from '../components/CardsDetail';
import { Text } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

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
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: 'white' }}>
                <View style={{ position: 'absolute', alignItems: 'center', bottom: 20 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#85D4FB', width: '90%', justifyContent: 'space-evenly' }}>
                        <Pressable style={{ padding: 14 }} onPress={() => navigation.navigate('Home')} android_ripple={{borderless:true, radius:50}} >
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

export default MoviesScreen;