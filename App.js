import React from 'react';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import FirstComponent from './js/navigation/FirstComponent';
import SecondComponent from './js/navigation/SecondComponent';
import Home from './js/Home';
import ButtonComponent from './js/component/ButtonComponent';
import TestComponent from './js/component/TestComponent';
import ViewComponent from './js/component/ViewComponent';
import InputTextComponent from './js/component/InputTextComponent';
import ImageComponent from './js/component/ImageComponent';
import FlatListComponent from './js/flatlist/FlatListComponent';
import TextComponent from './js/component/TextComponent';

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
  TestComponent: {
    screen: TestComponent,
  },
  ButtonComponent: {
    screen: ButtonComponent,
  },
  TextComponent: {
    screen: TextComponent,
  },
  ViewComponent: {
    screen: ViewComponent,
  },
  InputTextComponent: {
    screen: InputTextComponent,
  },
  ImageComponent: {
    screen: ImageComponent,
  },
  FlatListComponent: {
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
