import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ButtonCustom } from './ui';
import { CLR_MAIN, CLR_FONT } from '../constants/colors';

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
});

const AddItem = props => {
  const { onPress } = props;
  const [value, setValue] = useState('');
  const handlePress = () => {
    if (value.trim()) {
      onPress(value);
      setValue('');
      Keyboard.dismiss();
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
      <ButtonCustom onPress={handlePress}>
        <AntDesign name="plus" size={24} color={CLR_MAIN} />
      </ButtonCustom>
    </View>
  );
};

export default AddItem;
