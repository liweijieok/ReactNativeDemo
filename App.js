import React from 'react';
import {StackNavigator} from 'react-navigation'; // Version can be specified in package.json
import FirstComponent from './js/navigation/FirstComponent';
import SecondComponent from './js/navigation/SecondComponent';
import Home from './js/Home';
import TextComponent from './js/temp/TextComponent'
import InputTextComponent from './js/temp/InputTextComponent'
import ImageComponent from './js/temp/ImageComponent'
import FlatListComponent from './js/temp/FlatListComponent'


const RootStack = StackNavigator({
    Home: {
        screen: Home,
    },
    First: {
        screen: FirstComponent,
    },
    Second: {
        screen: SecondComponent,
    },
    TextComponent: {
        screen: TextComponent,
    }, InputTextComponent: {
        screen: InputTextComponent,
    }, ImageComponent: {
        screen: ImageComponent,
    }, FlatListComponent: {
        screen: FlatListComponent,
    },
}, {
    // 定义主页面
    initialRouteName: 'Home',
});

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}
