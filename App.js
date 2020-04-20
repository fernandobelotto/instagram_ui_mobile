import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { View, Text, Dimensions, Image } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'

import BottomTab from './src/routes/BottomTab'
import DirectScreen from './src/pages/bottom-pages/DirectScreen'
import CameraScreen from './src/pages/bottom-pages/CameraScreen'
import { Avatar, Button } from 'react-native-elements'

import ChatScreen from './src/pages/stack-pages/ChatScreen'
import UserScreen from './src/pages/stack-pages/UserScreen'
import LikesScreen from './src/pages/stack-pages/LikesScreen'
import CommentsScreen from './src/pages/stack-pages/CommentsScreen'
import ExploreScreen from './src/pages/stack-pages/ExploreScreen'
import EditPostScreen from './src/pages/stack-pages/EditPostScreen'
import DetailPostScreen from './src/pages/stack-pages/DetailPostScreen'
import PhotoDetailScreen from './src/pages/stack-pages/PhotoDetailScreen'
import ProfileDetailScreen from './src/pages/stack-pages/ProfileDetailScreen'

const Stack = createStackNavigator()

const initialLayout = { width: Dimensions.get('window').width }

function TabScreen () {
  const [index, setIndex] = React.useState(1)
  const [routes] = React.useState([
    { key: 'camera', title: 'camera' },
    { key: 'TabScreen', title: 'TabScreen' },
    { key: 'direct', title: 'direct' }
  ])

  const renderScene = SceneMap({
    TabScreen: BottomTab,
    camera: CameraScreen,
    direct: DirectScreen
  })

  return (
    <TabView
      renderTabBar={() => null}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )
}

function Login ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
      <Image source={require('./assets/intro.png')} style={{ width: 200, height: 200 }} />
      <Avatar rounded size={100} source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={{ fontSize: 16, color: '#999999', marginVertical: 20 }}>ricardoluiz</Text>
      <Button containerStyle={{ width: '80%' }} title='Log in' onPress={() => navigation.navigate('TabScreen')} />
      <Button title='Remove' type='clear' onPress={() => console.log('remover conta')} />
    </View>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Root' screenOptions={{ header: () => null }}>
        <Stack.Screen name='Root' component={Login} />
        <Stack.Screen name='TabScreen' component={TabScreen} />
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
    </NavigationContainer>
  )
}
