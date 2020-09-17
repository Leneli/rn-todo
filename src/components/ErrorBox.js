import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { CLR_MAIN, CLR_SECOND, CLR_WARNING } from '../constants/colors';
import { ButtonCustom, TextRoboto } from './ui';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: CLR_WARNING,
    fontSize: 18,
    marginBottom: 30,
  },
});

const ErrorBox = ({ message, onRepeat }) => (
  <View style={styles.wrapper}>
    <TextRoboto style={styles.text} bold>{message}</TextRoboto>
    
    <Button onPress={onRepeat} title="Повторить" color={CLR_MAIN} />
  </View>
);

export default ErrorBox;
