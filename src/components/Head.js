import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { TextRoboto } from '../components/ui';
import { CLR_MAIN, CLR_WHITE } from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapperAndroid: {
    backgroundColor: CLR_MAIN,
  },

  wrapperIOS: {
    borderBottomColor: CLR_MAIN,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 20,
    color: Platform.select({ ios: CLR_MAIN, android: CLR_WHITE }),
  },
});

const Head = ({ title }) => (
  <View style={[styles.wrapper, Platform.select({ ios: styles.wrapperIOS, android: styles.wrapperAndroid})]}>
    <TextRoboto style={styles.title} bold>{title}</TextRoboto>
  </View>
);

export default Head;
