import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

const Storys = ({ data }) => {
  return (
    <View style={{ margin: 10, height: 80, alignItems: 'center' }}>
      <Avatar
        rounded title='MD' size={50} source={{
          uri: `${data.user.profile_image.large}`
        }}
      />
      <Text style={{ color: 'white', fontSize: 12, width: 50 }}>{data.user.name}</Text>
    </View>
  )
}

export default Storys
