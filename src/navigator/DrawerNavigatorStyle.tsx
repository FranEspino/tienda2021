import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5F3FC",
    },
    informationUser: {
        marginTop: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },
    imageUser: {
        width: 100, height: 100, resizeMode: 'contain', borderRadius: 200, borderColor: 'black'
    },
    nameUser: {
        color: '#00296B', fontSize: 13, fontWeight: 'bold',

    },
    drawerTextItem: {
        color: '#00296B', fontSize: 17, fontWeight: 'bold'
    },

});