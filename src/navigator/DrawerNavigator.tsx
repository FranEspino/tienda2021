import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer'
import MapGoogleScreen from '../screens/MapGoogleScreen/MapGoogleScreen';
import MyPerfilScreen from '../screens/MyPerfilScreen/MyPerfilScreen';
import { Image, Text, View } from 'react-native';
import { styles } from './DrawerNavigatorStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();
const nameDefault = 'CodiPasajero'
const lastnameDefault = 'Chiclayo - Perú'

const DrawerNavigator = ({ navigation }: DrawerContentComponentProps) => {
    const { user, LogOut } = useContext(AuthContext);

    return (
        <Drawer.Navigator
            initialRouteName="MapGoogleScreen"
            screenOptions={
                {
                    headerShown: false,
                }
            }
            drawerContent={(props) =>
            <DrawerContentScrollView {...props} >
                    <View style={styles.container} >
                        <View style={styles.informationUser}>
                            <View>
                                <Text style={styles.nameUser} >{(user === null) ? nameDefault : user[0].nombres}</Text>
                                <Text style={styles.nameUser}>{(user === null) ? lastnameDefault : user[0].apellidos}</Text>
                            </View>

                            <Image
                                style={styles.imageUser}
                                source={{

                                    uri: (user === null) ? 'https://res.cloudinary.com/frapoteam/image/upload/v1628877893/logo_vwq5zb.png' : user[0].foto
                                }}
                            />

                        </View>
                        <View
                            style={{
                                marginTop: 35,
                                borderBottomColor: '#01286D',
                                borderBottomWidth: 1,
                                marginBottom: 10

                            }}
                        />

                        <DrawerItem
                            label="Mapa"
                            icon={({ color, size }) =>
                                <Icon name='location' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />

                        <DrawerItem
                            label="Perfil"
                            icon={({ color, size }) =>
                                <Icon name='person' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MyPerfilScreen');
                            }}
                        />
                        <DrawerItem
                            label="Recomendados"
                            icon={({ color, size }) =>
                                <Icon name='medal' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />

                        <DrawerItem
                            label="Lugares favoritos"
                            icon={({ color, size }) =>
                                <Icon name='star' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />
                        <DrawerItem
                            label="Historial "
                            icon={({ color, size }) =>
                                <Icon name='newspaper' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />
                        <DrawerItem
                            label="Modo oscuro"
                            icon={({ color, size }) =>
                                <Icon name='ios-moon' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />
                        <DrawerItem
                            label="Nosotros"
                            icon={({ color, size }) =>
                                <Icon name='ios-alert-circle' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />
                        <DrawerItem
                            label="Compartir App"
                            icon={({ color, size }) =>
                                <Icon name='md-share-social-sharp' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={() => {
                                props.navigation.navigate('MapGoogleScreen');
                            }}
                        />
                        <DrawerItem
                            label="Cerrar sesión"
                            icon={({ color, size }) =>
                                <Icon name='log-out' size={27} color="#01286B" />
                            }

                            labelStyle={styles.drawerTextItem}
                            onPress={LogOut}
                        />

                        <View style={{ height: 80 }}>

                        </View>
                    </View>
            </DrawerContentScrollView>
            }>
            <Drawer.Screen name="MapGoogleScreen" component={MapGoogleScreen} />
            <Drawer.Screen name="StackrNavigator" component={StackNavigator} />
            <Drawer.Screen name="MyPerfilScreen" component={MyPerfilScreen} />

        </Drawer.Navigator>
    )

}



export default DrawerNavigator
