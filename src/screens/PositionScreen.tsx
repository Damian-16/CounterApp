import React from 'react'
import { View } from 'react-native';
import { styles } from './styles/PositionScreenStyle';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaVerde} />
            
        </View>
    )
}
