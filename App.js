import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Head title="TODO App" />

      <View style={styles.content}>
        <AddItem onPress={addTodo} />

        <View style={styles.todoWrapper}>
          {todoItems.map((item, index) => (
            <TodoItem key={item.id} todo={item} isFirst={index === 0} />
          ))}
        </View>
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
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  todoWrapper: {
    marginTop: 30,
  },
});
