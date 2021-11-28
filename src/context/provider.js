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

    useEffect(() => {
        AsyncStorage.getItem("@WORKTIME").then(work => {
            work && setWorkTime((parseInt(JSON.parse(work)) + 10) * 60)
        })
        AsyncStorage.getItem("@BREAKTIME").then(breaktime => {
            breaktime && setBreakTime((parseInt(JSON.parse(breaktime)) + 5) * 60)
        })

    }, [])

    const store = createStore(reducers, { workTime, breakTime, status, stage })
    return <Provider store={store}>{children}</Provider>
};

export default Provide;