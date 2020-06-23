import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserTextInput = (props) => {
  return (
    <View style={{marginHorizontal: 24}}>
      <Text>{props.label}</Text>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          borderRadius: 1,
          borderWidth: 2,
          marginTop: 4,
          borderColor: 'blue',
        }}
        onChangeText={(label) => props.onValueChange(label)}
        value={props.value}
        placeholder={props.label}
      />
    </View>
  );
};

export default UserTextInput;
