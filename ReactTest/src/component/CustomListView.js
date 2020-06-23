import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import mockdata from './mock-data';

const data = {
  test: [{post: 1}, {post: 2}],
};
const CustomListView = (props) => {
  return (
    <FlatList
      data={mockdata.posts}
      renderItem={({item, id}) => {
        return <Text>{item.movieName}</Text>;
      }}
      keyExtractor={(item) => item.id}
    />
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

export default CustomListView;
