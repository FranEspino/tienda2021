import {
    Image,
    Text,
    View,
} from 'react-native';
import { styles } from './PermissionStyle'
import { PermissionContext } from '../../context/PermissionContext';
import React, { useContext } from 'react';
import CodiButtom from '../../components/CodiButtom/CodiButtom';

const Permission = () => {
    const {askLocationPermission} = useContext(PermissionContext);

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>
                Hey CodiPajarero!{"\n"}Necesitamos que aceptes los permisos del Gps.
            </Text>
            
            <Image
                style={styles.Image}
                source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1628793223/permision_dqbg2m.png',
                }}
            />
            <CodiButtom
                title="Permiso"
                onPress={askLocationPermission}
            />

        </View>
    )
}


export default Permission
