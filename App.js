import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  //  toDos: {id: Number, textValue: string, checked: boolean }
  const [toDos, setToDos] = useState([]);
  const addTodo = (text) => {
    setToDos([
      ...toDos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
  const onRemove = (id) => (event) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };
  const onToggle = (id) => (event) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>ToDoList</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList toDos={toDos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
    flexDirection: 'column',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
  },
  listContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: 1,
  },
});

export default App;
