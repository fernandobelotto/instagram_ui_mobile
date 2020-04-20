import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { View, Text, Dimensions, Image } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'

import MainScreen from './src/pages/TabView/MainScreen'
import DirectScreen from './src/pages/TabView/DirectScreen'
import CameraScreen from './src/pages/TabView/CameraScreen'
import { Avatar, Button } from 'react-native-elements'

const Stack = createStackNavigator()

const initialLayout = { width: Dimensions.get('window').width }

function TabScreen () {
  const [index, setIndex] = React.useState(1)
  const [routes] = React.useState([
    { key: 'camera', title: 'camera' },
    { key: 'main', title: 'main' },
    { key: 'direct', title: 'direct' }
  ])

  const renderScene = SceneMap({
    main: MainScreen,
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

function Root ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
      <Image source={require('./assets/intro.png')} style={{ width: 200, height: 200 }} />
      <Avatar rounded size={100} source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
      <Text style={{ fontSize: 16, color: '#999999', marginVertical: 20 }}>ricardoluiz</Text>
      <Button containerStyle={{ width: '80%' }} title='Log in' onPress={() => navigation.navigate('Main')} />
      <Button title='Remove' type='clear' onPress={() => console.log('remover conta')} />
    </View>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Root' screenOptions={{ header: () => null }}>
        <Stack.Screen name='Root' component={Root} />
        <Stack.Screen name='Main' component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
