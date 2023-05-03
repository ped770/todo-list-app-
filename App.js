import react, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ScrollView} from 'react-native'
import Tarefa from './src/Tarefa';

import { FontAwesome } from '@expo/vector-icons'

export default function App() {

  const [tarefa, setTarefa] = useState('')

  const [list, setList] = useState([])

  function handleAdd(){
    if(tarefa === ''){
      return;
    }

    const dados = {
      key: Date.now(),
      item: tarefa
    }

    setList(oldArray => [dados, ...oldArray])

    setTarefa('')
  }

  function handleDelete(item){
    let filtroItem = list.filter((tarefa) => {
      return (tarefa.item !== item)
    })

    setList(filtroItem)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List app - By Pedro Kauã</Text>
      
      <View style={styles.containerInput}>
        <TextInput
        placeholder='Digite sua tarefa'
        style={styles.input}
        value={tarefa}
        onChangeText={ (text) => setTarefa(text) }
        />

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <FontAwesome 
          name="plus"
          size={20}
          color="#B90052"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.list}>
      <FlatList
      data={list}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => <Tarefa data={item} deleteItem={ () => handleDelete(item.item) }/>}
      style={styles.list}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B90052',
    paddingTop: 28
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12
  },
  containerInput: {
    flexDirection: 'row',
    width: "100%",
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  input: {
    width: "75%",
    backgroundColor: "#f8f8f8",
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8
  },
  button: {
    width: "15%",
    height: 44,
    backgroundColor: "#000",
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  list: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingStart: "4%",
    paddingEnd: "4%",

  }
});
