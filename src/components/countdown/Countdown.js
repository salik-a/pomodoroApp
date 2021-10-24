import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Button } from 'react-native';
import styles from "./CountdownStyle";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import { useDispatch, useSelector } from "react-redux"

function Countdown() {
    const [isPlaying, setIsPlaying] = useState(false);

    const [key, setKey] = useState(0);
    const workTime = useSelector(s => s.workTime);


    useEffect(() => {
        setKey(prevKey => prevKey + 1);
        setIsPlaying(false)
    }, [workTime])

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
        <View style={styles.container}>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={workTime}
                colors={[
                    ["#004777", 0.4],
                    ["#F7B801", 0.4],
                    ["#A30000", 0.2]
                ]}
                strokeWidth={20}
                key={key}
                size={250}
                onComplete={() => alert("Süre Tamamlandı")}
            >
                {({ remainingTime, animatedColor }) => (
                    <Animated.Text style={{ color: "black", fontSize: 40 }}>

                        {children(remainingTime)}
                    </Animated.Text>
                )}
            </CountdownCircleTimer>
            <Button title="Start" onPress={() => setIsPlaying(true)} />
            <Button title="Stop" onPress={() => setIsPlaying(false)} />
            <Button title="Finish" onPress={() => setKey(prevKey => prevKey + 1)} />

        </View>
    );
}

export default Countdown;