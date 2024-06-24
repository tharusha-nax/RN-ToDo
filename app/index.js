import { Text, View, Button, Alert, StyleSheet, TextInput, FlatList, SafeAreaView } from "react-native";

const DATA = [
  {
    id: '1',
    title: 'Meditation'
  },
  {
    id: '2',
    title: 'Coding'
  },
  {
    id: '3',
    title: 'Journaling'
  },
]

const TodoItem = (props) => {
  <View style={styles.item}>
    <Text style={styles.inputItem}>{props.item.title}</Text>
  </View>
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TextInput style={styles.input} />
      <Button title="Start" onPress={() => Alert.alert('Simple Button Pressed')} />
      <FlatList
        data={DATA}
        renderItem={({ item }) =>  <TodoItem item = { item } />}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  item: {
    backgroundColor: '#6DB6DD',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  inputItem: {
    color: 'black'
  }
})