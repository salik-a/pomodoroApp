import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './ButtonStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Button = ({ title, onPress, iconName, color }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: color }]}>
            <View style={styles.row}>
                {title && <Text style={styles.title}>{title}</Text>}
                <Icon name={iconName} size={24} color={"white"} />
            </View>
        </TouchableOpacity>
    );
};
export default Button;