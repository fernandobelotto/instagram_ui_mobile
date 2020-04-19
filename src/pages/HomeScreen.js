import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import Unsplash from '../api/Unsplash'
import Post from '../components/Post'
import Storys from '../components/Storys'

const HomeScreen = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => { getPhotos() }, [])

  const getPhotos = async () => {
    try {
      const response = await Unsplash.get('/photos')
      setPhotos(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={{ backgroundColor: '#000000', flex: 1 }}>
      <Header
        placement='left'
        leftComponent={<Icon name='photo-camera' tyle='material' color='white' />}
        centerComponent={{ text: 'Instragram do Fer', style: { color: '#fff', fontSize: 18 } }}
        rightComponent={{ icon: 'send', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <FlatList
        horizontal
        keyExtractor={(i) => i.id}
        data={photos}
        renderItem={({ item }) => {
          return (
            <Storys data={item} />
          )
        }}
      />
      <FlatList
        keyExtractor={(i) => i.id}
        data={photos}
        renderItem={({ item }) => {
          return (
            <Post data={item} />
          )
        }}
      />

      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen
