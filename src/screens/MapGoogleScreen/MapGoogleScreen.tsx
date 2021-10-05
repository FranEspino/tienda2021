import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { Image, View } from 'react-native'
import React, { useRef, useEffect, useContext } from 'react';
import { useLocation } from '../../hooks/useLocation';
import { LoaderPulse } from '../../components/Loader/Loader';
import { CodiFab } from '../../components/CodiFab/CodiFab';
import { DrawerScreenProps } from '@react-navigation/drawer';
import DestinationSearch from '../../components/DestinationSearch/DestinationSearch';
import { AuthContext } from '../../context/AuthContext';
import RequestTaxi from '../../components/RequestTaxi/RequestTaxi';
interface Props extends DrawerScreenProps<any, any> { }
const MapGoogle = ({ navigation }: Props) => {
    const {
        destination_coords,
        location_address,
        destination_address,
    } = useContext(AuthContext);

    const {
        hasLocation,
        followUserLocation,
        StopFollowUserLocation,
        initialPosition,
        getCurrentLocation,
        userLocation,
    } = useLocation();

    //Para mantener la refencia 
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return () => {
            StopFollowUserLocation();
        };
    }, []);

    useEffect(() => {
        if (!following.current) return;
        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
            zoom: 16
        });

    }, [userLocation]);


    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();
        following.current = true;
        mapViewRef.current?.animateCamera({
            center: { latitude, longitude },
            zoom: 16
        });
    }

    if (!hasLocation) {
        return <LoaderPulse />
    }
    return (
        <>
            <DestinationSearch />
            {
                (destination_address)
                    ? <RequestTaxi
                        locationAddress={location_address}
                        destinationaddress={destination_address}
                    />
                    : <View />
            }
            <MapView
                followsUserLocation={true}
                showsUserLocation={true}
                //Para enlazar la referencia del mapa
                ref={(el) => mapViewRef.current = el!}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                region={{
                    latitude: initialPosition!.latitude,
                    longitude: initialPosition!.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onTouchStart={() => following.current = false}
            >
                {(destination_coords === null)
                    ? <View />
                    :
                    <>
                        <Polyline
                            geodesic={true}
                            style={{ borderRadius: 10 }}
                            coordinates=
                            {[
                                { latitude: userLocation.latitude, longitude: userLocation.longitude },

                                { latitude: destination_coords.lat, longitude: destination_coords.lng }
                            ]}
                            strokeColor="#003186"
                            strokeWidth={4}
                            lineDashPattern={[2, 5]}
                        />

                        <Marker
                            pinColor={'green'}
                            title={destination_address}

                            coordinate={{
                                latitude: destination_coords.lat,
                                longitude: destination_coords.lng
                            }}>
                        </Marker>
                    </>
                }

                <Marker
                    title={location_address}
                    coordinate={{
                        latitude: userLocation!.latitude,
                        longitude: userLocation!.longitude,
                    }}>
                    <Image
                        style={{ width: 50, height: 50, resizeMode: 'contain' }}
                        source={{uri: 'https://res.cloudinary.com/frapoteam/image/upload/v1630597798/marker_h1cvpo.png' }}
                    />
                </Marker>

            </MapView>

            <CodiFab
                iconName="reorder-three-sharp"
                onPress={() => navigation.toggleDrawer()}
                style={{
                    position: 'absolute',
                    bottom: 185,
                    right: 10,
                }}
            />

            <CodiFab
                iconName="locate"
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 130,
                    right: 10,
                }}
            />

            <CodiFab
                iconName="ios-flag"
                onPress={() =>
                    (destination_coords === null)
                    ? <View/>
                    : navigation.navigate('ChangeDestinationScreen')}
                style={{
                    position: 'absolute',
                    bottom: 75,
                    right: 10,
                }}
            />

            <CodiFab
                iconName="heart"
                onPress={() => console.log('CodiFab pressed')}
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 10,
                }}
            />
        </>
    );
}

export default MapGoogle
