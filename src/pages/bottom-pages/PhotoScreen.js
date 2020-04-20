import * as React from 'react'
import { View, StyleSheet, Dimensions, Text, Image, Button, FlatList } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { Header, Icon } from 'react-native-elements'
import * as MediaLibrary from 'expo-media-library'

const FirstRoute = () => {
  const [photos, setPhotos] = React.useState([])
  const handleButtonPress = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    const media = await MediaLibrary.getAssetsAsync()
    console.log(media)
    setPhotos(media)
    const data = await MediaLibrary.getAssetInfoAsync('4604')
    // console.log(data)
    // const video = await MediaLibrary.getAssetInfoAsync(media.assets['0'])
    // console.log(video)
  }
  return (
    <View>
      {/* <Image style={{ width: 100, height: 100 }} source={require('file:///storage/emulated/0/DCIM/Camera/IMG_20200206_163737.jpg')} /> */}
      <Button title='Load Images' onPress={() => handleButtonPress()} />
      <Text>só um teste</Text>
      <Text>só um teste</Text>
      <Image style={{ height: 200, width: 200 }} source={{ uri: 'file:///storage/emulated/0/DCIM/Camera/IMG_20200206_163737.jpg' }} />
      <FlatList
        data={photos}
        keyExtractor={i => i.id}
        renderItem={({ item }) => {
          return (
            <Image style={{ height: 100, width: 100 }} source={{ uri: item.uri }} />
          )
        }}
      />
    </View>
  )
}

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#67a7' }]} />
)

const initialLayout = { width: Dimensions.get('window').width }

export default function PhotoScreen () {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'GALLERY' },
    { key: 'second', title: 'PHOTO' },
    { key: 'third', title: 'VIDEO' }
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  })

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#1A1A1A' }}
    />
  )

  return (
    <>
      <Header
        placement='left'
        leftComponent={<Icon name='search' type='material' color='white' />}
        centerComponent={{ text: 'Gallery', style: { color: '#fff', fontSize: 18 } }}
        rightComponent={{ text: 'Next', style: { color: '#0B92EB', fontSize: 18 } }}
        containerStyle={{
          backgroundColor: '#1a1a1a',
          justifyContent: 'space-around',
          paddingTop: 0,
          height: 50
        }}
      />
      <TabView
        tabBarPosition='bottom'
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
