import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';


const CardsDetails=({data})=>{
    return (
        <Card key={data?.imdbID} containerStyle={{ marginBottom: 10, borderRadius: 10 }}>
            <Card.Image source={{ uri: data?.Poster }} style={{ height: 450, width: 300 }} />
            <Text>{data?.Title}</Text>
            <Text>año: {data?.Year}</Text>
            <Text>genero: {data?.Genre}</Text>
            <Text>director: {data?.Director}</Text>
            <Text>duracion: {data?.Runtime}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            </View>
        </Card>
    )
}

export default CardsDetails;