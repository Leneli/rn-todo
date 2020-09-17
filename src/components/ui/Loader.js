import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { CLR_MAIN } from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loader = () => (
  <View style={styles.wrapper}>
    <ActivityIndicator color={CLR_MAIN} size="large" />
  </View>
);

export default Loader;
