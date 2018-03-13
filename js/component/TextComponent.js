/**
 * @author liweijie
 * create on 2018/3/12.
 * email:liweijie@aiyappp.com
 * desc:
 * lastModify:
 */
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Text28 from '../component/Text28';

class CustomText extends Component {

  render() {
    return (<View>
      <Text style={{
        color: 'red',
        fontSize: 20,
      }}
      >
        parent
        <Text style={{ fontSize: 30 }}>
          child1
        </Text>
        <Text style={{ fontSize: 40 }}>
          child2
        </Text>
      </Text>
    </View>);
  }
}

export default class TextComponent extends Component {
  static navigationOptions = {
    title: 'TextComponent',
  };

  render() {
    return (
      <View>
        <Text
          numberOfLines={2}>
          <Text>First part and </Text>
          <Text>second part</Text>
        </Text>
        <Text>First part and </Text>
        <Text>second part</Text>
        <Text28/>
        <Text
          style={{
            fontSize: 50,
            color: 'red',
          }}
          ellipsizeMode="head"
          numberOfLines={1}
        >
          改为灌完官网刚给我跟我呱公司发生的方式发送方斯蒂芬顺丰到付
        </Text>
        <CustomText/>
        <Text>123</Text>
      </View>);
  }
}

