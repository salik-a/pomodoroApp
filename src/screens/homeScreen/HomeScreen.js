import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Countdown from '../../components/countdown/Countdown';
import Button from "../../components/button/Button"
import { Shadow } from 'react-native-shadow-2';
import styles from "./HomeScreenStyle"
import { useDispatch, useSelector } from "react-redux"
import WorkTimer from '../../components/WorkTimer/WorkTimer';
import BreakTimer from '../../components/BreakTimer/BreakTimer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const workTime = useSelector(s => s.workTime);
  const status = useSelector(s => s.status);
  const stage = useSelector(s => s.stage);

  const colors = status == "Work Session" ? ['#3886fa', '#6487e8', '#2592f8', '#008efa'] : ['#63ce46', '#48a92d', '#63ce46', '#63ce46', '#63ce46']
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);


  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    setIsPlaying(false);
  }, [workTime])

  useEffect(() => {
    setKey(prevKey => prevKey + 1);

  }, [status])

  function handleReset() {
    setKey(prevKey => prevKey + 1);
    setIsPlaying(false);
    dispatch({ type: "SET_STATUS", payload: "Work Session" })
    dispatch({ type: "SET_STAGE", payload: 0 })

  }
  return (

    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} style={styles.container}>




      <Text>{stage}</Text>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          padding: 20
        }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Icon name="settings" size={26} color={"white"} />
      </TouchableOpacity>
      <Countdown key={key} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

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
              <Button onPress={() => setIsPlaying(false)} iconName="stop" color="#ef2d2a" />
              <Button onPress={() => handleReset()} iconName="restart" color={status == "Work Session" ? "#407df7" : "#3db738"} />
            </View>
          ) : (
              <Button onPress={() => setIsPlaying(true)} iconName="play" color={status == "Work Session" ? "#407df7" : "#3db738"} />
          )}
        </View>
      </View>
    
    </LinearGradient>
  );
}

export default HomeScreen;
