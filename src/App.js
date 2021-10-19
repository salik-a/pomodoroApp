import React from 'react';
import { View, Text } from 'react-native';
import Countdown from './components/countdown/Countdown';
function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>

      <Countdown />
    </View>
  );
}

export default App;
