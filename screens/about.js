import React from 'react';
import { StyleSheet, View, Text, Linking, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  const handleRedirect = () => {
    const url = 'https://github.com/nemmtor/react-native-todo';
    Linking.openURL(url)
  }

  return (
    <View style={globalStyles.container}>
      <Text style={styles.author}>Twórca: Kacper Witas</Text>
      <Text>
        Aplikacja stworzona w celu zaliczenia przedmiotu: technologie mobilne i
        bezprzewodowe
      </Text>
      <View style={styles.buttonContainer}>
      <Button onPress={handleRedirect} title="Kod źródłowy aplikacji" color="tomato" />
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  author: {
    marginBottom: 40,
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer:{
    marginTop: 'auto',
    marginBottom: 120,
  }
})