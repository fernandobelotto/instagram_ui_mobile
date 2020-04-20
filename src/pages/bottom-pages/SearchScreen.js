import React from 'react'
import { View, FlatList } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import PhotoGrid from '../../components/PhotoGrid'
import BlackButton from '../../components/BlackButton'

const SearchScreen = ({ navigation }) => {
  const list = ['Travel', 'Architecture', 'Food', 'Beauty', 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <View style={{ backgroundColor: '#000000', flex: 1 }}>
      <Header
        placement='left'
        leftComponent={<Icon name='search' type='material' color='white' />}
        centerComponent={{ text: 'Search', style: { color: '#fff', fontSize: 18 } }}
        rightComponent={<Icon name='add-box' type='material' color='white' />}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <FlatList
        horizontal
        keyExtractor={i => i}
        data={list}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
              <BlackButton title={item} />
            </View>
          )
        }}
      />
      <PhotoGrid navigation={navigation} />
    </View>
  )
}

export default SearchScreen
