import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { Shadow } from 'react-native-shadow-2';
import styles from "./SettingsCardStyle";
import Icon from 'react-native-vector-icons/AntDesign';

const SettingsCard = ({ title, number, plusPress, minusPress }) => {

    return (


        <Shadow containerViewStyle={{ alignSelf: "center", marginTop: 25 }} viewStyle={{ padding: 10, }} radius={10} distance={10} startColor="#00000010">
            <View style={styles.view}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={minusPress}>
                        <Icon name="minuscircleo" size={22} color={"#474E61"} />
                    </TouchableOpacity>
                    <Text style={styles.number}>{number}</Text>
                    <TouchableOpacity style={styles.button} onPress={plusPress}>
                        <Icon name="pluscircleo" size={22} color={"#474E61"} />
                    </TouchableOpacity>
                </View>
            </View>
        </Shadow>
    );
};

export default SettingsCard;