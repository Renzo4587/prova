import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#A7ACD9',
    },
    lista:{
        paddingLeft: 22,
        paddingRight: 22
    },
    body:{
        padding: 22
    },
    title: {
        marginTop: 5,
        fontSize: 36,
        fontWeight: 'bold'
    },
    sub_title:{
        fontSize: 22,
        color: '#545DB6' 
    },
    forma: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    input_text: {
        flex: 1,
        height: 80,
        color: '#FFF',
        fontSize: 26,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#545DB6'
    },
    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 68,
        borderRadius: 10,
        fontSize: 50,
        backgroundColor: '#92DCE5',
        marginLeft: 16
    },
    texto_botao: {
        fontSize: 30
    }
})