import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  font: {
    fontFamily: 'roboto-regular',
  },

  bold: {
    fontFamily: 'roboto-bold',
  },
});

const TextRoboto = ({ style, bold, children }) => (
  <Text style={[bold ? styles.bold : styles.font, style]}>{children}</Text>
);

export default TextRoboto;
