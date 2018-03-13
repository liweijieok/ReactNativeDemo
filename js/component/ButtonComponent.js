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
  StyleSheet,
  Button,
  View,
} from 'react-native';


export default class ButtonComponent extends Component {
  static navigationOptions = {
    title: 'ButtomComponent',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: 'Click Count:',
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          title={this.state.text + this.state.count}
          color="red"
        />
      </View>
    );
  }
}
