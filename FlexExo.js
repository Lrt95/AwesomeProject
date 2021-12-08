/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const FlexExo: () => Node = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.sectionOne} />
      <View style={styles.sectionTwo}>
        <View style={styles.sectionSquare} />
        <View style={styles.sectionSquare} />
        <View style={styles.sectionSquare} />
      </View>
      <View style={styles.sectionThree} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionOne: {
    flex: 1,
    backgroundColor: 'red',
  },
  sectionTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  sectionThree: {
    flex: 3,
    backgroundColor: 'blue',
  },
  sectionSquare: {
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'yellow',
  },
});

export default FlexExo;
