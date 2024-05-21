/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import {FlashList} from '@shopify/flash-list';

const DATA = new Array(5000).fill(0).map((_, i) => i);

function Item({value}: {value: string}) {
  return <Text>{value}</Text>;
}

function ListExample() {
  return (
    <ScrollView>
      {DATA.map(item => (
        <Item key={item} value={item.toString()} />
      ))}
    </ScrollView>
  );
}

function FlatListExample() {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item value={item.toString()} />}
    />
  );
}

function FlashListExample() {
  return (
    <FlashList
      data={DATA}
      renderItem={({item}) => <Item value={item.toString()} />}
      estimatedItemSize={50}
    />
  );
}

export default function Lists() {
  return (
    <View style={styles.container}>
      <ListExample />
      {/* <FlatListExample /> */}
      {/* <FlashListExample /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
