import React, { useEffect, useState } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import Unsplash from '../../api/Unsplash'
import Post from '../../components/Post'
import Storys from '../../components/Storys'

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
      <ScrollView>

        <Header
          placement='left'
          leftComponent={<Icon underlayColor='trasparent' onPress={() => navigation.goBack()} name='keyboard-backspace' tyle='material' color='white' />}
          centerComponent={{ text: 'Explore', style: { color: '#fff', fontSize: 18 } }}
          containerStyle={{
            backgroundColor: '#1a1a1a',
            justifyContent: 'space-around',
            paddingTop: 0,
            height: 50
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
      </ScrollView>
    </View>
  )
}

export default HomeScreen
