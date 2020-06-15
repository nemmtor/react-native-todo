import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage
} from 'react-native';

import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import { globalStyles } from '../styles/global';



export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetchTodosFromStorage();
  },[])


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
      let newTodos;
      if (prevTodos.length === 0) {
        newTodos = [{text: text, key: 1}]
      } else {
        const lastKeyString = prevTodos.slice(-1)[0].key;
        const lastKey = parseInt(lastKeyString, 10);
        newTodos = [...prevTodos, { text: text, key: lastKey + 1 }];
      }
      saveTodosToStorage(newTodos);
      return newTodos;
    });
  };
  
  const fetchTodosFromStorage = async () => {
    try {
      const todosFromStorage = await AsyncStorage.getItem('todosState');
      if (todosFromStorage !== null) {
        setTodos(JSON.parse(todosFromStorage));
      } else {
        setTodos([]);
      }
    } catch (e) {
      alert('Nieoczekiwany błąd aplikacji...');
      setTodos([]);
    }
  };

  const saveTodosToStorage = async (todosFromState) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todosFromState));
    } catch (e) {
      // alert('Nieoczekiwany błąd aplikacji')
      alert(e)
    }
  }

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
