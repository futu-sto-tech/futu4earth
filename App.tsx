import * as React from "react";

import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { colors } from "./colors";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
function HomeScreen({}) {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigation.push('Analysis')} title="test">Test</Button>
    </View>
  );
}

function AnalysisScreen({}) {
  return (
    <View>Analysis</View>
  )
}

type RootStackParamList = {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
