/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
//import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
//import ButtonWithProps from './component/ButtonWithProps';

const onPress = () => {
  alert('Hey i am from Norway!');
};
const App = () => {
  let buttonLabel = 'Login';
  let haveEatenBreakfast = true;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <ButtonWithProps label="Login" onTest={onPress} /> */}
      <MyPage />
      <SafeAreaView />
    </>
  );
};

export default App;
