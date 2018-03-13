/**
 *
 * 作者：黎伟杰 on 2018/3/9.
 * 邮箱：liweijie@qq.com
 * description：
 * update by:
 * update day:
 */
import React, {Component} from 'react';
import {
    Button,
    View,
} from 'react-native';
import FlatListComponent from "./temp/FlatListComponent";

export default class Home extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <Button
                    title="Navigator test"
                    onPress={() => {
                        this.props.navigation.navigate('First');
                    }}
                />
                <Button
                    title="Text Component"
                    onPress={() => {
                        this.props.navigation.navigate('TextComponent');
                    }}
                />
                <Button
                    title="Text Component"
                    onPress={() => {
                        this.props.navigation.navigate('InputTextComponent');
                    }}
                />
                <Button
                    title="Image Component"
                    onPress={() => {
                        this.props.navigation.navigate('ImageComponent');
                    }}
                />
                <Button
                    title="FlatList Component"
                    onPress={() => {
                        this.props.navigation.navigate('FlatListComponent');
                    }}
                />
            </View>
        );
    }
}
