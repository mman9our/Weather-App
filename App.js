import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Tabs from "./Src/Components/Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

// export default App;
