import React from 'react'

import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { Dimensions, Text, View, FlatList } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'
import PhotoGrid from './PhotoGrid'

export default function TabChat () {
  const initialLayout = { width: Dimensions.get('window').width }
  const list = [1, 2, 3, 4, 5, 6, 7, 22, 10, 23, 45, 67, 8, 12, 14]

  function Chats () {
    return (
      <FlatList
        keyExtractor={(i) => i}
        data={list}
        renderItem={() => {
          return (
            <View style={{ margin: 10, height: 50, alignItems: 'center', flexDirection: 'row' }}>
              <Avatar
                rounded title='MD' size={50} source={{
                  uri: 'https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                }}
              />
              <Text style={{ color: 'white', fontSize: 14, marginLeft: 10 }}>Fulano liked your photo. 1w</Text>
              <Avatar
                containerStyle={{ marginLeft: 50, alignSelf: 'flex-end' }}
                title='MD' size={50} source={{
                  uri: 'https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                }}
              />
            </View>
          )
        }}
      />)
  }

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'PRIMARY' },
    { key: 'second', title: 'GENERAL' }
  ])

  const renderScene = SceneMap({
    first: Chats,
    second: Chats
  })

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#000000', marginRight: 200 }}
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
