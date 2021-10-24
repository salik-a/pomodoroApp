import React from 'react';
import { View, Text } from 'react-native';
import Countdown from '../../components/countdown/Countdown';
import Button from "../../components/button/Button"

import styles from "./HomeScreenStyle"
import { useDispatch } from "react-redux"
import Timer from '../../components/timer/Timer';

function HomeScreen() {
  return (
    
      <View style={styles.container}>
        <Countdown />
        <Timer />
      </View>
    
  );
}

export default HomeScreen;
