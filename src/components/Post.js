import React from 'react'
import { Text, View } from 'react-native'
import { Avatar, Image, Icon } from 'react-native-elements'

const Post = ({ data }) => {
  return (
    <View>
      <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
        <Avatar rounded containerStyle={{ marginLeft: 10 }} source={{ uri: `${data.user.profile_image.large}` }} />
        <Text style={{ color: 'white', marginLeft: 10, flex: 1 }}>{data.user.name}</Text>
        <Icon name='more-vert' type='material' color='white' />
      </View>
      <Image
        source={{ uri: `${data.urls.small}` }}
        style={{ width: '100%', height: 400 }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Icon name='favorite-border' type='material' color='white' size={30} containerStyle={{ marginLeft: 10, marginVertical: 5 }} />
        <Icon name='chat-bubble-outline' type='material' color='white' size={30} containerStyle={{ marginHorizontal: 10, marginVertical: 5 }} />
        <Icon name='send' type='material' color='white' size={30} containerStyle={{ marginVertical: 5 }} />
        <Icon name='bookmark-border' type='material' color='white' size={30} containerStyle={{ marginVertical: 5, flex: 1, alignItems: 'flex-end' }} />
      </View>
      <Text style={{ color: 'white', marginLeft: 10, fontSize: 14 }}>Liked by {data.likes} and others</Text>
    </View>
  )
}

export default Post
