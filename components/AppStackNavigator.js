import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SettingScreen from '../screens/SettingScreen'; 
import ReadStoryScreen from '../screens/ReadStoryScreen'; 
 



export const AppStackNavigator = createStackNavigator({
  BarterList : {
    screen : ReadStoryScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  
  Setting : {
     screen : SettingScreen,
     navigationOptions:{
       headerShown : false
     }
   }
 },


  {
    initialRouteName: 'BarterList'
  }
);
