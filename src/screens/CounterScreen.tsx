import React, { useState } from 'react'
import { View, Text, Button ,TouchableOpacity} from 'react-native';
import { styles } from './styles/CounterScreenStyle';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={{
            flex:1,
            justifyContent:'center',
        }}>
            <Text 
            style={{
                textAlign:'center',
                fontSize:40,
                top:-15
            }}>Contador:{contador}</Text>

            <Fab
            title='-1'
            onPress={()=>setContador(contador -1)}/>
             <Fab
            title='+1'
            onPress={()=>setContador(contador +1)}/>
           

            
            
        </View>
    )
}
