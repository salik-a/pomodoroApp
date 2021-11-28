import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: "absolute",
        top: 50,
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center",
        //borderWidth: 1,
        padding: 15,
        backgroundColor: "white",
        zIndex: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    header: {
        fontSize: 18,
        color: 'rgb(189,192,207)'
    },
    min: {
        color: 'rgb(161,164,171)',
        marginHorizontal: 25
    },
    row: {
        flexDirection: "row"
    }
})