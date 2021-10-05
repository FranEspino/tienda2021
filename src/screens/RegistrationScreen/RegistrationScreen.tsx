import React, { useContext } from 'react'
import axios from 'axios'
import { Text, View, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { styles } from './RegistrationScreenStyle'
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../../hooks/useForm';
import CodiButtom from '../../components/CodiButtom/CodiButtom';
import { AuthContext } from '../../context/AuthContext';
interface Props extends StackScreenProps<any, any> { }
const RegistrationScreen = ({ navigation }: Props) => {

    const {signIn} = useContext(AuthContext)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const { dni, nombres, apellidos, celular, correo, password, onChange } = useForm({
        dni: '',
        nombres: '',
        apellidos: '',
        celular: '',
        correo: '',
        password: ''
    });
   
    const onRegistration =async () => {
        signIn({apellidos: apellidos, nombres: nombres, dni: dni, email: correo, telefono: celular, password: password});
        navigation.navigate('Login');
        Keyboard.dismiss();
    }



    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>

           
            <View style={styles.container}>
                <Text style={{ ...styles.text, fontSize: 22, fontWeight: 'bold', marginTop:70}}>Ingresa tus datos</Text>
                <TextInput
                    onChangeText={(value) => onChange(value, 'dni')}
                    value={dni}
                    placeholder="DNI"
                    onSubmitEditing= {onRegistration}
                    style={styles.input}
                    keyboardType="numeric"
                    autoCorrect={true}
                    placeholderTextColor="#556F7F"
                />
                <TextInput
                    onChangeText={(value) => onChange(value, 'nombres')}
                    value={nombres}
                    placeholder="Nombres"
                    onSubmitEditing= {onRegistration}

                    style={styles.input}
                    autoCapitalize='words'
                    autoCorrect={false}
                    placeholderTextColor="#556F7F"
                />
                <TextInput
                    onChangeText={(value) => onChange(value, 'apellidos')}
                    value={apellidos}
                    placeholder="Apellidos"
                    onSubmitEditing= {onRegistration}

                    style={styles.input}
                    autoCapitalize='words'
                    autoCorrect={false}
                    placeholderTextColor="#556F7F"
                />
                <TextInput
                    onChangeText={(value) => onChange(value, 'celular')}
                    value={celular}
                    placeholder="Celular"
                    onSubmitEditing= {onRegistration}

                    style={styles.input}
                    keyboardType='numeric'
                    placeholderTextColor="#556F7F"
                />
                <TextInput
                    onChangeText={(value) => onChange(value, 'correo')}
                    value={correo}
                    placeholder="Correo Electrónico"
                    onSubmitEditing= {onRegistration}
                    autoCapitalize='none'

                    style={styles.input}
                    keyboardType="email-address"
                    autoCorrect={true}
                    placeholderTextColor="#556F7F"
                />
                <TextInput
                     onChangeText={(value) => onChange(value, 'password')}
                     value={password}
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder="Crear password"
                    onSubmitEditing= {onRegistration}
                    autoCapitalize='none'
                    style={styles.input}
                    placeholderTextColor="#556F7F"
                />
                <View style={{ ...styles.checkboxContainer, marginBottom: 40 }}>
                    <CheckBox
                        value={toggleCheckBox}
                        tintColors={{ true: '#00276B', false: '#98aac9' }}
                        onValueChange={(toggleCheckBox) => setToggleCheckBox(toggleCheckBox)}

                    />
                    <Text style={styles.labelcheckbox}>Acepta los {"\n"}terminos y condiciones</Text>
                </View>
                <CodiButtom
                title="Ingresar"
                style={{marginBottom: 150}}
                onPress={onRegistration}
                />
           
            </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default RegistrationScreen
