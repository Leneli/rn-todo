import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TodoState } from './src/context/todo/TodoState';
import { Layout } from './src/Layout';

async function loadingApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <AppLoading
      startAsync={loadingApplication}
      onFinish={() => setLoaded(true)}
      onError={err => console.log('>>> Loading Error', err)}
    />;
  }

  return (
    <TodoState>
      <Layout />
    </TodoState>
  )
}
