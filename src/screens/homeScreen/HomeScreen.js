import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Countdown from '../../components/countdown/Countdown';
import Button from "../../components/button/Button"

import styles from "./HomeScreenStyle"
import { useDispatch, useSelector } from "react-redux"
import Timer from '../../components/timer/Timer';

const HomeScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);


  const workTime = useSelector(s => s.workTime);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    setIsPlaying(false);
  }, [workTime])

  function handleReset() {
    setKey(prevKey => prevKey + 1);
    setIsPlaying(false);
  }
  return (

    <View style={styles.container}>

      <Countdown key={key} isPlaying={isPlaying} workTime={workTime} />

      <View style={styles.bottom}>
        <View style={styles.timers}>
          <View style={styles.timer}>
            <Timer />
            <Text style={styles.text}>Work Time</Text>
          </View>
          <View style={styles.timer}>
            <Timer />
            <Text style={styles.text}>Break Time</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          {isPlaying ? (
            <View style={styles.row}>
              <Button onPress={() => setIsPlaying(false)} iconName="stop" />
              <Button onPress={() => handleReset()} iconName="restart" />
            </View>
          ) : (
            <Button onPress={() => setIsPlaying(true)} iconName="play" />
          )}
        </View>
      </View>
    </View>
    
  );
}

export default HomeScreen;
