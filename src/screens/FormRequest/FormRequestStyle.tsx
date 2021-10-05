import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#E5F3FC',
      paddingVertical:100,
      paddingHorizontal:30
    },
    textInfo: {
        color: '#01286B',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 10,
        marginTop:15
    },
  
    input:{
      backgroundColor: '#fff',
      height: 100,
      color: 'black',
      borderRadius: 25,
      padding: 15,
      justifyContent: 'flex-end',
     fontSize: 16
} ,
button: {
    backgroundColor: "#004aca",
    borderRadius: 20,
    height: 60,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
},
textButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
},

containerButton: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent:'space-around'
}

  
});