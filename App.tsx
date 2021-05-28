import React from 'react'
import { CounterScreen } from './src/screens/CounterScreen';

import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
  {/* //  <HolaMundoScreen/>
  // <CounterScreen/> */}
  {/* <BoxObjectModelScreen/> */}
  {/* <DimensionesScreen/> */}
  {/* <PositionScreen/> */}
  <FlexScreen/>
  </SafeAreaView>
  ) 
}
export  default App;