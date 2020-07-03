import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ButtonWithHooks from '../component/ButtonWithHooks';

const DetailPage = (props) => {
  console.log('props', props);
  return (
    <View>
      <ButtonWithHooks navigation={props.navigation} />
    </View>
  );
};

export default DetailPage;
