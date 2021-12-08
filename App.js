/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import TabNavigator from "./navigation/tab-navigator";

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default App;
