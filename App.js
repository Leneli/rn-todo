import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import Head from './src/components/Head';

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [todoItems, setTodoItems] = useState([]);

  const activeTodo = todoItems.find(item => item.id === activeId);

  const goBack = () => setActiveId(null);

  const addTodo = title => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };

    setTodoItems(prev => [ newItem, ...prev ]);
  };

  const removeTodo = id => {
    Alert.alert(
      'Удалить',
      'Вы уверены, что хотите удалить этот элемент?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            goBack();
            setTodoItems(prev => prev.filter(todo => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Head title="TODO App" />

      <View style={styles.content}>
        {!activeId ? (
          <MainScreen
            todoItems={todoItems}
            addTodo={addTodo}
            removeTodo={removeTodo}
            switchTodoId={setActiveId}
          />
        ) : (
          <TodoScreen todo={activeTodo} goBack={goBack} onDelete={removeTodo} />
        )}
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
});
