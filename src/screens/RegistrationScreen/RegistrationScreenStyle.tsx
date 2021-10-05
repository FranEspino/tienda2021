import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E5F3FC",
    },
    input: {
        paddingLeft: 15,
        fontSize: 16,
        marginTop: 25,
        color: '#556F7F',
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: 45,
        width: 260,
        justifyContent: "center",
        alignItems: "center",
        fontWeight : '800'
    },
    text: {
        marginTop: 25,
        fontSize: 15,
        fontWeight: 'normal',
        color: '#556F7F'

    },
    checkboxContainer:{
        marginRight: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25,
    },

    labelcheckbox :{
        marginLeft : 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#556F7F',
    }

});