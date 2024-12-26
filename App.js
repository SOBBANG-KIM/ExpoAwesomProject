import React, {useState} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;