/**
 * @author liweijie
 * create on 2018/3/12.
 * email:liweijie@aiyappp.com
 * desc:
 * lastModify:
 */
import React from 'react';
import {View, Image,} from 'react-native';

export default class ImageComponent extends React.Component {

    render() {
        return <View>
            {/*<Image source={require("../../image/local.jpg")} style={{width:200,height:200}}/>*/}
            <Image source={{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520849922579&di=06ee524a43736b5f1649f6b10480381c&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170609%2F01f74a1ac6e6475bbb4e04e7c7435eed_th.png"}}
                   style={{width:200,height:200}} resizeMode={"contain"}/>
        </View>
    }
}