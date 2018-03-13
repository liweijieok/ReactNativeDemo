/**
 *
 * 作者：黎伟杰 on 2018/3/9.
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

export default class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Button
          title="Navigator test"
          onPress={() => {
            this.props.navigation.navigate('First');
          }}
        />
        <Button
          title="Component test"
          onPress={() => {
            this.props.navigation.navigate('TestComponent');
          }}
        />
      </View>
    );
  }
}
