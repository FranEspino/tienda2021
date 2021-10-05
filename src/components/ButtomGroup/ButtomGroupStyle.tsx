import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        height: 70,
        width: 130,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    text: {
        fontWeight: 'bold',
        color: '#01286B'
    },
    buttonActive: {
        height: 70,
        width: 130,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#01286B',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    textActive: {
        fontWeight: 'bold',
        color: 'white'
    }
});