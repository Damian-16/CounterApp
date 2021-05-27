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
    fabLocation:{
        position:'absolute',
        bottom:25,
    },
    fabLocationBL:{
        position:'absolute',
        bottom:25,
        left:25,
    },
    right:{
        right:25
    },
    left:{
        left:25
    },
   
   fab:{
       backgroundColor:'#5856d6',
       width:60,
       height:60,
       borderRadius:100,
       justifyContent:'center',
       shadowColor:"#000",
       shadowOffset:{
           width:0,
           height:4,
       },
       shadowOpacity:0.30,
       shadowRadius:4.65,
       elevation:8,
   },
   fabText:{
       color:'white',
       fontSize:25,
       fontWeight:'bold',
       alignSelf:'center',
   }


})
