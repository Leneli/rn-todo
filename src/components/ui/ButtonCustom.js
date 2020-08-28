import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

const ButtonCustom = props => {
  const { children, onPress = () => {}, onLongPress = () => {} } = props;
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper
      style={styles.button}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View>{children}</View>
    </Wrapper>
  );
};

export default ButtonCustom;
