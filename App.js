import React, { useState } from 'react';
import { Platform, StyleSheet, View, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import Head from './src/components/Head';

async function loadingApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [todoItems, setTodoItems] = useState([]);

  if (!loaded) {
    return <AppLoading
      startAsync={loadingApplication}
      onFinish={() => setLoaded(true)}
      onError={err => console.log('>>> Loading Error', err)}
    />;
  }

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

  const updateTodo = (id, { title }) => {
    setTodoItems(oldTodoItems => oldTodoItems.map(item => {
      if (item.id === id) item.title = title;
      return item;
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.select({ ios: 'dark', android: 'light' })} />
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
          <TodoScreen
            todo={activeTodo}
            goBack={goBack}
            onSave={updateTodo}
            onDelete={removeTodo}
          />
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
