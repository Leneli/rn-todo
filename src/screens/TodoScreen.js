import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, StyleSheet, View, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TextRoboto, ButtonCustom } from '../components/ui';
import { TodoCard } from '../components/TodoCard';
import { EditModal } from '../components/EditModal';
import { CLR_FONT, CLR_CANCEL, CLR_WARNING, CLR_MAIN } from '../constants/colors';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

export const TodoScreen = () => {
  const [modal, setModal] = useState(false);
  const { activeId, changeScreen } = useContext(ScreenContext);
  const { todoItems, updateTodo, removeTodo } = useContext(TodoContext);
  const todo = todoItems.find((item) => item.id === activeId);
  const { title, id } = todo;
  const onOpenModal = () => setModal(true);
  const onCloseModal = () => setModal(false);
  const goBack = () => changeScreen(null);

  const toChangeOrientation = () => {};

  useEffect(() => {
    // did mount
    Dimensions.addEventListener('change', toChangeOrientation);

    // did unmount
    return () => {
      Dimensions.removeEventListener('change', toChangeOrientation);
    };
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <TodoCard>
          <TextRoboto style={styles.title}>{title}</TextRoboto>
          <ButtonCustom onPress={onOpenModal}>
            <AntDesign name="edit" size={20} color={CLR_MAIN} />
          </ButtonCustom>
        </TodoCard>
      </View>

      <View style={styles.buttons}>
        <Button onPress={goBack} title="Go Back" color={CLR_CANCEL} />
        <Button onPress={removeTodo.bind(null, id)} title="Delete" color={CLR_WARNING} />
      </View>

      <EditModal
        visible={modal}
        todo={todo}
        onSave={updateTodo}
        onClose={onCloseModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  title: {
    flex: 1,
    fontSize: 20,
    color: CLR_FONT,
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    flex: 0.48,
    borderWidth: 1,
  },
});
