import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'

export default function InstagramModal ({ choice }) {
  const [state, setState] = useState(false)
  useEffect(setState(choice))
  return (
    <View>
      <Modal isVisible={state}>
        <View>
          <Text>eu sou o conteúdo da modal!!</Text>
        </View>
      </Modal>
    </View>
  )
}
