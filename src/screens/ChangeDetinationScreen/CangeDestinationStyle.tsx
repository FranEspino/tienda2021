import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    BlackButton: {
        borderStyle: 'solid',
        backgroundColor: "#01286B",
        zIndex: 9999,
        height: 45,
        width: 250,
        borderStartColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    textButton:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    top:{
        marginTop: 10,
        marginBottom: 10,
        color: '#01286B',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }

  
});