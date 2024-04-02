import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./styles";

export default function Header(){
    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                    source={require('../../assets/1293302.png')}
                />
            <View style={styles.componentes}>
                
                <TextInput
                    style={styles.campo_pesquisa}
                    placeholder="Pesquisar algo..."
                />
                <TouchableOpacity style={styles.botao_pesquisa}>
                    <Icon 
                        name="pesquisa"
                        type="material"
                        color={'#C8D3D5'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}