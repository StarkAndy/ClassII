import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={styles.background}>
        <Text>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 30,
    marginTop: 10,
  },
});

export default Button;
