import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, StyleSheet, View} from 'react-native';

import React from 'react';

export default function Animations() {
  const width = useSharedValue(50);
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value),
    };
  });

  // const frameLoop = () => {
  //   console.log(Date.now());
  //   requestAnimationFrame(frameLoop);
  // }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.view, style]} />
      <Button
        title="Press me"
        onPress={() => {
          width.value = Math.random() * 300;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    margin: 20,
    height: 80,
    backgroundColor: 'rgb(0, 26, 114)',
  },
});
