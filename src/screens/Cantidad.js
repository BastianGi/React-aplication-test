import { Button, View, TextInput, Alert, ScrollView } from 'react-native';
import CardsDetails from '../components/CardsDetail';
import { Text } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { Pressable } from 'react-native';

const ESP_IP = "http://192.168.100.182";
    const Pequena= () =>{
        Alert.alert('Cambiando Cantidad de alimento', 'Cantidad Pequeña.');
        fetch(`${ESP_IP}/pequena`) // Realiza una petición GET a la ruta /led-on
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
    const Mediana= () =>{
        Alert.alert('Cambiando Cantidad de alimento', 'Cantidad Mediana');
        fetch(`${ESP_IP}/mediana`) // Realiza una petición GET a la ruta /led-on
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
    const Grande= () =>{
        Alert.alert('Cambiando Cantidad de alimento', 'Cantidad Grande.');
        fetch(`${ESP_IP}/grande`) // Realiza una petición GET a la ruta /led-on
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
const Cantidad = ({ navigation }) => {
    const [inputValue] = "";
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',gap: 20 ,backgroundColor:'#3d2249'  }}>
            <Button color='#06483a' title="Volver" onPress={() => navigation.navigate('Alimentador de mascotas')} />
            <Button color='#06483a' title="Cantidad Pequeña" onPress={Pequena} />
            <Button color='#06483a' title="Cantidad Mediana" onPress={Mediana} />
            <Button color='#06483a' title="Cantidad Grande" onPress={Grande} />
        </View>
    );
}

export default Cantidad