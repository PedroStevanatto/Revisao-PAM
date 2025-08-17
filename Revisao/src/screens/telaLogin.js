import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { Image } from "react-native";

import gugu from "../assets/Google.png";
import rostoLivro from "../assets/Facebook.png";

export default function TelaLogin({ navigation }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [armazenar, setArmazenar] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.setinha} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333"/>
      </TouchableOpacity>

      <Text style={styles.titulo}>Acesse</Text>
      <Text style={styles.subTitulo}>com E-mail e senha</Text>

      <Text style={styles.cimaCampo}>E-mail</Text>
      <TextInput placeholder="Digite seu E-mail" style={styles.input} keyboardType="email-address"/>

      <Text style={styles.cimaCampo}>Senha</Text>
      <View style={styles.containerSenha}>
        <TextInput placeholder="Digite sua senha" style={styles.inputPassword} secureTextEntry={!mostrarSenha}/>
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.eyeIcon}>
          <Ionicons name={mostrarSenha ? "eye-off" : "eye"} size={22} color="#555"/>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsRow}>
        <View style={styles.armazenarRow}>
          <Checkbox value={armazenar} onValueChange={setArmazenar} color="#14C871" />
          <Text style={styles.textoLembrar}>Lembrar senha</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.esqueci}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.botaoLogin}>
          <Text style={styles.textoLogin}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastrar}>
          <Text style={styles.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divisor}>
        <View style={styles.linha} />
        <Text style={styles.divisorTexto}>Ou continue com</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.linhaSociais}>
        <TouchableOpacity style={styles.botaoSociais}>
          <Image source={gugu} style={styles.iconeSociais} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoSociais}>
          <Image source={rostoLivro} style={styles.iconeSociais} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  setinha: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#131a20",
  },
  subTitulo: {
    fontSize: 16,
    color: "#131a20",
    marginBottom: 25,
  },
  cimaCampo: {
    fontSize: 14,
    color: "#131a20",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    padding: 14,
    marginBottom: 20,
  },
  containerSenha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    marginBottom: 15,
  },
  inputPassword: {
    flex: 1,
    padding: 14,
  },
  eyeIcon: {
    paddingHorizontal: 12,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  armazenarRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoLembrar: {
    marginLeft: 6,
    fontSize: 14,
    color: "#6d6d6d",
  },
  esqueci: {
    fontSize: 14,
    color: "#6d6d6d",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  botaoLogin: {
    flex: 1,
    backgroundColor: "#14C871",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  textoLogin: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoCadastrar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#14C871",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  textoCadastrar: {
    color: "#6d6d6d",
    fontSize: 16,
    fontWeight: "400",
  },
  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#c2c2c2",
  },
  divisorTexto: {
    marginHorizontal: 10,
    color: "#6d6d6d",
  },
  linhaSociais: {
    flexDirection: "row",
    justifyContent: "center",
  },
  botaoSociais: {
    backgroundColor: "#F3F3F3",
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  iconeSociais: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
});
