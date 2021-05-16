import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import WriteStoryScreen from '../screens/WriteStoryScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/read.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "ReadStory",
    }
  },
  WriteStory: {
    screen: WriteStoryScreen,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/write.png")} style={{width:20, height:20,}} />,
      tabBarLabel : "Writestory",
    }
  }
});
