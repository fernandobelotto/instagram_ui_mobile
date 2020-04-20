import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Avatar, Image, Icon } from 'react-native-elements'

const Post = ({ data }) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <View>
      <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
        <Avatar rounded containerStyle={{ marginLeft: 10 }} source={{ uri: `${data.user.profile_image.large}` }} />
        <Text style={{ color: 'white', marginLeft: 10, flex: 1 }}>{data.user.name}</Text>
        <Icon name='more-vert' type='material' color='white' onPress={() => console.log('aparecer modal')} />
      </View>
      <Image
        source={{ uri: `${data.urls.small}` }}
        style={{ width: '100%', height: 400 }}
      />
      <View style={{ flexDirection: 'row' }}>
        {liked
          ? <Icon underlayColor='transparent' name='heart' type='font-awesome' onPress={() => setLiked(!liked)} color='red' size={30} containerStyle={{ marginLeft: 10, marginVertical: 5 }} />
          : <Icon underlayColor='transparent' name='heart-o' type='font-awesome' onPress={() => setLiked(!liked)} color='white' size={30} containerStyle={{ marginLeft: 10, marginVertical: 5 }} />}
        <Icon name='ios-chatbubbles' type='ionicon' color='white' size={30} containerStyle={{ marginHorizontal: 10, marginVertical: 5 }} />
        <Icon name='ios-send' type='ionicon' color='white' size={30} containerStyle={{ marginVertical: 5 }} />
        {saved
          ? <Icon underlayColor='transparent' name='bookmark' type='material' onPress={() => setSaved(!saved)} color='white' size={30} containerStyle={{ marginVertical: 5, flex: 1, alignItems: 'flex-end' }} />
          : <Icon underlayColor='transparent' name='bookmark-border' onPress={() => setSaved(!saved)} type='material' color='white' size={30} containerStyle={{ marginVertical: 5, flex: 1, alignItems: 'flex-end' }} />}
      </View>
      <Text style={{ color: 'white', marginLeft: 10, fontSize: 14 }}>Liked by {data.likes} and others</Text>
    </View>
  )
}

export default Post
