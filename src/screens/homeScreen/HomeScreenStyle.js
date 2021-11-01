import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6D96E4",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    bottom: {
        marginTop: 220,

        width: "130%",
        paddingTop: 100,
        borderTopLeftRadius: 250,
        borderTopRightRadius: 250,
        alignItems: "center",
        backgroundColor: "white",
    },
    buttons: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20
    },
    timers: {
        flexDirection: "row",
        marginTop: 40,
        paddingTop: 20,
        paddingHorizontal: 40,
        width: "60%",
        justifyContent: "space-around",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,


    },
    timer: {
        alignItems: "center"
    },
    text: {
        marginVertical: 5,
        fontSize: 20
    }



})