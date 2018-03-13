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
import ImageComponent from './ImageComponent';
import InputTextComponent from './InputTextComponent';
import TextComponent from './TextComponent';

export default class TestComponent extends Component {
  static navigationOptions = {
    title: 'TestComponent',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Button
          style={{ marginBottom: 10 }}
          title="View"
          onPress={() => {
            this.props.navigation.navigate('ViewComponent');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="Button"
          onPress={() => {
            this.props.navigation.navigate('ButtonComponent');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="Text"
          onPress={() => {
            this.props.navigation.navigate('TextComponent');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="Input"
          onPress={() => {
            this.props.navigation.navigate('InputTextComponent');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="img"
          onPress={() => {
            this.props.navigation.navigate('ImageComponent');
          }}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="Touchable"
          onPress={() => {
            this.props.navigation.navigate('TouchableComponent');
          }}
        />
      </View>
    );
  }
}
