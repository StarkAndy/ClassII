import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Button from '../component/Button';
import CustomTextButton from '../component/CustomText';

class MyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelCustom: 'Hey Whatzz up?',
      labelButton: 'Label',
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
  render() {
    return (
      <View>
        <CustomTextButton
          label={this.state.labelCustom}
          onPressCustom={this._onButtonCustom}
        />
        <Button
          label={this.state.labelButton}
          onOwnButtonPress={this._onButtonPressed}
        />
      </View>
    );
  }
}

export default MyPage;
