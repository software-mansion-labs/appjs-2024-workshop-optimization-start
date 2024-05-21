import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';

function Ball() {
  const offset = useSharedValue({x: 0, y: 0});

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value.x}, {translateY: offset.value.y}],
    };
  });

  const gesture = Gesture.Pan().onChange(
    (e: GestureUpdateEvent<PanGestureChangeEventPayload>) => {
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    },
  );

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
  );
}

export function ReanimatedWithGestureHandler() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      heavyTask();
      setCounter(counter + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.text}>Reanimated + GestureHandler</Text>
      <Ball />
    </GestureHandlerRootView>
  );
}

function heavyTask() {
  const timestamp = performance.now();
  console.log(Math.round(timestamp), 'heavyTaskB');
  while (performance.now() - timestamp < 100);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
