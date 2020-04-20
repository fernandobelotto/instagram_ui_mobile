import React, { useEffect, useState } from 'react'

import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { Dimensions, Text, View, FlatList } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'
import PhotoGrid from './PhotoGrid'
import Unsplash from '../api/Unsplash'

export default function TabChat () {
  const initialLayout = { width: Dimensions.get('window').width }
  function Chats () {
    useEffect(() => { getPhotos() })
    const [photos, setPhotos] = useState([])
    const getPhotos = async () => {
      try {
        const response = await Unsplash.get('/photos')
        setPhotos(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    return (
      <FlatList
        keyExtractor={(i) => i.name}
        data={photos}
        renderItem={({ item }) => {
          return (
            <View style={{ margin: 10, height: 50, alignItems: 'center', flexDirection: 'row' }}>
              <Avatar
                rounded title='MD' size={50} source={{
                  uri: item.user.profile_image.large
                }}
              />
              <Text style={{ color: 'white', fontSize: 14, marginLeft: 10 }}>{item.user.name} liked your photo. 1w</Text>

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
