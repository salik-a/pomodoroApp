import React from 'react';
import { View, Text } from 'react-native';
import Countdown from './components/countdown/Countdown';
import Provider from "./context/provider"

import { useDispatch } from "react-redux"

function App() {
  return (
    <Provider>

    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>

      <Countdown />
    </View>
    </Provider>
  );
}

export default App;
