import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const ButtonWithProps = ({onTest, label}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onTest()}>
        <Text style={styles.textStyle}>{label} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    margin: 5,
    padding: 60,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  textStyle: {
    color: 'blue',
    fontSize: 22,
  },
});

export default ButtonWithProps;
