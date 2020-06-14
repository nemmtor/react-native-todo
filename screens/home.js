import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import { globalStyles } from '../styles/global';

export default function Home() {
  const [todos, setTodos] = useState([
    { text: 'Wyrzucić śmieci', key: 1 },
    { text: 'Wyjść z psem', key: 2 },
    { text: 'Zrobić kolacje', key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.trim().length < 3) {
      Alert.alert('Błąd!', 'Treść zadania musi mieć conajmniej 3 znami');
      return;
    }
    setTodos((prevTodos) => {
      if (prevTodos.length === 0) {
        return [{text: text, key: 1}]
      }
      const lastKeyString = prevTodos.slice(-1)[0].key;
      const lastKey = parseInt(lastKeyString, 10);
      return [...prevTodos, { text: text, key: lastKey + 1 }];
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View styles={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
              keyExtractor={(item) => item.key.toString()}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});
