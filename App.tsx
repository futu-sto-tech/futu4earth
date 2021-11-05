import * as React from "react";

import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="Report" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
