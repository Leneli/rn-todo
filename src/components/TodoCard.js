import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CLR_SHADOW, CLR_WHITE } from '../constants/colors';

export const TodoCard = ({ children }) => (
  <View style={styles.wrapper}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: CLR_SHADOW,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    elevation: 2,
    backgroundColor: CLR_WHITE,
    borderRadius: 10,
  },
});
