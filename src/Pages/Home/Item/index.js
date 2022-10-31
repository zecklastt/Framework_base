import { Text } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Item({ nome, descricao }) {
    return <>
        <TouchableOpacity style={styles.geral}>
            <Text style={styles.nome_titulo}>Nome: <Text style={styles.nome}>{nome}</Text></Text>
            <Text style={styles.nome_titulo}>Descrição: <Text style={styles.nome}>{descricao}</Text></Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    geral: {
        padding: 24,
        marginTop: 50,
        borderBottomWidth: 0.7,
        borderBottomColor: '#c5c5c5'
    },
    nome_titulo: {
        fontWeight: "bold",
    },
    nome: {
        fontWeight: "normal"
    }
})