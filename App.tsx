import React from 'react'
import { CounterScreen } from './src/screens/CounterScreen';

import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:'#28425B'
      }}>
  {/* //  <HolaMundoScreen/>
  // <CounterScreen/> */}
  {/* <BoxObjectModelScreen/> */}
  {/* <DimensionesScreen/> */}
  {/* <PositionScreen/> */}
  {/* <FlexScreen/> */}
  <TareaScreen/>
  </SafeAreaView>
  ) 
}
export  default App;