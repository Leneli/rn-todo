import React, { useState } from 'react';
import { StyleSheet, Modal, View, TextInput, Button } from 'react-native';
import { TextRoboto } from '../components/ui';
import { CLR_MAIN, CLR_CANCEL, CLR_FONT, CLR_WARNING, CLR_WHITE, CLR_SHADOW } from '../constants/colors';

export const EditModal = props => {
  const { visible, todo, onSave, onClose } = props;
  const { id, title } = todo;
  const [titleValue, setTitleValue] = useState(title);
  const [titleError, setTitleError] = useState('');

  const handleSave = () => {
    if (titleValue.trim().length < 3) {
      setTitleError('Слишком короткое значение. Введите название длиной 3 или более символов!');
    } else {
      setTitleError('');
      onSave(id, { title: titleValue });
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
    setTitleValue(title);
    setTitleError('');
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.wrapper}>
        <TextRoboto style={styles.title}>Изменить TODO</TextRoboto>

        <View style={styles.content}>
          <TextInput
            value={titleValue}
            style={styles.input}
            placeholder={'Введите новое название'}
            maxLength={64}
            onChangeText={setTitleValue}
          />
          {!!titleError && (
            <View style={styles.errorWrapper}>
              <TextRoboto style={styles.errorText} bold>{titleError}</TextRoboto>
            </View>
          )}
        </View>
        

        <View style={styles.buttons}>
          <Button onPress={handleClose} title="Cancel" color={CLR_CANCEL} />
          <Button onPress={handleSave} title="Save" color={CLR_MAIN} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 25,
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: CLR_WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: CLR_SHADOW,
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },

  title: {
    color: CLR_FONT,
    fontSize: 24,
    textAlign: 'center',
  },

  content: {
    flex: 1,
    paddingVertical: 50,
    justifyContent: 'flex-start',
  },

  input: {
    color: CLR_FONT,
    fontSize: 16,
    paddingVertical: 7,
    borderBottomWidth: 3,
    borderBottomColor: CLR_MAIN,
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  errorWrapper: {
    marginTop: 10,
    marginBottom: 20,
  },

  errorText: {
    fontSize: 14,
    color: CLR_WARNING,
  },
});
