import React from 'react'
import {StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',

   },
   title:{
       textAlign:'center',
       fontSize:40,
       top:-15
   },
   button:{
        backgroundColor:'red',
        borderRadius:100
    },
    fabLocationBR:{
     position:'absolute',
     bottom:25,
     right:25,

    },
    fabLocationBL:{
        position:'absolute',
        bottom:25,
        left:25,
    },
   
   fab:{
       backgroundColor:'#5856d6',
       width:60,
       height:60,
       borderRadius:100,
       justifyContent:'center',
   },
   fabText:{
       color:'white',
       fontSize:25,
       fontWeight:'bold',
       alignSelf:'center',
   }


})
