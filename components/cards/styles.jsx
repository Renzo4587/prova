import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#6A7FDB',
        padding: 15,
        height: 100,
        marginBottom: 25,
        justifyContent: 'center',
        borderRadius: 25
    },
    components: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        resizeMode: 'cover',
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: '#000000',
        borderRadius: 50
    },
    texto:{
        flex: 1,
        padding: 15,
        fontSize: 20,
        color: '#000000',
        backgroundColor: '#52DEE5',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
})

export default styles