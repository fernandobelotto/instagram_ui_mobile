import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import Unsplash from '../../api/Unsplash'
import Post from '../../components/Post'
import Storys from '../../components/Storys'
import InstaIcon from '../../components/CustomIcons'

const HomeScreen = ({ navigation }) => {
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
        leftComponent={<InstaIcon size={35} name='Prancheta-4-cpia-15' tyle='material' color='white' />}
        centerComponent={{ text: 'Instagram do Fer', style: { color: '#fff', fontSize: 18 } }}
        rightComponent={<InstaIcon underlayColor='transparent' onPress={() => console.log('testee')} name='send' color='white' size={35} />}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <FlatList
        style={{ paddingBottom: 13 }}
        horizontal
        keyExtractor={(i) => i.id}
        data={photos}
        renderItem={({ item }) => {
          return (
            <Storys data={item} navigation={navigation} />
          )
        }}
      />
      <FlatList
        keyExtractor={(i) => i.id}
        data={photos}
        renderItem={({ item }) => {
          return (
            <Post data={item} navigation={navigation} />
          )
        }}
      />
    </View>
  )
}

export default HomeScreen
