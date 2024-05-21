import * as React from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Link} from 'expo-router';

const screens = [
  {
    icon: '🐢',
    title: 'Hello',
    path: '/examples/Hello/Hello',
  },
  {
    icon: '📜',
    title: 'Lists',
    path: '/examples/Lists/Lists',
  },
  {
    icon: '🧭',
    title: 'Navigation',
    path: '/examples/Navigation/Navigation',
  },
  {
    icon: '🖼️',
    title: 'Images',
    path: '/examples/Images/Images',
  },
  {
    icon: '♻️',
    title: 'Re-renders',
    path: '/examples/Rerenders/Rerenders',
  },
  {
    icon: '🗝️',
    title: 'Keys',
    path: '/examples/Keys/Keys',
  },
  {
    icon: '🥶',
    title: 'Redux',
    path: '/examples/Redux/Redux',
  },
  {
    icon: '🤌',
    title: 'Gestures',
    path: '/examples/Gestures/Gestures',
  },
  {
    icon: '🐎',
    title: 'Animations',
    path: '/examples/Animations/Animations',
  },
];

interface ItemProps {
  data: {
    icon: string;
    title: string;
    path: string;
  };
}

function Item({data}: ItemProps) {
  return (
    <View style={styles.separator}>
      <Link href={data.path} style={styles.item}>
        <Text style={styles.title}>
          {data.icon}
          {'  '}
          {data.title}
        </Text>
      </Link>
    </View>
  );
}

export default function Menu() {
  return (
    <FlatList
      data={screens}
      initialNumToRender={screens.length}
      renderItem={({item}) => <Item data={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  item: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
});
