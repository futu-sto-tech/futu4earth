import * as React from "react";

import { HomeScreen } from "./screens/HomeScreen";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/navbar";

function AnalysisScreen({}) {
  return <Text>Analysis</Text>;
}

export type RootStackParamList = {
  Home: undefined;
  Analysis: undefined;
  Report: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="Report" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
