import * as React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { Header, Icon } from 'react-native-elements'

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#67a7' }]} />
)

const initialLayout = { width: Dimensions.get('window').width }

export default function PhotoScreen () {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'GALLERY' },
    { key: 'second', title: 'PHOTO' },
    { key: 'third', title: 'VIDEO' }
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  })

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#1A1A1A' }}
    />
  )

  return (
    <>
      <Header
        placement='left'
        leftComponent={<Icon name='search' type='material' color='white' />}
        centerComponent={{ text: 'Gallery', style: { color: '#fff', fontSize: 18 } }}
        rightComponent={{ text: 'Next', style: { color: '#0B92EB', fontSize: 18 } }}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <TabView
        tabBarPosition='bottom'
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
