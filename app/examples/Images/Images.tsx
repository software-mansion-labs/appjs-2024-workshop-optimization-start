import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder-expo';

const HEADER_DATA = [
  'Lorem Ipsum',
  'Nisl Nec',
  'Nunc Elit Aliquam',
  'Eget Sagittis',
  'Sed Risus',
  'Quis Aliquet',
  'Nunc Nisl',
  'Eget Sagittis',
  'Massa Aliquet',
  'Lacinia Massa',
  'Auctor Lacinia',
];
const TEXT_DATA = [
  'Lorem ipsum dolor sit amet',
  'Sed euismod, nisl nec adipiscing elit',
  'Consectetur tincidunt, nunc elit aliquam]',
  'Donec auctor, nisl eget sagittis',
  'Quis aliquet nunc nisl sed risus.',
  'Nunc nisl aliquam massa, quis aliquet',
  'Nisl eget sagittis lacinia, nunc nisl',
  'Sed risus. Donec auctor, nisl eget sagittis',
  'Massa, quis aliquet nunc nisl sed risus',
  'Lacinia, nunc nisl aliquam massa, quis',
  'Auctor, nisl eget sagittis lacinia, nunc',
];
const ITEMS_COUNT = 9;

const getRandomHeader = () =>
  HEADER_DATA[Math.floor(Math.random() * HEADER_DATA.length)];
const getRandomText = () =>
  TEXT_DATA[Math.floor(Math.random() * TEXT_DATA.length)];

function PlaceholderItem() {
  return (
    <View style={styles.itemHolder}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={80} height={20} />
            <SkeletonPlaceholder.Item marginTop={6} width={150} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
}

function Item({onLoad}: {onLoad: () => void}) {
  return (
    <View style={styles.itemHolder}>
      <Image
        source={{
          uri:
            'https://i.pravatar.cc/150?img=' + Math.round(Math.random() * 50),
        }}
        style={styles.itemImage}
        onLoad={onLoad}
      />
      <View style={styles.textHolder}>
        <Text style={styles.header}>{getRandomHeader()}</Text>
        <Text style={styles.text}>{getRandomText()}</Text>
      </View>
    </View>
  );
}

export default function Images() {
  const [items, setItems] = useState<any>([]);
  const [loadingItem, setLoadingItems] = useState<any>([]);
  const imageCounter = useRef(0);
  function fetchData() {
    setTimeout(() => {
      const data = new Array(ITEMS_COUNT).fill(0).map((_, i) => (
        <Item
          key={i}
          onLoad={() => {
            imageCounter.current++;
            if (imageCounter.current === ITEMS_COUNT) {
              setItems(data);
            }
          }}
        />
      ));
      setLoadingItems(data);
    }, 2000);
  }
  useEffect(() => {
    setItems(
      new Array(ITEMS_COUNT).fill(0).map((_, i) => <PlaceholderItem key={i} />),
    );
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {items}
      <View style={{height: 0, overflow: 'hidden'}}>{loadingItem}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  itemHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  textHolder: {
    marginLeft: 20,
  },
  header: {
    height: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    marginTop: 6,
    height: 20,
  },
});
