export default function (state, action) {
    switch (action.type) {
        case "SET_TIME":
            return { ...state, workTime: action.payload.workTime }

        default:
            return state;
    }
}