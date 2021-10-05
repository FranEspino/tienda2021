import React, { useState, createContext,useEffect} from "react";
import { AppState, Platform } from "react-native";
import { PermissionStatus, request, PERMISSIONS, check,openSettings } from "react-native-permissions";

export interface PermissionState {
    locationStatus: PermissionStatus;
}

export const PermissionInitState: PermissionState = {
    locationStatus: 'unavailable'
}

type PermissionContextProps = {
    permissions: PermissionState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

//Este context se encuentra en la raiz de la aplicación App.tsx (no se va a destruir)
export const PermissionContext = createContext({} as PermissionContextProps);

export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(PermissionInitState);
    //Para que este todo el tiempo pendiente del estado del permiso del gps
    useEffect( () => {
        checkLocationPermission();
        AppState.addEventListener('change', state =>{
            if(state !== 'active') return; //state puede ser background, active o inactive
            checkLocationPermission();
        });
    }, []);

    



    const askLocationPermission = async () => {
        let permissionStatus: PermissionStatus;
        if (Platform.OS === 'android') {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        } else {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }

        if(permissionStatus === 'blocked'){
            openSettings();
        }


        setPermissions({
            ...permissions,
            locationStatus: permissionStatus

        })
    }

    const checkLocationPermission = async() => {
        let permissionStatus: PermissionStatus;
        if (Platform.OS === 'android') {

            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

        } else {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus

        })
    }

    return (
        <PermissionContext.Provider value={{
            //Exponemos lo que deseamos utilizar
            permissions,
            askLocationPermission,
            checkLocationPermission,
        }}>
            {children}
        </PermissionContext.Provider>
    );

}