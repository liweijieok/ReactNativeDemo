import React from 'react';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import FirstComponent from './js/navigation/FirstComponent';
import SecondComponent from './js/navigation/SecondComponent';
import Home from './js/Home';
import ButtonComponent from './js/component/ButtonComponent';
import TestComponent from './js/component/TestComponent';
import ViewComponent from './js/component/ViewComponent';

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
  ViewComponent: {
    screen: ViewComponent,
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
