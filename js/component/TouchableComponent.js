/**
 *
 * 作者：黎伟杰 on 2018/3/13.
 * 邮箱：liweijie@qq.com
 * description：
 * update by:
 * update day:
 */
import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
  },
  view: {
    borderWidth: 1,
  },
});


export default class TouchableComponent extends Component {
  static navigationOptions = {
    title: 'Touchable Component',
  };

  constructor(props) {
    super(props);
    this.state = {
      p1: 0,
    };
  }

  _onPress1() {
    this.setState({
      p1: this.state.p1 + 1,
    });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
      }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this._onPress1();
          }}
        >
          <Text style={styles.text}>
            TouchableWithoutFeedback:{this.state.p1}
          </Text>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="blue"
          onPress={() => {
            this._onPress1();
          }}
        >
          <Text style={styles.text}>
            TouchableHighlight:{this.state.p1}
          </Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this._onPress1();
          }}
        >
          <Text style={styles.text}>
            TouchableOpacity:{this.state.p1}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

