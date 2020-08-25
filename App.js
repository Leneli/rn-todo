import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Head from './src/components/Head';
import AddItem from './src/components/AddItem';
import TodoItem from './src/components/TodoItem';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = title => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };

    setTodoItems(prev => [ newItem, ...prev ]);
  };

  const removeTodo = id => setTodoItems(prev => prev.filter(todo => todo.id !== id));
  const renderItem = ({ item, index }) => (
    <TodoItem todo={item} isFirst={index === 0} onRemove={removeTodo} />
  );
  const keyExtractor = item => item.id;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Head title="TODO App" />

      <View style={styles.content}>
        <AddItem onPress={addTodo} />

        <FlatList
          data={todoItems}
          style={styles.todoWrapper}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  todoWrapper: {
    marginTop: 30,
  },
});
