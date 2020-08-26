import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CLR_FONT, CLR_SECOND } from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: CLR_SECOND,
  },

  firstElem: {
    borderTopWidth: 1,
    borderTopColor: CLR_SECOND,
  },

  title: {
    fontSize: 16,
    color: CLR_FONT,
    fontStyle: 'italic',
  },
});

const TodoItem = props => {
  const { todo, isFirst, onRemove, onSelect } = props;
  const { id, title } = todo;

  return (
    <TouchableOpacity
      style={[styles.wrapper, isFirst && styles.firstElem]}
      onPress={onSelect.bind(null, id)}
      onLongPress={onRemove.bind(null, id)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
