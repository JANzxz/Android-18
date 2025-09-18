import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';

const CartaoPerfil = () => {

    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

    return (
        <View style={styles.container}>
            <Image style={styles.imagemPerfil}
                source={{ uri: "https://i.pinimg.com/736x/08/3b/28/083b28dbef0ef82b2071f8e4521ade3b.jpg" }}>
            </Image>

            {/* Nome */}
            <Text style={styles.nome}>Cachorro Chupetão</Text>

            {/* Ocupação */}
            <Text style={styles.ocupacao}>Desenvolvedor Mobaile</Text>

            {/* Butão */}
            <TouchableOpacity style={styles.botao} onPress={() => setDetalhesVisiveis(!detalhesVisiveis)}>
                <Text style={styles.textBotao}>{detalhesVisiveis ? "Ver menos" : "Ver Mais"}</Text>
            </TouchableOpacity>

            {/* Area de detalhes */}

            {detalhesVisiveis && (<View style={styles.detalhes}>
            <Text styles={styles.texoDetalhe}>Localização: Cabedelo</Text>
            <Text styles={styles.texoDetalhe}>Emsl: cachorrochupetao@gmail.com</Text>
            <Text styles={styles.texoDetalhe}>Hobbies: Beber, Filosofar e transcender a material.</Text>
        </View>)}
        </View >
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
        backgroundColor: "#0077b5",
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
    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    ocupacao: {
        fontSize: 16,
        marginBottom: 10,
        color: "#777",
    },
    detalhes: {
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
        wifth: "100%",
    },
    textoDetalhe:{
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
        textAling: "center",
    },



})

export default CartaoPerfil;