import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'

const PhotoThumb = ({ data, navigation }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ExploreScreen')}>
        <Image
          source={{ uri: `${data.urls.small}` }}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default PhotoThumb
