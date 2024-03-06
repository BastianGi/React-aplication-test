import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            {/* <Text>Home Screen</Text> */}
            <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
            <Button title="Go to Favorites" onPress={() => navigation.navigate('Favorites')} />
        </View>
    );
}

export default HomeScreen;