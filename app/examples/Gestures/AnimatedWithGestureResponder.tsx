import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

function Ball() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, {dx: pan.x, dy: pan.y}],
        {useNativeDriver: false}, // doesn't work with native driver :/
      ),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.ball} />
      </Animated.View>
    </View>
  );
}

export function AnimatedWithGestureResponder() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      heavyTask();
      // InteractionManager.runAfterInteractions(() => {
      //   heavyTask();
      // });
      setCounter(counter + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Animated + GestureResponder</Text>
      <Ball />
    </View>
  );
}

function heavyTask() {
  const timestamp = performance.now();
  console.log(Math.round(timestamp), 'heavyTaskA');
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
