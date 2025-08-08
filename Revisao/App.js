import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import TelaDesenho from './src/screens/telaDesenho';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaDesenho />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
