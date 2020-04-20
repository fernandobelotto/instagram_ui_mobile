import React, { useState, useEffect } from 'react'
import Unsplash from '../api/Unsplash'
import { FlatList, View } from 'react-native'
import PhotoThumb from './PhotoThumb'

export default function PhotoGrid () {
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
    <FlatList
      keyExtractor={(i) => i.id}
      data={photos}
      renderItem={({ item }) => {
        return (
          <View style={{ flexDirection: 'row' }}>
            <PhotoThumb data={item} />
            <PhotoThumb data={item} />
            <PhotoThumb data={item} />
          </View>
        )
      }}
    />
  )
}
