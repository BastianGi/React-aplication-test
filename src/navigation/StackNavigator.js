import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Alarmas from '../screens/Alarmas';
import Cantidad from '../screens/Cantidad';
const mapStateToProps = (state) => ({
    favoriteMovies: state.favoriteMovies,
});
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Alimentador de mascotas" component={HomeScreen} />
                <Stack.Screen name="Alarmas" component={Alarmas} />
                <Stack.Screen name="Cantidad" component={Cantidad} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default StackNavigator;