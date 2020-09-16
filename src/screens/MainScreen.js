import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import AddItem from '../components/AddItem';
import TodoItem from '../components/TodoItem';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

export const MainScreen = () => {
  const { changeScreen } = useContext(ScreenContext);
  const { todoItems, addTodo, removeTodo } = useContext(TodoContext);
  const renderItem = ({ item, index }) => (
    <TodoItem todo={item} isFirst={index === 0} onRemove={removeTodo} onSelect={changeScreen} />
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
          <Image source={require('../../assets/img/no-items.png')} style={styles.image} resizeMode="contain" />
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
