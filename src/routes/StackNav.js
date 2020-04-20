import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ChatScreen from '../pages/stack-pages/ChatScreen'
import UserScreen from '../pages/stack-pages/UserScreen'
import LikesScreen from '../pages/stack-pages/LikesScreen'
import CommentsScreen from '../pages/stack-pages/CommentsScreen'
import ExploreScreen from '../pages/stack-pages/ExploreScreen'
import EditPostScreen from '../pages/stack-pages/EditPostScreen'
import DetailPostScreen from '../pages/stack-pages/DetailPostScreen'
import PhotoDetailScreen from '../pages/stack-pages/PhotoDetailScreen'
import ProfileDetailScreen from '../pages/stack-pages/ProfileDetailScreen'

const Stack = createStackNavigator()

export default function StackNav () {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
      <Stack.Screen name='UserScreen' component={UserScreen} />
      <Stack.Screen name='LikesScreen' component={LikesScreen} />
      <Stack.Screen name='CommentsScreen' component={CommentsScreen} />
      <Stack.Screen name='ExploreScreen' component={ExploreScreen} />
      <Stack.Screen name='EditPostScreen' component={EditPostScreen} />
      <Stack.Screen name='DetailPostScreen' component={DetailPostScreen} />
      <Stack.Screen name='PhotoDetailScreen' component={PhotoDetailScreen} />
      <Stack.Screen name='ProfileDetailScreen' component={ProfileDetailScreen} />
    </Stack.Navigator>
  )
}
