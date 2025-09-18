import { View, Text } from 'react-native'
import React from 'react'
import LayoutResponsivo from './src/components/LayoutResponsivo'
import CartaoApresentacao from './src/components/CartaoApresentacao'
import CartaoPerfil from './src/components/CartaoPerfil'

//const App = () => {
//  return (
//    <View style={{ flex:1 }}> {/* Isso e um CONTAINER joão das cartas */}
//      <LayoutResponsivo/>
//    </View>
//  )
//}

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> {/* Isso e um CONTAINER joão das cartas and Leo ornado */}
      <CartaoPerfil/>
    </View>
  )
}


export default App