import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        height: 150,
        minHeight: 180,
        backgroundColor: "#fff",
        borderRadius: 35,

    },
    textInfo: {
        color: '#01286B',
        fontSize: 15,
        fontWeight: 'bold'
    },
    containerText: {
        marginLeft: 15,
        marginTop: 15,
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start",
    },

    containerButton: {
        flexDirection: "row",
        flex: 1,
        marginTop: 18,
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#00D6D1",
        borderRadius: 50,
        height: 35,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
});