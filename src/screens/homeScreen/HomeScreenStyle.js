import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#117FFC",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    bottom: {
        marginTop: 220,
        height: "100%",
        width: "130%",
        paddingTop: 100,
        borderTopLeftRadius: 250,
        borderTopRightRadius: 250,
        backgroundColor: "white",
    },
    buttons: {
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 10,
    },
    timers: {
        flexDirection: "row",
        alignSelf: "center",

    },
    timer: {
        alignItems: "center",
        marginHorizontal: 35
    },

    line: {
        borderWidth: 0.5, height: "75%", alignSelf: "center", borderColor: "lightgray"
    }




})