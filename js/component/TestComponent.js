/**
 *
 * 作者：黎伟杰 on 2018/3/10.
 * 邮箱：liweijie@qq.com
 * description：
 * update by:
 * update day:
 */
import React, { Component } from 'react';
import {
  Button,
  View,
} from 'react-native';

export default class TestComponent extends Component {
  static navigationOptions = {
    title: 'TestComponent',
  };

  render() {
    return (
      <View>
        <Button
          title="View"
          onPress={() => {
            this.props.navigation.navigate('ViewComponent');
          }}
        />
        <Button
          title="Button"
          onPress={() => {
            this.props.navigation.navigate('ButtonComponent');
          }}
        />
      </View>
    );
  }
}
