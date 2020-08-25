import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { CLR_MAIN, CLR_FONT, CLR_WHITE } from './constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    color: CLR_FONT,
    fontSize: 16,
    paddingVertical: 7,
    borderBottomWidth: 3,
    borderBottomColor: CLR_MAIN,
  },

  button: {
    width: 40,
    height: 40,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CLR_MAIN,
    borderRadius: 5,
  },

  buttonText: {
    color: CLR_WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const AddItem = props => {
  const { onPress } = props;
  const [value, setValue] = useState('');
  const handlePress = () => {
    if (value.trim()) {
      onPress(value);
      setValue('');
    } else {
      Alert.alert('Напишите, что Вам нужно сделать');
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Что нужно сделать?"
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
