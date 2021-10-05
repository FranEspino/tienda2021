import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, Region } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import RequestTaxi from '../../components/RequestTaxi/RequestTaxi';
import { AuthContext } from '../../context/AuthContext';
import { styles } from './CangeDestinationStyle'

const ChangeDestinationScreen = () => {
    const [region, setRegion] = useState<Region>();
    const {
        destination_coords,
        location_address,
        destination_address,
        setDestinationAddress,
        setDestinationCoords,
    } = useContext(AuthContext);
    

    const setLicationInfo = async () => {
        let latitude = region?.latitude;
        let longitude = region?.longitude;
        let lat = region?.latitude;
        let lng = region?.longitude;
        setDestinationCoords({ lat, lng });
        try {
          const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAgKEH4L5QcjUf-3vl4dgXyUF6VoFFgU48`);
          const data = await resp.data.results[0].formatted_address;
          console.log(data)
        setDestinationAddress(data);
      } catch (error) {
          console.error(error.response.data);
      }
    }


    return (
        <View style={{ flex: 1,}}>
            <Text style={styles.top}>Puedes cambiar tu ubicación {'\n'}destino moviendo el mapa .</Text>
            {
                (destination_address)
                    ? <RequestTaxi
                        locationAddress={location_address}
                        destinationaddress={destination_address}
                    />
                    : <View />
            }
            <Icon name="ios-flag"
                style={{
                    zIndex: 3,
                    position: 'absolute',
                    marginTop: -37,
                    marginLeft: -11,
                    left: '50%',
                    top: '50%'
                }}
                size={50}
                color="#01286B" />
            <MapView
            
                onRegionChangeComplete= {(info) => {setRegion(info)}}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: destination_coords.lat,
                    longitude: destination_coords.lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={
                    region ?
                    setLicationInfo : () => { }}
                style={{...styles.BlackButton,
                    position: 'absolute',
                    bottom: 35,
                    alignSelf: 'center',
                }}
            >
         
                <Text style={styles.textButton}>Obtener ubicación</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ChangeDestinationScreen
