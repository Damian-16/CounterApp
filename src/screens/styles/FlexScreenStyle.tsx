import {StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'flex-end',
       
    

    },
    caja1:{
        // flex:3,
        borderWidth:2,
        borderColor:'white',
       
    },
    caja2:{
        // flex:2,
        borderWidth:2,
        borderColor:'white'
    },
    caja3:{
        // flex:1,
        borderWidth:2,
        borderColor:'white'
        //flex 3,2,1 seria 3+2+1 que es igual a 6 entonces de 6 un 30% un 20% y un 10%
    }
})
//justifyConten va a alinear dependiendo el componente padre
//alignSelf sobreescribe ciertos tipos de propiedades del padre
//flexWrap se encarga de acomodar los componetntes hijos al padre