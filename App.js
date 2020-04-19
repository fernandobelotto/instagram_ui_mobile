import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Button, View, Text, Dimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'

import MainScreen from './src/pages/TabView/MainScreen'
import DirectScreen from './src/pages/TabView/DirectScreen'
import CameraScreen from './src/pages/TabView/CameraScreen'

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
    <View>
      <Text>Root</Text>
      <Button title='vamo nessa' onPress={() => navigation.navigate('Main')} />
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
