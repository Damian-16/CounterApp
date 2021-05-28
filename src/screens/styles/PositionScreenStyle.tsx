import {StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        width:300,
        height:300,
        backgroundColor:'#2BC4D9'
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top:0,

    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right:0,
    },
    cajaVerde:{
        width:100,
        height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        left:0,
        //...StyleSheet.absoluteFillObject esto lo que hace es poner en posicion absoluta y todos los lados top,right left etc en 0
    },

})
