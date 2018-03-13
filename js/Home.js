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
  static navigationOptions = {
    title: 'ReactNative Demo',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Button
          style={{ marginBottom: 10 }}
          title="Navigator test"
          onPress={() => {
            this.props.navigation.navigate('First');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="Component test"
          onPress={() => {
            this.props.navigation.navigate('TestComponent');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="FlatList Component"
          onPress={() => {
            this.props.navigation.navigate('FlatListComponent');
          }}
        />
      </View>
    );
  }

}

