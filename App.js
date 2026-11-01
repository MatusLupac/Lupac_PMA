import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable, FlatList} from 'react-native';
import Item from "./src/components/Item"
export default function App() {

  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  function inputTextHandler (text) {
    setInputText(text);
  }

  function addTaskHandler () {
    let id = "id" + Math.random().toString(16).slice(2)
    setTaskList((currentTaskList) => [...currentTaskList, {id: id, title: inputText, done: false}]);
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Zadaj ulohu:"
          onChangeText={inputTextHandler}
        />
        <Button title="ADD" onPress={addTaskHandler} />
      </View>

      <FlatList
        data={taskList}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2c8c8',
    padding: 20,
    paddingTop: 60,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  input: {
    borderColor: '#000',
    flex: 1,
    borderWidth: 1.65,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },

  taskContainer: {
    flex: 4,
    padding: 5,
    borderTopWidth: 3,
  },

  taskItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#e4fbfb',
    marginVertical: 2,
    borderRadius: 10,
  },
});