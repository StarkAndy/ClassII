import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import Button from '../component/Button';
import CustomTextButton from '../component/CustomText';

class MyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelCustom: 'Hey Whatzz up?',
      labelButton: 'Label',
      mockData: [
        {
          id: 1,
          name: 'John Millar',
          age: 32,
        },
        {
          id: 2,
          name: 'Van Disel',
          age: 43,
        },
      ],
    };
  }
  _onButtonPressed = () => {
    this.setState({labelCustom: 'Awesome', labelButton: 'Label'});
  };

  _onButtonCustom = () => {
    this.setState({
      labelCustom: 'Hey Whatzz up?',
      labelButton: 'Hey its changing all messed up',
    });
  };
  renderT() {
    return (
      <View>
        <Button
          label="Next"
          onPress={() => this.props.navigation.navigate('DetailPage')}
        />
        <Text>Test</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.mockData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DetailPage', {
                    item: item.item,
                  })
                }>
                <View>
                  <Text>{item.item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default MyPage;
