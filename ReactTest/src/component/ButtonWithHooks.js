import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

const ButtonWithHooks = ({navigation}) => {
  let testValue = [
    {
      id: 1,
      name: 'Tom Holland',
      age: 25,
    },
    {
      id: 1,
      name: 'Tom Holland',
      age: 25,
    },
    {
      id: 2,
      name: 'Prince',
      age: 25,
    },
  ];
  const [isClicked, changeClick] = useState(true);
  const [label, changeLabel] = useState('Test is awesome');
  const [data, isValue] = useState(testValue);

  let labelT = 'Gyanesh';

  if (isClicked) {
    labelT = 'Test is good';
  }
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        <FlatList
          data={data}
          renderItem={(item) => <Text>{item.item.name}</Text>}
        />
        <Text>{label} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithHooks;
