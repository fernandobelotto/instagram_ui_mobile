import React, { useState, useEffect } from 'react'
import Unsplash from '../api/Unsplash'
import { FlatList, View } from 'react-native'
import PhotoThumb from './PhotoThumb'

export default function PhotoGrid ({ navigation }) {
  const [photos, setPhotos] = useState([])
  const [photos1, setPhotos1] = useState([])
  const [photos2, setPhotos2] = useState([])
  useEffect(() => { getPhotos() }, [])

  const getPhotos = async () => {
    try {
      const response = await Unsplash.get('/photos', { params: { per_page: 30 } })
      setPhotos(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View>
      <FlatList
        numColumns={3}
        keyExtractor={(i) => i.id}
        data={photos}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <PhotoThumb data={item} navigation={navigation} />
            </View>
          )
        }}
      />
    </View>
  )
}
