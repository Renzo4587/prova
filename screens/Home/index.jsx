import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { estilo } from "./styles"
import Cards from "../../components/cards"
import Header from "../../components/header"
import Cards from "../../components/cards"

export default function Home(){

    const lista = ['teste','brunao','renzo',
    'gui','joao','joui','bryan',
    'rogerio','gabriel','alex','alexandre']


    return(
        <View style={estilo.tela}>
            <Header />
            <FlatList 
            style={estilo.lista}
                data={lista}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <Cards key={item} name={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}