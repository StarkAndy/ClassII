import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageView = (props) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/images/tom-hanks.jpg')}
      />
      <Text style={styles.textStyle}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'contain',
    width: '95%',
    height: 300,
    margin: 5,
    borderWidth: 0.1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 22,
  },
});

export default ImageView;
