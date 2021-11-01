import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './ButtonStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Button = ({ title, onPress, iconName }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Icon name={iconName} size={24} color={"white"} />
            </View>
        </TouchableOpacity>
    );
};
export default Button;