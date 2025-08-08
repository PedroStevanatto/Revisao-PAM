import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import imagemMulher from '../assets/casual_dog.png';
import google from '../assets/Google.png';

export default function telaDesenho() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Image
       source={imagemMulher}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Ótimo dia!</Text>

      <Text style={styles.subtitle}>Como deseja acessar?</Text>


      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={google}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Como deseja acessar?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#14C871",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
  },
  googleIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10,
    borderRadius: 6,
    backgroundColor: 'white'
  },
  googleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#14C871",
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  secondaryText: {
    fontSize: 16,
    color: "#333",
  },
});