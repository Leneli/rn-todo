import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TextRoboto } from '../components/ui';
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
      <TextRoboto style={styles.title}>{title}</TextRoboto>
    </TouchableOpacity>
  );
};

export default TodoItem;
