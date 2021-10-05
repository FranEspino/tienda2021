import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Permission from '../screens/PermissionsScreen/PermissionScreen';
import { useContext } from 'react';
import { PermissionContext } from '../context/PermissionContext';
import { LoaderSkype } from '../components/Loader/Loader';
import LoginOrRegistration from '../screens/LoginOrRegistration/LoginOrRegistration';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen';
import DrawerNavigator from './DrawerNavigator';
import { AuthContext } from '../context/AuthContext';
import FormRequest from '../screens/FormRequest/FormRequest';
import ChangeDestinationScreen from '../screens/ChangeDetinationScreen/ChangeDestinationScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {

    const { status } = useContext(AuthContext);
    const { permissions } = useContext(PermissionContext);

    if (status === 'cheking') {
        return <LoaderSkype />
    }

    if (permissions.locationStatus === 'unavailable') {
        return <LoaderSkype />
    }
    return (
        <Stack.Navigator
           initialRouteName="LoginOrRegistration"
            screenOptions={
                {
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }
            }
        >
            {
                (permissions.locationStatus === 'granted')
                    ? (status === 'authenticated')
                        ? (<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />)
                        : (
                            <>
                                <Stack.Screen name="LoginOrRegistration" component={LoginOrRegistration} />
                                <Stack.Screen name="Login" component={LoginScreen} />
                                <Stack.Screen name="Registration" component={RegistrationScreen} />
                            </>
                        )
                        


                    : <Stack.Screen name="Permission" component={Permission} />
            }
             <Stack.Screen name="FormRequest" component={FormRequest} />
             <Stack.Screen name="ChangeDestinationScreen" component={ChangeDestinationScreen} />

        </Stack.Navigator>
    )
}

export default StackNavigator
