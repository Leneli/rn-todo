import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CLR_FONT, CLR_SECOND } from './constants/colors';

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
  const { todo, isFirst } = props;
  const { title } = todo;

  return (
    <View style={[styles.wrapper, isFirst && styles.firstElem]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TodoItem;
