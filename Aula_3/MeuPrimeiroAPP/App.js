import { View, Text } from 'react-native'
import React from 'react'
import LayoutResponsivo from './src/components/LayoutResponsivo'

const App = () => {
  return (
    <View style={{ flex:1 }}> {/* Isso e um CONTAINER joão das cartas */}
      <LayoutResponsivo/>
    </View>
  )
}

export default App