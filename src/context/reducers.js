export default function (state, action) {
    switch (action.type) {
        case "SET_TIME":
            return { ...state, workTime: (action.payload.selected + 10) * 60 }

        default:
            return state;
    }
}