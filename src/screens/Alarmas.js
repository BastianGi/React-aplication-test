import { Button, View, TextInput, Alert, ScrollView } from 'react-native';
import CardsDetails from '../components/CardsDetail';
import { Text } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { Pressable } from 'react-native';

const ESP_IP = "http://192.168.100.182";
const Quince= () =>{
    Alert.alert('Alarma Activada', 'Alarma sonara en 15 segundos');
    fetch(`${ESP_IP}/quince`) // Realiza una petición GET a la ruta /led-on
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
const Quincemin= () =>{
    Alert.alert('Alarma Activada', 'Alarma sonara en 15 minutos');
    fetch(`${ESP_IP}/quincemin`) // Realiza una petición GET a la ruta /led-on
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
const Unahora= () =>{
    Alert.alert('Alarma Activada', 'Alarma sonara en una hora');    
    fetch(`${ESP_IP}/unahora`) // Realiza una petición GET a la ruta /led-on
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
const Doshoras= () =>{
    Alert.alert('Alarma Activada', 'Alarma sonara en 2 horas');
    fetch(`${ESP_IP}/doshoras`) // Realiza una petición GET a la ruta /led-on
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
const Treshoras= () =>{
    Alert.alert('Alarma Activada', 'Alarma sonara en 3 horas');
    fetch(`${ESP_IP}/treshoras`) // Realiza una petición GET a la ruta /led-on
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
const Alarmas = ({ navigation }) => {
    const [inputValue] = "";
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',gap: 20, backgroundColor:'#3d2249'  }}>
            <Button color='#06483a' title="Volver" onPress={() => navigation.navigate('Alimentador de mascotas')} />
            <Button color='#06483a' title="Horario de 15 segundos" onPress={Quince}  />
            <Button color='#06483a' title="Horario de 15 min" onPress={Quincemin} />
            <Button color='#06483a' title="Horario de 1 hora" onPress={Unahora} />
            <Button color='#06483a' title="Horario de 2 horas" onPress={Doshoras} />
            <Button color='#06483a' title="Horario de 3 horas" onPress={Treshoras} />
            {/*<TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8, color:'white' }}
                        placeholder="Personaliza tu horario"
                        value={inputValue}
                        //onChangeText={handleInputChange}
                    />*/}
        </View>
    );
}

export default Alarmas