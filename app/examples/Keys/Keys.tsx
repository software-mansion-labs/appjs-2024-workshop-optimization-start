import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

function Header({data}: {data: any}) {
  useEffect(() => {
    console.log(Date.now(), 'MOUNT');
    return () => console.log(Date.now(), 'UNMOUNT');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

export default function Keys() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([1, 2, 3]);
  return (
    <View>
      <ScrollView>
        {data.map((data, i) => (
          <Header key={i} data={data} />
        ))}
        {/* { data.map((data, i) => <Header key={data} data={data} />) } */}
        {/* { [1, 2, 3].map((data, i) => <Header key={Math.random()} data={data} />) } */}
      </ScrollView>
      <Text>Counter: {counter}</Text>
      <Button
        title="Click me"
        onPress={() => {
          setData([Math.random(), ...data]);
          setCounter(counter + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  text: {
    width: 200,
    marginRight: 20,
  },
  input: {
    backgroundColor: '#ccc',
    width: 50,
  },
});
