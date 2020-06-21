import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Home',
      gotData: false,
      count: 1,
      data: {},
      jsonResponse: [],
    };
  }
  /**on Press function created */
  _onPressFunction = () => {
    this.setState({label: 'Number Test', loading: false, count: 20});
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.onPress();
          }}>
          <Text> {this.state.label} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this._onPressFunction();
          }}>
          <Text> {this.state.label} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this._onPressFunction();
          }}>
          <Text> {this.state.label} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePage;
