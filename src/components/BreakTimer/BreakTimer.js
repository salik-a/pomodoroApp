import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WheelPicker } from "react-native-wheel-picker-android";
import styles from "./BreakTimerStyle";
import { useDispatch, useSelector } from "react-redux"


const data = [
  "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
  "16", "17", "18", "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "30"
];



const Timer = () => {

  const dispatch = useDispatch();
  const breakTime = useSelector(s => s.breakTime)
  const [selected, setSelected] = useState(5);
  const [state, setState] = useState(false)
  const [key, setKey] = useState(0);

  const handleTime = (index) => {

    if (state) {
      console.log("breaktimer", index)
      dispatch({ type: "SET_BREAKTIME", payload: { index } })
      setSelected(index)
    } else {
      setState(true)
      setSelected((parseInt(JSON.parse(breakTime)) / 60) - 5)
      setKey(prevKey => prevKey + 1);
    }

  }

  return (
    <View style={styles.container}>
      <WheelPicker
        style={{
          width: 50,
          height: 110
        }}
        selectedItem={selected}
        data={data}
        onItemSelected={(index) => handleTime(index)}
        key={key}
      />
      <Text style={styles.text}>Break Time</Text>
    </View>
  );
};
export default Timer;

