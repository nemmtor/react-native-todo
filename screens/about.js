import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.author}>Twórca: Kacper Witas</Text>
      <Text>
        Aplikacja stworzona w celu zaliczenia przedmiotu: technologie mobilne i
        bezprzewodowe
      </Text>
      <Button onPress={submit} title="Kod źródłowy aplikacji" color="tomato" />
    </View>
  );
}

const styles=StyleSheet.create({
  author: {
    marginBottom: 40,
    fontSize: 24,
    fontWeight: 'bold'
  }
})