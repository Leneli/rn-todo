import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
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

      {!!todoItems.length ? (
        <FlatList
          data={todoItems}
          style={styles.todoWrapper}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <View style={styles.imgWrapper}>
          <Image source={require('../assets/img/no-items.png')} style={styles.image} resizeMode="contain" />
        </View>
      )}
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

  imgWrapper: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
