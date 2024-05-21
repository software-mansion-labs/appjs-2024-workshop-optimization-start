import * as React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {useCount} from 'usecount-ts';

export default function Hello() {
  const [count, increment] = useCount(0);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
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
