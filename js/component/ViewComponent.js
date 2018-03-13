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
  Text,
  View
} from 'react-native';

const styles = {
  root: {
    backgroundColor: 'red',
    borderWidth: 10,
    padding: 10,
  },
  view1: {
    backgroundColor: 'green',
    padding: 5,
  },
  view2: {
    backgroundColor: 'yellow',
    margin: 10,
    padding: 10,
  },
};

export default class ViewComponent extends Component {
  static navigationOptions = {
    title: 'ViewComponent',
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.view1}/>
        <View style={styles.view2}/>
      </View>
    );
  }
}
