import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const pessoal = ["Eu (João Vitor)", "Danilo", "Miguel", "Lucas", "Leonardo", "João Gabriel", "Yasmin", "Silas", "Luis", "Luana"]

    return (
        <View style={styles.container}>
            {pessoal.map((item, index) => (
                <Text key={index} style={styles.item}>
                    {item}
                </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100
    },

    item: {
        fontSize: 18,
        marginVertical: 5
    }
})

export default Exercicio4