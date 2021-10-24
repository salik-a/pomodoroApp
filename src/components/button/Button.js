import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './ButtonStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Button = ({ text, onPress, iconName }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{text}</Text>
                <Icon name={iconName} size={24} color={"white"} />
            </View>
        </TouchableOpacity>
    );
};
export default Button;