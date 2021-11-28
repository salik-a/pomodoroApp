import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Countdown from '../../components/countdown/Countdown';
import Button from "../../components/button/Button"
import { Shadow } from 'react-native-shadow-2';
import styles from "./HomeScreenStyle"
import { useDispatch, useSelector } from "react-redux"
import WorkTimer from '../../components/WorkTimer/WorkTimer';
import BreakTimer from '../../components/BreakTimer/BreakTimer';
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


        <Shadow containerViewStyle={{ alignSelf: "center", marginTop: 50 }} viewStyle={{ paddingVertical: 10, }} radius={20} distance={10} startColor="#00000010">
        <View style={styles.timers}>
            <WorkTimer />
            <View style={styles.line} />
            <BreakTimer />
          </View>
        </Shadow>



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
