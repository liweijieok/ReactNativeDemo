/**
 *
 * 作者：黎伟杰 on 2018/3/9.
 * 邮箱：liweijie@qq.com
 * description：
 * update by:
 * update day:
 */
import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

export default class SecondComponent extends React.Component {
  static navigationOptions = {
    title: 'Second',
  };
  render() {
    // 获取从别出来的数据
    const data = this.props.navigation.state.params;
    const tips = data ? data.tips : null;
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Text>Second Screen</Text>
        <Text>{tips}</Text>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Button
          title="Go First"
          onPress={() => {
            this.props.navigation.navigate('First');
          }}
        />
      </View>
    );
  }
}
