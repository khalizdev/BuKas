import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './DashboardScreen';
import BuKasScreen from './BuKasScreen';
import ProfilScreen from './ProfilScreen';
import ChatScreen from './ChatScreen';

const Tab = createMaterialBottomTabNavigator();
const ButtomTabBuKas = ()=>{  
    return (
      <Tab.Navigator 
        activeColor="#fff"
        barStyle={{ backgroundColor: '#01C5C4' }}
        tabBarOptions={{
          activeTintColor: '#fff',
        }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home-analytics" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="BuKas" 
          component={BuKasScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="bookshelf" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Chat" 
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="forum" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profil" 
          component={ProfilScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
    
export default ButtomTabBuKas;