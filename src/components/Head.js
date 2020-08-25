import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CLR_MAIN, CLR_WHITE } from './constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CLR_MAIN,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: CLR_WHITE,
  },
});

const Head = ({ title }) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Head;
