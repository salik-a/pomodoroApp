import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (state, action) {
    switch (action.type) {
        case "SET_WORKTIME":
            //console.log("tetiklendi")
            AsyncStorage.setItem("@WORKTIME", JSON.stringify(action.payload.index))
            return { ...state, workTime: (action.payload.index + 10) * 60 }
        case "SET_BREAKTIME":
            //console.log("tetiklendi2")
            AsyncStorage.setItem("@BREAKTIME", JSON.stringify(action.payload.index))
            return { ...state, breakTime: (action.payload.index + 5) * 60 }
        case "SET_STATUS":
            console.log("tetiklendi3")
            return { ...state, status: action.payload }
        case "SET_STAGE":
            console.log("tetiklendi4")
            return { ...state, stage: action.payload }

        default:
            return state;
    }
}