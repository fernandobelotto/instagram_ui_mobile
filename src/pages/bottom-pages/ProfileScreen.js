import React from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import { Avatar, Header, Icon } from 'react-native-elements'
import Tab from '../../components/Tab'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import BlackButton from '../../components/BlackButton'

const NotificationScreen = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 22, 10, 23, 45, 67, 8, 12, 14]
  return (
    <ActionSheetProvider>

      <View style={{ backgroundColor: '#1a1a1a', flex: 1 }}>
        <Header
          placement='left'
          leftComponent={{ text: 'ricardoluiz', style: { color: '#fff', fontSize: 18, fontWeight: 'bold' } }}
          rightComponent={<Icon name='menu' type='material' color='white' />}
          containerStyle={{
            backgroundColor: '#1a1a1a',
            justifyContent: 'space-around',
            paddingTop: 0,
            height: 50
          }}
        />
        <ScrollView>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginRight: 20 }}>
            <Avatar containerStyle={{ marginTop: 20, marginLeft: 20, marginBottom: 10 }} rounded size={80} source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>42</Text>
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
          <Text style={{ fontWeight: 'bold', color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>Ricardo Luiz</Text>
          <Text style={{ color: '#999999', marginLeft: 10, fontSize: 14 }}>Fotógrafo</Text>
          <Text style={{ color: '#FAFAFA', marginLeft: 10, fontSize: 14 }}>Est aute cillum consequat aliquip consectetur ullamco sunt mollit consequat esse anim consectetur est.</Text>
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
            <BlackButton title='Edit Profile' />
            <BlackButton title='Promotions' />
            <BlackButton title='Contact' />
          </View>
          <Text style={{ marginLeft: 10, marginVertical: 10, color: 'white', fontWeight: 'bold' }}>Story Highlights</Text>
          <Tab />
        </ScrollView>
      </View>
    </ActionSheetProvider>
  )
}

export default NotificationScreen
