import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Todolist</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
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
