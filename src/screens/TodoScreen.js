import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TodoCard } from '../components/TodoCard';
import { EditModal } from '../components/EditModal';
import { CLR_FONT, CLR_CANCEL, CLR_WARNING, CLR_MAIN } from '../constants/colors';

export const TodoScreen = ({ todo, goBack, onSave, onDelete }) => {
  const [modal, setModal] = useState(false);
  const { title, id } = todo;
  const onOpenModal = () => setModal(true);
  const onCloseModal = () => setModal(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <TodoCard>
          <Text style={styles.title}>{title}</Text>
          <Button onPress={onOpenModal} title={'Edit'} color={CLR_MAIN} />
        </TodoCard>
      </View>

      <View style={styles.buttons}>
        <Button onPress={goBack} title="Go Back" color={CLR_CANCEL} />
        <Button onPress={onDelete.bind(null, id)} title="Delete" color={CLR_WARNING} />
      </View>

      <EditModal
        visible={modal}
        todo={todo}
        onSave={onSave}
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
