import React from 'react';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import FirstComponent from './js/navigation/FirstComponent';
import SecondComponent from './js/navigation/SecondComponent';
import Home from './js/Home';


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
}, {
  // 定义主页面
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
