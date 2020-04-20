import React, { useState } from 'react'
import { Text, View, FlatList, ScrollView, TextInput } from 'react-native'
import { Avatar, Header, Icon } from 'react-native-elements'
import TabChat from '../../components/TabChat'

const DirectScreen = () => {
  const [term, setTerm] = useState('')
  return (
    <View style={{ backgroundColor: '#000000', flex: 1 }}>
      <Header
        placement='left'
        leftComponent={<Icon name='keyboard-backspace' type='material' color='white' />}
        rightComponent={<Icon name='edit' type='material' color='white' />}
        centerComponent={{ text: 'Direct', style: { color: '#fff', fontSize: 18 } }}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <ScrollView>
        <View style={{ backgroundColor: '#363636', height: 37, margin: 20, borderRadius: 7, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='search' type='materil' color='#919191' size={30} containerStyle={{ marginLeft: 5 }} />
          <TextInput
            value={term}
            style={{ flex: 1, fontSize: 16, color: 'white', marginLeft: 10 }} placeholder='digita aqui'
            onChangeText={setTerm}
          />
          <Icon name='filter-list' type='materil' color='#919191' size={30} containerStyle={{ marginRight: 5 }} />
        </View>
        <TabChat />
      </ScrollView>
    </View>
  )
}

export default DirectScreen
