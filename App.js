/*import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
  return (
      <AppContainer/>
   
  );
}
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen}
})

const AppContainer =  createAppContainer(switchNavigator);*/
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Read:{screen: ReadStoryScreen},
  Write:{screen: WriteStoryScreen} 
})

const AppContainer =  createAppContainer(switchNavigator);