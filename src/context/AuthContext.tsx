import React, { createContext, useReducer } from "react";
import codiDriveApi from "../api/codiDriveApi";
import { LoginData, RegistrationData } from "../interfaces/appInterfaces";
import { authReducer, AuthState } from "./AuthReducer";
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

type AuthContextProps = {
    errorMessage: string;
    user: any | null;
    location_coords : any;
    destination_coords : any;
    location_address: string;
    destination_address: string;
    status: 'cheking' | 'authenticated' | 'not-authenticated';
    signIn: (registration: RegistrationData) => void;
    signUp: (loginData: LoginData) => void;
    LogOut: () => void;
    renoveError: () => void;
    setLocationCoords: (location_coords: any) => void;
    setDestinationCoords: (destination_coords:any) => void;
    setLocationAddress: (location_address: string) => void;
    setDestinationAddress: (destination_address:string) => void;
}

const authInitialState: AuthState = {
    status: 'cheking',
    user: null,
    errorMessage: '',
    location_coords : null,
    destination_coords : null,
    location_address: '',
    destination_address: '',
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);
    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = async () => {
        // No token, no autenticado
        const user = await AsyncStorage.getItem('user');

        if (!user)
            return dispatch({ type: 'notAuthenticated' })
        else
            dispatch({
                type: 'signUp',
                payload: {
                    user: JSON.parse(user)
                }
            });
    };

    const signUp = async ({ dni, password }: LoginData) => {
        try {
            const resp = await codiDriveApi.get(`/acceder.php?login=${dni}&pass=${password}`);
            const data = await resp.data;
            console.log("Tu login:", JSON.stringify(data))
            if (data.length === 0) {
                Toast.showWithGravity('Usuario o contraseña', Toast.LONG, Toast.BOTTOM);
            } else {
                dispatch({
                    type: 'signUp',

                    payload: {
                        user: data
                    }
                });
                AsyncStorage.setItem('user', JSON.stringify(data), (err) => {
                    if (err) {
                        console.log("an error");
                        throw err;
                    }
                    console.log("success");
                }).catch((err) => {
                    console.log("error is: " + err);
                });
            }

        } catch (error) {
            console.error(error.response.data);
        }
    };

    const setLocationCoords = (location_coords: any) => {
        dispatch({
            type: 'locationCoords',
            payload: {
                location_coords : location_coords
            }
        });
    };

    const setDestinationCoords = (destination_coords: any) => {
        dispatch({
            type: 'destinationCoords',
            payload: {
                destination_coords : destination_coords
            }
        });
    };

    const setLocationAddress = (location_address: string) => {
        dispatch({
            type: 'locationAddress',
            payload: {
                location_address: location_address
            }
        });
    };

    const setDestinationAddress = (destination_address: string) => {
        dispatch({
            type: 'destinationAddress',
            payload: {
                destination_address: destination_address
            }
        });
    };

    const signIn = async (
        { apellidos, nombres, dni, email, telefono, password }: RegistrationData) => {
        try {
            const resp = await codiDriveApi.get(`/registro_persona.php?&apellidos=${apellidos}&nombres=${nombres}&nro_documento=${dni}&email=${email}&telefono=${telefono}`);
            const data = await resp.data;
            console.log("Tu login:", JSON.stringify(data))
            if (data.length === 0) {
                Toast.showWithGravity('Revisa bien tus datos', Toast.LONG, Toast.BOTTOM);
            } else {
                let idPerson = await getIdPerson(apellidos, nombres, dni, email, telefono);
                registerPasajero(idPerson)
                registerUser(idPerson, dni, password)
                return;
            }

        } catch (error) {
            console.error(error.response.data);
        }
    };

    const getIdPerson = async (apellidos: string, nombres: string, dni: string, email: string, telefono: string) => {
        try {
            const resp = await codiDriveApi.get(`/obtener_id_persona.php?&apellidos=${apellidos}&nombres=${nombres}&nro_documento=${dni}&email=${email}&telefono=${telefono}`);
            const data = await resp.data;
            return data[0].idpersona;
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const registerPasajero = async (idpasajero: any) => {
        try {
            const resp = await codiDriveApi.get(`/registro_pasajero.php?&idpersona=${idpasajero}&fregistro=2020-01-01 10:10:10&tipo_pasajero=CN`);
            const data = await resp.data;
            if (data.length === 0) {
                Toast.showWithGravity('Pasajero no registrado', Toast.LONG, Toast.BOTTOM);
            } else {
                return;
            }
        } catch (error) {
            console.error(error.response.data);
        }

    };

    const registerUser = async (idpersona: any, dni: string, password: string) => {
        try {
            const resp = await codiDriveApi.get(`/registrar_usuario.php?&login=${dni}&password=${password}&idperfil=3&idpersona=${idpersona}&estado=N`);
            const data = await resp.data;
            if (data.length === 0) {
                Toast.showWithGravity('Pasajero no registrado', Toast.LONG, Toast.BOTTOM);
            } else {
                return;
            }

        } catch (error) {
            console.error(error.response.data);
        }

    };

    const LogOut = async () => {
        dispatch({ type: 'logOut' });
        await AsyncStorage.removeItem('user');
    };

    const renoveError = () => { };

    return (

        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            LogOut,
            renoveError,
            setLocationCoords,
            setDestinationCoords,
            setLocationAddress,
            setDestinationAddress,
        }}>
            {children}
        </AuthContext.Provider>
    );

}