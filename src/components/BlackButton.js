import React from 'react'
import { Text, View } from 'react-native'

const BlackButton = ({ title }) => {
  return (
    <View style={{ marginHorizontal: 5, height: 30, backgroundColor: 'black', borderColor: '#555555', borderWidth: 1, borderRadius: 5, justifyContent: 'center' }}>
      <Text style={{ marginHorizontal: 20, color: 'white' }}>{title}</Text>
    </View>
  )
}

export default BlackButton
