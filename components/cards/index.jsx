import { View, Image, Text } from "react-native";
import styles from "./styles";

export default function Cards({name}){
    return (
        <View style={styles.container}>
            <View style={styles.components}>
                <Image style={styles.imagem}
                    source={require('../../assets/usuario.png')}
                />
                <Text style={styles.texto}>{name}</Text>
            </View>
        </View>
    )
}