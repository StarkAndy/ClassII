/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import CustomListView from './component/CustomListView';

const onPress = () => {
  alert('Hey i am from Norway!');
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Gyanesh',
      password: '',
    };
  }

  _changeValueUserName = (text) => {
    this.setState({username: text});
  };

  _changeValuePassword = (text) => {
    this.setState({password: text});
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <CustomListView label="Tom Hank" />
        </SafeAreaView>
      </>
    );
  }
}

export default App;
