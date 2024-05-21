import * as React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStore} from 'redux';

// import { enableFreeze } from 'react-native-screens';
// enableFreeze(true);

function counterReducer(state = {count: 0}, action: any) {
  switch (action.type) {
    case 'counter/incremented':
      return {count: state.count + 1};
    case 'counter/decremented':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const store = createStore(counterReducer);

function sleep(ms: number) {
  const now = performance.now();
  while (performance.now() - now < ms);
}

function Elephant() {
  sleep(200);
  return <Text>I'm an elephant</Text>;
}

function Counter({navigation}: any) {
  // const [count, setCount] = React.useState(0);

  // const increment = React.useCallback(() => {
  //   setCount((c) => c + 1);
  // }, []);

  const count = useSelector((state: any) => state.count);

  const dispatch = useDispatch();

  const increment = React.useCallback(() => {
    dispatch({type: 'counter/incremented'});
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Elephant />
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Push screen" onPress={() => navigation.push('Counter')} />
    </View>
  );
}

Counter.whyDidYouRender = true;

const Stack = createNativeStackNavigator();

export default function Redux() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </Provider>
  );
}

Redux.whyDidYouRender = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
