import React from 'react'

import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import PhotoGrid from './PhotoGrid'

export default function TabChat () {
  const initialLayout = { width: Dimensions.get('window').width }

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'apps' },
    { key: 'second', title: 'portrait' }
  ])

  const renderScene = SceneMap({
    first: PhotoGrid,
    second: PhotoGrid
  })

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderIcon={({ route }) => <Icon name={route.title} type='material' color='white' />}
      renderLabel={() => null}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#1A1A1A' }}
    />
  )

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  )
}
