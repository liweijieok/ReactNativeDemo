/**
 * @author liweijie
 * create on 2018/3/12.
 * email:liweijie@aiyappp.com
 * desc:
 * lastModify:
 */
import React from 'react';
import { View, Image, Alert } from 'react-native';
import ImageHolderComponent from "./ImageHolderComponent";

export default class ImageComponent extends React.Component {
  static navigationOptions = {
    title: 'ImageComponent',
  };

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
          <ImageHolderComponent url={"http:asca.jpg"}/>
        {/* 静态资源 */}
        <Image
          source={require('../../img/cute.jpeg')}
          style={{
            width: 200,
            height: 100,
            opacity: 1,
          }}
          resizeMode="stretch"
        />
        <Image
          source={require('../../img/cute.jpeg')}
          style={{
            width: 200,
            height: 100,
            opacity: 0.8,
          }}
          resizeMode="cover"
        />
        <Image
          source={require('../../img/cute.jpeg')}
          style={{
            width: 200,
            height: 100,
            opacity: 0.6,
          }}
          resizeMode="contain"
        />
        <Image
          source={require('../../img/cute.jpeg')}
          style={{
            width: 200,
            height: 100,
            opacity: 0.4,
          }}
          resizeMode="center"
        />
        {/* 网络资源，必须自定大小 */}
        <Image
          source={{ uri: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1520906790&di=10b2165c04ef226319400250906fa4c7&src=http://tvax1.sinaimg.cn/crop.0.0.996.996.1024/006BOv8Jly8fivw3kmctqj30ro0rowi8.jpg' }}
          resizeMode="contain"
          style={{
            width: 100,
            borderRadius: 5,
            height: 100,
          }}
          onLoadStart={() => {
            Alert.alert('start', 'message');
            console.log('start');
          }}
          onLoad={() => {
            Alert.alert('loaded', 'message');
            console.log('loaded');
          }}
          onError={() => {
            Alert.alert('error', 'message');
            console.log('error');
          }}
          onLoadEnd={() => {
            Alert.alert('end', 'message');
            console.log('end');
          }}
        />

        {/*/!* 加载Native文件，方式一 *!/*/}
        {/*<Image*/}
        {/*source={{ uri: 'ic_launcher' }}*/}
        {/*style={{*/}
        {/*width: 100,*/}
        {/*height: 100,*/}
        {/*}}*/}
        {/*resizeMode="cover"*/}
        {/*/>*/}
        {/*/!* 加载本地照片 *!/*/}
        {/*<Image*/}
        {/*source={{ uri: 'file:///storage/emulated/0/DCIM/Camera/IMG_20180313_064056.jpg' }}*/}
        {/*style={{*/}
        {/*width: 100,*/}
        {/*height: 100,*/}
        {/*}}*/}
        {/*resizeMode="center"*/}
        {/*/>*/}

      </View>);
  }
}
