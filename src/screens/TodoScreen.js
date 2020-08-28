import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TodoCard } from '../components/TodoCard';
import { CLR_FONT, CLR_CANCEL, CLR_WARNING } from '../constants/colors';

export const TodoScreen = ({ todo, goBack, onDelete }) => {
  const { title, id } = todo;

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <TodoCard>
          <Text style={styles.title}>{title}</Text>
          <Button onPress={() => {}} title={'Edit'} />
        </TodoCard>
      </View>

      <View style={styles.buttons}>
        <Button onPress={goBack} title="Go Back" color={CLR_CANCEL} />
        <Button onPress={onDelete.bind(null, id)} title="Delete" color={CLR_WARNING} />
      </View>
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
