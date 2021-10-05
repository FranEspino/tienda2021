import { DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './ButtomGroupStyle'
const ButtomGroup = ({ buttons, onClick }: any) => {
    const [clickedId, setClickedId] = useState(0);

    const handleClick = (item:any,id:any) => {
        setClickedId(id);
        onClick(id);
    }
    return (
        <View style={styles.container}>
            {
                buttons.map((buttonLabel: any, id: any) => {
                    return (
                        <TouchableOpacity
                            onPress= {(item) => handleClick(item,id)}
                            key={id} style={[
                                id === clickedId ? styles.buttonActive : styles.button
                            ]}>
                            <Text style={
                                id === clickedId ? styles.textActive : styles.text
                            }>{buttonLabel }</Text>
                        </TouchableOpacity>
                    )
                })
            }

        </View>
    )
}

export default ButtomGroup
