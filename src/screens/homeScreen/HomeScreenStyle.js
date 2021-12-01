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
        marginTop: 5,
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
    },
    rightTop: {
        alignSelf: "flex-end",
        position: "absolute",
        padding: 22
    },
    leftTop: {
        alignSelf: "flex-start",
        position: "absolute",
        padding: 20
    },
    cycle: {
        color: "#D4EAFC",
        fontSize: 19
    }




})