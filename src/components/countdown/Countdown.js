import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Button } from 'react-native';
import styles from "./CountdownStyle";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import { useDispatch, useSelector } from "react-redux"

function Countdown({ isPlaying, workTime }) {



    const children = (remainingTime) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60;
        if (seconds <= 9 && minutes <= 9) {
            return `0${minutes}:0${seconds}`
        } else if (seconds <= 9) {
            return `${minutes}:0${seconds}`
        } else if (minutes <= 9) {
            return `0${minutes}:${seconds}`
        }

        return `${minutes}:${seconds}`
    }


    return (
        <View style={styles.container} >
            <CountdownCircleTimer

                isPlaying={isPlaying}
                duration={workTime}
                colors={[
                    ["#004777", 0.4],
                    ["#F7B801", 0.4],
                    ["#A30000", 0.2]
                ]}
                strokeWidth={12}

                size={240}
                onComplete={() => alert("Süre Tamamlandı")}
            >
                {({ remainingTime, animatedColor }) => (
                    <Animated.Text style={{ color: "#080808", fontSize: 50, fontWeight: "bold" }}>

                        {children(remainingTime)}
                    </Animated.Text>
                )}
            </CountdownCircleTimer>


        </View>
    );
}

export default Countdown;