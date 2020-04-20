import React from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import { Avatar, Header, Icon } from 'react-native-elements'
import Tab from '../../components/Tab'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import BlackButton from '../../components/BlackButton'

const UserScreen = ({ navigation, route }) => {
  return (
    <View style={{ backgroundColor: '#1a1a1a', flex: 1 }}>
      <Header
        placement='left'
        leftComponent={<Icon onPress={() => navigation.goBack()} name='keyboard-backspace' type='material' color='white' />}
        rightComponent={<Icon name='more-vert' type='material' color='white' />}
        centerComponent={{ text: route.params.data.user.username, style: { color: '#fff', fontSize: 18 } }}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginRight: 20 }}>
          <Avatar onPress={() => console.log(route.params.data)} containerStyle={{ marginTop: 20, marginLeft: 20, marginBottom: 10 }} rounded size={80} source={{ uri: route.params.data.user.profile_image.large }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>{route.params.data.user.total_photos}</Text>
            <Text style={{ color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>Posts</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>648</Text>
            <Text style={{ color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>Followers</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>774</Text>
            <Text style={{ color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>Following</Text>
          </View>

        </View>
        <Text style={{ fontWeight: 'bold', color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>{route.params.data.user.name}</Text>
        <Text style={{ color: '#999999', marginLeft: 10, fontSize: 14 }}>Fotógrafo</Text>
        <Text style={{ color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>{route.params.data.user.bio}</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
          <BlackButton title='Following' />
          <BlackButton title='Message' />
          <BlackButton title='>' />
        </View>
        <Text style={{ marginLeft: 10, marginVertical: 10, color: 'white', fontWeight: 'bold' }}>Story Highlights</Text>
        <Tab />
      </ScrollView>
    </View>
  )
}

export default UserScreen
