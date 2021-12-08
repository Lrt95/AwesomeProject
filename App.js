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
import TabNavigator from './navigation/tab-navigator';
import {Provider} from 'react-redux';
import {store, persistor} from './store/configure-store';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <TabNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
