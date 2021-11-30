import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (state, action) {
    switch (action.type) {
        case "SET_WORKTIME":
            AsyncStorage.setItem("@WORKTIME", JSON.stringify(action.payload.index))
            return { ...state, workTime: (action.payload.index + 10) * 60 }
        case "SET_BREAKTIME":
            AsyncStorage.setItem("@BREAKTIME", JSON.stringify(action.payload.index))
            return { ...state, breakTime: (action.payload.index + 5) * 60 }
        case "SET_CONSTANTSTAGE":
            AsyncStorage.setItem("@CONSTANTSTAGE", JSON.stringify(action.payload.number))
            return { ...state, constantStage: action.payload.number }
        case "SET_CYCLE":
            AsyncStorage.setItem("@CYCLE", JSON.stringify(action.payload.number))
            return { ...state, cycle: action.payload.number }
        case "SET_LONG":
            AsyncStorage.setItem("@LONG", JSON.stringify(action.payload.number))
            return { ...state, long: action.payload.number }
        case "SET_STATUS":
            return { ...state, status: action.payload }
        case "SET_STAGE":
            return { ...state, stage: action.payload }

        default:
            return state;
    }
}