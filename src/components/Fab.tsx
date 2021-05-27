import React from 'react'
import { View, TouchableOpacity, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { styles } from '../screens/styles/CounterScreenStyle';

interface Props{

    title:string
    position:'br'|'bl';//si ponemos position? ese prop ya es opcional

    onPress: () => void
}
//en los parametros es lo mismo que poner (props:Props)
export const Fab = ({title,onPress,position}:Props) => {
    console.log(title);


const ios =()=>{
    <TouchableOpacity
    activeOpacity={0.5}
    style={[
        styles.fabLocation,
        (position ==='bl')? styles.left
        :styles.right
    ]}
      onPress={ onPress  }>
       <View style={styles.fab}>
           <Text style={styles.fabText}>{title}</Text>
       </View>
   </TouchableOpacity>

}



const android =()=>{


    return (//al ser Native Feedback para poder ordenar los botones hay que encapsular todo en un view y agregarle el style de opacity a ese view
       <View 
        style={[styles.fabLocation,
        (position ==='bl')? styles.left
        :styles.right]}>
            <TouchableNativeFeedback
             background={TouchableNativeFeedback.Ripple('black',false,30)}
           

            //style={(position==='bl')?styles.fabLocationBL:styles.fabLocationBR}
            onPress={ onPress  }>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
    )
}
return (Platform.OS ==='ios')? ios() : android();
}
