import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CLR_FONT, CLR_CANCEL, CLR_WARNING } from '../constants/colors';

export const TodoScreen = ({ todo, goBack }) => {
  const { title } = todo;

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.buttons}>
        <Button onPress={goBack} title="Go Back" color={CLR_CANCEL} />
        <Button onPress={() => {}} title="Delete" color={CLR_WARNING} />
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
    fontSize: 20,
    fontWeight: 'bold',
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
