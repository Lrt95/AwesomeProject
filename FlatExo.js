/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FlatExo: () => Node = () => {
  const [list, setList] = React.useState([
    'Antony',
    'Souhayle',
    'Maxime',
    'Marion',
    'Antony',
    'Souhayle',
    'Maxime',
    'Marion',
    'Antony',
    'Souhayle',
    'Maxime',
    'Marion',
    'Antony',
    'Souhayle',
    'Maxime',
    'Marion',
    'Souhayle',
    'Maxime',
    'Marion',
    'Antony',
    'Souhayle',
    'Maxime',
    'Marion',
  ]);

  function viewText(item, index) {
    return (
      <View ref={index} style={styles.containerText}>
        <TouchableOpacity
          onLongPress={() => {
            console.log('Bonjour ' + item);
          }}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        data={list}
        renderItem={({item, index}) => {
          return viewText(item, index);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'grey',
    height: 50,
  },
  text: {
    marginLeft: 5,
    width: 360,
    fontSize: 20,
  },
});

export default FlatExo;
