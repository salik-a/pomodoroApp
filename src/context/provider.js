import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


const Provide = ({ children }) => {

    const [workTime, setWorkTime] = useState(15);
    const [breakTime, setBreakTime] = useState(5);
    const [status, setStatus] = useState("Work Session");
    const [stage, setStage] = useState(0);
    const [constantStage, setConstantStage] = useState(2);
    const [cycle, setCycle] = useState(2);
    const [long, setLong] = useState(20);

    useEffect(() => {
        AsyncStorage.getItem("@WORKTIME").then(works => {
            works && setWorkTime((parseInt(JSON.parse(works)) + 10) * 60)
        })
        AsyncStorage.getItem("@BREAKTIME").then(breaktimes => {
            breaktimes && setBreakTime((parseInt(JSON.parse(breaktimes)) + 5) * 60)
        })
        AsyncStorage.getItem("@CONSTANTSTAGE").then(constants => {
            constants && setConstantStage((parseInt(JSON.parse(constants))))
        })
        AsyncStorage.getItem("@CYCLE").then(cycles => {
            cycles && setCycle((parseInt(JSON.parse(cycles))))
        })
        AsyncStorage.getItem("@LONG").then(longs => {
            longs && setLong((parseInt(JSON.parse(longs))))
        })

    }, [])

    const store = createStore(reducers, { workTime, breakTime, status, stage, constantStage, cycle, long })
    return <Provider store={store}>{children}</Provider>
};

export default Provide;