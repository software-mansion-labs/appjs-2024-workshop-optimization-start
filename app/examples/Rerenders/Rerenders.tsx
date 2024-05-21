import {Alert, Button, StyleSheet, Text, TextProps, View} from 'react-native';

import React from 'react';

function sleep(ms: number) {
  // debugger;
  const now = performance.now();
  while (performance.now() - now < ms);
}

interface ElephantProps extends TextProps {
  count: number;
}

function Elephant({count, style}: ElephantProps) {
  sleep(500);
  return <Text style={style}>I'm an elephant {count}!</Text>;
}

const PureElephant = React.memo(Elephant);

// PureElephant.whyDidYouRender = true;

interface MyButtonPress {
  title: string;
  onPress: () => void;
}

function MyButton({title, onPress}: MyButtonPress) {
  return <Button title={title} onPress={onPress} color="red" />;
}

const PureMyButton = React.memo(MyButton);

// PureMyButton.whyDidYouRender = true;

export default function Rerenders() {
  const [count, setCount] = React.useState(0);
  const [state, setState] = React.useState(false);

  const increment = () => {
    setCount(c => c + 1);
  };

  const toggle = () => {
    setState(s => !s);
  };

  const data = React.useMemo(() => ({count}), [count]);

  const callback = React.useCallback(() => {
    Alert.alert(JSON.stringify(data));
  }, [data]);

  // const style = React.useMemo(() => {
  //   return { backgroundColor: state ? 'yellow' : 'lime' };
  // }, [state]);

  // const elephant = React.useMemo(() => <Elephant />, []);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Text>State: {String(state)}</Text>
      <Button title="Toggle" onPress={toggle} />
      <PureMyButton title="Alert" onPress={callback} />
      <PureElephant count={count} />
      {/* <PureElephant style={style} count={0} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
