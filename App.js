import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';



export default function App() {
  const [counter, setCounter] = useState(0);

  function handleAdd(){
    setCounter(counter + 1);
  }

  function handleMin(){
    setCounter(counter -1);
  }
  
  return (
    <View style={styles.container}>
      <Text>Počítadlo objednávok</Text>
      <Text style= {counter >= 5 ? styles.counterWarning : styles.counter}>{counter}</Text>
      <View style={styles.tlacidla}>
      <Pressable onPress={handleMin} disabled={counter === 0}>
        <Text>-</Text>
      </Pressable>
      <Pressable onPress={handleAdd} disabled={counter >= 5}>
        <Text>+</Text>
      </Pressable>
      <Pressable onPress={() => setCounter(0)}>
        <Text style={styles.text}>Vynuluj</Text>
      </Pressable>
        </View>
      {counter >= 5 && <Text>Dosiahnutý limit</Text>}
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',  },
  tlacidla: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 2,
  },
  counter:{
    fontSize: 60, fontWeight: "bold"
  },
  counterWarning: {
    fontSize: 60,
    fontWeight: "bold",
    color: '#ff0000'
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
});
