import React, { useState, useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import Head from "./components/Head";
import { CLR_WHITE } from "./constants/colors";
import { TodoContext } from "./context/todo/todoContext";

export const Layout = () => {
  const context = useContext(TodoContext);
  const [activeId, setActiveId] = useState(null);
  const [todoItems, setTodoItems] = useState(context.todoItems);

  const activeTodo = todoItems.find((item) => item.id === activeId);

  const goBack = () => setActiveId(null);

  const addTodo = (title) => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };

    setTodoItems((prev) => [newItem, ...prev]);
  };

  const removeTodo = (id) => {
    Alert.alert(
      "Удалить",
      "Вы уверены, что хотите удалить этот элемент?",
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => {
            goBack();
            setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, { title }) => {
    setTodoItems((oldTodoItems) =>
      oldTodoItems.map((item) => {
        if (item.id === id) item.title = title;
        return item;
      })
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.select({ ios: "dark", android: "light" })} />
      <Head title='TODO App' />

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CLR_WHITE,
  },

  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
