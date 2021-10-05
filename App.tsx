import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { PermissionsProvider } from './src/context/PermissionContext';
import StackNavigator from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';



const AppUserInfo = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#E5F3FC' }}>
      <StatusBar
        backgroundColor='#01286B'
        barStyle='light-content'
      />

      <NavigationContainer>
        <AppUserInfo >
            <AppState>
              <StackNavigator />
            </AppState>
        </AppUserInfo>


      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
