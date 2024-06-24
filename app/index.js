import { useState } from "react";
import { Text, View, Button, Alert, StyleSheet, TextInput, FlatList, SafeAreaView } from "react-native";

const DATA = [
  {
    id: '1',
    title: 'Meditation',
    completed: false
  },
  {
    id: '2',
    title: 'Coding',
    completed: false
  },
  {
    id: '3',
    title: 'Journaling',
    completed: false
  },
]

const TodoItem = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.item.title}</Text>
    </View>
  )
}

export default function Index() {
  const [items, setItems] = useState(DATA);
  const [text, setText] = useState('');

  const addNewTodo = () => {
    let newTodo = {
      id: items.length + 1,
      title: text,
      completed: false
    }

    setItems([...items, newTodo]);
    setText('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Button title="Add ToDo" onPress={addNewTodo} />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
  },
  list: {
    alignSelf: 'stretch'
  },
  item: {
    backgroundColor: '#6DB6DD',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  itemText: {
    color: 'white',
  }
})