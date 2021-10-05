import React  from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RequestTaxiStyle';
import { useNavigation } from '@react-navigation/native';


const RequestTaxi = ({ locationAddress, destinationaddress }: any) => {
    const navigation = useNavigation<any>();
    return (
        
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.textInfo}>De: </Text>
                <Text style={{...styles.textInfo, fontWeight:'normal',maxWidth:310}}>{locationAddress} </Text>
            </View>
            <View style={{...styles.containerText, marginTop:10}}>
                <Text style={styles.textInfo}>A  : </Text>
                <Text style={{...styles.textInfo, fontWeight:'normal', maxWidth:310}}> {destinationaddress} </Text>
            </View>
            <View style={styles.containerButton}>

                <TouchableOpacity
                    onPress={() => { }}
                    activeOpacity={0.8}
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress= {()=> navigation.navigate("FormRequest")}
                    activeOpacity={0.8}
                    style={{...styles.button, marginLeft: 10}}
                >
                    <Text style={styles.textButton}>Solicitar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RequestTaxi
