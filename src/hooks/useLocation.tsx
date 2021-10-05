import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';
import { AuthContext } from '../context/AuthContext';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {


    //Array de todas las ubicaciones donde el usuario ha estado
    const [routeLines,setRouteLine] = useState<Location[]>([]);
    //para saber cuandp tenemos una coordenada del usuario
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>();
    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });
    const {
        setLocationCoords,
        setLocationAddress } = useContext(AuthContext);

    const watchId = useRef<number>();

    useEffect(() => {
        getCurrentLocation()
            .then(location => {
                setLicationInfo()
                setInitialPosition(location);
                setUserLocation(location);
                setRouteLine(routeLines => [...routeLines,location])
                setHasLocation(true);
            });

    }, []);


    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                info => {
                    const { coords } = info
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
                },
                error => console.log(error),
                {
                    enableHighAccuracy: true,
                    distanceFilter: 2
                }
            );

        })
    }


    const setLicationInfo = async () => {
        const { latitude, longitude } = await getCurrentLocation();
        setLocationCoords({latitude,longitude});
        try {
          const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAgKEH4L5QcjUf-3vl4dgXyUF6VoFFgU48`);
          const data = await resp.data.results[0].formatted_address;
          setLocationAddress(data)
      } catch (error) {
          console.error(error.response.data);
      }
    }

    const followUserLocation = () => {
        watchId.current =  Geolocation.watchPosition(
            info => {
                const { coords } = info
                const location: Location={
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                }
                setUserLocation(location);
                setLicationInfo()
                setRouteLine(routeLines => [...routeLines,location])
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                distanceFilter: 10 
                
            }
        );

    };

    const StopFollowUserLocation = () => {
        if (watchId.current) Geolocation.clearWatch(watchId.current);
    };



    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        StopFollowUserLocation,
        userLocation,
        routeLines,

    }
}

