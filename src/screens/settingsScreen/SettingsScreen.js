import React, { useState } from "react";
import { View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../components/settingsCard/SettingsCard';
import { useDispatch, useSelector } from "react-redux";
import styles from "./SettingsScreenStyle";


const SettingsScreen = () => {

    const dispatch = useDispatch();
    const status = useSelector(s => s.status);
    const cycle = useSelector(s => s.cycle);
    const long = useSelector(s => s.long);
    const constantStage = useSelector(s => s.constantStage);


    const handlePlusPress = (text) => {
        if (text === "Cycle") {
            if (cycle < 4) {
                const number = cycle + 1
                dispatch({ type: "SET_CYCLE", payload: { number } })
            }

        } else if (text === "constantStage") {
            if (constantStage < 4) {
                const number = constantStage + 1
                dispatch({ type: "SET_CONSTANTSTAGE", payload: { number } })
            }

        } else {
            if (long < 60) {
                const number = long + 1
                dispatch({ type: "SET_LONG", payload: { number } })
            }

        }
    };

    const handleMinusPress = (text) => {
        if (text === "Cycle") {
            if (cycle > 2) {
                const number = cycle - 1
                dispatch({ type: "SET_CYCLE", payload: { number } })
            }

        } else if (text === "constantStage") {
            if (constantStage > 2) {
                const number = constantStage - 1
                dispatch({ type: "SET_CONSTANTSTAGE", payload: { number } })
            }

        } else {
            if (long > 10) {
                const number = long - 1
                dispatch({ type: "SET_LONG", payload: { number } })
            }

        }
    };


    const colors = status == "Work Session" ? ['#3886fa', '#1b8df8', '#2592f8', '#008efa'] : ['#63ce46', '#48a92d', '#63ce46', '#63ce46', '#63ce46']
    return (

        <View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors}>
                <Text style={styles.header}>Settings</Text>
            </LinearGradient>
            <Card title="Number Of Cycles" number={cycle} plusPress={() => handlePlusPress("Cycle")} minusPress={() => handleMinusPress("Cycle")} />
            <Card title="Number Of Stages" number={constantStage} plusPress={() => handlePlusPress("constantStage")} minusPress={() => handleMinusPress("constantStage")} />
            <Card title="Long Break Time" number={long} plusPress={() => handlePlusPress("Long")} minusPress={() => handleMinusPress("Long")} />

        </View>

    );
};

export default SettingsScreen;