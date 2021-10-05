import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './LoginOrRegistrationStyle'
import { StackScreenProps } from '@react-navigation/stack';
interface Props extends StackScreenProps<any,any>{} 

const LoginOrRegistration = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 150, height: 150, resizeMode: 'contain' }}
                source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1621377525/rickshaw_d5pr9z.png',
                }}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={()=> navigation.navigate('Login')}
                activeOpacity={0.8}
            >
                <Text style={styles.text}>Ya tengo una cuenta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#000' }}
                onPress={()=> navigation.navigate('Registration')}
                activeOpacity={0.8}
            >
                <Text style={styles.text}>Soy un nuevo usuario</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginOrRegistration
