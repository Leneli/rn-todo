import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddItem from '../components/AddItem';
import TodoItem from '../components/TodoItem';

export const MainScreen = ({ todoItems, addTodo, removeTodo, switchTodoId }) => {
  const renderItem = ({ item, index }) => (
    <TodoItem todo={item} isFirst={index === 0} onRemove={removeTodo} onSelect={switchTodoId} />
  );
  const keyExtractor = item => item.id;

  return (
    <View style={styles.wrapper}>
      <AddItem onPress={addTodo} />

      <FlatList
        data={todoItems}
        style={styles.todoWrapper}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  todoWrapper: {
    marginTop: 30,
  },
});
