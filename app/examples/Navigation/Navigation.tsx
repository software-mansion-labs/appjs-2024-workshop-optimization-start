import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

// JSStack
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// NativeStack
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

// freeze
// import { enableFreeze } from 'react-native-screens';
// enableFreeze();

const screenCount = 10;
let screenIndex = 0;
function makeMoreScreens(navigation: any) {
  if (screenIndex < screenCount - 1) {
    screenIndex++;
    navigation.push('Screen');
  }
}

function Screen({navigation}: {navigation: any}) {
  const [screenId] = useState(screenIndex);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    navigation.setOptions({title: 'Screen ' + screenIndex});
    makeMoreScreens(navigation);
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      screenIndex = 0;
    };
  }, []);

  console.log(Date.now() + ', Rerender at screen: ' + screenId);

  return (
    <View>
      <Text>Counter: {counter}</Text>
      {new Array(300).fill(0).map((_, i) => (
        <Text key={i}>{i}</Text>
      ))}
    </View>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{detachPreviousScreen: false}}>
      <Stack.Screen name={'Screen'} component={Screen} />
    </Stack.Navigator>
  );
}
