import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LayoutResponsivo = () => {
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text>Cabeçalho</Text>
            </View>

            <View style={styles.content}>
                <Text>Conteudo Principal</Text>
            </View>

             <View style={styles.footer}>
                <Text>Rodapé</Text>
            </View>


        </View>

    )
}
    const styles = StyleSheet.create({
        container: { flex: 1 },
        header: { flex: 1, backgroundColor: "lightblue", justifyContent: "center" },
        content: { flex: 3, backgrouncdColor: "white", justifyContent: "center", aling: "center" },
        footer: { flex: 1, backgrouncdColor: "lightgray", justifyContent: "center", alingItens: "center" }

    })

export default LayoutResponsivo