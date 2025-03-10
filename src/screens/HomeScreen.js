import { Button, View, Text, Pressable,Alert, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
const HomeScreen = ({ navigation }) => {
    const ESP_IP= "http://192.168.100.182";
    const Alimentar= () =>{
        Alert.alert('Alimentando', 'Dispensando alimento.');
        fetch(`${ESP_IP}/alimentar`) // Realiza una petición GET a la ruta /led-on
        .then(response => response.text())
        .then(data => { Alert.alert('Niveles de comida', data)})
        .catch(error => console.error('Error:', error));
    }
    const styles = StyleSheet.create({
NavContainer:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 20
}

});
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 , backgroundColor:'#3d2249' }}>
            <Text style={{fontSize: 30,color: 'white'}}>Bienvenido al menu</Text>
            <Text style={{color: 'white'}} >Seleccione una opcion</Text>
            <Button style={{paddingHorizontal:200 }} color='#06483a' title="Alimentar" onPress={Alimentar} />
            <Button color='#06483a' title="Cantidad" onPress={() => navigation.navigate('Cantidad')} />
            <Button color='#06483a' title="Configurar alarma" onPress={() => navigation.navigate('Alarmas')} />
        </View>
    );
}

export default HomeScreen;