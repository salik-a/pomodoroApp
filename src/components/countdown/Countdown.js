import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Button, Platform } from 'react-native';
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
                    ["#00C7FF", 1],

                ]}
                strokeWidth={15}

                size={250}
                onComplete={() => alert("Süre Tamamlandı")}
            >
                {({ remainingTime, animatedColor }) => (
                    <>
                        <Text style={styles.header}>Work Session</Text>
                        <Animated.Text style={{ color: "#353f5a", fontSize: 60, fontFamily: "notoserif", }}>
                            {children(remainingTime)}
                        </Animated.Text>
                        <View style={styles.row}>
                            <Text style={styles.min}>min</Text>
                            <Text style={styles.min}>sec</Text>
                        </View>
                    </>
                )}
            </CountdownCircleTimer>


        </View>
    );
}

export default Countdown;