import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Avatar, Image, Icon } from 'react-native-elements'
import InstaIcon from './CustomIcons'

const Post = ({ data, navigation }) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <View>
      <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
        <Avatar onPress={() => navigation.navigate('UserScreen', { data: data })} rounded containerStyle={{ marginLeft: 10 }} source={{ uri: `${data.user.profile_image.large}` }} />
        <Text onPress={() => navigation.navigate('UserScreen', { data: data })} style={{ color: 'white', marginLeft: 10, flex: 1 }}>{data.user.name}</Text>
        <Icon name='more-vert' type='material' color='white' onPress={() => console.log('aparecer modal')} />
      </View>
      <Image
        source={{ uri: `${data.urls.small}` }}
        style={{ width: '100%', height: 400 }}
      />
      <View style={{ flexDirection: 'row', margin: 15 }}>
        {liked
          ? <InstaIcon underlayColor='transparent' name='heart' onPress={() => setLiked(!liked)} color='white' size={35} />
          : <InstaIcon underlayColor='transparent' name='heart-fill' color='red' onPress={() => setLiked(!liked)} size={35} />}
        <InstaIcon underlayColor='transparent' onPress={() => navigation.navigate('CommentsScreen')} name='chat' color='white' size={35} style={{ marginHorizontal: 10 }} />
        <InstaIcon underlayColor='transparent' name='send' color='white' size={35} />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          {saved
            ? <InstaIcon underlayColor='transparent' name='bookmark-fill' onPress={() => setSaved(!saved)} color='white' size={30} />
            : <InstaIcon underlayColor='transparent' name='bookmark' onPress={() => setSaved(!saved)} color='white' size={30} />}
        </View>
      </View>
      <Text style={{ color: 'white', marginLeft: 10, fontSize: 14 }}>Liked by {data.likes} and others</Text>
    </View>
  )
}

export default Post
