import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'

const PhotoThumb = ({ data }) => {
  return (
    <View>
      <Image
        source={{ uri: `${data.urls.small}` }}
        style={{ width: 130, height: 130 }}
      />
      <Image
        source={{ uri: `${data.urls.small}` }}
        style={{ width: 130, height: 130 }}
      />
      <Image
        source={{ uri: `${data.urls.small}` }}
        style={{ width: 130, height: 130 }}
      />
    </View>
  )
}

export default PhotoThumb
