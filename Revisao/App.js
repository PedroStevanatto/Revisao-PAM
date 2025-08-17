import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaDesenho from "./src/screens/telaDesenho";
import TelaLogin from "./src/screens/telaLogin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Desenho">
        <Stack.Screen name="Desenho" component={TelaDesenho} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
