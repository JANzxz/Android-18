import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
//import { Image } from 'react-native-web'
import React from 'react'

const CartaoApresentacao = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imagemPerfil}
                source={{ uri: "https://i.pinimg.com/736x/08/3b/28/083b28dbef0ef82b2071f8e4521ade3b.jpg" }}>

                {/* style={styles.imagemPerfil} */}
            </Image>

            <Text style={styles.nome}>"Cachorro Chupetão"</Text>
            <Text style={styles.descricao}>"Um ser que transcedeu a materia ao entender que a complexidade da existencia e simples se quiser, pois o impossivel e so questão de opinião                                               O que disse cachorro chupetão?"</Text>

            <View style= {styles.botoesContainer}>
                <TouchableOpacity style={[styles.botao, styles.botaoGithub]}>
                    <Text>Github</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, styles.botaoLinkedin]}>
                    <Text>Linkedin</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        backgroundcolor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBotton: 10,
    },
    nome: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    descricao: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginVertical: 10,
    },
    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 5,
    },
    botaoGithub: {
        backgroundColor: "#333",
    },
    botaoLinkedin: {
        backgroundColor: "#0077b5",
    },
    textBotao: {
        color: "#fff",
        fontSiz: 16,
        fontWeight: 'bold',
    },
    botoesContainer:{
        flexDirection: 'row',
        marginTop: 10,
    }

})

export default CartaoApresentacao