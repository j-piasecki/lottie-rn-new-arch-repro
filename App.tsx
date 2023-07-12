/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import FireworksAnimation from './Fireworks.json';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Lottie
        source={FireworksAnimation}
        autoPlay
        loop
        style={{height: 180, width: 180}}
      />
    </SafeAreaView>
  );
}

export default App;
