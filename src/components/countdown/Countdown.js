import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Button, Platform } from 'react-native';
import styles from "./CountdownStyle";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux"
import PushNotification from "react-native-push-notification";


function Countdown({ isPlaying, setIsPlaying }) {


    const dispatch = useDispatch();
    const status = useSelector(s => s.status);
    const workTime = useSelector(s => s.workTime);
    const breakTime = useSelector(s => s.breakTime);
    const stage = useSelector(s => s.stage);
    const constantStage = useSelector(s => s.constantStage);
    const cycle = useSelector(s => s.cycle);
    const long = useSelector(s => s.long);
    const constantCycle = useSelector(s => s.constantCycle);
    const time = status == "Work Session" ? workTime : status == "Break" ? breakTime : long

    const createChannel = () => {
        PushNotification.createChannel({
            channelId: "test",
            channelName: "Test Channel",
            vibrate: true,
        })
    }
    useEffect(() => {
        createChannel()
    }, [])

    const handleNotification = () => {
        console.log("aaa")

        PushNotification.localNotification({
            channelId: "test",
            message: `${status} Finished`, // (required)
            //date: new Date(Date.now()), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
            //repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
            vibrate: false,
            vibration: 3000,
            onlyAlertOnce: true,
            playSound: true,
            soundName: "default",
            color: "red",
        });
        setTimeout(() => { PushNotification.cancelAllLocalNotifications() }, 10000);
    }

    function finish() {

        handleNotification()
        if (stage == constantStage) {

            if (status == "Work Session") {
                dispatch({ type: "SET_STATUS", payload: "Long Break" })
            } else {
                if (cycle == constantCycle) {
                    setIsPlaying(false)
                } else {
                    dispatch({ type: "SET_CYCLE", payload: cycle + 1 })
                    dispatch({ type: "SET_STAGE", payload: 1 })
                    dispatch({ type: "SET_STATUS", payload: "Work Session" })
                }

            }
        } else {
            if (status == "Work Session") {
                dispatch({ type: "SET_STATUS", payload: "Break" })
            } else {
                dispatch({ type: "SET_STATUS", payload: "Work Session" })
                dispatch({ type: "SET_STAGE", payload: stage + 1 })
            }
            setIsPlaying(true);
        }

    }
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
                duration={time * 60}
                colors={[
                    [status == "Work Session" ? "#00C7FF" : "#6de36d", 1],

                ]}
                strokeWidth={15}
                trailColor="white"
                size={240}
                onComplete={() => finish()}
            >
                {({ remainingTime, animatedColor }) => (
                    <>
                        <Text style={styles.header}>{status}</Text>
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