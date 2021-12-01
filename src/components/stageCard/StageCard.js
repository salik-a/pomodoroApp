import React from "react";
import { View, Text } from "react-native";
import { Shadow } from 'react-native-shadow-2';
import styles from "./StageCardStyle";

const StageCard = ({ stage, color, constantStage }) => {

    const color1 = "#3B4251"
    const color2 = "#67B3D4"
    const color3 = "#ADB3C3"

    return (
        <Shadow containerViewStyle={{ alignSelf: "center", marginTop: 25 }} viewStyle={{ padding: 10, backgroundColor: "#F5F8FF" }} radius={10} distance={5} startColor="#00000010">
            <View style={styles.view}>
                <Text style={[styles.title, { color: stage == 1 ? color2 : color1 }]}>STAGE 1</Text>
                <Text style={[styles.title, { color: stage == 2 ? color2 : stage < 2 ? color3 : color1 }]}>STAGE 2</Text>
                {constantStage >= 3 && <Text style={[styles.title, { color: stage == 3 ? color2 : stage < 3 ? color3 : color1 }]}>STAGE 3</Text>}
                {constantStage >= 4 && <Text style={[styles.title, { color: stage == 4 ? color2 : stage < 4 ? color3 : color1 }]}>STAGE 4</Text>}
                {constantStage >= 5 && <Text style={[styles.title, { color: stage == 5 ? color2 : stage < 5 ? color3 : color1 }]}>STAGE 5</Text>}
            </View>
        </Shadow>
    );
};

export default StageCard;