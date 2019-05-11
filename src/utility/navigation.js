import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import Forgot from '../components/Forgot';
import Login from '../components/Login';
import Register from '../components/Register';
import Otp from '../components/Otp';
import Home from '../components/Home';
import Report from '../components/Report';
import Demo from '../components/Demo';
import Insurance from '../components/Insurance';
import Activity from '../components/Activity';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import Document from '../components/Documentwallet';
import Documentwallet from '../components/Documentwallet';
import CustomListview from '../components/CustomListview';
import Extras from '../components/Extras';



const HomeTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({tintColor})=>(
         <Icon name = "ios-home" color={tintColor} size={24}/>
       )
        } 
   },
   
   Profile:{screen:Extras,
     navigationOptions:{
       tabBarLabel:'Extras',
       tabBarIcon:({tintColor})=>(
         <Icon name = "ios-speedometer" color={tintColor} size={24}/>
       )

      
        }
       },
       Point:{screen:Demo,
         navigationOptions:{
           tabBarLabel:'Score',
           tabBarIcon:({tintColor})=>(
             <Icon name = "ios-list-box" color={tintColor} size={24}/>
           )}
           },

   Feed:{screen:Report,
     navigationOptions:{
       tabBarLabel:'Offers',
       tabBarIcon:({tintColor})=>(
         <Icon name = "ios-star" color={tintColor} size={24}/>
       )
      
        }
       },
 },
 {
  
   tabBarOptions: {
     activeTintColor: '#fb6347',
     inactiveTintColor: 'grey',
     style:{
       backgroundColor:'white',
       borderTopWidth:0,
       shadowOffset:{width:5, height:3},
       shadowColor:'black',
       shadowOpacity:0.5,
       elevation:5

     }
   },
  
    initialRouteName:'Home',
    activeColor: '#fb6347',
    inactiveColor: '#555555',
    barStyle: { backgroundColor: 'white' }
  }
);

const appSwitch = createSwitchNavigator(
  {
    Forgot: Forgot,
    Login: Login,
    Register: Register,
    Otp: Otp,
    HomePage: HomeTabs,
    Insurance:Insurance,
    Document:Documentwallet,
    Report:Report,
    Activity:Activity,
    Demo:Demo,
    CustomListview: CustomListview,
    Extras:Extras,
    
    
    
  },
  {
    initialRouteName: 'HomePage',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: true,
      headerStyle:{
     backgroundColor:"#fb6347"
      },
    }
  }
);

export default createAppContainer(appSwitch);
