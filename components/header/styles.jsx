
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#2B2D42',
        padding: 0,
        marginBottom: 25,
    },
    components: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        height: 100,
        width: '110%',
    },
    campo_pesquisa:{
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#F8F7F9',
        backgroundColor: '#495867',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    botao_pesquisa:{
        width: 56,
        height: 56,
        backgroundColor: '#153131',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lupa:{
        width: 30,
        height: 30,
    }
})

export default styles