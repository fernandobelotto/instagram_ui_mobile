import HomeScreen from '../pages/bottom-pages/HomeScreen'
import PhotoScreen from '../pages/bottom-pages/PhotoScreen'
import ProfileScreen from '../pages/bottom-pages/ProfileScreen'
import NotificationScreen from '../pages/bottom-pages/NotificationScreen'
import SearchScreen from '../pages/bottom-pages/SearchScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import InstaIcon from '../components/CustomIcons'
const Tab = createMaterialBottomTabNavigator()

export default function BottomTab () {
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#1A1a1a' }}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarIcon: () => (<InstaIcon name='home' size={35} color='white' style={{ width: 35 }} />) }} />
      <Tab.Screen name='SearchScreen' component={SearchScreen} options={{ tabBarIcon: () => (<InstaIcon name='search' size={35} color='white' style={{ width: 35 }} />) }} />
      <Tab.Screen name='PhotoScreen' component={PhotoScreen} options={{ tabBarIcon: () => (<InstaIcon name='home' size={35} color='white' style={{ width: 35 }} />) }} />
      <Tab.Screen name='NotificationScreen' component={NotificationScreen} options={{ tabBarIcon: () => (<InstaIcon name='heart' size={35} color='white' style={{ width: 35 }} />) }} />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{ tabBarIcon: () => (<InstaIcon name='user' size={35} color='white' style={{ width: 35 }} />) }} />
    </Tab.Navigator>
  )
}
