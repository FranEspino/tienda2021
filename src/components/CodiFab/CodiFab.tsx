import React from 'react'
import {View, StyleProp,ViewStyle, TouchableOpacity } from 'react-native'
import {styles} from './CodiFabStyle'
import Icon from 'react-native-vector-icons/Ionicons'
interface Props {
    iconName : string;
    onPress : () => void;
    //? signifca opcional
    style?: StyleProp<ViewStyle>

}

export const CodiFab = ({iconName,onPress,style ={}}:Props) => {
    return (
        <View style={{...style as any}}> 

            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.BlackButton}
            >
            <Icon 
            name={iconName}
            size={25}
            color='#fff'
            />

            </TouchableOpacity>

        </View>
    )
}

