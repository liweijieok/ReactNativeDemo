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

export default class FirstComponent extends React.Component {
  static navigationOptions = {
    title: 'first',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Text>First Screen</Text>
        <Button
          title="GO To Second"
          onPress={() => {
            this.props.navigation.navigate('Second', {
              tips: 'i\'m from first',
            });
          }}
        />
      </View>
    );
  }
}

