import axios from 'axios'
import React, { useContext } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ButtomGroup from '../../components/ButtomGroup/ButtomGroup'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from '../../hooks/useForm'
import { styles } from './FormRequestStyle'
const FormRequest = () => {

    const { user, location_coords, destination_coords,
        location_address, destination_address , setLocationAddress} = useContext(AuthContext);

    const { fecha, estado, tarifa, descuento, pagofinal, idpasajero, latitud_recojo,
            longitud_recojo, referencia_recojo, latitud_destino, longitud_destino,
            direccion_origen, direccion_destino, codigo, tipo_servicio, onChange } = useForm({
            fecha: '2020-01-01 10:10:10',
            estado: 'S',
            tarifa: 6,
            descuento: 0,
            pagofinal: 6,
            idpasajero: user[0].idpasajero,
            latitud_recojo: location_coords.latitude,
            longitud_recojo: location_coords.longitude,
            referencia_recojo: '',
            latitud_destino: destination_coords.lat,
            longitud_destino: destination_coords.lng,
            direccion_origen: location_address,
            direccion_destino: destination_address,
            codigo: 'null',
            tipo_servicio: 'E'
        });

 

    const onRegistrationTravel = async() => {
        console.log(fecha, estado, tarifa, descuento, pagofinal, idpasajero, latitud_recojo,
            longitud_recojo, referencia_recojo, latitud_destino, longitud_destino,
            direccion_origen, direccion_destino, codigo, tipo_servicio)
        try {
            const resp = await axios(`http://codidrive.com/vespro/logica/insertar_pedido.php?fhsolicitud=${fecha}&estado=${estado}&tarifa=${tarifa}&descuento=${descuento}&pagofinal=${pagofinal}&idpasajero=${idpasajero}&latitud_recojo=${latitud_recojo}&longitud_recojo=${longitud_recojo}&referencia_recojo=${referencia_recojo}&latitud_destino=${latitud_destino}&longitud_destino=${longitud_destino}&direccion_origen=${direccion_origen}&direccion_destino=${direccion_destino}&codigo=${codigo}&tipo_servicio=${tipo_servicio}`);
            const data = await resp.data;
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ScrollView style={styles.container}>
        <View
            style={{ flex: 1, marginBottom: 200 }}
        >
            <Text style={styles.textInfo}>Direccion de recojo</Text>
            <TextInput
                onChangeText={(value) => onChange(value, 'direccion_origen')}
                value={direccion_origen}
                placeholder="¿En donde te recojeremos?"
                onSubmitEditing={onRegistrationTravel}
                style={styles.input}
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize={"none"}
                placeholderTextColor="#556F7F"
            />
            <Text style={styles.textInfo}>Referencia</Text>
            <TextInput
                onChangeText={(value) => onChange(value, 'referencia_recojo')}
                value={referencia_recojo}
                placeholder="Dejanos una referencia"
                onSubmitEditing={onRegistrationTravel}
                style={{ ...styles.input, height: 80 }}
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize={"none"}
                placeholderTextColor="#556F7F"
            />
            <Text style={styles.textInfo}>Direccion de destino</Text>
            <TextInput
                onChangeText={(value) => onChange(value, 'direccion_destino')}
                value={direccion_destino}
                placeholder="¿A donde te llevaremos?"
                onSubmitEditing={onRegistrationTravel}
                style={styles.input}
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize={"none"}
                placeholderTextColor="#556F7F"
            />
            <Text style={styles.textInfo}>Elige un tipo de servicio</Text>

        

            <TouchableOpacity
                style={{ ...styles.button, width: '100%', marginTop: 40, borderRadius: 50 }}
                onPress={() => console.log('dfgdf')}
            >
                <Text style={{ ...styles.textInfo, color: 'white' }}>Pedir Servicio</Text>
            </TouchableOpacity>
        </View>


    </ScrollView>
    )
}

export default FormRequest
