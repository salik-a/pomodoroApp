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

  const dispatch = useDispatch();
  const workTime = useSelector(s => s.workTime);
  const [selected, setSelected] = useState(15);
  const [state, setState] = useState(false)
  const [key, setKey] = useState(0);




  const handleTime = (index) => {

    if (state) {
      console.log("worktimer", index)
      dispatch({ type: "SET_WORKTIME", payload: { index } })
      setSelected(index)
    } else {
      setState(true)
      setSelected((parseInt(JSON.parse(workTime)) - 10))
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
      <Text style={styles.text}>Work Time</Text>
    </View>
  );
};
export default Timer;

