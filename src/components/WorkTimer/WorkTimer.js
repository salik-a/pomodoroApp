import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WheelPicker } from "react-native-wheel-picker-android";
import styles from "./WorkTimerStyle";
import { useDispatch, useSelector } from "react-redux"

const data = [

  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
  "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
  "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"
];



const Timer = () => {

  const workTime = useSelector(s => s.workTime);
  const [selected, setSelected] = useState(workTime);

  const dispatch = useDispatch();

  const handleTime = () => {
    dispatch({ type: "SET_WORKTIME", payload: { selected } })
  }

  useEffect(() => {
    handleTime()
  }, [selected])

  return (
    <View style={styles.container}>
      <WheelPicker
        style={{
          width: 50,
          height: 110
        }}
        selectedItem={selected}
        data={data}
        onItemSelected={(index) => setSelected(index)}
      />
      <Text style={styles.text}>Work Time</Text>
    </View>
  );
};
export default Timer;

