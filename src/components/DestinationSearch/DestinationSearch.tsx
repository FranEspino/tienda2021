import axios from 'axios';
import React, { useContext } from 'react';
import {GooglePlacesAutocomplete,} from 'react-native-google-places-autocomplete';

import { AuthContext } from '../../context/AuthContext';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat:-6.771064, lng:  -79.839114} },
};

const workPlace = {
  description: 'Work',
  geometry: { location: { lat:-6.771064, lng:  -79.839114} },
};


const DestinationSearch = () => {

  const { setDestinationCoords,setDestinationAddress  } = useContext(AuthContext);



  
  return (
    <GooglePlacesAutocomplete
    textInputProps={{
      placeholderTextColor: 'white',
   }}
     styles={{
       container: { flex :0},
       textInput: {marginHorizontal:10,textAlign:'center',marginTop:15,fontSize: 16,fontWeight:'bold' ,color:'white', borderRadius: 100, backgroundColor:'#01286B'},
     }}

      placeholder='¿A donde quieres ir?'
      onPress={(data, details = null) => {
        const name =  details?.name;
        const address = details?.formatted_address;
        setDestinationAddress(name+' '+address);
        setDestinationCoords(details?.geometry.location);
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      query={{
        key: 'AIzaSyAgKEH4L5QcjUf-3vl4dgXyUF6VoFFgU48',
        language: 'es',
        components: 'country:pe',
        //strictbounds: true,
        types: ['geocode'],
        /*location: "-6.77361, -79.84088",
        radius: '15000', //15 km*/
      }}
    />
   
  );
};

export default DestinationSearch;
