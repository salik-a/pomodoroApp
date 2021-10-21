import React from 'react';
import { View, Text } from 'react-native';
import styles from "./TimerStyle";
import { useDispatch, useSelector } from "react-redux"

function Timer() {

    return (
        <View style={styles.container}>
            <Text>Timer</Text>
        </View>
    );
}

export default Timer;