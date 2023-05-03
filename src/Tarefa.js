import react, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default function Tarefa({ data, deleteItem }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome name='trash' size={20} color="#B90052"/>
            </TouchableOpacity>

            <Text>{data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196,196,196, 0.20)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row'
    },
    button: {
        marginRight: 18
    }
})