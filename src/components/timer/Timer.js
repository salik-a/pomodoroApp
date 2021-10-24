import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SmoothPicker from "react-native-smooth-picker";
import styles from "./TimerStyle";
import { useDispatch, useSelector } from "react-redux";

const dataCity = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
];

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 18,
  1: 15,
  2: 12,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[styles.OptionWrapper, { opacity, borderColor: selected ? '#ABC9AF' : 'transparent', width: vertical ? 60 : 'auto' }]}
    >
      <Text style={{ fontSize }}>
        {name}
      </Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return <Item opacity={opacity} selected={selected} vertical={vertical} fontSize={fontSize} name={item} />;
};

const Timer = () => {

  const [selected, setSelected] = useState(10);
  const dispatch = useDispatch();

  const handleTime = () => {
    dispatch({ type: "SET_TIME", payload: { selected } })
  }

  useEffect(() => {
    handleTime();

  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => { }}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataCity}
          scrollAnimation
          onSelected={({ item, index }) => setSelected(index)}
          renderItem={option => ItemToRender(option, selected, true)}
          magnet
        />
      </View>
    </View>
  );
};
export default Timer;
