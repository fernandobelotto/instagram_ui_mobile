import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from './src/pages/HomeScreen'
import PhotoScreen from './src/pages/PhotoScreen'
import ProfileScreen from './src/pages/ProfileScreen'
import NotificationScreen from './src/pages/NotificationScreen'
import SearchScreen from './src/pages/SearchScreen'

const Tab = createMaterialBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#1A1a1a' }}>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarIcon: 'home', tabBarLabel: '' }} />
        <Tab.Screen name='SearchScreen' component={SearchScreen} options={{ tabBarIcon: 'magnify', tabBarLabel: '' }} />
        <Tab.Screen name='PhotoScreen' component={PhotoScreen} options={{ tabBarIcon: 'plus-box', tabBarLabel: '' }} />
        <Tab.Screen name='NotificationScreen' component={NotificationScreen} options={{ tabBarIcon: 'heart-outline', tabBarLabel: '' }} />
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{ tabBarIcon: 'account', tabBarLabel: '' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
