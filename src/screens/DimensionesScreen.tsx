import React from 'react'
import { useWindowDimensions, View, Text } from 'react-native';
import { styles } from './styles/Dimensiones';

//const {width,height}=Dimensions.get('window') esto saca las dimensiones de la pantalla pero solo de un lado, al voltear no conserva
export const DimensionesScreen = () => {
    const {width,height} = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
              <View style={{
                  ...styles.cajaMorada,
                  width:width * 0.6
              }}/>
              <View style={styles.cajaNaranja}/>
            </View>
            <Text style={styles.title}>W:{width},H:{height}</Text>
        </View>
    )
}
