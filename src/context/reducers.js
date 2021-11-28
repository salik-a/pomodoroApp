

export default function (state, action) {
    switch (action.type) {
        case "SET_WORKTIME":

            return { ...state, workTime: (action.payload.selected + 10) * 60 }
        case "SET_BREAKTIME":
            return { ...state, breakTime: (action.payload.selected + 10) * 60 }
        case "SET_STATUS":
            return { ...state, status: action.payload }
        case "SET_STAGE":
            return { ...state, stage: action.payload }

        default:
            return state;
    }
}