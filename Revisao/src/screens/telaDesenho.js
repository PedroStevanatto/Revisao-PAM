import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import imagemMulher from "../assets/casual_dog.png";
import google from "../assets/Google.png";

export default function TelaDesenho() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Image source={imagemMulher} style={styles.imagem} resizeMode="contain" />

      <Text style={styles.titulo}>Ótimo dia!</Text>
      <Text style={styles.subTitulo}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.botaoGugu}>
        <Image source={google} style={styles.iconeGugu} />
        <Text style={styles.textoGugu}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoOutras}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textoOutras}>Outras opções</Text>
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
  imagem: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#131a20",
    marginBottom: 5,
  },
  subTitulo: {
    fontSize: 14,
    color: "#131a20",
    marginBottom: 20,
  },
  botaoGugu: {
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
  iconeGugu: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10,
    borderRadius: 6,
    backgroundColor: 'white'
  },
  textoGugu: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botaoOutras: {
    borderWidth: 1,
    borderColor: "#14C871",
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  textoOutras: {
    fontSize: 16,
    color: "#333",
  },
});