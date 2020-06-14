import React, {createRef, useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [textValue, setTextValue] = useState('');

  const textInput = createRef()

  const changeHandler = (value) => {
    setTextValue(value);
  };

  const submit = () => {
    submitHandler(textValue);
    setTextValue('')
  }

  return (
    <View>
      <TextInput
        placeholder="Dodaj zadanie"
        style={styles.input}
        onChangeText={changeHandler}
        value={textValue}
      />
      <Button
        onPress={submit}
        title="Dodaj"
        color="tomato"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
