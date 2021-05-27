import React, { useState } from 'react'
import { View, Text, Button ,TouchableOpacity} from 'react-native';
import { styles } from './styles/CounterScreenStyle';

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
            <TouchableOpacity
            onPress={()=> setContador(contador+1)}
            ><View
            style={styles.button}>
                    <Text>+1</Text>

            </View>

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.fabLocationBR}
            onPress={()=> setContador(contador+1)}
            ><View
            style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>

            </View>
            

            </TouchableOpacity>

            <TouchableOpacity
            style={styles.fabLocationBL}
            onPress={()=> setContador(contador-1)}
            ><View
            style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>

            </View>
            

            </TouchableOpacity>
            
        </View>
    )
}
