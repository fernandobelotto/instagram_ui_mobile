import React from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import { Avatar, Header, Icon } from 'react-native-elements'

const DirectScreen = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 22, 10, 23, 45, 67, 8, 12, 14]
  return (
    <View style={{ backgroundColor: '#000000', flex: 1 }}>
      <Header
        placement='left'
        leftComponent={<Icon name='keyboard-backspace' type='material' color='white' />}
        rightComponent={<Icon name='keyboard-backspace' type='material' color='white' />}
        centerComponent={{ text: 'Direct', style: { color: '#fff', fontSize: 18 } }}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <ScrollView>
        <Text style={{ color: 'white', marginTop: 30, marginLeft: 10, fontSize: 16 }}>This Week</Text>
        <FlatList
          keyExtractor={(i) => i}
          data={list}
          renderItem={() => {
            return (
              <View style={{ margin: 10, height: 50, alignItems: 'center', flexDirection: 'row' }}>
                <Avatar
                  rounded title='MD' size={50} source={{
                    uri: 'https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                  }}
                />
                <Text style={{ color: 'white', fontSize: 14, marginLeft: 10 }}>Fulano liked your photo. 1w</Text>
                <Avatar
                  containerStyle={{ marginLeft: 50, alignSelf: 'flex-end' }}
                  title='MD' size={50} source={{
                    uri: 'https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                  }}
                />
              </View>
            )
          }}
        />
        <Text>HomeScreen</Text>
      </ScrollView>
    </View>
  )
}

export default DirectScreen
