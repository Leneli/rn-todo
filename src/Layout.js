import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import Head from './components/Head';
import { CLR_WHITE } from './constants/colors';
import { ScreenContext } from './context/screen/screenContext';

export const Layout = () => {
  const { activeId } = useContext(ScreenContext);

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.select({ ios: 'dark', android: 'light' })} />
      <Head title='TODO App' />

      <View style={styles.content}>
        {!activeId ? <MainScreen /> : <TodoScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CLR_WHITE,
  },

  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
