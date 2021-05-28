import React from 'react'
import { CounterScreen } from './src/screens/CounterScreen';

import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

const App = () => {
  return (
    <SafeAreaView>
  {/* //  <HolaMundoScreen/>
  // <CounterScreen/> */}
  {/* <BoxObjectModelScreen/> */}
  <DimensionesScreen/>
  </SafeAreaView>
  ) 
}
export  default App;