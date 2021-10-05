import React, { useContext, useState } from 'react'
import { View, TextInput, Image, Text, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import CodiButtom from '../../components/CodiButtom/CodiButtom'
import { styles } from './LoginScreenStyle'
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';

interface Props extends StackScreenProps<any,any>{} 

const LoginScreen = ({navigation}: Props) => {
    const {signUp} = useContext(AuthContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {dni, clave, onChange} = useForm({
        dni: '',
        clave: ''
    });

    const onLogin = () => {
        signUp({dni:dni,password:clave});
        Keyboard.dismiss();
    }

    return (
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <View style={styles.container}>
            <Image
                style={{ width: 150, height: 150, resizeMode: 'contain' }}
                source={{
                    uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1621377525/rickshaw_d5pr9z.png',
                }}
            />
            <TextInput
                onChangeText={(value) => onChange(value,'dni')}
                value={dni}
                onSubmitEditing= {onLogin}
                keyboardType='numeric'
                placeholder="Número de documento"
                style={styles.input}
                placeholderTextColor="#556F7F"
                defaultValue={username}
            />
            <TextInput
                onChangeText={(value) => onChange(value,'clave')}
                value={clave}
                onSubmitEditing= {onLogin}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="Contraseña"
                style={{ ...styles.input, marginTop: 20 }}
                placeholderTextColor="#556F7F"
                defaultValue={password}
            />
            <CodiButtom
                title="Ingresar"
                style={{ marginTop: 40 , backgroundColor:'#004aca'}}
                onPress={onLogin}
            />
            <Text style={styles.text}>
                ¿Olvidaste tu contraseña?
            </Text>

        </View>
        </KeyboardAvoidingView>

    )
}

export default LoginScreen
