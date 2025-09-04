import { View, Text, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio2 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {  //Essa função e para incrementar um numero quando aprertar o botão
        setContador(contador + 1)
    }

    function decrementar() { // Essa e pra decrementar, ambas usam o useState para modificar a variavel contador
        setContador(contador - 1)
    }


    return (
        <View style={style.container}>

            <Button title='incrementar' onPress={incrementar} /> {/* O onPress e ora acionar a function incrementar quando apertar o botão */}
            <Button title="decrementar" onPress={decrementar} />

            <Text>CONTADOR ESTA EM: {contador}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100
    }
})

export default Exercicio2